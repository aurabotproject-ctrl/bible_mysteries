//META {"slug":"jm15","kick":"Case JM-15 · The Witnesses Who Would Not Agree","title":"The Witnesses Who Would Not Agree"}
const ITEMS=[
 /* 1 · a council sits at night */
 Q(1,'table',640,430,3.0,.3,2.0,{h:1,k:{l:30}}), ...Array.from({length:7},(_,i)=>Q(1,'fig',300+i*115,385,.85,2.0+i*.15,2.4+i*.15,{c:['#e8c9a0','#d9b48a','#f0d7b4'][i%3]})), Q(1,'moon',1100,230,1.3,2.0,2.4),
 /* 2 · two agreeing witnesses */
 Q(2,'scroll',640,300,1.9,.3,2.0,{h:1,k:{w:130,h:100,lines:4,hl:[1]}}), Q(2,'fig',380,440,1.1,2.0,2.4), Q(2,'fig',900,440,1.1,2.2,2.6), Tx(2,'2',640,305,70,2.6,3.2,{col:RED}),
 /* 3 · several witnesses; no two match */
 Q(3,'temple',300,340,1.0,.3,1.9,{h:1}), Q(3,'scroll',640,330,1.2,1.8,2.2,{k:{w:110,h:90,lines:3}}), Q(3,'scroll',830,330,1.2,2.0,2.4,{k:{w:110,h:90,lines:4}}), Q(3,'scroll',1020,330,1.2,2.2,2.6,{k:{w:110,h:90,lines:5}}), Tx(3,'≠',735,335,64,2.6,3.0,{col:RED}), Tx(3,'≠',925,335,64,2.8,3.2,{col:RED}),
 /* 4 · the case collapses; the Roman governor */
 Q(4,'eagle',810,350,1.7,.3,2.0,{h:1}), Q(4,'scroll',400,330,1.6,2.0,2.4,{k:{w:130,h:100,lines:4}}), Q(4,'xmark',400,330,1.8,2.6,3.0),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · testimony grid */
 Q(6,'htable',540,340,1.5,.2,1.9,{h:1,k:{rows:5,cols:3,hl:1,fill:1}}), Q(6,'scales',940,340,1.0,1.9,2.3,{k:{tilt:0}}), Q(6,'lock',1180,360,1.1,2.3,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['A council sits at night','to hear a capital charge.'],{night:RED,capital:RED}),
 pg(2,['Its own law needs two witnesses whose accounts','agree. Anything less, and the case fails.'],{two:RED,agree:RED}),
 pg(3,['Several witnesses describe the same sentence,','about the temple. No two statements match.'],{temple:RED,match:RED}),
 pg(4,['The case collapses on its own evidence.','What reaches the Roman governor comes from elsewhere.'],{collapses:RED,roman:RED}),
 pg(5,['Five explanations. This file is about procedure,','not about a people.'],{five:RED,procedure:RED}),
 pg(6,['A prosecution that could not make two accounts match','tells you something about accounts that do.'],{accounts:RED,match:RED})
];
