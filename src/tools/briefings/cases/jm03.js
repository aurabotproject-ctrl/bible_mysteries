//META {"slug":"jm03","kick":"Case JM-03 · The Bush That Would Not Burn","title":"The Bush That Would Not Burn"}
const ITEMS=[
 /* 1 · exiled prince turned shepherd, flock on the mountain */
 Q(1,'hills',640,380,2.0,.3,2.0,{h:1,k:{n:3}}), Q(1,'shep',330,420,1.5,2.0,2.4), Q(1,'sheep',480,500,1.0,2.3,2.7), Q(1,'sheep',590,515,1.0,2.5,2.9), Q(1,'sheep',700,500,1.0,2.7,3.1),
 /* 2 · a bush burning */
 Q(2,'bush',640,350,2.3,.3,2.2,{h:1,k:{fire:1}}), Q(2,'shep',250,430,1.2,2.2,2.6), Q(2,'sun',1100,230,.8,2.4,2.8),
 /* 3 · burning — and not consumed */
 Q(3,'card',400,340,1.5,.2,.6,{k:{w:260,h:110}}), Tx(3,'on fire',400,355,44,.5,.9,{col:SOFT}), Q(3,'xmark',400,340,1.6,1.0,1.4), Q(3,'card',880,340,1.5,.3,1.9,{h:1,k:{w:300,h:110}}), Tx(3,'not consumed',880,355,44,1.8,2.6,{col:RED}),
 /* 4 · the site was surveyed */
 Q(4,'scroll',470,340,2.1,.3,2.0,{h:1,k:{w:130,h:100,lines:5,hl:[2]}}), Q(4,'magnifier',850,350,1.9,2.0,2.5), Q(4,'hills',1090,330,.5,2.4,2.8,{k:{n:2}}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · what does each explanation predict? */
 Q(6,'htable',600,340,1.5,.2,1.9,{h:1,k:{rows:6,cols:4,hl:2,fill:1}}), Q(6,'lock',1010,320,1.5,2.0,2.4), Q(6,'qmark',1130,340,1.1,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['An exiled Egyptian prince, now a shepherd,','takes his flock up the mountain.'],{shepherd:RED,mountain:RED}),
 pg(2,['He sees a bush burning,','and turns aside to look.'],{burning:RED,aside:RED}),
 pg(3,['Any shepherd sees a bush on fire.','He said: burning, and not consumed.'],{consumed:RED,fire:RED}),
 pg(4,['The site was surveyed.','The report is on your desk.'],{surveyed:RED,report:RED}),
 pg(5,['Five explanations. Four are ordinary,','and one is not. Close the four.'],{ordinary:RED,one:RED}),
 pg(6,['Every explanation predicts something.','Ask what — then go and look.'],{predicts:RED,look:RED})
];
