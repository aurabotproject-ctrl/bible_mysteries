//META {"slug":"jm14","kick":"Case JM-14 · The Crossing","title":"The Crossing"}
const ITEMS=[
 /* 1 · camped by deep water; mountains one side, the army behind */
 Q(1,'hills',270,390,1.2,.3,2.0,{h:1,k:{n:2}}), Q(1,'tent',560,430,.8,1.8,2.2), Q(1,'tent',650,430,.8,2.0,2.4), Q(1,'tent',740,430,.8,2.2,2.6), Q(1,'waves',920,450,1.0,2.2,2.6,{k:{w:300,n:4}}), Q(1,'chariot',1080,300,.9,2.6,3.0), Q(1,'dust',1130,340,.7,2.8,3.2),
 /* 2 · dusk to dawn */
 Q(2,'moon',330,300,2.0,.3,1.9,{h:1}), Q(2,'arrow',640,310,1.2,1.8,2.2,{k:{l:200}}), Q(2,'sun',950,300,1.6,2.2,2.6),
 /* 3 · reconstruct the route */
 Q(3,'waves',640,450,1.6,.2,.6,{k:{w:300,n:3}}), Q(3,'route',640,330,2.9,.5,2.2,{h:1,k:{noend:1,pts:[[-110,30],[-55,-10],[0,15],[55,-15],[110,10]]}}), Q(3,'tent',230,410,.8,2.2,2.6), Q(3,'hills',1060,420,.6,2.4,2.8,{k:{n:1}}),
 /* 4 · where exactly? the survey */
 Q(4,'map',470,340,1.15,.2,.6), Q(4,'route',470,340,1.0,.5,.9,{k:{noend:1,pts:[[-140,30],[-60,-20],[30,20],[120,-10]]}}), Q(4,'magnifier',820,350,2.0,.3,2.0,{h:1}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · be fair to the sceptical explanations */
 Q(6,'route',560,340,3.0,.2,1.9,{h:1,k:{noend:1,pts:[[-110,20],[-45,-15],[25,15],[110,-15]],all:1}}), Q(6,'lock',1030,330,1.5,1.9,2.3), Q(6,'qmark',1150,340,1.1,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['A column of many thousands is camped by deep water:','mountains one side, the fastest army behind.'],{water:RED,army:RED}),
 pg(2,['That is the position at dusk.','By dawn the column is on the far shore.'],{dusk:RED,dawn:RED}),
 pg(3,['The Bureau is not asking what the water did.','It is asking you to reconstruct the route.'],{route:RED,water:RED}),
 pg(4,['Where exactly did they cross? Does any ordinary','explanation survive contact with the ground?'],{exactly:RED,ground:RED}),
 pg(5,['Five explanations. Four are sensible and sceptical.','Three are reasonable until you measure something.'],{five:RED,measure:RED}),
 pg(6,['Be fair to the sceptical explanations.','Then say what the evidence actually supports.'],{fair:RED,evidence:RED})
];
