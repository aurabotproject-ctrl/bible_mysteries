//META {"slug":"jm05","kick":"Case JM-05 · The Writing on the Wall","title":"The Writing on the Wall"}
const ITEMS=[
 /* 1 · a thousand nobles, the temple vessels */
 Q(1,'table',640,440,3.2,.3,2.0,{h:1,k:{l:30}}), ...[360,490,620,750,880,1010].map((x,i)=>Q(1,'goblet',x,400,1.1,1.8+i*.2,2.2+i*.2)), Q(1,'crown',640,250,1.4,3.0,3.4),
 /* 2 · a hand writes four words on the plaster wall */
 Q(2,'plaster',560,340,2.5,.3,2.0,{h:1,k:{clean:1}}), Q(2,'hand',960,340,1.7,2.0,2.5), Tx(2,'MENE  MENE',560,330,38,2.4,3.0,{col:RED}), Tx(2,'TEKEL  PARSIN',560,380,38,2.8,3.4,{col:RED}),
 /* 3 · nobody can read it */
 Q(3,'qmark',640,270,2.0,.3,2.0,{h:1}), ...Array.from({length:5},(_,i)=>Q(3,'fig',300+i*170,480,.75,2.0+i*.2,2.4+i*.2)), Q(3,'scroll',470,420,.7,3.0,3.4,{k:{w:100,h:70,lines:3}}),
 /* 4 · by morning the king is dead */
 Q(4,'crown',480,360,2.8,.3,2.0,{h:1}), Q(4,'xmark',480,360,2.8,2.0,2.5), Q(4,'skyline',950,370,1.0,2.4,2.8), Q(4,'sun',1100,230,.8,2.8,3.2),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · the table of weights; the balance scales */
 Q(6,'scales',700,330,1.9,.2,1.9,{h:1,k:{tilt:16}}), Q(6,'htable',280,340,1.2,1.8,2.3,{k:{rows:5,cols:3,hl:1,fill:1}}), Q(6,'lock',1100,350,1.3,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['A thousand nobles at a feast in Babylon.','The king calls for the temple’s gold and silver.'],{thousand:RED,babylon:RED}),
 pg(2,['A hand appears, and writes four words','on the plaster wall.'],{hand:RED,four:RED}),
 pg(3,['Every scholar in Babylon is sent for.','Not one can read it.'],{scholar:RED,read:RED}),
 pg(4,['By morning the king is dead','and the city belongs to somebody else.'],{dead:RED,city:RED}),
 pg(5,['Five explanations. Close the four the documents','won’t carry — the third is the cleverest.'],{five:RED,third:RED}),
 pg(6,['Four words. Every scribe could say them.','Not one could say what they meant.'],{four:RED,meant:RED})
];
