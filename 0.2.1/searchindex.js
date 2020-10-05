Search.setIndex({docnames:["agent","customization","distributed","events","examples","index","kubernetes","metrics","multiprocessing","quickstart","rendezvous","runtime","timer","train_script","tsm_driver"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["agent.rst","customization.rst","distributed.rst","events.rst","examples.rst","index.rst","kubernetes.rst","metrics.rst","multiprocessing.rst","quickstart.rst","rendezvous.rst","runtime.rst","timer.rst","train_script.rst","tsm_driver.rst"],objects:{"torchelastic.agent":{server:[0,0,0,"-"]},"torchelastic.agent.server":{ElasticAgent:[0,1,1,""],SimpleElasticAgent:[0,1,1,""],Worker:[0,1,1,""],WorkerGroup:[0,1,1,""],WorkerSpec:[0,1,1,""],WorkerState:[0,1,1,""]},"torchelastic.agent.server.ElasticAgent":{get_worker_group:[0,2,1,""],run:[0,2,1,""]},"torchelastic.agent.server.SimpleElasticAgent":{_assign_worker_ranks:[0,2,1,""],_exit_barrier:[0,2,1,""],_initialize_workers:[0,2,1,""],_monitor_workers:[0,2,1,""],_rendezvous:[0,2,1,""],_restart_workers:[0,2,1,""],_start_workers:[0,2,1,""],_stop_workers:[0,2,1,""],get_worker_group:[0,2,1,""],run:[0,2,1,""]},"torchelastic.agent.server.WorkerState":{is_running:[0,2,1,""]},"torchelastic.agent.server.api":{MonitorResult:[0,1,1,""]},"torchelastic.agent.server.local_elastic_agent":{LocalElasticAgent:[0,1,1,""]},"torchelastic.distributed":{launch:[2,0,0,"-"]},"torchelastic.events":{configure:[3,3,1,""],record:[3,3,1,""],record_event:[3,3,1,""]},"torchelastic.events.api":{ConsoleEventHandler:[3,1,1,""],Event:[3,1,1,""],EventHandler:[3,1,1,""],NullEventHandler:[3,1,1,""]},"torchelastic.metrics":{configure:[7,3,1,""],prof:[7,3,1,""],put_metric:[7,3,1,""]},"torchelastic.metrics.api":{ConsoleMetricHandler:[7,1,1,""],MetricHandler:[7,1,1,""],NullMetricHandler:[7,1,1,""]},"torchelastic.rendezvous":{RendezvousClosedException:[10,1,1,""],RendezvousHandler:[10,1,1,""],RendezvousNonRetryableError:[10,1,1,""],RendezvousTimeoutException:[10,1,1,""]},"torchelastic.rendezvous.RendezvousHandler":{get_run_id:[10,2,1,""],is_closed:[10,2,1,""],next_rendezvous:[10,2,1,""],num_nodes_waiting:[10,2,1,""],set_closed:[10,2,1,""],shutdown:[10,2,1,""]},"torchelastic.rendezvous.etcd_rendezvous":{EtcdRendezvous:[10,1,1,""],EtcdRendezvousHandler:[10,1,1,""],EtcdStore:[10,1,1,""]},"torchelastic.rendezvous.etcd_rendezvous.EtcdRendezvous":{announce_self_waiting:[10,2,1,""],confirm_membership:[10,2,1,""],confirm_phase:[10,2,1,""],handle_existing_rendezvous:[10,2,1,""],handle_join_last_call:[10,2,1,""],init_phase:[10,2,1,""],join_phase:[10,2,1,""],join_rendezvous:[10,2,1,""],rendezvous_barrier:[10,2,1,""],set_closed:[10,2,1,""],try_create_rendezvous:[10,2,1,""],wait_for_final:[10,2,1,""],wait_for_peers:[10,2,1,""],wait_for_rendezvous_to_free:[10,2,1,""]},"torchelastic.rendezvous.etcd_rendezvous.EtcdStore":{add:[10,2,1,""],check:[10,2,1,""],get:[10,2,1,""],set:[10,2,1,""],set_timeout:[10,2,1,""],wait:[10,2,1,""]},"torchelastic.rendezvous.etcd_server":{EtcdServer:[10,1,1,""]},"torchelastic.timer":{LocalTimerClient:[12,1,1,""],LocalTimerServer:[12,1,1,""],TimerClient:[12,1,1,""],TimerRequest:[12,1,1,""],TimerServer:[12,1,1,""],configure:[12,3,1,""],expires:[12,3,1,""]},"torchelastic.timer.TimerClient":{acquire:[12,2,1,""],release:[12,2,1,""]},"torchelastic.timer.TimerServer":{clear_timers:[12,2,1,""],get_expired_timers:[12,2,1,""],register_timers:[12,2,1,""]},"torchelastic.tsm":{driver:[14,0,0,"-"]},"torchelastic.tsm.driver.api":{Application:[14,1,1,""],Container:[14,1,1,""],ElasticRole:[14,1,1,""],Resources:[14,1,1,""],Role:[14,1,1,""],Scheduler:[14,1,1,""],Session:[14,1,1,""],macros:[14,1,1,""]},"torchelastic.tsm.driver.api.Scheduler":{cancel:[14,2,1,""],describe:[14,2,1,""],exists:[14,2,1,""],submit:[14,2,1,""]},"torchelastic.tsm.driver.api.Session":{attach:[14,2,1,""],list:[14,2,1,""],name:[14,2,1,""],status:[14,2,1,""],stop:[14,2,1,""],wait:[14,2,1,""]},"torchelastic.tsm.driver.local_scheduler":{LocalScheduler:[14,1,1,""]},"torchelastic.tsm.driver.local_scheduler.LocalScheduler":{describe:[14,2,1,""],submit:[14,2,1,""],wait:[14,2,1,""]},torchelastic:{agent:[0,0,0,"-"],distributed:[2,0,0,"-"],events:[3,0,0,"-"],metrics:[7,0,0,"-"],rendezvous:[10,0,0,"-"],timer:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"032":4,"0rc":11,"100":14,"1024":14,"1234":10,"127":9,"1574213883":7,"1574213940":7,"200":4,"2020":4,"2379":[4,9,10],"300":0,"30s":10,"4001":9,"4182858":7,"500":14,"5237644":7,"582":4,"600":10,"8080":14,"8081":14,"922":4,"929":4,"abstract":[0,10,12,14],"byte":10,"case":[0,1,4,5,10,12,13,14],"class":[0,1,3,7,10,12,14],"default":[0,1,3,4,7,10],"export":[4,13],"final":[0,10,14],"float":[0,12],"function":[0,2,4,7,10,14],"import":[1,2,3,7,12,14],"int":[0,3,7,10,14],"long":10,"new":[0,2,4,10,14],"null":[1,7],"return":[0,1,10,12,14],"short":10,"static":0,"true":[0,12,14],"try":[0,1,7,10],"var":[10,13],"void":0,"while":[0,4,10,14],AWS:[1,5],For:[0,2,4,7,10,13,14],Has:14,NOT:[0,2,10,12],ONE:9,Such:10,That:[0,2,14],The:[0,1,2,3,4,7,9,10,11,12,14],There:10,Use:[0,5,10,14],Used:[2,10],Useful:10,Uses:10,Using:7,__main__:1,__name__:1,_assign_worker_rank:0,_exit_barri:0,_initialize_work:0,_monitor_work:0,_rendezv:0,_restart_work:0,_start_work:0,_stop_work:0,abc:14,abl:[10,14],about:[0,2,3,7,9,14],abov:[10,12,14],abstractmethod:14,accord:0,accordingli:0,acquir:12,acquisit:12,across:[0,2],act:[0,14],action:[0,3,14],activ:12,actual:[0,14],add:[7,10],added:7,adding:7,addit:[2,3,10,14],admit:[2,10],advanc:[0,5],advertis:9,advis:0,after:[3,10,12,14],against:0,agent:[1,2,3,5,7,9,12,14],agre:10,algorithm:0,aliv:[0,10],all:[0,2,3,4,7,9,10,12,13,14],all_reduc:12,alloc:10,allow:[0,1,2,10,14],alreadi:[10,14],also:[4,7,10,14],altern:4,alwai:12,amount:[0,10],ani:[0,2,3,4,5,10,12,14],annot:14,announc:10,announce_self_wait:10,anoth:3,another_arg:14,anymor:14,api:[0,1,2,4,5,7,9,10,12],app:14,app_id:14,app_statu:14,appli:[0,2],applic:[4,10],appropri:4,approxim:10,appstatu:14,arbitrari:3,arch:4,arg1:[2,9],arg:[0,1,2,9,12,13,14],argument:[0,2,13,14],argv:[1,13],arrai:0,arriv:[2,10],aspect:4,assgin:2,assign:[0,2,10],associ:3,assum:[0,2,10],assumpt:[2,7,14],atom:10,attach:14,attempt:[2,4,10],automat:[2,10,14],avail:[0,2,4,10,14],avoid:4,awai:5,back:[10,14],backend:[2,10,13,14],ball:14,bar:[7,14],bare:4,barrier:[0,10],base:[0,4,5,10],basecontext:12,basic:10,batch:[2,4,13],baz:7,becaus:[10,14],becom:10,been:[10,13,14],befor:[1,2,4,7,10,12],begin:[1,10],behavior:[2,14],being:[0,4,10,12],belong:7,below:[0,1,3,4,7,10,11,12,13,14],best:10,better:0,between:[2,3,4,10,12,14],bin:10,binari:10,bitnami:4,block:[10,12,14],blueprint:0,bone:4,bool:[0,10,12,14],both:[0,2,10],box:[2,4],buffer_s:14,build:14,built:4,bundl:14,c10:10,c10d:[2,10],cache_s:14,calcul:7,calculate_lat:7,call:[0,10,12,14],callabl:0,caller:[0,10],can:[0,1,2,3,4,5,7,9,10,12,14],cancel:14,cannot:14,capabl:14,capac:5,captur:3,care:4,caus:10,certain:[7,14],chang:[0,2,5,10,14],check:[0,10],checkpoint:[2,13],checkpoint_path:[2,13],class_nam:7,classif:4,classnam:7,classy_train:4,classy_vis:4,clear:12,clear_tim:12,client:[9,10,14],clone:4,close:10,cloud:5,cloudwatch:1,cluster:[2,10,11,14],cmd:14,code:[0,2,3,12],collect:[0,10],com:4,combin:10,come:[7,10],command:[2,4,14],commandlin:14,common:[0,10],commun:[0,4,10,12],compat:0,complet:[0,1,10,12,14],compliant:13,compos:4,compris:2,comput:0,conclud:10,concret:13,config:4,config_fil:4,configur:[0,1,2,3,7,10,12],confirm:10,confirm_membership:10,confirm_phas:10,connect:10,consequ:14,consid:[0,10],consist:[2,3,10],consol:[3,7],consoleeventhandl:3,consolemetrichandl:7,consolemetricshandl:7,construct:3,contain:[0,2,3],context:[0,2,10,12],continu:13,contrast:0,control:[0,4,6,10,11,14],conveni:[7,10],coordin:[0,14],copi:[0,14],core:14,correct:10,correctli:8,correl:2,could:[0,10,14],count:[7,14],countdown:12,counter:10,cpu:14,crash:10,creat:[0,1,2,4,10,14],critic:[5,10],cross:0,cumbersom:10,current:[0,2,10,14],custom:[3,4,5,6,7,9],daemon:12,data:[0,3,4,7,10,12,14],dataset:[2,13],datetim:10,deadlin:[10,12],deal:[0,12],debug:[3,7],decentr:0,decid:10,decis:[0,10,12],decor:7,def:[0,1,2,3,7,10,12,13],def_nam:7,defens:0,defin:[0,1,2,10,14],definit:[2,6],delai:10,deleg:0,demand:5,departur:2,depend:[0,2,4,12,14],deploi:[0,4,10,14],deploy:[0,2,10],deprec:5,describ:[0,1,10,14],describeapprespons:14,descript:[10,14],design:[5,7,10],destin:[3,7],destroi:10,detect:[0,10],determin:[0,3],dev:[1,4,7,14],devic:[4,12],diagram:[0,10],dict:[0,3,12,14],dictat:14,did:[0,10],differ:[0,1,2,3,4,7,10,13,14],dir:14,direct:14,directli:[0,9],directori:14,discoveri:10,dist:2,distribut:[0,2,4,5,9,10,12,13,14],doc:[10,14],docker:14,dockerfil:4,doe:[0,4,7,9,10,12,14],doing:10,don:9,done:[0,14],doubl:0,down:[0,2],driver:14,due:[5,10],durat:[7,10,14],dure:[0,1,3,10,14],duti:14,dynam:5,each:[0,2,4,12,13,14],earli:0,easi:10,effect:[12,14],either:[0,4,5,10,12,14],elast:[1,4,5,6,9,11,13,14],elastic_ag:1,elastic_train:14,elasticag:0,elasticrol:14,elig:12,els:10,emit:[1,7],empti:[0,10],enabl:[2,5,9],encod:[0,7],encourag:[0,11],end:[4,7],endpoint:[2,10],enforc:14,enough:4,ensur:[0,10,13,14],entir:[0,2,4],entiti:12,entri:[2,10],entrypoint:14,entrypopython:14,env:[10,13,14],env_var:14,environ:[0,2,4,10,13,14],epoch:[4,13,14],equal:[2,10,12],error:[0,8,10],especi:4,essenti:0,establish:4,etc:[0,3,10,14],etcd:[2,4,9,13],etcd_address:10,etcd_binary_path:10,etcd_client:10,etcd_host:[2,9],etcd_port:[2,9],etcd_prefix:10,etcd_rendezv:10,etcd_serv:10,etcd_store_prefix:10,etcdrendezv:[2,10],etcdrendezvoushandl:10,etcdrendezvousretryablefailur:10,etcdserv:10,etcdstor:10,even:0,event:[0,5],event_nam:3,event_typ:3,eventhandl:[1,3],eventu:10,everi:10,everyon:[0,10],exact:[0,12,14],exactli:12,exampl:[0,3,5,7,10,12,13,14],example_1:4,except:[0,1,7],exchang:10,exclud:10,exclus:10,execut:[0,1,2,3,5,14],exist:[0,2,10,14],exit:[0,10],exit_barrier_timeout:0,expect:[0,10,12],expected_vers:10,experiment:[5,10,14],expir:[5,10],expiration_tim:12,expiri:12,expositori:13,extend:[1,3,12],face:14,factori:14,fail:[0,2,10,13,14],failur:[0,2,4,5,7,10,13],fallback:10,fals:14,far:2,fashion:12,fault:[0,2,5,9,10],few:[0,14],field:[0,7],file:[3,4,10],find:10,finish:[0,7,10,12,14],first:[0,7,10],fit:1,fix:[2,10],flag:[4,13],flaki:5,flow:3,fn_arg:1,follow:[0,2,7,9,10,14],foo:[3,7,14],foobar:[7,14],form:[2,10],format:2,fqdn:2,framework:[3,4,7],free:10,frequenc:2,frequent:5,fresh:0,from:[0,3,4,7,10,12,13,14],frozen:10,full:[10,13],fulli:14,further:4,futur:[0,10,14],gang:2,gather:10,gener:3,get:[2,5,10,12,13],get_client:10,get_context:[0,12],get_expired_tim:12,get_run_id:10,get_worker_except:0,get_worker_group:0,getpass:14,getus:14,git:4,github:[4,6,11],give:3,given:[0,10,12,14],global:[0,2],global_rank:0,gloo:2,goal:7,gpu:[0,4,12,14],gracefulli:[0,2,10],grade:5,greater:10,group:[0,2,7,10,12,13],group_nam:7,group_rank:[0,2],group_world_s:0,guarante:[10,12,14],guard:0,handl:[0,1,2,10],handle_existing_rendezv:10,handle_join_last_cal:10,handler:4,happen:[0,10],hard:2,hardwar:[5,14],has:[0,7,10,12,13,14],have:[0,1,2,3,4,7,9,10,12,13,14],headless:14,healthi:[0,10],hello_elast:4,hello_world:14,help:[4,7,10,14],helper:10,henc:[0,10,13,14],here:[9,10],high:[0,4,7],highli:[4,10,11],hold:[0,12],holder:0,home:14,homogen:[0,2],host:[0,2,9,12,14],how:[1,4,10,12,14],howev:[0,7,14],http:[4,9],hyper:14,idempot:14,identifi:[0,2,7,10,12,14],ids:14,ignor:[1,14],imag:[4,14],image_fetch:14,imagefetch:14,img_root:14,immedi:[2,10],implement:[1,2,3,4,7,10,14],implementor:[0,14],impli:10,impos:12,includ:[7,10,14],inclus:14,incom:12,increas:7,increment:10,indefinit:14,independ:10,indic:10,info:[0,4],inform:[0,1,3,4,6,10,14],infrastructur:[1,5],ing:10,init:0,init_phas:10,init_process_group:[0,2,13],initi:[0,2,10,13],insid:10,insight:3,instal:[9,14],instanc:[0,2,4,5,7,10,12,14],instead:[0,4,7,10],instruct:[11,12,14],integ:[10,14],intend:10,intent:10,intention:4,inter:0,interfac:[1,3,4,7,10,14],intermedi:10,intern:7,interpret:[0,10,12,14],interrup:0,interrupt:[0,14],invalid:[10,14],invok:[2,14],is_attach:14,is_clos:10,is_run:0,is_termin:14,item:2,iter:[2,13],its:[0,1,10,12,14],itself:4,job:[0,2,3,4,5,6,7,9,10,11,12,14],job_definit:14,job_id:[2,9,10],join:[2,4,10],join_phas:10,join_rendezv:10,joinabl:[4,10],json:4,just:[0,14],keep:[0,10],keep_al:10,kei:[2,3,10],kept:4,kill:[2,12,14],kind:3,know:14,kubernet:[4,5,11],kwarg:[10,14],larg:4,last:[10,14],last_call_timeout:10,late:10,latenc:7,later:10,launch:[0,1,4,5,8,9,10,13,14],launch_kwarg:14,launcher:4,leaf:7,leaf_modul:7,learn:9,leas:[5,10],least:[4,9,10],leav:[0,2],less:[0,12],level:[0,1,3,4,7],librari:12,like:[4,10],limit:14,list:[0,10,12,14],listen:9,load_checkpoint:[2,13],loader:4,local:[0,2,10,12,13,14],local_elastic_ag:0,local_rank:[0,2,13],local_schedul:14,local_world_s:[0,1,2],localelasticag:[0,1,12],localhost:[10,14],localschedul:14,localtimercli:12,localtimerserv:12,localworkergroup:2,locat:7,log:[0,3,7],logic:[13,14],longer:12,look:[4,9,10],lookuperror:10,lose:[10,13],lost:[0,2,13],machin:[0,4],macro:14,made:[2,14],mai:[0,7,9,10,14],main:[0,1,2,4,10,12,13,14],make:[0,1,2,4,7,8,10,12,13],manag:[0,2,5,12],manger:10,mani:10,manner:[0,5],manual:[2,10,13],map:[0,2,7,10,14],mark:10,master_addr:[2,13],master_port:[0,2,13],match:10,max:[2,10],max_interv:12,max_nnod:2,max_nod:4,max_restart:[0,1,2,14],max_siz:[2,9],max_work:10,maximum:[10,14],mean:[10,12,14],meaning:3,meant:[10,12],measur:7,mechan:[3,10],meet:[4,9],member:[0,2,10],membership:[0,2,10],memmb:14,messag:12,message_queu:12,metadata:3,method:[0,1,10,14],metric:5,metric_data:[1,7],metric_group:7,metric_group_nam:7,metric_nam:7,metric_valu:7,metricdata:1,metrichandl:[1,7],might:10,millisecond:[3,7],min:[2,10],min_nod:4,min_siz:[2,9],min_work:10,minimum:[0,10],mission:5,mode:[2,10,14],model:[13,14],modul:[1,2,3,7,8,10,14],moment:14,monitor:[0,2,10,12],monitor_interv:[0,1],monitorresult:0,more:[0,1,4,6,9,10,12,14],most:[0,1,9,10,12,13],mp_queue:12,multi:[0,2,10,14],multi_contain:4,multipl:[4,8,10,12,14],multiprocess:[0,5,12],must:[0,2,4,12,13,14],mutabl:0,my_app:7,my_contain:14,my_env_var:14,my_imag:14,my_launch:1,my_method:7,my_metr:7,my_modul:7,my_sess:14,my_train:14,my_train_job:14,my_train_script:14,myeventhandl:1,mymetrichandl:1,myrendezvoushandl:1,name:[3,7,14],nativ:14,nccl:2,necessari:[0,2,10,14],necessarili:[0,10],need:[1,2,4,5,10,13,14],neg:12,ness:2,net:0,network:[4,10],never:[2,10,14],next:[4,10],next_rendezv:10,nnode:[2,4,9,14],node:[0,2,5,9,10,14],non:[0,10,12,14],none:[0,3,7,10,12,14],noqa:10,normal:10,note:[0,2,10,12,14],noth:14,notic:2,notifi:2,now:[3,4,7,12],nproc_per_nod:[1,2,4,9,14],nproc_per_process:0,nulleventhandl:[1,3],nullmetrichandl:7,nullmetricshandl:7,num:10,num_cuda_devic:4,num_max_work:10,num_min_work:10,num_nod:[2,9],num_nodes_wait:10,num_train:2,num_work:0,num_workers_wait:10,number:[0,2,4,10,14],nvidia:4,object:[0,3,4,10,12,14],observ:[0,10],occupi:4,occur:[3,10],occurr:3,off:0,offset:0,omp_num_thread:4,onc:[1,4,10],one:[0,4,7,10,12,13,14],onli:[0,2,4,10,11,14],onto:14,oom:4,open:10,oper:[7,10],opportun:10,optim:4,optimist:0,option:[4,9,10,13,14],other:[0,7,10,14],other_param:[0,12],otherwis:[10,14],our:[2,4,6,9,11,13],ourselv:10,out:[2,4,7],output:[0,4,7],over:14,overal:10,overload:4,override_timeout:10,overview:[3,7],own:[1,4,10,12,14],p2p:10,packag:4,page:[4,13],pair:[10,12],parallel:[10,14],param:1,paramet:[0,3,10,14],parameter_serv:14,parent:[8,12,14],pars:13,parse_arg:[1,13],part:[3,10],partial:[0,10],particip:[2,4,10],particular:[0,2,7,10],particularli:12,pass:[0,1,2,4,7,9,10,12,13,14],past:14,path:[10,13,14],peer:10,per:[0,2,10,12,14],perform:[0,4,10,14],period:10,persist:[10,14],phase:10,physic:[2,14],pid:[0,12],piggyback:10,pip:9,place:[0,10],placement:0,plane:[0,10],platform:[1,3,7],pleas:[1,4,6,10,14],plugin:5,point:[0,2,4,7,10],polici:14,pool:5,port:[0,2,10,14],port_map:14,possibl:[10,14],potenti:[10,12],power:9,pre:4,prefer:[0,11],prefix:10,present:10,prevent:0,previous:10,primit:10,print:[1,3,7],prior:0,problem:10,process:[0,1,2,3,4,8,10,12,13,14],processgroup:4,prod:7,produc:[1,3,7],product:[4,5,10,14],prof:7,profil:7,program:[1,3,13,14],programmat:[1,14],progress:[0,2,13],propag:[8,10],proper:0,properli:[0,10],properti:[1,7,14],protocol:12,provid:[0,2,4,5,10,12,13,14],ps_main:14,public_hostnam:9,publish:[1,3,7,10],pull:14,push:1,put:0,put_metr:7,python:[0,2,3,7,8,9,10,14],pytorch:[0,4,5,14],pytorch_read:14,pytorch_train:14,quad:0,qualifi:7,queri:10,queue:[0,12],quickli:10,quickstart:[5,14],rais:[0,10,14],ram:14,ran:14,random:10,rang:[2,10,13],rank:[0,2,10,13],rather:[0,12],ratio:0,rdzv:[0,2],rdzv_backend:[2,4,9,13],rdzv_endpoint:[2,4,9,13],rdzv_handler:[0,1,10],rdzv_id:[2,4,9],rdzv_impl:10,rdzv_version:10,reach:[0,10,14],react:0,read:0,reader:14,reader_main:14,reader_project_dir:14,readm:[6,11],realiti:14,reap:12,recent:13,recommend:[0,2,4,10],record:[1,3],record_ev:3,recov:0,recreat:14,refer:[1,6,10,11,14],region:7,regist:[10,12],register_tim:12,regular:0,rel:14,relat:[0,3],relationship:7,releas:[10,12,14],relev:[0,14],reli:0,remain:10,remot:0,remov:[4,13,14],render:10,rendev:2,rendezv:[0,2,4,5,7,9,13],rendezvous_barri:10,rendezvousclosedexcept:10,rendezvoushandl:[0,1,2,10],rendezvousnonretryableerror:10,rendezvoustimeoutexcept:10,renew:10,replac:[2,5,14],replica:14,replica_id:14,repres:[0,3,10,12,14],request:[12,14],request_queu:12,requestqueu:12,requir:[0,4,9,14],resembl:3,reserv:[3,7],resili:5,resnet18:4,resourc:[6,10],respons:[0,3,7,10,12,14],rest:4,restart:[0,2,13,14],result:[0,1,2,14],resum:10,ret_val:0,retri:[0,10,12,14],retriev:0,retryabl:10,role:[0,1,2,10],role_rank:[0,2],role_world_s:[0,2],root:[10,14],rpm:14,run:[0,1,2,5,9,10,11,12,14],run_id:[2,10],run_mod:14,runmod:14,runtim:14,safe:[10,14],safeti:0,same:[0,2,4,7,10,12,13,14],save_checkpoint:[2,13],scaffold:0,scale:[0,2,14],scenario:10,schedul:0,scheduler_backend:14,scheme:10,scope:12,scope_id:12,script:[0,2,4,5,9,12],script_arg:14,second:[0,12,14],section:[0,1,2,11],see:[1,4,10,13,14],self:[0,1,3,7,12],semant:[2,10,14],sens:10,sensibl:7,separ:[4,10],server:[2,4,9,14],servic:[1,4,14],session:5,set:[0,3,4,10,12,13,14],set_clos:10,set_timeout:10,setup:[2,4,10,11],share:[2,4,5,10],shared_queu:0,ship:[1,14],shm:4,should:[0,1,2,4,10,12],should_checkpoint:2,show:[3,4],shown:1,shutdown:10,side:[10,12],sidecar:[2,4,9,10],signal:10,signatur:0,similar:[2,4,7],simpl:[3,10,14],simpleelasticag:0,simplest:0,simpli:[2,4],sinc:[4,12,14],singl:[0,2,4,9,10,14],sink:[1,7],situat:12,size:[0,2,4,5,10],sleep:14,small:10,softwar:14,some:[0,2,10,12],someon:10,someth:4,soon:[10,14],sort:0,sourc:[0,1,3,7,10,12,14],span:4,sparingli:14,spawn:[0,1,12],spec:[0,1,12,14],specif:[0,10,12,14],specifi:[0,2,4,10,14],spot:5,stabl:[2,10],stage:7,standalon:[2,4,9,10,14],standalonesess:14,standard:8,start:[0,2,4,5,7,9,10,12],start_method:[0,1,12],start_work:0,state:[0,3,4,10,13,14],statu:[4,14],stdout:[3,7],stdout_ev:3,stdouteventhandl:3,stdoutmetrichandl:7,still:[0,10],stop:[0,2,10,14],store:[0,2,10,14],str:[0,3,7,10,12,14],string:[0,7,10],strongli:[0,2],structur:[0,2],stuck:[0,12],style:2,subject:14,submit:14,subprocess:[8,10,12],subset:2,substitut:[4,10,14],succe:10,succeed:0,success:7,successfulli:[0,7,10,14],succinctli:7,suffici:[1,10],sum:0,support:[1,2,5,14],sure:[1,2,8,13],surviv:2,synchron:[0,10],sys:[1,13],system:4,take:[4,9,10,12],taken:5,talk:12,tar:14,tarbal:14,tcp:2,tcp_store:14,tear:0,technic:10,telemetri:7,templat:14,template_config:4,temporarili:0,tensorboard:14,term:[3,10],termin:[0,10,12,14],test:[2,3,10],test_ev:3,tha:2,than:[0,2,4,7,10,12],thei:10,them:[1,7,10,12],themselv:10,thi:[0,1,2,4,10,12,13,14],thing:14,this_rank:10,those:14,thought:7,thread:[0,14],threw:7,throughout:4,time:[0,5,7,10,12,14],timedelta:10,timefram:12,timeout:[10,14],timeouterror:14,timer:5,timer_cli:12,timer_request:12,timercli:12,timerrequest:12,timerserv:12,timeseri:7,timestamp:[3,7],tini:4,tmp:10,toi:7,toler:[0,2,5,9,10],too:10,toolkit:4,topolog:0,torch:[0,2,4,10,12,13,14],torchelast:[0,1,2,3,4,7,8,9,10,11,12,13,14],torchelastic_etcd_binary_path:10,torchelastic_hom:4,torchelastic_max_restart:2,torchelastic_restart_count:2,torchelastic_run_id:2,total:[2,7,10,14],total_num_epoch:13,track:0,train:[0,2,5,9,10],train_app:14,train_loop:10,train_main:14,train_project_dir:14,train_step:2,trainer:[0,2,4,12,14],trainer_entrypoint_fn:1,trainer_func:12,trainers_per_nod:9,trainsit:10,tranisiton:10,transit:[3,10],tricki:1,trigger:10,trivial:[0,14],try_create_rendezv:10,tsm:5,ttl:10,tune:4,tupl:[0,7,10],two:[0,3,4,7],type:[0,3,10,12],typic:[0,2,10,12,14],ultim:12,unblock:10,uncaught:0,undefin:14,underli:[0,14],understand:[0,1,14],unexpect:10,unhandl:0,unhealthi:0,union:2,uniqu:[0,2,7,10,12,14],unit:[0,2],unknown:0,unknownappexcept:14,unless:12,unrecover:0,until:[0,10,14],updat:0,upon:[0,14],url:[9,10,14],usag:[0,2,3,7,10,12],use:[1,2,4,7,9,10,11,14],use_env:13,usecas:4,used:[1,2,3,4,7,9,10,12,14],useful:[4,10,12],user:[0,2,7,10,13],usernam:14,uses:[1,2,3,4,7,8,10,12],using:[0,2,3,4,7,10,12,14],usr:10,valid:10,valu:[0,1,2,3,7,10,14],variabl:[2,4,13,14],variou:11,version:[4,10],via:[3,10],video:4,view:0,visibl:7,visit:13,w605:10,wai:[3,7,8,14],wait:[0,10,14],wait_for_fin:10,wait_for_p:10,wait_for_rendezvous_to_fre:10,want:7,well:[2,10],were:[10,13,14],weren:10,what:[3,7,14],whatev:12,when:[0,1,2,3,4,9,10,12,13,14],where:[0,2,5,10,12],wherea:14,whether:[0,10,14],which:[0,2,10,12,14],who:10,window:10,within:[2,10,12,14],without:[10,14],word:10,work:[0,2,4,10,11,12,13,14],worker:[0,1,2,3,4,8,10,12,13,14],worker_group:0,worker_id:12,workergroup:[0,2],workergroupfailureexcept:0,workerspec:[0,1,2,12],workerst:0,workspac:[4,14],world:[0,2,10],world_siz:[0,2,10,13],worst:13,worth:13,would:[0,4,10],wrap:12,write:[0,3,7,9,10],yet:0,yml:4,you:[0,1,2,4,7,9,10,11,12,13,14],your:[1,2,4,7,9,10,11,12,13,14],your_training_script:[2,9],yourself:4},titles:["Elastic Agent","Customization","Elastic Launch","Events","Examples","TorchElastic","TorchElastic Kubernetes","Metrics","Multiprocessing","Quickstart","Rendezvous","Cloud Provider Support (Deprecated)","Expiration Timers","Train script","Training Session Manager (TSM)"],titleterms:{AWS:11,agent:0,api:[3,14],applic:14,azur:11,build:4,builder:14,classi:4,client:12,cloud:11,concept:0,contain:[4,14],custom:[1,12],deprec:11,develop:14,docker:4,document:[5,14],ec2:11,elast:[0,2],etcd:10,event:[1,3],exampl:4,except:10,exist:4,expir:12,extend:0,handler:[1,3,7,10],imagenet:4,implement:[0,12],implment:10,kubernet:6,launch:2,launcher:[1,2],manag:14,method:[3,7,12],metric:[1,7],multi:4,multiprocess:8,node:4,obtain:4,overview:14,prerequisit:4,provid:11,quickstart:9,rendezv:[1,10],repo:4,resourc:14,role:14,run:4,sampl:4,schedul:14,script:13,server:[0,10,12],session:14,support:11,timer:12,torchelast:[5,6],train:[13,14],tsm:14,usag:14,user:14,vision:4,write:12}})