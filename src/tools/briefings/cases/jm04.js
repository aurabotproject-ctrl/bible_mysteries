//META {"slug":"jm04","kick":"Case JM-04 · The Judgment","title":"The Judgment"}
const ITEMS=[
 /* 1 · two women share a house */
 Q(1,'house',640,370,2.2,.3,2.0,{h:1}), Q(1,'fig',300,470,1.0,2.0,2.4), Q(1,'fig',980,470,1.0,2.3,2.7), Q(1,'cradle',450,490,.7,2.7,3.1), Q(1,'cradle',830,490,.7,3.0,3.4),
 /* 2 · in the night one baby dies; in the morning both claim the living one */
 Q(2,'moon',640,200,1.2,.3,.8), Q(2,'cradle',640,390,1.9,.5,2.2,{h:1}), Q(2,'bubble',300,300,1.0,2.2,2.6,{k:{w:170,h:70,lines:2}}), Q(2,'bubble',980,300,1.0,2.5,2.9,{k:{w:170,h:70,lines:2}}),
 /* 3 · nobody saw: no witness, no record, no detail */
 Q(3,'fig',280,330,1.3,.3,2.0,{h:1}), Q(3,'scroll',640,330,1.5,1.8,2.2), Q(3,'magnifier',990,330,1.3,2.0,2.4), Q(3,'xmark',280,330,1.6,2.4,2.8), Q(3,'xmark',640,330,1.6,2.7,3.1), Q(3,'xmark',990,330,1.6,3.0,3.4),
 Tx(3,'no witness',280,470,32,2.6,3.0,{col:SOFT}), Tx(3,'no record',640,470,32,2.9,3.3,{col:SOFT}), Tx(3,'no detail',990,470,32,3.2,3.6,{col:SOFT}),
 /* 4 · two claims perfectly matched */
 Q(4,'scroll',380,330,1.9,.3,1.9,{h:1,k:{w:130,h:100,lines:4}}), Q(4,'scroll',900,330,1.9,1.9,2.3,{k:{w:130,h:100,lines:4}}), Tx(4,'=',640,350,100,2.3,2.8,{col:RED}),
 /* 5 · five ways out */
 ...BOARD(5,.2),
 /* 6 · look at what the king actually did */
 Q(6,'crown',720,320,2.7,.2,1.9,{h:1}), Q(6,'htable',300,330,1.2,1.8,2.3,{k:{rows:5,cols:3,hl:1,fill:1}}),
 ...FIN()
];
const PAGES=[
 pg(1,['Two women share a house.','Each has an infant son, born three days apart.'],{house:RED,son:RED}),
 pg(2,['One night, one of the babies dies.','Next morning, both claim the living child.'],{night:RED,claim:RED}),
 pg(3,['Nobody saw anything. No document, no mark,','no possession, no third account.'],{nobody:RED,account:RED}),
 pg(4,['Two claims, perfectly matched —','nothing whatever to weigh them against.'],{matched:RED,nothing:RED}),
 pg(5,['Five ways out. Four are the usual ways','to break a deadlock. The file will not carry them.'],{five:RED,deadlock:RED}),
 pg(6,['Close them. Then look honestly','at what the king actually did.'],{close:RED,king:RED})
];
