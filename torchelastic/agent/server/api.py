#!/usr/bin/env python3

# Copyright (c) Facebook, Inc. and its affiliates.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.

import abc
import logging
import socket
import time
from contextlib import closing
from enum import Enum
from typing import Any, Callable, Dict, Tuple

import torchelastic.rendezvous as rdzv
from torchelastic.metrics import prof, put_metric


DEFAULT_ROLE = "default"

log = logging.getLogger(__name__)


class WorkerSpec:
    """
    Contains blueprint information about a particular type of worker.
    For a given role, there must only exist a single worker spec.
    Worker spec is expected to be homogenous across all nodes (machine),
    that is each node runs the same number of workers for a particular spec.
    """

    __slots__ = [
        "role",
        "local_world_size",
        "fn",
        "args",
        "rdzv_handler",
        "max_restarts",
        "monitor_interval",
        "master_port",
    ]

    def __init__(
        self,
        role: str,
        local_world_size: int,
        fn: Callable,
        args: Tuple,
        rdzv_handler: rdzv.RendezvousHandler,
        max_restarts: int = 100,
        monitor_interval: float = 5.0,
        master_port=None,
    ):
        r"""

        Arguments:
            role (str): user-defined role for the workers with this spec
            local_world_size (int): number local workers to run
            fn (Callable): worker main entry point function
            args (Tuple): arguments to pass to ``fn(args)``
            rdzv_handler (RendezvousHandler): handles rdzv for this set of workers
            max_restarts (int): number of max retries for the workers
            monitor_interval (int): monitor status of workers every ``n`` seconds
            master_port (int): fixed port to run the c10d store on rank 0
                               if not specified then will chose a random free port
        """

        assert local_world_size > 0
        assert max_restarts > 0
        assert monitor_interval > 0

        # Note: role is not used for data parallel, every worker has the same role
        # wiring it in to handle more elaborate situations later
        self.role = role
        self.local_world_size = local_world_size
        self.fn = fn
        self.args = args
        self.rdzv_handler = rdzv_handler
        self.max_restarts = max_restarts
        self.monitor_interval = monitor_interval
        self.master_port = master_port


class Worker:
    """
    Represents a worker instance. Contrast this with ``WorkerSpec`` that
    represents the specifications of a worker. A ``Worker`` is created from
    a ``WorkerSpec``. A ``Worker`` is to a ``WorkerSpec`` as an object is to
    a class.

    The ``id`` of the worker is interpreted
    by the specific implementation of ``ElasticAgent``. For a local
    agent, it could be the ``pid (int)`` of the worker, for a remote
    agent it could be encoded as ``host:port (string)``.

    Arguments:
        id (Any): uniquely identifies a worker (interpreted by the agent)
        local_rank (int): local rank of the worker
        global_rank (int): global rank of the worker
        world_size (int): number of workers (globally)
    """

    __slots__ = ["id", "local_rank", "global_rank", "world_size"]

    def __init__(self, local_rank: int):
        # unique identifier for this worker
        self.id: Any = None

        # rank of the worker among workers with the same role being monitored
        # by the same ``agent`` instance.
        self.local_rank: int = local_rank

        #  rank of the worker among all the workers with the same role
        #  across all ``agent`` instances.
        #  Global rank is not stable between re-rendezvous.
        # pyre-fixme[8]: Attribute has type `int`; used as `None`.
        self.global_rank: int = None

        # total number of workers (globally). Due to elasticity
        # the world size may change between re-rendezvous.
        # pyre-fixme[8]: Attribute has type `int`; used as `None`.
        self.world_size: int = None


class WorkerState(Enum):
    """
    State of the ``WorkerGroup``. Workers in a worker group change state as a unit.
    If a single worker in a worker group fails the entire set is considered
    failed::

      UNKNOWN - agent lost track of worker group state, unrecoverable
      INIT - worker group object created not yet started
      HEALTHY - workers running and healthy
      UNHEALTHY - workers running and unhealthy
      STOPPED - workers stopped (interruped) by the agent
      SUCCEEDED - workers finished running (exit 0)
      FAILED - workers failed to successfully finish (exit !0)


    A worker group starts from an initial ``INIT`` state,
    then progresses to ``HEALTHY`` or ``UNHEALTHY`` states,
    and finally reaches a terminal ``SUCCEEDED`` or ``FAILED`` state.

    Worker groups can be interrupted and temporarily put into ``STOPPED`` state
    by the agent. Workers in ``STOPPED`` state are scheduled to be restarted
    in the near future by the agent. Some examples of workers being put into
    ``STOPPED`` state are:

    1. Worker group failure|unhealthy observed
    2. Membership change detected

    When actions (start, stop, rdzv, retry, etc) on worker group fails
    and results in the action being partially applied to the worker group
    the state will be ``UNKNOWN``. Typically this happens on uncaught/unhandled
    exceptions during state change events on the agent. The agent is not
    expected to recover worker groups in ``UNKNOWN`` state and is better off
    self terminating and allowing the job manager to retry the node.
    """

    UNKNOWN = 0
    INIT = 1
    HEALTHY = 2
    UNHEALTHY = 4
    STOPPED = 8
    SUCCEEDED = 16
    FAILED = 32

    @staticmethod
    def is_running(state: "WorkerState") -> bool:
        """
        Returns:
             `` True`` if the worker state represents workers still running
              (e.g. that the process exists but not necessarily healthy).
        """
        return state in {WorkerState.HEALTHY, WorkerState.UNHEALTHY}


class WorkerGroup:
    """
    Represents the set of ``Worker`` instances for the given ``WorkerSpec``
    managed by ``ElasticAgent``. Whether the worker group contains cross
    instance workers or not depends on the implementation of the agent.
    """

    __slots__ = ["spec", "workers", "store", "group_rank", "group_world_size", "state"]

    def __init__(self, spec: WorkerSpec):
        self.spec = spec
        self.workers = [Worker(local_rank=i) for i in range(self.spec.local_world_size)]

        # assigned after rdzv
        self.store = None
        self.group_rank = None
        self.group_world_size = None

        self.state = WorkerState.INIT


class MonitorResult:
    """
    Returned by the agent's ``_monitor_workers`` API. A holder object
    that holds information about the monitoring results.
    The ``ret_vals`` and ``exceptions`` field map each worker's
    return value (output) and exceptions (if any) accordingly by
    the workers global rank.

    ``state = SUCCEEDED`` will have ``ret_val``.
    ``state = FAILED`` will have ``exceptions``.
    For other states both these fields will be empty.
    """

    __slots__ = ["state", "ret_vals", "exceptions"]

    def __init__(
        self,
        state: WorkerState,
        # pyre-fixme[9]: ret_vals has type `Dict[int, typing.Any]`; used as `None`.
        ret_vals: Dict[int, Any] = None,
        # pyre-fixme[9]: exceptions has type `Dict[int, Exception]`; used as `None`.
        exceptions: Dict[int, Exception] = None,
    ):
        self.state = state
        self.ret_vals = ret_vals
        self.exceptions = exceptions


class WorkerGroupFailureException(Exception):
    """
    Thrown when the agent cannot or has given up trying to run the workers.
    This is typically thrown:

    1. Exceeded ``max_restarts``.
    2. Workers fail with errors that are deemed ``NonRestartable``

    When constructing this exception the underlying worker exceptions
    are provided as a map of the worker's global rank to the exception.
    """

    def __init__(self, msg: str, worker_excs: Dict[int, Exception]):
        super().__init__(msg)
        self._worker_excs = worker_excs

    def get_worker_exceptions(self) -> Dict[int, Exception]:
        return self._worker_excs


def _get_socket_with_port() -> socket.socket:
    """
    Returns a free port on localhost that is "reserved" by binding a temporary
    socket on it. Close the socket before passing the port to the entity
    that requires it. Usage example

    ::

    sock = _get_socket_with_port()
    with closing(sock):
        port = sock.getsockname()[1]
        sock.close()
        # there is still a race-condition that some other process
        # may grab this port before func() runs
        func(port)
    """

    addrs = socket.getaddrinfo(
        host="localhost", port=None, family=socket.AF_UNSPEC, type=socket.SOCK_STREAM
    )
    for addr in addrs:
        family, type, proto, _, _ = addr
        s = socket.socket(family, type, proto)
        try:
            s.bind(("localhost", 0))
            s.listen(0)
            return s
        except OSError as e:
            s.close()
            log.info("Socket creation attempt failed.", exc_info=e)
    raise RuntimeError("Failed to create a socket")


def _get_fq_hostname() -> str:
    return socket.getfqdn(socket.gethostname())


class ElasticAgent(abc.ABC):
    """
    Agent process responsible for managing one or more worker processes.
    The worker processes are assumed to be regular distributed PyTorch scripts.
    When the worker process is created by the agent, the agent provides the
    necessary information for the worker processes to properly initialize
    a torch process group.

    The exact deployment topology and ratio of agent-to-worker is dependent
    on the specific implementation of the agent and the user's job placement
    preferences. For instance, to run a distributed training job on GPU with
    8 trainers (one per GPU) one can:

    1. Use 8 x single GPU instances, place an agent per instance, managing
       1 worker per agent.
    2. Use 4 x double GPU instances, place an agent per instance, managing
       2 workers per agent.
    3. Use 2 x quad GPU instances, place an agent per instance, managing
       4 workers per agent.
    4. Use 1 x 8 GPU instance, place an agent per instance, managing
       8 workers per agent.

    Usage
    ::

     try:
         results = agent.run()
         return results[0] # return rank 0's results
     except WorkerGroupFailureException as e:
         exceptions = e.get_worker_exceptions()
         log.exception(f"worker 0 failed with: {exceptions[0]}")
     except Exception as e:
         log.exception(f"error while running agent")

    """

    @abc.abstractmethod
    def run(self, role: str = DEFAULT_ROLE) -> Dict[int, Any]:
        """
        Runs the agent, retrying the worker group on failures up to
        ``max_restarts``.

        Returns:
            The return values for each worker mapped by the worker's global rank.
            Empty if workers have void signature.

        Raises:
            WorkerGroupFailureException - workers did not successfully run
            Exception - any other failures NOT related to worker process
        """
        raise NotImplementedError()

    @abc.abstractmethod
    def get_worker_group(self, role: str = DEFAULT_ROLE) -> WorkerGroup:
        """
        Returns:
            The ``WorkerGroup`` for the given ``role``.
            Note that the worker group is a mutable object and hence in a
            multi-threaded/process environment it may change state.
            Implementors are encouraged (but not required) to return
            a defensive read-only copy.
        """
        raise NotImplementedError()


class SimpleElasticAgent(ElasticAgent):
    """
    An ``ElasticAgent`` that manages workers (``WorkerGroup``)
    for a single ``WorkerSpec`` (e.g. one particular type of worker role).
    """

    def __init__(self, spec: WorkerSpec):
        self._worker_group = WorkerGroup(spec)
        self._remaining_restarts = self._worker_group.spec.max_restarts

    # pyre-fixme[14]: `get_worker_group` overrides method defined in `ElasticAgent`
    #  inconsistently.
    def get_worker_group(self) -> WorkerGroup:
        # TODO return an RO copy (need to create an ROWorkerGroup and ROWorkerSpec
        # since both these classes contain non-pure-data pointers - e.g. rdzv_handler)
        return self._worker_group

    @abc.abstractmethod
    def _start_workers(self, worker_group: WorkerGroup) -> Dict[int, Any]:
        r"""
        Starts ``worker_group.spec.local_world_size`` number of workers
        according to worker spec for the worker group .

        Returns a map of ``local_rank`` to worker ``id``.
        """
        raise NotImplementedError()

    @abc.abstractmethod
    def _stop_workers(self, worker_group: WorkerGroup) -> None:
        r"""
        Stops all workers in the given worker group. Implementors
        must deal with workers in all states defined by ``WorkerState``.
        That is, it must gracefully handle stopping non-existent workers,
        unhealthy (stuck) workers, etc.
        """
        raise NotImplementedError()

    @abc.abstractmethod
    def _monitor_workers(self, worker_group: WorkerGroup) -> MonitorResult:
        r"""
        Checks on the workers for the ``worker_group`` and returns
        the new state of the worker group.
        """
        raise NotImplementedError()

    @staticmethod
    def _set_master_addr_port(store, master_port):
        if master_port is None:
            sock = _get_socket_with_port()
            with closing(sock):
                master_port = sock.getsockname()[1]

        store.set("MASTER_ADDR", _get_fq_hostname().encode(encoding="UTF-8"))
        store.set("MASTER_PORT", str(master_port).encode(encoding="UTF-8"))

    @staticmethod
    def _get_master_addr_port(store) -> Tuple[str, int]:
        master_addr = store.get("MASTER_ADDR").decode(encoding="UTF-8")
        master_port = int(store.get("MASTER_PORT").decode(encoding="UTF-8"))
        return (master_addr, master_port)

    @prof
    def _rendezvous(self, worker_group: WorkerGroup) -> None:
        r"""
        Runs rendezvous for the workers specified by worker spec.
        Assigns workers a new global rank and world size.
        Updates the rendezvous store for the worker group.
        """

        spec = worker_group.spec
        stride = spec.local_world_size

        store, group_rank, group_world_size = spec.rdzv_handler.next_rendezvous()
        world_size = group_world_size * spec.local_world_size

        worker_group.store = store
        worker_group.group_rank = group_rank
        worker_group.group_world_size = group_world_size

        if group_rank == 0:
            self._set_master_addr_port(store, spec.master_port)

        assigned_global_ranks = []
        for worker in worker_group.workers:
            global_rank = (group_rank * stride) + worker.local_rank
            worker.global_rank = global_rank
            worker.world_size = world_size
            assigned_global_ranks.append(global_rank)

        master_addr, master_port = self._get_master_addr_port(store)
        restart_count = spec.max_restarts - self._remaining_restarts
        log.info(
            f"[{spec.role}] Rendezvous complete for workers.\n"
            f"Result:\n"
            f"\trestart_count={restart_count}\n"
            f"\tgroup_rank={group_rank}\n"
            f"\tgroup_world_size={group_world_size}\n"
            f"\trank stride={stride}\n"
            f"\tassigned global_ranks={assigned_global_ranks}\n"
            f"\tmaster_addr={master_addr}\n"
            f"\tmaster_port={master_port}\n"
        )

    @prof
    def _initialize_workers(self, worker_group: WorkerGroup) -> None:
        r"""
        Starts a fresh set of workers for the worker_group.
        Essentially a rendezvous followed by a start_workers.

        The caller should first call ``_stop_workers()`` to stop running workers
        prior to calling this method.

        Optimistically sets the state of the worker group that
        just started as ``HEALTHY`` and delegates the actual monitoring
        of state to ``_monitor_workers()`` method
        """
        role = worker_group.spec.role
        log.info(f"[{role}] Rendezvous'ing worker group")

        # TODO after stopping workers, wait at least monitor_interval*2 for
        # workers on different nodes to fail on a collective op before waiting
        # on the rdzv barrier, this way we ensure that nodes enter rdzv
        # at around the same time and reduce false positive rdzv timeout errors
        self._rendezvous(worker_group)

        log.info(f"[{role}] Starting worker group")
        worker_ids = self._start_workers(worker_group)
        for local_rank, id in worker_ids.items():
            worker = worker_group.workers[local_rank]
            worker.id = id

        worker_group.state = WorkerState.HEALTHY

    @prof
    def _restart_workers(self, worker_group: WorkerGroup) -> None:
        """
        Restarts (stops, rendezvous, starts) all local workers in the group.
        """

        role = worker_group.spec.role
        log.info(f"[{role}] Stopping worker group")
        self._stop_workers(worker_group)
        worker_group.state = WorkerState.STOPPED
        self._initialize_workers(worker_group)

    def run(self, role: str = DEFAULT_ROLE) -> Dict[int, Any]:
        # NOTE: currently only works for a single role

        spec = self._worker_group.spec
        role = spec.role

        log.info(f"[{role}] starting workers for function: {spec.fn.__name__}")

        self._initialize_workers(self._worker_group)
        monitor_interval = spec.monitor_interval
        rdzv_handler = spec.rdzv_handler

        while True:
            assert self._worker_group.state != WorkerState.INIT
            time.sleep(monitor_interval)
            monitor_result = self._monitor_workers(self._worker_group)
            state = monitor_result.state
            self._worker_group.state = state

            put_metric(f"workers.{role}.remaining_restarts", self._remaining_restarts)
            put_metric(f"workers.{role}.{state.name.lower()}", 1)

            if state == WorkerState.SUCCEEDED:
                log.info(f"[{role}] All workers successfully finished.")
                return monitor_result.ret_vals
            elif state in {WorkerState.UNHEALTHY, WorkerState.FAILED}:
                if self._remaining_restarts > 0:
                    log.info(
                        f"[{role}] Worker group {state.name}. "
                        f"{self._remaining_restarts}/{spec.max_restarts} attempts left;"
                        f" will restart worker group"
                    )
                    self._remaining_restarts -= 1
                    self._restart_workers(self._worker_group)
                else:
                    self._stop_workers(self._worker_group)
                    self._worker_group.state = WorkerState.FAILED
                    raise WorkerGroupFailureException(
                        f"[{role}] exceeded max_restarts={spec.max_restarts}",
                        monitor_result.exceptions,
                    )
            elif state == WorkerState.HEALTHY:
                # membership changes do not count as retries
                num_nodes_waiting = rdzv_handler.num_nodes_waiting()
                group_rank = self._worker_group.group_rank
                if num_nodes_waiting > 0:
                    log.info(
                        f"[{role}] Detected {num_nodes_waiting} "
                        f"new nodes from group_rank={group_rank}; "
                        f"will restart worker group"
                    )
                    self._restart_workers(self._worker_group)
            else:
                raise Exception(f"[{role}] Worker group in {state.name} state")
