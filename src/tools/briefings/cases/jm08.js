//META {"slug":"jm08","kick":"Case JM-08 · The Stolen Plunder","title":"The Stolen Plunder"}
const ITEMS=[
 /* 1 · Jericho falls under a ban */
 Q(1,'wall',470,355,1.9,.3,2.0,{h:1}), Q(1,'scroll',900,330,1.7,2.0,2.5,{k:{w:130,h:100,lines:4}}), Pq(1,'stamp',900,330,1,3.0,{k:{w:200,h:52,col:RED},str:'THE BAN',size:28,r:-.12}),
 /* 2 · everything to the treasury; every officer signed */
 Q(2,'chest',640,400,2.2,.3,2.0,{h:1,k:{coins:1}}), Q(2,'scroll',290,330,1.4,2.0,2.4,{k:{w:130,h:100,lines:4}}), ...[1000,1070,1140].map((x,i)=>Q(2,'fig',x,400,.9,2.2+i*.3,2.6+i*.3)),
 /* 3 · Ai: a small hill town, three thousand men */
 Q(3,'hilltown',460,350,1.9,.3,2.0,{h:1}), ...Array.from({length:6},(_,i)=>Q(3,'soldier',780+(i%3)*100,380+Math.floor(i/3)*10,.8,2.0+i*.2,2.4+i*.2)), Tx(3,'3,000 men',900,500,40,2.8,3.5,{col:RED}),
 /* 4 · Israel lost: thirty-six dead */
 Q(4,'tally',640,330,1.9,.3,2.0,{h:1,k:{n:36,col:RED,per:20}}), Tx(4,'36 men dead',640,490,50,2.1,3.0,{col:RED}),
 /* 5 · five explanations */
 ...BOARD(5,.2),
 /* 6 · weigh it: the enquiry */
 Q(6,'scales',640,330,1.9,.2,1.9,{h:1,k:{tilt:0}}), Q(6,'lock',250,350,1.6,1.6,2.0), Q(6,'qmark',1030,330,1.6,2.0,2.5),
 ...FIN()
];
const PAGES=[
 pg(1,['Jericho falls. The ban is public:','nothing is to be carried off.'],{ban:RED,nothing:RED}),
 pg(2,['Every scrap of silver, gold, bronze and iron','goes to the treasury. Every officer signs.'],{treasury:RED,signs:RED}),
 pg(3,['Days later, three thousand men go up','against Ai — a hill town barely worth the trouble.'],{thousand:RED,ai:RED}),
 pg(4,['Israel loses. Thirty-six men die,','and the rest run.'],{loses:RED,thirty:RED}),
 pg(5,['Five explanations. Destroy four of them','with documents. Careful with the word “why”.'],{destroy:RED,why:RED}),
 pg(6,['Thirty-six men are dead because of something','at a city they had already won.'],{dead:RED,won:RED})
];
