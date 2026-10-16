//META {"slug":"jm06","kick":"Case JM-06 · The Walls","title":"The Walls"}
const ITEMS=[
 /* 1 · Jericho, a walled town above the Jordan */
 Q(1,'hilltown',520,360,2.0,.3,2.0,{h:1}), Q(1,'river',1030,330,1.2,2.0,2.4), Q(1,'sun',250,230,.8,2.6,3.0),
 /* 2 · a siege normally takes months */
 Q(2,'calendar',640,330,2.4,.3,2.0,{h:1,k:{days:7,x:[0,1,2,3,4,5,6]}}), Tx(2,'months of siege',640,450,44,2.0,2.8,{col:RED}), Q(2,'tally',640,230,1.0,2.4,2.8,{k:{n:10,col:SOFT}}),
 /* 3 · six days round once; the seventh seven times; one noise */
 Q(3,'march',640,370,2.0,.3,2.0,{h:1,k:{rx:150,ry:55,n:10}}), Q(3,'hilltown',640,360,.7,1.8,2.2), Q(3,'horn',1050,250,.9,2.6,3.0), Tx(3,'6 days',230,230,40,2.2,2.8,{col:SOFT}), Tx(3,'then 7 times',230,280,40,2.5,3.1,{col:RED}),
 /* 4 · the wall came down */
 Q(4,'horn',640,260,1.5,.3,2.0,{h:1}), Q(4,'wall',420,420,1.6,1.8,2.2), Q(4,'rubble',860,430,1.5,2.2,2.6),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · rubble is honest */
 Q(6,'htable',360,330,1.5,.2,1.9,{h:1,k:{rows:6,cols:4,hl:1,fill:1}}), Q(6,'rubble',900,430,1.5,1.8,2.2), Q(6,'arrow',900,300,1.2,2.2,2.6,{k:{l:140}}),
 ...FIN()
];
const PAGES=[
 pg(1,['Jericho: a walled town on a mound','above the Jordan, first in the way.'],{jericho:RED,walled:RED}),
 pg(2,['Normally this takes months: siege works,','starvation, ladders, and many dead.'],{months:RED,dead:RED}),
 pg(3,['Six days: once round the city, in silence.','The seventh: seven times — and one noise.'],{silence:RED,seven:RED}),
 pg(4,['The wall came down.','That is not the strange part.'],{wall:RED,strange:RED}),
 pg(5,['Five explanations. Four are the sensible ones','an engineer would reach for.'],{five:RED,engineer:RED}),
 pg(6,['Rubble is honest. It lies where it fell.','Which way — and what stands — decides it.'],{honest:RED,way:RED})
];
