//META {"slug":"jm09","kick":"Case JM-09 · The Mouldy Bread","title":"The Mouldy Bread"}
const ITEMS=[
 /* 1 · a delegation from a "distant country" */
 Q(1,'route',560,400,2.9,.3,2.0,{h:1,k:{noend:1,pts:[[-110,20],[-50,-20],[10,20],[70,-15],[110,10]]}}), ...[900,960,1020].map((x,i)=>Q(1,'fig',x,400,.95,2.0+i*.25,2.4+i*.25)), Q(1,'tent',1120,410,.8,2.8,3.2),
 /* 2 · the props */
 Q(2,'wineskin',260,350,1.3,.3,1.9,{h:1}), Q(2,'sack',500,355,1.3,1.8,2.2), Q(2,'sandal',770,360,1.3,2.0,2.4), Q(2,'bread',1020,350,1.3,2.2,2.6),
 /* 3 · a treaty sworn on oath */
 Q(3,'scroll',480,340,2.2,.3,2.0,{h:1,k:{w:130,h:100,lines:5}}), Q(3,'fig',880,400,1.1,2.0,2.4), Q(3,'fig',990,400,1.1,2.2,2.6), Pq(3,'stamp',480,340,1,3.0,{k:{w:230,h:56,col:RED},str:'SWORN',size:30,r:-.12}),
 /* 4 · three days later: four cities a day's walk away */
 Q(4,'hilltown',230,390,.9,.3,1.9,{h:1}), Q(4,'hilltown',500,390,.9,1.9,2.3), Q(4,'hilltown',770,390,.9,2.1,2.5), Q(4,'hilltown',1040,390,.9,2.3,2.7), Tx(4,'three days later',640,230,44,2.6,3.4,{col:RED}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · look at the props properly */
 Q(6,'magnifier',520,340,2.5,.2,1.9,{h:1}), Q(6,'sandal',860,350,1.2,1.8,2.2), Q(6,'lock',1100,340,1.4,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['A delegation arrives at the camp, saying they','come from a very distant country.'],{distant:RED,delegation:RED}),
 pg(2,['Split wineskins, a torn sack, sandals worn through,','and bread gone dry in the bag.'],{wineskins:RED,bread:RED}),
 pg(3,['They ask for a treaty — and get one,','sworn on oath by the leaders of Israel.'],{treaty:RED,oath:RED}),
 pg(4,['Three days later: they live a day’s walk away.','Four cities. Israel has sworn never to touch them.'],{walk:RED,four:RED}),
 pg(5,['Five explanations. The question is how','a careful people signed anyway.'],{five:RED,careful:RED}),
 pg(6,['Look at the props properly first.','Nobody here lies about anything but distance.'],{props:RED,distance:RED})
];
