//META {"slug":"jm13","kick":"Case JM-13 · The Twelve Reports","title":"The Twelve Reports"}
const ITEMS=[
 /* 1 · twelve men survey Canaan, forty days */
 Q(1,'hills',640,370,1.9,.3,2.0,{h:1,k:{n:3}}), ...Array.from({length:12},(_,i)=>Q(1,'fig',190+i*82,500,.5,2.0+i*.14,2.4+i*.14,{c:['#e8c9a0','#d9b48a','#f0d7b4'][i%3]})),
 /* 2 · the grapes */
 Q(2,'carry',640,350,1.5,.3,2.0,{h:1}), Tx(2,'one bunch',640,500,40,2.2,3.0,{col:SOFT}),
 /* 3 · the report splits: ten against two */
 Q(3,'scales',640,330,1.4,.3,1.9,{h:1,k:{tilt:14}}), ...Array.from({length:10},(_,i)=>Q(3,'fig',140+(i%5)*70,400+Math.floor(i/5)*80,.6,1.8+i*.12,2.2+i*.12)), Q(3,'fig',1010,430,1.0,3.0,3.4), Q(3,'fig',1100,430,1.0,3.2,3.6), Tx(3,'ten',280,300,44,2.6,3.2,{col:RED}), Tx(3,'two',1055,300,44,3.2,3.8,{col:BLUE}),
 /* 4 · put the two reports side by side */
 Q(4,'scroll',380,330,1.9,.3,1.9,{h:1,k:{w:130,h:100,lines:5}}), Q(4,'scroll',900,330,1.9,1.9,2.3,{k:{w:130,h:100,lines:5}}), Tx(4,'=',640,350,100,2.3,2.8,{col:RED}), Tx(4,'same facts',640,470,40,2.7,3.4,{col:SOFT}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · what separates them is not a fact */
 Q(6,'htable',560,340,1.5,.2,1.9,{h:1,k:{rows:5,cols:3,hl:2,fill:1}}), Q(6,'lock',1000,330,1.5,2.0,2.4), Q(6,'qmark',1130,340,1.1,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['Twelve men are sent to survey Canaan,','one from each tribe. Forty days.'],{twelve:RED,forty:RED}),
 pg(2,['They return carrying a single bunch of grapes','so heavy it hangs from a pole.'],{grapes:RED,heavy:RED}),
 pg(3,['The report splits. Ten say it cannot be taken.','Two say it can. The assembly believes the ten.'],{ten:RED,two:RED}),
 pg(4,['Put the two reports side by side.','Not one fact differs.'],{side:RED,fact:RED}),
 pg(5,['Five explanations — four assume somebody','was lying, mistaken, or following orders.'],{five:RED,lying:RED}),
 pg(6,['So what actually separates the two reports?','It is not a fact.'],{separates:RED,fact:RED})
];
