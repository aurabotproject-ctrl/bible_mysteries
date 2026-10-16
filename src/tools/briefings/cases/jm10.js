//META {"slug":"jm10","kick":"Case JM-10 · The Ten Blows","title":"The Ten Blows"}
const ITEMS=[
 /* 1 · ten calamities in one year */
 Q(1,'tally',640,205,1.6,.3,2.0,{h:1,k:{n:10,col:RED}}), ...Array.from({length:10},(_,i)=>Q(1,'plague',250+(i%5)*195,325+Math.floor(i/5)*140,1.3,1.4+i*.22,1.8+i*.22,{k:{i}})),
 /* 2 · any one is a bad year; together, a cascade? */
 Q(2,'route',640,350,3.1,.3,2.0,{h:1,k:{noend:1,pts:[[-110,10],[-55,-15],[0,10],[55,-15],[110,10]],all:1}}), Tx(2,'a cascade?',640,250,50,2.0,2.8,{col:RED}), Tx(2,'or something else',640,470,40,2.5,3.3,{col:SOFT}),
 /* 3 · Egyptian records say nothing */
 Q(3,'scroll',470,340,2.2,.3,1.9,{h:1,k:{w:130,h:100,lines:0}}), Tx(3,'no mention',470,350,36,1.8,2.4,{col:SOFT}), Q(3,'qmark',880,330,1.7,2.0,2.5),
 /* 4 · regional reports: hit and spared */
 Q(4,'map',640,330,1.15,.3,2.0,{h:1,k:{w:420,h:240}}), Q(4,'river',640,330,.9,1.8,2.3), Q(4,'house',500,350,.9,2.2,2.6,{k:{flat:1}}), Q(4,'house',790,350,.9,2.4,2.8,{k:{flat:1}}), Q(4,'xmark',500,265,.9,2.7,3.1), Q(4,'check',790,265,.9,3.0,3.4),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · the pattern chart */
 Q(6,'htable',560,340,1.6,.2,1.9,{h:1,k:{rows:6,cols:4,hl:3,fill:1}}), Q(6,'lock',1000,330,1.5,2.0,2.4), Q(6,'qmark',1130,340,1.1,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['Ten calamities strike Egypt in one year:','the river, frogs, lice… to the firstborn.'],{ten:RED,calamities:RED}),
 pg(2,['Any one is a bad year in the delta.','All ten, in sequence: a cascade — or not.'],{cascade:RED,sequence:RED}),
 pg(3,['The Egyptian records say nothing.','So it did not happen? Test that argument.'],{nothing:RED,test:RED}),
 pg(4,['The regional reports are the heart of it.','A cascade goes where physics takes it.'],{cascade:RED,physics:RED}),
 pg(5,['Five explanations. Four fail on the documents.','Watch the third: “the records say nothing”.'],{five:RED,third:RED}),
 pg(6,['Find the point where the cascade stops working,','and be precise about which fact does it.'],{point:RED,fact:RED})
];
