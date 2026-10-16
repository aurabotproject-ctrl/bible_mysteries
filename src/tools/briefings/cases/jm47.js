//META {"slug":"jm47","kick":"Case JM-47 · The Leak","title":"The Leak"}
const ITEMS=[
 /* 1 · Aram and Israel at war: border raiding */
 Q(1,'hills',640,380,2.0,.3,2.0,{h:1,k:{n:3}}), Q(1,'tent',250,430,.9,1.9,2.4), Q(1,'tent',1030,430,.9,2.3,2.8), Q(1,'soldier',470,400,1.2,2.9,3.3), Q(1,'soldier',810,400,1.2,3.1,3.5),
 /* 2 · the king of Aram plans ambushes by night */
 Q(2,'moon',1030,230,1.5,.3,.8), Q(2,'stars',860,200,1,.8,1.2), Q(2,'crown',330,260,1.7,.4,.9), Q(2,'route',760,400,2.1,.6,2.2,{h:1,k:{pts:[[-110,40],[-30,-20],[50,30],[130,-10]]}}), ...Array.from({length:4},(_,i)=>Q(2,'soldier',220+i*60,455,.9,2.3+i*.2,2.7+i*.2)),
 /* 3 · five ambushes, five times Israel did not come */
 Q(3,'tally',640,330,2.6,.3,2.0,{h:1,k:{n:5,col:RED}}), Tx(3,'5 ambushes',640,230,50,1.5,2.4,{col:INK}), Tx(3,'0 trapped',640,470,50,2.4,3.1,{col:RED}),
 /* 4 · the king suspects a traitor in the room */
 Q(4,'table',640,430,2.4,.2,.6,{k:{l:30}}), ...[300,420,540,740,860,980].map((x,i)=>Q(4,'fig',x,370,.8,.5+i*.2,1.0+i*.2,{c:['#e8c9a0','#d9b48a','#f0d7b4'][i%3]})), Q(4,'ear',640,215,1.0,2.1,2.8,{h:1}),
 /* 5 · five explanations, the obvious suspect */
 ...BOARD(5,.2),
 /* 6 · a leak is a route */
 Q(6,'route',640,360,2.9,.2,2.0,{h:1,k:{pts:[[-110,30],[-40,-30],[30,20],[110,-20]]}}), Q(6,'ear',280,330,1.0,1.4,1.8), Q(6,'tent',1000,350,.9,1.8,2.2), Tx(6,'a leak is a route',640,500,44,2.4,3.4,{col:RED}),
 ...FIN()
];
const PAGES=[
 pg(1,['Aram and Israel are at war —','raiding columns out of the hills.'],{war:RED,hills:RED}),
 pg(2,['The king of Aram lays his ambushes','quietly, and sends his men by night.'],{king:RED,night:RED}),
 pg(3,['Five ambushes. Five times','Israel simply did not come.'],{five:RED,'not':RED}),
 pg(4,['Somebody in that room is talking.','The king means to find the man.'],{somebody:RED,talking:RED}),
 pg(5,['Five explanations. The obvious suspect','is how investigations go wrong.'],{obvious:RED,wrong:RED}),
 pg(6,['A leak is not a person.','A leak is a route.'],{route:RED,leak:RED})
];
