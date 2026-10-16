//META {"slug":"jm33","kick":"Case JM-33 · The Empty Tomb","title":"The Empty Tomb"}
const ITEMS=[
 /* 1 · Friday: buried before sunset */
 Q(1,'tomb',520,400,1.3,.3,2.1,{h:1}), Q(1,'sunset',1030,330,1.5,1.9,2.4), Q(1,'stars',1030,200,1,2.8,3.2,{k:{pts:[[0,0],[50,-14],[-46,12],[90,20]]}}),
 /* 2 · Saturday: sealed, watch posted */
 Q(2,'tomb',520,400,1.3,.2,.6,{k:{seal:1}}), Q(2,'soldier',930,370,1.7,.5,2.1,{h:1}), Q(2,'soldier',1070,372,1.7,2.1,2.6), Pq(2,'stamp',520,250,1,2.9,{k:{w:250,h:60,col:RED},str:'SEALED',size:30,r:-.1}),
 /* 3 · Sunday: stone rolled back, empty */
 Q(3,'tomb',560,400,1.5,.3,2.1,{h:1,k:{open:1}}), Q(3,'sun',1090,240,1.3,2.0,2.5), Tx(3,'EMPTY',545,500,40,2.6,3.4,{col:'#f0e0c0'}),
 /* 4 · seven weeks: followers say he is alive, in the same city */
 Q(4,'skyline',640,320,1.35,.3,2.0,{h:1}), ...Array.from({length:7},(_,i)=>Q(4,'fig',250+i*130,505,.55,2.0+i*.17,2.5+i*.17,{c:['#e8c9a0','#d9b48a','#f0d7b4'][i%3]})), Q(4,'bubble',1090,215,1,2.4,2.9,{k:{w:170,h:70,lines:2}}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · two locks, the codes are in the documents */
 Q(6,'lock',380,340,2.1,.2,1.8,{h:1}), Q(6,'lock',640,340,2.1,1.6,2.0), Q(6,'scroll',930,330,1.7,2.1,2.6,{k:{w:130,h:100,lines:5,hl:[2]}}), Tx(6,'?',1130,330,90,2.4,2.9,{col:RED}),
 ...FIN()
];
const PAGES=[
 pg(1,['Friday. A man is buried before sunset','in a tomb cut into rock.'],{friday:RED,buried:RED}),
 pg(2,['Saturday: the tomb is sealed by Roman order.','A watch of soldiers is posted.'],{sealed:RED,watch:RED}),
 pg(3,['Sunday morning: the stone is rolled back.','The tomb is empty.'],{empty:RED,sunday:RED}),
 pg(4,['Within seven weeks, in that same city,','his followers say: he is alive.'],{alive:RED,seven:RED}),
 pg(5,['Five explanations for the empty tomb.','Throw out the ones that cannot survive.'],{five:RED,survive:RED}),
 pg(6,['Two locks. The codes are in your file.','Whatever is left standing is your answer.'],{locks:RED,standing:RED})
];
