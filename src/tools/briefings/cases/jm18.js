//META {"slug":"jm18","kick":"Case JM-18 · The Contest on Carmel","title":"The Contest on Carmel"}
const ITEMS=[
 /* 1 · three years of drought; a contest on a mountain */
 Q(1,'hills',640,390,1.9,.3,2.0,{h:1,k:{n:2}}), Q(1,'sun',1050,230,1.4,2.0,2.5), Tx(1,'3 years without rain',320,240,38,2.6,3.4,{col:SOFT}),
 /* 2 · one against 450 */
 Q(2,'fig',250,420,1.8,.3,2.0,{h:1}), ...Array.from({length:30},(_,i)=>Q(2,'fig',560+(i%10)*60,390+Math.floor(i/10)*50,.42,1.6+i*.05,2.0+i*.05)), Tx(2,'1',250,255,60,2.2,2.8,{col:BLUE}), Tx(2,'450',850,300,60,2.6,3.2,{col:RED}),
 /* 3 · two altars, one bull each: the answer by fire */
 Q(3,'altar',360,400,1.4,.3,2.0,{h:1}), Q(3,'altar',920,400,1.4,1.9,2.3), Q(3,'flame',640,290,2.2,2.4,2.9),
 /* 4 · every advantage he gives away */
 Q(4,'check',300,250,1.5,.3,1.4,{h:1}), Tx(4,'they choose the bull',700,262,42,1.2,1.9,{col:INK}), Q(4,'check',300,350,1.5,1.7,2.0), Tx(4,'they go first',700,362,42,1.8,2.4,{col:INK}), Q(4,'check',300,450,1.5,2.4,2.7), Tx(4,'all day, till mid-afternoon',700,462,42,2.5,3.1,{col:INK}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · water on the altar, a trench round it */
 Q(6,'altar',640,360,1.7,.2,1.9,{h:1,k:{trench:1}}), Q(6,'jar',250,360,1.3,1.9,2.3), Q(6,'jar',1030,360,1.3,2.1,2.5), Q(6,'drops',640,200,1.5,2.4,2.8,{k:{pts:[[0,0],[30,20],[-30,26],[12,50]]}}),
 ...FIN()
];
const PAGES=[
 pg(1,['After three years of drought, a national contest','is arranged on a mountain top.'],{drought:RED,contest:RED}),
 pg(2,['One prophet on one side;','four hundred and fifty on the other.'],{one:RED,fifty:RED}),
 pg(3,['Two altars, one bull each. The god who','answers by fire is God.'],{altars:RED,fire:RED}),
 pg(4,['He lets them choose the bull, lets them go first,','and gives them all day.'],{choose:RED,first:RED}),
 pg(5,['Five explanations. Not “did it happen” — but','what kind of test was this?'],{five:RED,test:RED}),
 pg(6,['Then he pours water on his own altar,','until a trench round it fills.'],{water:RED,trench:RED})
];
