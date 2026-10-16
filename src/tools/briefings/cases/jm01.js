//META {"slug":"ransom","kick":"Case JM-01 · The Ransom","title":"The Ransom"}
const ITEMS=[
 /* 1 · every case is somebody else's */
 I('shelf',640,468,1,.9,2.1,Object.assign({k:{w:1000}},OUT(5.3))),
 I('folder',330,372,.97,1.8,3.1,Object.assign({c:'#cdae78'},OUT(5.3))), I('coinbag',330,378,.55,2.6,3.6,OUT(5.3)),
 I('folder',640,372,.97,2.2,3.5,Object.assign({c:'#bfa06b'},OUT(5.3))),  I('wall',640,372,.5,3.0,4.0,OUT(5.3)),
 I('folder',950,372,.97,2.6,3.9,Object.assign({c:'#d2b680'},OUT(5.3))), I('plaster',950,372,.5,3.4,4.4,OUT(5.3)), I('hand',990,402,.5,4.1,4.8,OUT(5.3)),
 /* 2 · this one is different */
 I('folder',640,336,1.95,5.4,7.1,Object.assign({c:'#b99a62'},OUT(10.0))),
 T('CASE JM-01',640,282,34,6.6,7.6,{col:INK,...OUT(10.0)}), T('THE RANSOM',640,338,46,7.0,8.2,{col:RED,...OUT(10.0)}),
 T('your name',610,408,38,7.9,8.8,{col:BLUE,r:-.03,...OUT(10.0)}), T('and Mordecai’s',650,458,34,8.5,9.6,{col:RED,r:-.02,...OUT(10.0)}),
 Pp('stamp',790,500,1,9.0,Object.assign({k:{w:250,h:64},str:'NEVER CLOSED',size:30,r:-.22},OUT(10.0))),
 /* 3 · a garden, one command, a debt */
 I('gate',250,340,1.35,10.2,12.0,OUT(15.6)), I('tree',470,330,1.05,11.1,12.8,OUT(15.6)),
 I('ledger',905,310,1.45,12.0,13.8,Object.assign({},OUT(15.6))),
 Pp('stamp',830,300,1,13.9,Object.assign({k:{w:170,h:44},str:'INSUFFICIENT',size:22,r:-.18},OUT(15.6))),
 Pp('stamp',980,360,1,14.35,Object.assign({k:{w:170,h:44},str:'INSUFFICIENT',size:22,r:.14},OUT(15.6))),
 ...Array.from({length:9},(_,i)=>I('fig',200+i*110,518,.55,13.3+i*.18,13.9+i*.18,{c:['#e8c9a0','#d9b48a','#f0d7b4'][i%3],...OUT(15.6)})),
 /* 4 · paid in full */
 I('ledger',640,310,1.9,15.9,17.4,Object.assign({k:{rows:true}},OUT(20.2))),
 I('rays',640,320,1,17.5,18.6,Object.assign({k:{rx1:300,ry1:182,rx2:345,ry2:200,n:20}},OUT(20.2))),
 Pp('stamp',640,318,1,17.6,Object.assign({k:{w:440,h:104,col:RED},str:'PAID IN FULL',size:60,r:-.12},OUT(20.2))),
 I('fig',200,420,1.6,16.2,17.4,Object.assign({c:'#f0d7b4'},OUT(20.2))),
 I('card',1060,300,1,18.4,19.2,Object.assign({k:{w:210,h:110}},OUT(20.2))), T('OWED',1060,296,34,18.8,19.4,{col:SOFT,...OUT(20.2)}), T('nothing',1060,344,40,19.1,19.9,{col:RED,...OUT(20.2)}),
 /* 5 · close the five explanations */
 I('board',640,325,2.0,20.4,21.9,OUT(24.4)),
 ...[[-95,-45],[0,-52],[95,-45],[-48,36],[48,36]].map((q,i)=>I('pcard',640+q[0]*2,325+q[1]*2,2,21.4+i*.22,22.0+i*.22,OUT(24.4))),
 ...[[-95,-45,0],[0,-52,1],[95,-45,2],[-48,36,3]].map((q,i)=>I('xmark',640+q[0]*2,325+q[1]*2+4,1,22.5+i*.5,22.85+i*.5,OUT(24.4))),
 I('magnifier',1070,420,1.5,23.3,24.0,OUT(24.4)),
 /* 6 · two locks, a keyword, a question */
 I('lock',230,330,1.5,24.5,25.4,OUT(27.9)), I('lock',420,330,1.5,24.9,25.8,OUT(27.9)),
 I('grid',700,320,1.55,25.1,26.5,OUT(27.9)), I('qmark',1060,310,1.6,26.2,27.3,OUT(27.9)),
 /* the seal */
 Pp('seal',640,300,2.1,28.0,{}),
 T('Mordecai ben Jair',640,520,58,28.4,29.5,{col:INK}), T('Case Supervisor',640,566,28,29.2,29.9,{col:SOFT})
];
/* only ONE picture per scene is drawn line-by-line (the 'hero'); everything else simply appears */
const HERO=it=>it.m==='folder'||it.m==='gate'||(it.m==='ledger'&&it.s===1.9)||it.m==='board'||it.m==='grid';


const PAGES=[
 [.9,5.0,['Every case in this archive is somebody else’s.'],{somebody:RED}],
 [5.5,9.9,['This one is different.','Your name is written in it.'],{different:RED,name:RED}],
 [10.3,15.4,['One command. One breach.','A debt that reaches everybody.'],{command:RED,breach:RED,debt:RED}],
 [16.0,20.0,['Then, on one page: PAID IN FULL —','by someone who owed nothing.'],{paid:RED,full:RED,nothing:RED}],
 [20.5,24.3,['Close the five explanations.','Don’t take my word for any of it.'],{five:RED,word:RED}],
 [24.6,27.7,['Two locks. A keyword you build yourself.','And one question at the end.'],{locks:RED,keyword:RED,question:RED}]
];
const CASE_CUES=[[.15,()=>SF.pad(146.8)],[1.0,'rustle'],[1.8,'thud'],[2.6,'click'],[3.4,'click'],[5.2,'rustle'],[5.5,'page'],[6.0,()=>SF.pad(130.8)],[9.0,'stamp'],[10.0,'rustle'],[11.2,'creak'],[12.0,()=>SF.pad(116.5)],
 [13.9,'stamp'],[14.35,'stamp'],[15.8,'rustle'],[17.6,'stamp'],[17.7,()=>SF.chime(587)],[18.0,()=>SF.pad(146.8,8,.04)],[20.2,'rustle'],[22.5,'xs'],[23.0,'xs'],[23.5,'xs'],[24.0,'xs'],[24.4,'rustle'],[24.9,'clunk'],[25.3,'clunk'],[25.6,()=>SF.pad(110)],
 [26.0,'tick'],[26.2,'tick'],[26.4,'tick'],[28.0,'thud'],[28.1,()=>{SF.chime(392,.16);SF.chime(587,.1)}],[28.6,()=>SF.pad(98,8,.05)]];
