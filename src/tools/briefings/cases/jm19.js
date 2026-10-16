//META {"slug":"jm19","kick":"Case JM-19 · The Broken Riddle","title":"The Broken Riddle"}
const ITEMS=[
 /* 1 · wedding feast at Timnah */
 Q(1,'table',640,420,3.0,.3,1.9,{h:1,k:{l:30}}), Q(1,'goblet',430,380,1.0,1.8,2.2), Q(1,'goblet',560,382,1.0,2.0,2.4), Q(1,'loaf',700,395,.9,2.3,2.7), Q(1,'goblet',830,382,1.0,2.5,2.9), Q(1,'bubble',1100,230,.8,3.0,3.4,{k:{w:150,h:70,lines:2}}),
 /* 2 · the riddle, the wager, thirty garments */
 Q(2,'scroll',420,330,1.8,.3,1.9,{h:1,k:{w:130,h:100,lines:4,hl:[1]}}), Tx(2,'?',420,255,70,1.7,2.3,{col:RED}), Q(2,'garment',700,330,1.2,2.2,2.6,{c:'#c9b6d6'}), Q(2,'garment',800,330,1.2,2.4,2.8,{c:'#9fc2b0'}), Q(2,'garment',900,330,1.2,2.6,3.0,{c:'#d6b88a'}), Tx(2,'30 changes of clothes',800,460,36,3.0,3.9,{col:SOFT}),
 /* 3 · three days of nothing, then the seventh, the light going, perfect answer */
 Q(3,'calendar',640,360,1.6,.3,2.0,{h:1,k:{days:7,x:[0,1,2,3,4,5],hl:[6]}}), Q(3,'sunset',640,230,.9,2.3,2.8), Tx(3,'the answer — perfectly',640,500,40,3.0,4.0,{col:RED}),
 /* 4 · impossible: a private thing, no one else there */
 Q(4,'fig',380,420,1.5,.3,2.0,{h:1}), Q(4,'ear',900,330,1.4,2.1,2.5), Q(4,'xmark',640,330,2.4,2.6,3.0), Tx(4,'one man. no one else there.',640,540,36,3.0,3.9,{col:SOFT}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · four-digit code, a keyword you build yourself */
 Q(6,'lock',300,350,2.0,.2,1.8,{k:{}}), Q(6,'grid',690,330,1.9,.2,2.0,{h:1}), Q(6,'qmark',1060,330,1.6,2.3,2.8), Tx(6,'four digits',300,480,32,2.0,2.6,{col:SOFT}), Tx(6,'a keyword you build',730,500,32,2.2,2.8,{col:RED}),
 ...FIN()
];
const PAGES=[
 pg(1,['A wedding feast at Timnah.','Seven days, and a riddle to start it.'],{riddle:RED,timnah:RED}),
 pg(2,['The bridegroom stakes expensive cloth','on a riddle nobody can solve.'],{cloth:RED,riddle:RED}),
 pg(3,['Three days: nothing. On the seventh,','the light going — the perfect answer.'],{seventh:RED,perfect:RED}),
 pg(4,['That should not have been possible.','One private thing. No one else there.'],{possible:RED,private:RED}),
 pg(5,['Five explanations. Work out how','the answer got out.'],{five:RED,out:RED}),
 pg(6,['A secret has no legs.','If it moved, somebody carried it.'],{legs:RED,carried:RED})
];
