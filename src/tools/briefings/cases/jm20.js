//META {"slug":"jm20","kick":"Case JM-20 · The Rock at Meribah","title":"The Rock at Meribah"}
const ITEMS=[
 /* 1 · out of water at Kadesh */
 Q(1,'jar',640,350,2.6,.3,2.0,{h:1}), Q(1,'xmark',640,350,2.0,2.0,2.4), Q(1,'tent',250,430,.9,2.2,2.6), Q(1,'tent',1030,430,.9,2.4,2.8), Q(1,'sun',1080,230,1.2,2.6,3.0),
 /* 2 · water from the rock; the herds drink */
 Q(2,'rock',470,370,1.7,.3,2.0,{h:1,k:{water:1}}), Q(2,'ox',880,440,1.0,2.0,2.4), Q(2,'sheep',1050,460,1.0,2.2,2.6), Q(2,'sheep',780,300,.8,2.4,2.8),
 /* 3 · he will not bring them into the land */
 Q(3,'fig',230,420,1.4,.3,.7), Q(3,'route',620,340,2.8,.4,2.0,{h:1,k:{noend:1,pts:[[-110,30],[-50,-10],[20,20],[90,-10]]}}), Q(3,'hills',1050,420,.8,2.1,2.5,{k:{n:1}}), Q(3,'xmark',1050,330,1.3,2.7,3.1),
 /* 4 · sent in again and again: out of proportion? */
 Q(4,'scales',640,340,1.7,.3,2.0,{h:1,k:{tilt:18}}), Tx(4,'fair?',250,300,56,2.2,3.0,{col:RED}), Tx(4,'in proportion?',1030,300,40,2.6,3.4,{col:SOFT}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · two orders, side by side */
 Q(6,'scroll',380,330,1.9,.2,1.9,{h:1,k:{w:130,h:100,lines:4,hl:[1]}}), Q(6,'scroll',900,330,1.9,1.9,2.3,{k:{w:130,h:100,lines:4,hl:[1]}}), Tx(6,'one word',640,470,44,2.4,3.0,{col:RED}),
 ...FIN()
];
const PAGES=[
 pg(1,['A nation is out of water at Kadesh.','There is a rock. There is an order.'],{water:RED,rock:RED}),
 pg(2,['Water comes out of the rock, plentifully,','in front of everybody. The herds drink.'],{water:RED,herds:RED}),
 pg(3,['That same day, the man who produced it is told','he will not bring them into the land.'],{land:RED,told:RED}),
 pg(4,['People send this case in again and again:','the sentence seems out of proportion.'],{proportion:RED,sentence:RED}),
 pg(5,['Five explanations. Before you argue about fairness,','find out precisely what happened.'],{five:RED,precisely:RED}),
 pg(6,['Read the two orders slowly, side by side,','with a finger on each line.'],{orders:RED,line:RED})
];
