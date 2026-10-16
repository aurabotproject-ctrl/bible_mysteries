//META {"slug":"jm11","kick":"Case JM-11 · The Cart That Chose Its Own Road","title":"The Cart That Chose Its Own Road"}
const ITEMS=[
 /* 1 · the ark is taken as a trophy */
 Q(1,'ark',640,390,1.9,.3,2.0,{h:1}), Q(1,'soldier',330,390,1.4,2.0,2.4), Q(1,'soldier',950,390,1.4,2.3,2.7),
 /* 2 · Ashdod: trouble */
 Q(2,'columns',500,330,1.4,.3,2.0,{h:1}), Q(2,'ark',500,430,.8,2.0,2.4), Tx(2,'Ashdod',500,195,40,2.2,2.8,{col:SOFT}), Q(2,'xmark',900,350,1.7,2.8,3.2),
 /* 3 · Gath, Ekron: it will not be taken in */
 Q(3,'route',640,250,3.3,.3,1.9,{h:1,k:{noend:1,pts:[[-110,10],[0,-12],[110,10]],all:1}}), Q(3,'hilltown',260,410,.9,1.8,2.2), Q(3,'hilltown',640,410,.9,2.0,2.4), Q(3,'hilltown',1020,410,.9,2.2,2.6),
 Tx(3,'Ashdod',260,495,32,2.4,2.8,{col:SOFT}), Tx(3,'Gath',640,495,32,2.6,3.0,{col:SOFT}), Tx(3,'Ekron',1020,495,32,2.8,3.2,{col:SOFT}),
 /* 4 · seven months; priests design a test */
 Q(4,'calendar',640,340,2.6,.3,2.0,{h:1,k:{days:7,x:[0,1,2,3,4,5],hl:[6]}}), Tx(4,'seven months',640,470,44,2.0,2.8,{col:RED}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · the cart, the cows, the written conditions */
 Q(6,'cart',400,380,1.6,.2,1.9,{h:1}), Q(6,'ox',710,380,1.3,1.8,2.2), Q(6,'scroll',1060,340,1.6,2.1,2.5,{k:{w:130,h:100,lines:5,hl:[2]}}),
 ...FIN()
];
const PAGES=[
 pg(1,['The Philistines beat Israel in the field','and carry off the ark as a trophy.'],{ark:RED,trophy:RED}),
 pg(2,['It goes into the temple at Ashdod.','Within days, Ashdod is in trouble.'],{temple:RED,trouble:RED}),
 pg(3,['They move it to Gath. Gath is in trouble.','Then Ekron — which will not have it in the gate.'],{gath:RED,ekron:RED}),
 pg(4,['Seven months of this. Then their own priests','design a test to settle it.'],{seven:RED,test:RED}),
 pg(5,['Five explanations. Close all five.','Was the test good enough to mean anything?'],{five:RED,test:RED}),
 pg(6,['The priests wrote down their own conditions.','Read them slowly. Almost nobody notices.'],{conditions:RED,slowly:RED})
];
