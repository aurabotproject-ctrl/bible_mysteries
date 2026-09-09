"use strict";
/* ============================================================
   CASE JM-47 — THE LEAK — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (5260 and HORSE). The letter-picking scheme in the campaign
   register is untouched. Anything not named here stays as it is.
   ============================================================ */

const EASY_JM47 = {

teaser:"Five ambushes planned in secret. Five times the enemy simply did not turn up. The king of Aram is sure one of his own officers is talking — and he is about to hear something far stranger.",
introSub:"Five secret plans. Five empty ambushes. Somebody is talking.",
boardTitle:"Closing the Routes",
boardIntro:"A leak is not a person. It is a route. Five routes have been suggested for how the king's plans reached Israel. For each one, pin the <b>one</b> piece of evidence that closes it. When all five are closed, the accusation form opens.",
accusationIntro:"You have closed every route a person in Damascus could have used to carry these plans to Samaria. The information still got through. Say what the file will actually support — not what sounds most sensible.",

items:{

j47letter:{
  prev:"Five plans. Five empty ambushes. Somebody is talking.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Aram and Israel are at war. It is a border war — no huge battles, just raiding parties sent down out of the hills to catch the other side on the move.</p>
    <p>The king of Aram is good at this. He picks his spot, he keeps it quiet, and he sends his men at night. <b>Five times he has set a trap. Five times the Israelites simply have not come.</b> Not once have they walked into an ambush, and twice they changed their route before his own men had even got there.</p>
    <p>The king has worked out the obvious answer. Somebody in that room is talking to Israel. He has said so to their faces, and he means to find the man.</p>
    <h4>Your job</h4>
    <p>You are not here to guess who. You are here to work out <b>how</b> the information is getting out — and to close off, one at a time, every route it could have taken. Five explanations have been offered. Test each one against the file. Throw out the ones that cannot be true.</p>
    <p>A warning. The king already has a favourite suspect, and it is the obvious one. Obvious suspects are how investigations go wrong.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before you decide anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in documents you already have.</li>
      <li>When you have everything, go to the <b>Pinboard</b> and close off each route in turn.</li>
    </ul>
    <p class="margin-note">A leak is not a person. A leak is a route. Find the route, and the person comes with it.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from 2 Kings 6:8–23, with background from 2 Kings 5 (Naaman) and 2 Kings 8 (Hazael).</div>`
},

j47register:{
  prev:"Five plans. Five spots. Five times nobody came.",
  body:`
    <p>The king writes this list out himself. Each line is one ambush: where it was set, how many companies of soldiers were sent, and what happened when the Israelites were meant to arrive.</p>
    <table class="ledger">
      <tr><th>Plan</th><th>Position</th><th class="n">Companies</th><th>What happened</th></tr>
      <tr><td>1</td><td><b>REHOB</b></td><td class="n">3</td><td>Nobody there. No enemy at all.</td></tr>
      <tr><td>2</td><td><b>GOLAN</b></td><td class="n">2</td><td>Israel turned off a day early.</td></tr>
      <tr><td>3</td><td><b>KARNAIM</b></td><td class="n">3</td><td>Nobody there. No enemy at all.</td></tr>
      <tr><td>4</td><td><b>ASHTAROTH</b></td><td class="n">2</td><td>Israel took the other road.</td></tr>
      <tr><td>5</td><td><b>HELAM</b></td><td class="n">2</td><td>Nobody there. No enemy at all.</td></tr>
    </table>
    <h4>The king's note at the bottom of the page</h4>
    <p class="margin-note">“Five places. Five times they were warned. They did not stumble into a single one of them — and two of them they avoided before my own men had even been told where they were going.”</p>
    <div class="ref">Background: 2 Kings 6:8–10. The place names come from towns in the region. Dothan is named in the account itself. Keep this table handy — you will need both columns later.</div>`
},

j47council:{
  prev:"Six men on the council. Not one of them heard all five plans.",
  body:`
    <p>Six men sit on the war council of Aram. The king gives them the plan, the council hears it, and the orders go out afterwards.</p>
    <table class="ledger">
      <tr><th>Councillor</th><th>Job</th></tr>
      <tr><td>Naaman</td><td>commander of the army</td></tr>
      <tr><td>Hazael</td><td>officer of the king's household</td></tr>
      <tr><td>Rezon</td><td>in charge of supplies</td></tr>
      <tr><td>Idri</td><td>the council's writer</td></tr>
      <tr><td>Ben-Hadar</td><td>captain of the chariots</td></tr>
      <tr><td>Zakkur</td><td>captain of the guard</td></tr>
    </table>
    <h4>Who was in the room, plan by plan</h4>
    <table class="ledger">
      <tr><th>Plan</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>Naaman</td><td>✔</td><td>✔</td><td><b>—</b></td><td>✔</td><td><b>—</b></td></tr>
      <tr><td>Hazael</td><td><b>—</b></td><td><b>—</b></td><td>✔</td><td>✔</td><td>✔</td></tr>
      <tr><td>Rezon</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td><b>—</b></td></tr>
      <tr><td>Idri</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
      <tr><td>Ben-Hadar</td><td>✔</td><td>✔</td><td><b>—</b></td><td>✔</td><td>✔</td></tr>
      <tr><td>Zakkur</td><td>✔</td><td><b>—</b></td><td>✔</td><td>✔</td><td><b>—</b></td></tr>
    </table>
    <p class="margin-note">Naaman was away with the northern army for plans 3 and 5. Both of those leaked anyway.</p>
    <div class="ref">Made-up record built around the account. Naaman and Hazael are named in 2 Kings; the others are invented for this case.</div>`
},

j47king:{
  prev:"“Which one of you is on the side of the king of Israel?”",
  body:`
    <div class="doc-body">
      <p>“I have set five ambushes for Israel this season. <b>In not one of them did we even see an Israelite.</b> Five times. That is not luck, and nobody is going to tell me it is.</p>
      <p>Plan four I gave in this room, in the afternoon, to my council. By the middle of that same night the Israelite army had turned onto the other road. They did not wander off it by accident. They turned before they even reached the fork.</p>
      <p>Plan five I told to nobody except my writer, behind a barred door, in my own bedroom — because by then I did not trust the walls. It made no difference at all.</p>
      <p>So I asked them straight out: <b>which one of you is on the side of the king of Israel?</b> I watched their faces while I said it. I have hanged men for less.”</p>
      <div class="sig">the king of Aram</div>
    </div>
    <div class="ref">Background: 2 Kings 6:11. The king really did accuse his own officers of betraying him.</div>`
},

j47naaman:{
  prev:"“I owe that prophet my life. I have never pretended otherwise.”",
  body:`
    <div class="doc-body">
      <p>“I know exactly why you are standing in front of me, so let us get on with it.</p>
      <p>Yes. I went into Israel. Yes, I went to their prophet Elisha, because I had a skin disease that no doctor in Damascus could cure, and I came home well. Afterwards I said, in front of witnesses, that I would worship no god but the God of Israel. <b>I have never hidden any of that</b> — and if I were planning to betray my king, I would have kept a great deal quieter about all of it.</p>
      <p>But look at your own attendance list before you decide.</p>
      <ul>
        <li><b>I was not in the room for plan three.</b> I was six days north with the army.</li>
        <li><b>I was not in the room for plan five.</b> Nobody was, except the king and his writer.</li>
        <li>Both of those leaked exactly like the rest.</li>
      </ul>
      <p>I cannot pass on something I was never told. Whatever is carrying these plans out of Damascus does not need me in the room — and that should worry you far more than I do.”</p>
      <div class="sig">Naaman</div>
    </div>
    <div class="ref">Background: 2 Kings 5:1–19. Naaman, the commander of Aram's army, was healed at Elisha's word and said he would worship the God of Israel.</div>`
},

j47scribe:{
  prev:"Two of the five plans were never written down at all.",
  body:`
    <div class="plate">${SVG.j47disp}<div class="cap">Click to make it bigger. Two sealed messages, as they came back to the archive.</div></div>
    <p>Every written order that leaves Damascus is copied into this book: what was sent, who carried it, and whether the seal was still whole when it arrived.</p>
    <table class="ledger">
      <tr><th>Plan</th><th>Written down?</th><th>Rider</th><th>Seal on arrival</th></tr>
      <tr><td>1</td><td>Yes — one message</td><td>Abda</td><td>Whole</td></tr>
      <tr><td>2</td><td><b>NO — spoken out loud only</b></td><td>—</td><td>—</td></tr>
      <tr><td>3</td><td>Yes — two messages</td><td>Abda, Shemer</td><td>Whole</td></tr>
      <tr><td>4</td><td>Yes — one message</td><td>Shemer</td><td>Whole</td></tr>
      <tr><td>5</td><td><b>NO — spoken out loud only</b></td><td>—</td><td>—</td></tr>
    </table>
    <h4>The writer's own note</h4>
    <p>“Not one message has gone missing. Not one seal has come back broken — <b>the number of broken seals this whole season is none at all</b>. Every rider came back, and I can account for every one of them.</p>
    <p>And two of the five plans I never wrote down. There was no letter to steal, no rider to stop, and no wax to peel off. <b>Those two leaked just like the rest.</b>”</p>
    <div class="ref">Made-up record. Sealed clay and wax messages carried by royal riders really were how orders travelled then.</div>`
},

j47map:{
  prev:"Where each ambush was set, and how far it is from anywhere.",
  body:`
    <div class="plate">${SVG.j47map}<div class="cap">Click the map to make it bigger.</div></div>
    <h4>What the map shows you</h4>
    <ul>
      <li>The council meets at <b>Damascus</b>, well east of the River Jordan. The closest ambush spot is two days' march away. The furthest is four.</li>
      <li>Three of the five spots are <b>hidden from every road</b> — dry valleys and dips in the ground, chosen exactly because an army on the highway cannot see into them.</li>
      <li>Israel's king is at <b>Samaria</b>, west of the river. Anything leaving Damascus has to cross all that ground before it is any use to him.</li>
      <li><b>Dothan</b> is a small town a short walk north of Samaria. No wall, no soldiers, nothing worth attacking. Remember it anyway. It is the one place on this map you will meet again.</li>
    </ul>
    <div class="ref">Background: 2 Kings 6:8–13. Dothan is named in the account as the town the Aramean king sent his army to surround.</div>`
},

j47chamber:{
  prev:"Two men inside. Two guards outside. No window.",
  body:`
    <div class="plate">${SVG.j47chamber}<div class="cap">Click the plan to make it bigger. The king's rooms at Damascus.</div></div>
    <h4>Statement of Zakkur, captain of the guard</h4>
    <p>“The fifth plan was given in the king's own bedroom. I set the guard myself, and I stood one of the watches.</p>
    <ul>
      <li>The door was <b>barred from the inside</b>. There is only one door. There is no window and no other way in — solid stone on three sides.</li>
      <li>Every servant was <b>sent out of the king's rooms</b> before he went in, and they stayed out. I counted them out and I counted them back.</li>
      <li>Two of us stood at that door the whole time. <b>We could not hear a single word through it</b>, and I know because I tried.</li>
      <li>Only two men were inside: the king, and Idri his writer.</li>
    </ul>
    <p class="margin-note">And that plan reached Samaria, just like all the others.</p>
    <div class="ref">Background: 2 Kings 6:12 — the officer's actual words are “the words you speak in your bedroom”.</div>`
},

j47household:{
  prev:"Nobody missing. Nobody paid. Nobody suddenly rich.",
  body:`
    <p>After the third failure the king had the whole household checked. The steward's book records what was found.</p>
    <table class="ledger">
      <tr><th>What was checked</th><th>What was found</th></tr>
      <tr><td>Servants missing from the king's rooms on any plan night</td><td class="n"><b>none</b></td></tr>
      <tr><td>Servants who left Damascus that season</td><td class="n"><b>none</b></td></tr>
      <tr><td>Silver nobody could explain, found in the searches</td><td class="n"><b>none</b></td></tr>
      <tr><td>Israelite servants in the household</td><td class="n">two — both questioned, both locked up since plan two</td></tr>
      <tr><td>Plans that leaked <i>after</i> those two were locked up</td><td class="n"><b>three</b></td></tr>
    </table>
    <h4>What the investigator noticed</h4>
    <p>The two obvious suspects were locked up after the second failure. Plans three, four and five still went out to Israel. Whatever is carrying the king's words, it is not walking around the servants' quarters.</p>
    <div class="ref">Made-up record, matching the account's picture of a leak nobody in the household could explain.</div>`
},

j47hazael:{
  prev:"“I would love to see Naaman fall. That is not the same thing as this.”",
  body:`
    <div class="doc-body">
      <p>“I will save you the trouble of asking politely. Yes, I want Naaman's job. Everybody in Damascus knows it, and if he were disgraced tomorrow I would not pretend to be sad. So I have a reason to want this. I am not going to stand here and deny it.</p>
      <p>What I do not have is the plans.</p>
      <ul>
        <li><b>I was not on the council for plans one and two.</b> I was not given the job until after the second failure — check the attendance list. Both of those leaked before I had heard a word about them.</li>
        <li>And if I were leaking to get Naaman into trouble, I would leak the plans <b>he</b> was in the room for. Two of the five he was nowhere near, and those went out just the same.</li>
      </ul>
      <p>Whatever is doing this started before me, and it does not need me. I would quite like to know what it is, because I intend to be sitting in that room for years to come.”</p>
      <div class="sig">Hazael</div>
    </div>
    <div class="ref">Background: 2 Kings 8:7–15. Hazael was an officer in the Aramean court who did later become king.</div>`
},

j47scouts:{
  prev:"They turned aside before the army had even been told where it was going.",
  body:`
    <p>The simplest answer to any leak is that there is no leak — the other side is just watching, and watching well. The Bureau tested that answer against all five failures. It does not work.</p>
    <h4>What ordinary scouts could explain</h4>
    <p>A lookout on high ground can see an army marching. Given a day, he can guess roughly where it is going and warn his king to stay clear.</p>
    <h4>What scouts cannot explain</h4>
    <ul>
      <li><b>Three of the spots could not be seen from any road.</b> Dry valleys and dips in the ground, picked for exactly that reason. There was nothing to see until you were standing in them.</li>
      <li>On plans two and four, <b>Israel turned aside before the Aramean army had been told where it was going</b>. There was no marching army to watch yet. The warning got there ahead of the soldiers.</li>
      <li>Plan three was <b>changed at the last minute</b>. Israel avoided the new spot, not the old one.</li>
      <li>Israel's lookouts were on their own side of the Jordan, days away from Damascus. <b>The plans were escaping from the council room, not from the battlefield.</b></li>
    </ul>
    <p class="margin-note">Scouts can tell you where an army is. They cannot tell you what a king said indoors before the army set off.</p>
    <div class="ref">Background: 2 Kings 6:9–10 — the warnings reached Israel's king in time to avoid the place, over and over.</div>`
},

j47officer:{
  prev:"“None of us, my lord the king.”",
  body:`
    <div class="doc-body">
      <p>The king had just demanded to know which of them was on Israel's side. The room went quiet. Then one of his own officers answered — and what he said was not a denial. It was an explanation.</p>
      <div class="stamp">RECORD OF THE COUNCIL</div>
      <p style="font-size:18px"><b>“None of us, my lord the king. It is Elisha, the prophet in Israel, who tells the king of Israel the very words you speak in your bedroom.”</b></p>
      <h4>Why the council took this seriously</h4>
      <ul>
        <li>The officer was not blaming a colleague. He had nothing to gain and plenty to lose by saying something so easy to laugh at.</li>
        <li>He named the one thing every other explanation had failed to cover: <b>the bedroom</b>. Not the council room. Not the messages. The room with two men in it and a barred door.</li>
        <li>Nobody in that room argued with him. They had all watched five plans escape from a sealed room.</li>
      </ul>
      <p class="margin-note">The king did not argue either. He asked where the prophet was — and sent an army to fetch him.</p>
      <div class="ref">Background: 2 Kings 6:12.</div>`
},

j47dothan:{
  prev:"Horses, chariots and a whole army — sent at night to catch one man.",
  body:`
    <div class="plate">${SVG.j47dothan}<div class="cap">Click to make it bigger. Dothan at first light, with the hills held on every side.</div></div>
    <p>Told that the leak was one man in a small town, the king did what kings do. He sent an army for him.</p>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>The mission</td><td>Capture the prophet Elisha at Dothan</td></tr>
      <tr><td>Force sent</td><td>Horses, chariots and a large body of soldiers</td></tr>
      <tr><td>Timing</td><td>At night, surrounding the town before first light</td></tr>
      <tr><td>Result</td><td><b>The army did not come back with the prophet</b></td></tr>
      <tr><td>Where the army turned up next</td><td><b>Inside Samaria — the enemy's own capital city</b></td></tr>
    </table>
    <h4>What the Aramean survivors reported</h4>
    <p>That the prophet's servant saw them at dawn and panicked, and the prophet did not. That the prophet prayed, and the servant then said the hills around Dothan were <b>full of horses and chariots of fire</b>. That the whole Aramean force went blind, and that a man they thought was a guide led them — straight through the gates of Samaria.</p>
    <p class="margin-note">An army sent to capture one man walked, blind and unresisting, into the capital city of the country it was at war with.</p>
    <div class="ref">Background: 2 Kings 6:13–19.</div>`
},

j47after:{
  prev:"They were fed, and let go. And the raids stopped.",
  body:`
    <h4>Inside Samaria</h4>
    <p>The king of Israel had a whole enemy army standing helpless inside his own walls. He asked the prophet twice whether he should kill them.</p>
    <p>He was told no. He was told to <b>put bread and water in front of them</b>. A great meal was made, the Aramean soldiers ate it, and they were sent home to their king.</p>
    <h4>What happened next</h4>
    <p>The record is very blunt about it: <b>the Aramean raiding parties stopped coming into Israel.</b> Not because they were beaten in battle. Because the war had stopped making any sense to fight.</p>
    <h4>Why the Bureau keeps this page</h4>
    <p>Every ordinary explanation of the leak assumed somebody was being paid, threatened, or was secretly working for the other side. This ending fits none of that. The side holding all the advantage gave it away and fed its enemies — which is not how spies and traitors behave.</p>
    <div class="ref">Background: 2 Kings 6:20–23.</div>`
},

j47prophet:{
  prev:"He never went to Damascus. He never needed to.",
  body:`
    <p>The Bureau's file on Elisha, as far as we can put it together:</p>
    <ul>
      <li>A prophet in Israel, who took over from Elijah. He lived simply, held no official job and commanded no soldiers.</li>
      <li><b>He had nobody working for him in Damascus, no house there, and no letters to or from anyone in Aram.</b></li>
      <li>He had, though, already turned up in one Aramean file. Naaman, the king's own commander, went to him and came home healed. Aram had met this man before.</li>
      <li>He is recorded warning Israel's king again and again, and very exactly — not “watch out for Aram”, but <b>do not go past that place</b>.</li>
    </ul>
    <h4>The point the whole file turns on</h4>
    <p>Every other explanation needs a route: a person in the room, a letter on the road, an ear at the door, an eye on the hillside. Close all four and the information should stop.</p>
    <p><b>All four were closed, and the information did not stop.</b> What is left is a source that needed no route at all — and the only person who claimed to be that source is the man the king then sent an army to silence.</p>
    <div class="ref">Background: 2 Kings 2–8 for Elisha; 2 Kings 6:9–12 for the warnings.</div>`
}

},

theories:{
  naaman:{
    title:"1. Naaman is passing word to Israel",
    claim:"The commander owes the Israelite prophet his life, and says openly that he worships Israel's God. The obvious traitor.",
    verdict:"The attendance list proves this wrong. Naaman was not in the room for plan three — he was six days north with the army — and nobody heard plan five except the king and his writer. Both leaked exactly like the rest. A man cannot pass on something he was never told, and this leak did not need him there. Having a reason is not the same as having the information."
  },
  dispatch:{
    title:"2. The written messages are being stolen",
    claim:"Orders leave Damascus with riders. Stop a rider, peel off a seal, and you have the plan.",
    verdict:"The writer's dispatch book proves this wrong. Two of the five plans were never written down at all — no letter, no rider, no wax — and they leaked the same as the others. On top of that, not one message went missing all season and not one seal came back broken. You cannot steal a message that was never sent."
  },
  servant:{
    title:"3. A servant is listening at the door",
    claim:"Palaces are full of servants. One of them hears something and sells it.",
    verdict:"The plan of the room proves this wrong. The fifth plan was given behind a door barred from the inside, in a room with no window and no other way in, with every servant sent out and two guards at the door who could hear nothing through it. Two men were inside. That plan reached Samaria like all the others — and the two Israelite servants had been locked up since the second failure anyway."
  },
  scouts:{
    title:"4. There is no leak — Israel is just watching",
    claim:"Good lookouts on high ground can see an army coming and warn their king to stay clear.",
    verdict:"The movement analysis proves this wrong. Three of the spots could not be seen from any road, and twice Israel turned aside before the Aramean army had even been told where it was going — the warning got there ahead of the soldiers. Plan three was changed at the last minute, and Israel avoided the new spot, not the old one. Scouts can tell you where an army is. They cannot tell you what a king said indoors before it left."
  },
  hazael:{
    title:"5. Hazael is leaking to bring Naaman down",
    claim:"An ambitious officer wants the commander's job, and a run of failures would finish him.",
    verdict:"The timing proves this wrong. Hazael was not put on the council until after the second failure — plans one and two leaked before he had heard a word of them. And if the point were to ruin Naaman, the plans to leak would be the ones Naaman was actually in the room for. Instead the two he was nowhere near went out just the same. A real reason to want it, but no way to do it."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the sealed room",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero — do not assume the question is broken just because the count comes to nothing.",
    questions:[
      "How many ambush plans are listed in the campaign register?",
      "How many of those plans were never written down at all?",
      "How many men sit on the war council?",
      "According to the king, how many times did an ambush actually catch the Israelites?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the campaign register. Question 2 is the writer's dispatch book. Question 3 is the council list. Question 4 is the king's own statement.",
      "Count the plans (5). Count the two marked “spoken out loud only” (2). Count the councillors (6). The king says that in not one of the five did they even see an Israelite (0)."
    ],
    reward:"Field Chest B is open. The plan of the king's bedroom, the steward's book, Hazael's statement and the analysis of Israel's movements are now on the desk."
  },
  l2:{
    wrong:"Not quite. Work down the register in plan order, and let the number of companies tell you which letter to take.",
    name:"Sealed Pouch C — the council's own answer",
    blurb:"A five-letter password, built out of the campaign register itself. The register gives you five place names, in order, and next to each one the number of companies sent there.",
    questions:[
      "Take the five place names from the campaign register, in plan order.",
      "Next to each name, read how many companies were sent there.",
      "From each name, take the letter in that position — three companies means the third letter.",
      "Read your five letters in order and type the word."
    ],
    hints:[
      "Start with plan one: REHOB, three companies. Count three letters into REHOB.",
      "R-E-H — the third letter is H. Now do GOLAN with two companies, KARNAIM with three, and so on down the list.",
      "H, O, R, S, E. It is what the king sent to Dothan — and what the prophet's servant saw on the hills."
    ],
    reward:"Sealed Pouch C is open. The council record, the report on the raid at Dothan, the follow-up file and the Bureau's file on the prophet are now on the desk."
  }
},

verdicts:{
  naaman:  {text:"Naaman, the commander, is passing the plans to Israel."},
  dispatch:{text:"The written messages are being stolen on the road."},
  servant: {text:"A servant in the household is listening and selling what he hears."},
  scouts:  {text:"There is no leak at all — Israel's lookouts are simply watching the roads."},
  hazael:  {text:"Hazael is leaking the plans to bring Naaman down and take his job."},
  prophet: {text:"Every route into that room is closed. The plans reached Israel from someone who was never in the room and never got a message: Elisha, the prophet at Dothan."}
},

debrief:{
  lead:"Every route out of that room has been closed. The man in the room. The message on the road. The ear at the door. The eye on the hillside. The rival with a reason. The plans still got to Israel. The only explanation that fits all five failures is the one the king's own officer gave him — and the king believed it enough to send an army after one unarmed man.",
  questions:[
    "The king's first thought was to look for a traitor. Why is that always the first place investigators look, and how did it nearly send this one wrong?",
    "Naaman had the strongest reason and the clearest link to Israel. What does it show that the evidence cleared him anyway?",
    "The Aramean army was fed and sent home instead of killed, and the raids stopped. Why might that end a war better than winning a battle would?",
    "Elisha kept warning Israel's king about danger he could not possibly have seen. Where else in the Bible does God warn people ahead of time — and what is it usually for?"
  ]
}

};

registerEasy("jm47", EASY_JM47);
