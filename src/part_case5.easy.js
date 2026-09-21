"use strict";
/* ============================================================
   CASE JM-02 — THE MISSING BOY — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (1321 and TEMPLE). The search grid keeps every row and column
   id, and its truth array is untouched. Anything not named here
   stays as it is.
   ============================================================ */

const EASY_JM02 = {

teaser:"A family leaves the festival in a group of a hundred relatives. A day later, a twelve-year-old is not among them. It takes two exhausted parents three days to find a boy who was never even hiding.",
introSub:"A day out, and the boy is not with the group.",
boardTitle:"Three Days",
boardIntro:"Five explanations have been offered for those three days. For each one, pin the <b>one</b> document that proves it wrong. When all five are closed, the accusation form opens.",
accusationIntro:"Nobody took him. He was not lost. He did not run away. His parents were not careless, and he never told them. Say what the file will actually support — and be kind about it, because the file is.",

items:{

j02letter:{
  prev:"A twelve-year-old is missing in a huge city. It takes three days to find him.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A family from Nazareth goes up to Jerusalem for the festival, like they do every year. The city is packed — maybe four or five times its normal size. When the feast ends, they set off home in a big travelling group of relatives and neighbours.</p>
    <p><b>A whole day later, they find out their twelve-year-old son is not with the group.</b> They turn round. It takes them three days to find him.</p>
    <p>Three days is a very long time. That is what this case is about. Not what happened to him — but why finding him took so long.</p>
    <h4>Your job</h4>
    <p>Five explanations have been offered for those three days. Close four of them using documents. Do not just pick the one that makes somebody look bad — this file is unusually kind to everybody in it, and that is part of the point.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before you decide anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in documents you already have.</li>
      <li>The second lock opens with the <b>search grid</b> — the 🗺 button at the top, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">A search is a list of places, in an order. Somebody chose that order.</p>
    <div class="sig">Luke</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from Luke 2:41–52.</div>`
},

j02caravan:{
  prev:"Children walked with the group, not next to their parents. Everybody's children, all together.",
  body:`
    <p>Most people come to this file having already decided the parents were careless. Before you do that, here is how these journeys actually worked.</p>
    <table class="ledger">
      <tr><th>Part of the journey</th><th>How it worked</th></tr>
      <tr><td>Who travels</td><td>A whole village or big family together — often 100 people or more</td></tr>
      <tr><td>Where the children walk</td><td><b>With the group</b>, among cousins and neighbours, not next to their parents</td></tr>
      <tr><td>Why</td><td>The road is safer in a crowd, and every adult keeps an eye on every child</td></tr>
      <tr><td>How they march</td><td>Women and younger children in front, men behind — the two halves meet up at camp</td></tr>
      <tr><td>First stop</td><td><b>One day out.</b> The group camps, and families come back together for the evening meal</td></tr>
    </table>
    <h4>What that means</h4>
    <p>A twelve-year-old walking out of Jerusalem among a hundred relatives is exactly where he is supposed to be. Nobody is watching him <i>in particular</i>, because everybody is watching all of them.</p>
    <p class="margin-note">The first moment a family is on their own and can count their own children is the evening of day one. That is not neglect. That is the system working exactly as it should — right up until it doesn't.</p>
    <div class="ref">Background: Luke 2:44 — they thought “he was in the group”.</div>`
},

j02search:{
  prev:"Three days. No ransom note, no report, and no sighting on any road.",
  body:`
    <p>Any search for a missing child in a festival city gets registered with the city watch. This is what their book holds.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Record</th></tr>
      <tr><td>Days searched</td><td class="n"><b>3</b></td></tr>
      <tr><td>Ransom demands received</td><td class="n"><b>none</b></td></tr>
      <tr><td>Reports of a child being taken that week</td><td class="n"><b>none</b></td></tr>
      <tr><td>Sightings on the roads out of the city</td><td class="n"><b>none</b></td></tr>
      <tr><td>Anyone hurt matching his description</td><td class="n"><b>none</b></td></tr>
      <tr><td>Any sign of him at the slave market</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>What the watch officer said</h4>
    <p>“When a child is taken in this city, we hear about it, and we hear fast — either from the family being asked for money, or from the gates, or from the market. In this case we heard nothing at all, from anybody, for three days. Then the family came back to say they had found him themselves.</p>
    <p><b>Nothing was ever done to this boy.</b> I would put my name to that.”</p>
    <div class="ref">Made-up record, matching Luke 2:44–46.</div>`
},

j02parents:{
  prev:"Two accounts, taken separately. They agree — including on the part that hurts.",
  body:`
    <div class="doc-body">
      <h4>The mother</h4>
      <p>“He said nothing to me. Not a word about staying behind, not even a hint. If he had told me I would remember it, because I would have said no.</p>
      <p>We looked for him among our relatives and neighbours first — that is where a child of ours would be. When he was not there, we went back. <b>Both of us went back.</b> We did not send a servant. We do not have one.</p>
      <p>Three days. I want that written down, because people say it so lightly. Three days.”</p>
      <h4>The father</h4>
      <p>“Nothing was said to me either. We have talked about it since, and neither of us is covering for the other. He did not ask, and we did not say yes.</p>
      <p>She has told you it was both of us, and it was. We searched together and we did not stop.”</p>
      <h4>What the Bureau notes</h4>
      <p>The two statements were taken separately. They agree on the one point that would most have let the parents off the hook if they could have claimed it — that he had asked and been given permission, or that they had misheard him. <b>Neither of them takes that way out.</b> Accounts that agree on the awkward thing are worth far more than accounts that agree on the convenient thing.</p>
    </div>
    <div class="ref">Background: Luke 2:48 — “your father and I have been searching for you”.</div>`
},

j02feast:{
  prev:"Three great feasts in the year. This family made the journey for one of them.",
  body:`
    <p>There are three great pilgrim feasts in the year, and a family from Galilee is a hard four days' walk from the city.</p>
    <table class="ledger">
      <tr><th>Feast</th><th>Time of year</th><th>Did this family go?</th></tr>
      <tr><td>Passover</td><td>spring</td><td><b>Yes — every year</b></td></tr>
      <tr><td>Weeks (Pentecost)</td><td>early summer</td><td>no</td></tr>
      <tr><td>Tabernacles</td><td>autumn</td><td>no</td></tr>
    </table>
    <h4>Note</h4>
    <p>The record is very clear: his parents went to Jerusalem <b>every year for the feast of the Passover</b>. Whatever else they did or did not do, this family made the journey for <b>one</b> feast a year, and this was it.</p>
    <p class="margin-note">That matters more than it looks. This was not a family who were in Jerusalem often. It was the one week in the year they were there at all — and he had been coming since he could walk.</p>
    <div class="ref">Background: Luke 2:41 · Deuteronomy 16:16.</div>`
},

j02relatives:{
  prev:"A hundred people, and not one of them had seen him since the city.",
  body:`
    <p>Everybody in the group was asked the same two questions. When did you last see the boy, and did he say anything to you?</p>
    <table class="ledger">
      <tr><th>Answer</th><th>How many said it</th></tr>
      <tr><td>“I thought he was with somebody else in the group”</td><td class="n">most of them</td></tr>
      <tr><td>“I saw him in the city, before we set off”</td><td class="n">several</td></tr>
      <tr><td>“I saw him on the road out”</td><td class="n"><b>nobody</b></td></tr>
      <tr><td>“He told me he was staying behind”</td><td class="n"><b>nobody</b></td></tr>
      <tr><td>“He seemed upset or did not want to leave”</td><td class="n"><b>nobody</b></td></tr>
    </table>
    <h4>Why the Bureau keeps this page</h4>
    <p>Look at the shape of it. A hundred people each thought the boy was safe, and every single one of them had a good reason to think so — but a hundred reasonable guesses add up to nobody actually knowing.</p>
    <p>Notice what nobody reports, either. No argument. No sulking. No scene. Whatever he did, he did not storm off.</p>
    <div class="ref">Made-up statements, matching Luke 2:44.</div>`
},

j02road:{
  prev:"One day out, at the first camp, each family counts its own children.",
  body:`
    <div class="plate">${SVG.j02road}<div class="cap">Click the plan to make it bigger.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Jerusalem</b> sits up on its ridge at the top of the road. The festival crowd leaves by the northern gate in groups, village by village.</li>
      <li><b>The road north</b> runs a full day's walk down into the valley. There is nowhere along it that a child could go missing without anyone noticing — it is open ground with a hundred people on it.</li>
      <li><b>The first camp</b> is where the group stops for the night, and where the two halves of the march — women and children in front, men behind — come back together.</li>
      <li>Every relative in the group was at that camp. He was not.</li>
    </ul>
    <p class="margin-note">The distance matters. Whatever happened, it happened before the group left the city — because there is nowhere to go missing on the road itself.</p>
    <div class="ref">Background: Luke 2:44. A day's journey from Jerusalem is roughly 30 km.</div>`
},

j02courts:{
  prev:"Covered walkways, courtyards, and the place where the teachers sat.",
  body:`
    <div class="plate">${SVG.j02courts}<div class="cap">Click the plan to make it bigger.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li>The temple is enormous — the biggest enclosed space in Jerusalem, and at festival time the busiest place in the city.</li>
      <li><b>The sanctuary</b> in the middle is closed to everyone except the priests.</li>
      <li><b>The court of Israel</b> and the huge outer courtyard are open to everyone, and during a feast they are packed.</li>
      <li><b>The covered walkways</b> round the edge are where the teachers of the law sit all day, with anyone who wants to listen sitting around them. They are open to the public, and a boy sitting among the listeners would not stand out at all.</li>
    </ul>
    <p class="margin-note">This is a public place. Not a hiding place, and not a restricted one — anybody could walk into it, including two frantic parents, on any of the three days.</p>
    <div class="ref">Background: Luke 2:46 — “in the temple, sitting among the teachers”.</div>`
},

j02log:{
  prev:"Eight districts. Three days. Somebody chose the order.",
  body:`
    <div class="plate">${SVG.j02log}<div class="cap">Click to make it bigger. The log as the parents kept it.</div></div>
    <p>They searched the city district by district. This is the log, in the order they worked through it.</p>
    <table class="ledger">
      <tr><th>Day</th><th>Districts searched</th></tr>
      <tr><td><b>One</b></td><td>The northern gate quarter · The travellers' lodgings · The gates and walls</td></tr>
      <tr><td><b>Two</b></td><td>The market streets · The upper city · The lower city and Siloam · The pool of Bethesda</td></tr>
      <tr><td><b>Three</b></td><td><b>The temple courts</b></td></tr>
    </table>
    <h4>Note from the Bureau</h4>
    <p>Take this log to the <b>search grid</b> — the 🗺 button at the top — and tick off every district against the day it was searched. Eight districts, three days, and one square in the grid sitting a long way from all the others.</p>
    <p class="margin-note">There is no mystery about where he was. The mystery is about the order they looked in.</p>
    <div class="ref">Made-up log, reconstructing the three days of Luke 2:46.</div>`
},

j02districts:{
  prev:"Every district was searched for a reason. So was the one they left until last.",
  body:`
    <p>The parents were not searching randomly. They picked each district because it answered a question they were asking.</p>
    <table class="ledger">
      <tr><th>District</th><th>Why they looked there</th></tr>
      <tr><td>The northern gate quarter</td><td>Where the group had gathered. Maybe he was still standing there.</td></tr>
      <tr><td>The travellers' lodgings</td><td>Where they had been staying. Maybe he went back to the room.</td></tr>
      <tr><td>The gates and walls</td><td>Maybe he tried to follow them and got turned back.</td></tr>
      <tr><td>The market streets</td><td>Maybe he was hungry, or got pulled in by the stalls.</td></tr>
      <tr><td>The upper city</td><td>Maybe somebody had taken him in.</td></tr>
      <tr><td>The lower city and Siloam</td><td>Maybe something had happened to him at the water.</td></tr>
      <tr><td>The pool of Bethesda</td><td>The same, and it is where the sick and the lost gather.</td></tr>
      <tr><td><b>The temple courts</b></td><td><b>—</b></td></tr>
    </table>
    <h4>The blank line</h4>
    <p>There is no reason written next to the last one, and the Bureau thinks that is the most interesting thing in this whole file. Every other district answers the question <i>where would a lost, frightened or hurt child end up?</i></p>
    <p>The temple answers a different question — <i>where would this particular boy choose to go?</i> — and for two days nobody thought to ask it.</p>
    <div class="ref">Made-up analysis of Luke 2:45–46.</div>`
},

j02roads:{
  prev:"Nobody left with him. Nobody was asking for money.",
  body:`
    <p>When a child goes missing in a walled city, the first question is whether he is still inside it. The watch answered that one straight away.</p>
    <table class="ledger">
      <tr><th>What was checked</th><th>Result</th></tr>
      <tr><td>Gates open during the search</td><td>all of them, as normal in festival week</td></tr>
      <tr><td>Groups leaving with a child nobody could account for</td><td class="n"><b>none reported</b></td></tr>
      <tr><td>Traders' caravans searched as they left</td><td class="n">eleven</td></tr>
      <tr><td>Children found in them</td><td class="n"><b>none unaccounted for</b></td></tr>
      <tr><td>Ransom demands, threats or approaches to the family</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why this closes a door</h4>
    <p>Somebody taking a child leaves a pattern. Somebody moves the child, and somebody wants something — money, work, or silence. In three days, in an open, searched, gossiping city at its busiest, <b>not one piece of that pattern turned up</b>.</p>
    <p class="margin-note">He was inside the walls the whole time, and nobody had him.</p>
    <div class="ref">Made-up record matching the account, which reports no crime at all.</div>`
},

j02found:{
  prev:"Sitting among the teachers. Listening, and asking questions.",
  body:`
    <p>They found him in the temple courts, in the covered walkway where the teachers sat.</p>
    <table class="ledger">
      <tr><th>What was noticed</th><th>Record</th></tr>
      <tr><td>What he was doing</td><td><b>Sitting among the teachers, listening and asking questions</b></td></tr>
      <tr><td>How he was</td><td>Unhurt. Not hungry, not frightened, not hiding.</td></tr>
      <tr><td>How long he had been there</td><td>Since the group left, as far as anyone could tell</td></tr>
      <tr><td>What the teachers thought</td><td>They were amazed at how much he understood, and at his answers</td></tr>
      <tr><td>How he reacted to being found</td><td>Surprised — that they had been looking anywhere else</td></tr>
    </table>
    <h4>Why this page settles an explanation</h4>
    <p>A lost child is frightened, and a frightened twelve-year-old does not spend three days deep in conversation with grown-up scholars. He hides, or he cries, or he asks the first adult he sees for help — and in a city that full he would have found one within minutes.</p>
    <p><b>He was not lost.</b> He knew exactly where he was — and so, it turns out, did everybody sitting around him.</p>
    <div class="ref">Background: Luke 2:46–47.</div>`
},

j02sayings:{
  prev:"“Why were you looking for me?”",
  body:`
    <div class="doc-body">
      <p>His mother spoke first. “Son, why have you done this to us? Look — your father and I have been searching everywhere for you, worried sick.”</p>
      <div class="stamp">HIS RECORDED REPLY</div>
      <p style="font-size:18px">“<b>Why were you looking for me? Did you not know that I had to be in my Father's house?</b>”</p>
      <h4>What the Bureau notices</h4>
      <ul>
        <li>It is a question, not an excuse. He does not say he forgot, or lost track of time, or meant to catch them up later.</li>
        <li>He assumes they already knew where he would be — which is exactly why it never crossed his mind to tell anybody.</li>
        <li>The record then says, plainly, that <b>they did not understand what he meant</b>. Nobody in this file pretends to have understood it at the time.</li>
      </ul>
      <p class="margin-note">Two people searched every place a child might be taken to. He was in the one place he would go to.</p>
    </div>
    <div class="ref">Background: Luke 2:48–50.</div>`
},

j02after:{
  prev:"He went home with them, and stayed there for eighteen years.",
  body:`
    <p>This page is here because it closes the last explanation — and because it is the part everybody forgets.</p>
    <table class="ledger">
      <tr><th>After the third day</th><th>Record</th></tr>
      <tr><td>Did he stay in Jerusalem?</td><td><b>No — he went home with them to Nazareth</b></td></tr>
      <tr><td>How he behaved at home afterwards</td><td><b>He did as they said</b></td></tr>
      <tr><td>Anything like this happening again</td><td class="n"><b>never recorded</b></td></tr>
      <tr><td>Years before we hear of him again</td><td class="n">about 18</td></tr>
      <tr><td>What his mother did</td><td>She kept all of it in her heart</td></tr>
    </table>
    <h4>Why this rules out running away</h4>
    <p>A child running away from his family does not walk home with them the same afternoon and then live quietly under their roof for the next eighteen years. Running away is a direction — away from something. <b>This was a place he wanted to be.</b></p>
    <p class="margin-note">And his mother, who had every reason to want those three days forgotten, is the one who made sure they were remembered.</p>
    <div class="ref">Background: Luke 2:51–52.</div>`
},

j02why:{
  prev:"The search was careful, thorough, and looking for the wrong sort of child.",
  body:`
    <p>The Bureau keeps this case not because it is hard to solve, but because of what the answer shows about searching for things.</p>
    <h4>The search was good</h4>
    <p>Eight districts in three days, in a city swollen to several times its normal size, with two people and nobody helping. Nothing in that log is lazy or silly. Every district they picked was a sensible answer to the question they were asking.</p>
    <h4>The question was wrong</h4>
    <p>They asked: <b>where does a lost child end up?</b> The right question was: <b>where does <i>this</i> boy go?</b> The first question gives you seven districts and three days. The second gives you one district and an afternoon.</p>
    <h4>Why nobody asked it</h4>
    <p>Because he was twelve — and the idea underneath the whole search was that a twelve-year-old is something that happens to a city, rather than somebody who makes a choice in it. The one place they left until last is the place he had chosen on purpose.</p>
    <h4>What to take away from this file</h4>
    <p class="margin-note">When a search fails, it is usually not because the searchers were careless. It is because everybody is answering a question nobody has said out loud — and the place you have not looked is the place your question rules out.</p>
    <div class="ref">Background: Luke 2:41–52 · compare Psalm 27:4.</div>`
}

},

theories:{
  taken:{
    title:"1. He was taken",
    claim:"A festival city is full of strangers, and a twelve-year-old is worth money. Somebody took him.",
    verdict:"The road watch proves this wrong. Every road out was watched, eleven departing caravans were searched, and no unaccounted-for child was found in any of them. No ransom demand, no threat and no approach was ever made to the family, and the watch had no report of any child being taken that week. Somebody taking a child leaves a pattern — somebody moves the child, somebody wants something — and in three days in an open, crowded, gossiping city, not one piece of that pattern appeared."
  },
  lost:{
    title:"2. He was lost and frightened",
    claim:"He got separated in the crowd, panicked, and could not find his way back to a family who had already left.",
    verdict:"Where he was found proves this wrong. He was sitting in the covered walkway among the teachers, listening and asking questions, unhurt and in no hurry, and he had been there the whole time. A frightened child hides, or cries, or asks the first adult he sees for help — and in that crowd he would have found one in minutes. He was surprised they had been looking anywhere else."
  },
  ranaway:{
    title:"3. He ran away from his family",
    claim:"Twelve is exactly the age for it. He stayed behind on purpose, to get away from them.",
    verdict:"What happened next proves this wrong. He went home with them to Nazareth the same day and lived under their roof for the next eighteen years, with nothing like it ever happening again. Running away is a direction — away from something. This was somewhere he wanted to be, and when they came for him he simply went home."
  },
  careless:{
    title:"4. The parents were careless",
    claim:"They walked a whole day without checking their own child was with them. Any parent would have noticed.",
    verdict:"How a festival group travels proves this wrong. Children did not walk next to their parents. They walked with the group, among cousins and neighbours, with everybody watching all of them. The march split into two halves that only came back together at the evening camp — which is the first moment any family could count its own children. Thinking he was in the group was not neglect. It was the right thing to think, on every journey they had ever made."
  },
  told:{
    title:"5. He told them and they forgot",
    claim:"He asked to stay, got a distracted yes, and two exhausted parents forgot the conversation.",
    verdict:"The parents' accounts prove this wrong. Taken separately, both say plainly that he said nothing — and that is the one answer that would have let them off the hook. Neither of them takes it. The group's statements agree: not one of a hundred relatives was told he was staying. Accounts that agree on the awkward thing are worth more than accounts that agree on the convenient thing."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the search papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. Every answer is a single digit.",
    questions:[
      "How many days out from Jerusalem was the group when they missed him?",
      "How many days did the search take?",
      "How many people searched for him?",
      "How many feasts a year did this family travel to Jerusalem for?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the note on how a festival group travels. Question 2 is the search record. Question 3 is the parents' accounts. Question 4 is the festival calendar."
    ],
    reward:"Field Chest B is open. The search log, the note on how they chose the districts, and the road watch are now on the desk. The 🗺 Search grid at the top is live."
  },
  l2:{
    wrong:"Not quite. Fill in the search grid from the log — the 🗺 button at the top. The district sitting on its own on day three is the password.",
    name:"Sealed Pouch C — the last district",
    blurb:"A six-letter password. It is not written down as an answer anywhere in this file. You get it by taking the search log to the search grid, ticking off every district against the day it was searched, and then looking at the shape that appears.",
    questions:[
      "Open the 🗺 Search grid from the top bar.",
      "Work down the search log and tick each district against the day it was searched.",
      "Seven districts fill up the first two days.",
      "One district sits all on its own on the third day. Its name is the password."
    ],
    hints:[
      "The log lists three districts on day one, four on day two, and one on day three.",
      "Tick all eight, then look at the third column. Only one square in it has a tick."
    ],
    reward:"Sealed Pouch C is open. Where he was found, what he said, what happened next, and the Bureau's analysis of the search are now on the desk."
  }
},

matrix:{
  title:"The Search Grid",
  blurb:"Eight districts of Jerusalem, three days of searching. Work down <b>The Search Log</b> and tick each district against the day it was searched. When the grid is right, the shape of the search will give you the password.",
  corner:"District",
  verify:"Check my grid",
  cols:{
    d1:{label:"Day one",   note:"the day they came back"},
    d2:{label:"Day two",   note:""},
    d3:{label:"Day three", note:"the day they found him"}
  },
  rows:{
    gate:  {label:"The northern gate quarter", note:"where the group gathered"},
    lodge: {label:"The travellers' lodgings",  note:"where they had been staying"},
    walls: {label:"The gates and walls",       note:""},
    market:{label:"The market streets",        note:""},
    upper: {label:"The upper city",            note:""},
    lower: {label:"The lower city and Siloam", note:""},
    pool:  {label:"The pool of Bethesda",      note:"where the lost and the sick gather"},
    temple:{label:"The temple courts",         note:"the biggest space in the city"}
  },
  note:"Seven of the eight districts answer the question <i>where does a lost child end up?</i> Look at which one does not — and at how long it had to wait.",
  reveal:{
    lead:"There it is. Seven districts searched in two days, and one district sitting all alone on the third — the biggest, most public, most obvious place in the whole of Jerusalem, and the very last place they looked.",
    caption:"That is the password for Sealed Pouch C. The debrief asks the harder question: why was it last?"
  }
},

verdicts:{
  taken:   {text:"Somebody in the festival crowd took him."},
  lost:    {text:"He was lost and frightened and could not find his way back."},
  ranaway: {text:"He stayed behind on purpose, to get away from his family."},
  careless:{text:"His parents were careless and did not check he was with them."},
  told:    {text:"He told them he was staying, and in the rush they forgot."},
  chose:   {text:"He never left the city. He stayed behind on purpose and completely openly, in the temple — the one place he would choose, which is exactly why it was the last place anybody thought to look."}
},

debrief:{
  lead:"Nobody took him: every road was watched and no ransom was ever asked for. He was not lost: he was sitting calmly among the teachers, asking questions. He did not run away: he went home that same day and stayed for eighteen years. His parents were not careless — children travelled with the group, and the evening camp was the first chance anyone had to count them. And he never told them; both parents said so separately, when saying the opposite would have let them off. He stayed on purpose, in the most public building in Jerusalem, and it took three days because everybody was asking where a lost child ends up instead of where this boy would go.",
  questions:[
    "The parents searched seven districts before the temple. Was the order they chose a sensible one? Say why.",
    "What is the difference between the question “where does a lost child end up?” and “where would this child go?”",
    "His mother says “three days” and wants it written down. Why do you think she wanted that on the record?",
    "He was surprised they had been looking anywhere else. What does that tell you about what he assumed they knew?",
    "Think of a time you could not find something. Were you looking in the wrong places, or asking yourself the wrong question?"
  ]
}

};

registerEasy("jm02", EASY_JM02);
