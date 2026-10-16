//META {"slug":"jm16","kick":"Case JM-16 · The Bread on the Ground","title":"The Bread on the Ground"}
const ITEMS=[
 /* 1 · dawn: a substance on the ground */
 Q(1,'flakes',640,430,2.4,.3,2.0,{h:1,k:{n:34}}), Q(1,'sunset',640,260,1.7,2.0,2.6),
 /* 2 · gather, grind, bake */
 Q(2,'flakes',250,380,1.0,.2,.6,{k:{n:12}}), Q(2,'arrow',420,350,1.0,.6,1.0,{k:{l:90}}), Q(2,'jar',570,340,1.2,.9,1.3), Q(2,'arrow',730,350,1.0,1.2,1.6,{k:{l:90}}), Q(2,'loaf',900,340,2.0,.3,2.0,{h:1}),
 /* 3 · forty years */
 Q(3,'tally',640,320,1.9,.3,2.0,{h:1,k:{n:40,col:INK,per:20}}), Tx(3,'forty years',640,470,50,2.1,3.0,{col:RED}),
 /* 4 · five natural candidates */
 Q(4,'tree',190,350,1.0,.3,1.9,{h:1}), Q(4,'cloud',415,330,1.3,1.8,2.2), Q(4,'route',640,350,.8,2.0,2.4,{k:{noend:1,pts:[[-110,20],[-30,-20],[40,15],[110,-10]]}}), Q(4,'sack',865,350,1.2,2.2,2.6), Q(4,'scroll',1090,340,1.2,2.4,2.8,{k:{w:110,h:90,lines:4}}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · the seventh day: every one stops fitting */
 Q(6,'calendar',640,330,2.7,.2,1.9,{h:1,k:{days:7,dots:[1,1,1,1,1,2,0],x:[6],hl:[5]}}), Tx(6,'day 7',640,455,44,2.0,2.7,{col:RED}),
 ...FIN()
];
const PAGES=[
 pg(1,['At dawn, a substance lies on the ground','in the wilderness.'],{dawn:RED,ground:RED}),
 pg(2,['The people gather it, grind it, bake it,','and live on it.'],{gather:RED,live:RED}),
 pg(3,['This goes on for forty years.','The natural candidates are taken seriously.'],{forty:RED,natural:RED}),
 pg(4,['A tree secretion. Wind-blown lichen. Trade.','Supplies from Egypt. A story tidied up later.'],{tree:RED,story:RED}),
 pg(5,['Five explanations. Every one fits the data','reasonably well — three are genuinely good.'],{five:RED,good:RED}),
 pg(6,['Then you reach the seventh day,','and every one stops fitting at once.'],{seventh:RED,fitting:RED})
];
