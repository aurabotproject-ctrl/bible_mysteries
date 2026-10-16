//META {"slug":"jm02","kick":"Case JM-02 · The Missing Boy","title":"The Missing Boy"}
const ITEMS=[
 /* 1 · Nazareth to Jerusalem for the festival */
 Q(1,'route',640,420,2.7,.3,2.0,{h:1,k:{noend:1,pts:[[-110,20],[-40,-20],[30,20],[100,-10]]}}), Q(1,'house',230,330,1.0,1.8,2.2), Q(1,'skyline',1020,330,1.0,2.0,2.4), Q(1,'fig',480,370,.9,2.6,3.0), Q(1,'fig',540,370,.9,2.7,3.1), Q(1,'fig',600,385,.62,2.8,3.2),
 /* 2 · the city is full */
 Q(2,'skyline',640,300,1.5,.3,2.0,{h:1}), ...Array.from({length:24},(_,i)=>Q(2,'fig',140+(i%12)*90+(i>11?45:0),462+Math.floor(i/12)*60,.42,1.6+i*.07,2.0+i*.07,{c:['#e8c9a0','#d9b48a','#f0d7b4'][i%3]})),
 /* 3 · a full day out: the boy is not with the company */
 Q(3,'qmark',640,250,1.7,.3,1.9,{h:1}), ...Array.from({length:6},(_,i)=>Q(3,'fig',230+i*100,470,.6,1.8+i*.15,2.2+i*.15)), Q(3,'fig',830,470,.42,3.0,3.4,{c:'#f0d7b4'}),
 /* 4 · three days */
 Q(4,'calendar',640,340,2.8,.3,2.0,{h:1,k:{days:3,x:[0,1],hl:[2]}}), Q(4,'sun',300,210,.9,1.8,2.2), Q(4,'moon',980,210,.9,2.2,2.6),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · a search is a list of places, in an order */
 Q(6,'map',540,340,1.25,.2,1.9,{h:1}), Q(6,'route',540,340,1.2,1.7,2.3,{k:{pts:[[-150,40],[-80,-30],[0,20],[80,-40],[150,10]],all:1}}), Q(6,'lock',1030,340,1.8,2.2,2.6),
 ...FIN()
];
const PAGES=[
 pg(1,['A family from Nazareth goes up to Jerusalem','for the festival, as they do every year.'],{nazareth:RED,festival:RED}),
 pg(2,['The city is four or five times its usual size.','When the feast ends, they set out for home.'],{size:RED,home:RED}),
 pg(3,['A full day out, they find their twelve-year-old','is not with the company. They turn round.'],{twelve:RED,turn:RED}),
 pg(4,['It takes three days to find him.','Three days is a very long time.'],{three:RED,long:RED}),
 pg(5,['Five explanations for those three days.','The file is unusually kind to everybody in it.'],{five:RED,kind:RED}),
 pg(6,['A search is a list of places, in an order.','Somebody chose that order.'],{places:RED,order:RED})
];
