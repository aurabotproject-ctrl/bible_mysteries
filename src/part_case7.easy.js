"use strict";
/* ============================================================
   CASE JM-04 — THE JUDGMENT — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (2101 and SWORD). Anything not named here stays as it is.
   ============================================================ */

const EASY_JM04 = {

teaser:"Two women, one living baby, and not one witness, document or mark to tell them apart. Both tell exactly the same story with the names swapped. We think this is the hardest case in the whole archive.",
introSub:"Two stories that match exactly. No witnesses. Nothing to weigh up.",
boardTitle:"Ways Out of a Deadlock",
boardIntro:"Five ways out have been suggested — four of them the things people reach for when two stories cannot be told apart. For each one, pin the <b>one</b> document that makes it impossible. When all five are closed, you can make your accusation.",
accusationIntro:"There is no witness, no document, no mark and no third story, and neither woman can be caught out. Say what the file can actually back up about how this case was decided.",

items:{

j04letter:{
  prev:"Two women. One living baby. And not one piece of evidence in the world.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Two women share a house. Each has a baby son, born three days apart. In the night one of the babies dies. In the morning both women say the living baby is theirs, and each one says the other swapped them while she was asleep.</p>
    <p>They lived on their own. There were no other adults in the house, no servants, no neighbours in the room, and nobody at all who saw anything. There is no document, no mark, no belonging, and no third person to ask.</p>
    <p><b>This is the hardest evidence problem in our whole archive, and I want you to feel how hard it is before you start solving it.</b> Two stories that match each other exactly, and nothing at all to weigh one against the other. Every normal tool an investigator has — a witness, a record, a detail only one person could know — is simply missing.</p>
    <h4>Your job</h4>
    <p>Five ways out have been suggested. Four of them are the things people normally try when they are stuck like this, and the file will not carry any of them. Close those four, then look honestly at what the king actually did.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read both statements carefully — including how alike they are.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are hidden in documents you already have.</li>
      <li>The second lock opens using the <b>testimony grid</b> — the ⚖ button at the top — once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">One thing before you start. A baby died in this case. The file says so plainly and does not go into detail, and neither should we.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from 1 Kings 3:16–28.</div>`
},

j04court:{
  prev:"Two women claiming. No witnesses. Nothing handed in as evidence.",
  body:`
    <p>The hearing was held in front of the king himself, in open court. The record is short because there was so little to write down.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Record</th></tr>
      <tr><td>Women making a claim</td><td class="n"><b>2</b> — both from the same house</td></tr>
      <tr><td>Witnesses called</td><td class="n"><b>none</b> — there were none</td></tr>
      <tr><td>Documents handed in</td><td class="n"><b>none</b></td></tr>
      <tr><td>Objects handed in as evidence</td><td class="n"><b>none</b></td></tr>
      <tr><td>Marks or tokens showing whose baby it was</td><td class="n"><b>none</b></td></tr>
      <tr><td>Statements taken</td><td class="n">2, in open court, each one with the other woman listening</td></tr>
    </table>
    <h4>What the clerk wanted to add</h4>
    <p>"I have kept this record for eleven years and I have never written up a case with less in it. Normally there is something — a note about a debt, a neighbour, a mark on a piece of clothing, a servant who was awake. Here there is a house with two women in it and nothing else.</p>
    <p>Both told their whole story. <b>Neither woman contradicted herself, and neither could be caught out</b>, because there was nothing to check either of them against."</p>
    <div class="ref">Background: 1 Kings 3:16–22.</div>`
},

j04household:{
  prev:"Two women, two sons born three days apart. By morning there is one baby.",
  body:`
    <p>What we know about the house.</p>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Adults in the house</td><td class="n"><b>2</b> — the two women, and nobody else</td></tr>
      <tr><td>Babies born</td><td class="n">2 — sons, three days apart</td></tr>
      <tr><td>Servants, lodgers or family living there</td><td class="n"><b>none</b></td></tr>
      <tr><td>People there at either birth</td><td class="n"><b>only the two of them</b></td></tr>
      <tr><td>Babies alive when the case reached court</td><td class="n"><b>1</b></td></tr>
      <tr><td>How the other baby died</td><td>Not known. One of the two says it happened in the night.</td></tr>
    </table>
    <h4>Why this matters</h4>
    <p>Two women, two babies, one house and nobody else at all. Every single fact in this case comes from one of exactly two people — and each of those two has the strongest possible reason to say what she is saying.</p>
    <p class="margin-note">There is no neutral source anywhere in this file. Not one.</p>
    <div class="ref">Background: 1 Kings 3:17–18.</div>`
},

j04house:{
  prev:"One door in or out, and nobody else on the other side of it.",
  body:`
    <div class="plate">${SVG.j04house}<div class="cap">Click the plan to make it bigger.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li>A small house with two rooms. One sleeping room each, a mat and a cradle in each, and a shared outside wall.</li>
      <li><b>There is one door.</b> No second way in, no window a person could climb through, no yard door, no wall shared with a neighbour.</li>
      <li>The two rooms open straight onto each other. A woman crossing from one to the other in the night walks a few steps and does not open a door.</li>
      <li><b>Other people in the house that night: none.</b></li>
    </ul>
    <p class="margin-note">This is a plan of a house where the thing they describe is perfectly possible — and where it is impossible for anybody to have seen it.</p>
    <div class="ref">Made-up plan, drawn from the description in 1 Kings 3:17–18.</div>`
},

j04note:{
  prev:"The king asked no more questions. He suggested one thing, once.",
  body:`
    <p>A note about how the hearing ran, because people remember the ending of this case wrongly all the time.</p>
    <table class="ledger">
      <tr><th>Stage</th><th>What happened</th></tr>
      <tr><td>Both statements heard</td><td>In full, each one with the other woman there</td></tr>
      <tr><td>Questions asked afterwards</td><td class="n"><b>none written down</b></td></tr>
      <tr><td>Breaks in the hearing</td><td class="n"><b>none</b></td></tr>
      <tr><td>Investigations ordered</td><td class="n"><b>none</b></td></tr>
      <tr><td>Tests the king suggested</td><td class="n"><b>1</b></td></tr>
      <tr><td>Times that test was actually carried out</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>What to notice now</h4>
    <p>He did not investigate. He did not send anyone to ask the neighbours, or examine the baby, or take the women aside one at a time. He listened to them both, said one thing, and the case was over.</p>
    <p class="margin-note"><b>Count the tests. One.</b> That number is part of the first lock — and by the end of this file it will be the most interesting number in it.</p>
    <div class="ref">Background: 1 Kings 3:23–27.</div>`
},

j04first:{
  prev:"“This woman and I live in one house. I had a baby, and three days later so did she.”",
  body:`
    <div class="plate">${SVG.j04sheets}<div class="cap">Click to make it bigger. Both statements as they were written down.</div></div>
    <div class="doc-body">
      <p>"My lord, this woman and I live in one house, and I had a baby son while she was in the house with me.</p>
      <p>Three days after I gave birth, she had a baby too. We were together. <b>There was nobody else in the house with us — just the two of us.</b></p>
      <p>Her son died in the night. In the night, while I was asleep, <b>she got up and took my son from beside me and held him, and put her dead son beside me instead.</b></p>
      <p>When I got up in the morning to feed my baby, he was not alive — and when I looked at him properly in the morning light, <b>he was not my son.</b>"</p>
      <div class="sig">the first woman</div>
    </div>
    <div class="ref">Background: 1 Kings 3:17–21.</div>`
},

j04second:{
  prev:"“No — the living one is my son, and the dead one is yours.”",
  body:`
    <div class="doc-body">
      <p>"My lord, that is not what happened, and she knows it.</p>
      <p>We live in one house, the two of us, and there was nobody else with us. She had her baby first and I had mine three days later. <b>Only the two of us were there.</b></p>
      <p><b>Her</b> son died in the night. In the night, while I was asleep, <b>she got up and took my son from beside me and held him, and put her dead son beside me instead.</b></p>
      <p>In the morning I looked at the baby beside me and <b>he was not my son.</b> The living one is my son and the dead one is hers."</p>
      <div class="sig">the second woman</div>
      <h4>The clerk's note</h4>
      <p>The court record adds one line about what happened next: the two of them said this to each other, backwards and forwards, <b>in front of the king</b>, until there was nothing left to say. Neither of them changed a single word.</p>
    </div>
    <div class="ref">Background: 1 Kings 3:22.</div>`
},

j04compare:{
  prev:"Nine claims each. The same nine, in the same order, with the names swapped.",
  body:`
    <p>When we have two stories that clash, the first thing we do is look for the bit that does not match: an extra detail, a pause, a fact one person knows and the other does not. There is none here, and it is worth seeing that properly.</p>
    <table class="ledger">
      <tr><th>What we measured</th><th>First woman</th><th>Second woman</th></tr>
      <tr><td>Separate claims made</td><td class="n">9</td><td class="n">9</td></tr>
      <tr><td>Order of the claims</td><td>the same</td><td>the same</td></tr>
      <tr><td>Details only she could know</td><td class="n"><b>0</b></td><td class="n"><b>0</b></td></tr>
      <tr><td>Times she contradicts herself</td><td class="n"><b>0</b></td><td class="n"><b>0</b></td></tr>
      <tr><td>Claims that can be checked</td><td class="n"><b>0</b></td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>Why "one story has more detail" does not work here</h4>
    <p>It is a good instinct in general — made-up stories are often thinner than real ones, or oddly stuffed with detail. It does not work here because <b>the two stories are the same story</b>. Same house, same three days, same night, same act, same discovery in the morning light. Swap the names in one and you have got the other.</p>
    <p>Take them to the <b>testimony grid</b> — the ⚖ button at the top — and match them claim by claim. You will not be able to separate them, and finding that out properly is the whole point.</p>
    <div class="ref">Background: 1 Kings 3:17–22.</div>`
},

j04neighbours:{
  prev:"Nobody visited. Nobody heard. Nobody was asked, because there was nobody to ask.",
  body:`
    <p>The obvious way out of a deadlock is to find somebody who was there. We looked.</p>
    <table class="ledger">
      <tr><th>What we asked</th><th>What we found</th></tr>
      <tr><td>Adults living in the house</td><td class="n"><b>2</b> — the two women</td></tr>
      <tr><td>Houses sharing a wall</td><td class="n"><b>none</b> — the house stands on its own</td></tr>
      <tr><td>Visitors on the day of either birth</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Midwives helping</td><td class="n"><b>none</b> — both women say they were alone</td></tr>
      <tr><td>Anyone who saw the two babies together</td><td class="n"><b>none</b></td></tr>
      <tr><td>Anyone awake in the house that night</td><td class="n"><b>nobody but the two of them</b></td></tr>
    </table>
    <h4>The point</h4>
    <p>Both women agree about this — it is the one thing they say the same way, with no argument: <b>there was nobody else in the house with us.</b> Each of them says it because it protects her own story. Between the two of them, they have shut the only door that outside evidence could have come through.</p>
    <p class="margin-note">One witness would settle this in a sentence. There is no witness. That is not a mistake in our investigation; it is a fact about that night.</p>
    <div class="ref">Background: 1 Kings 3:18.</div>`
},

j04newborns:{
  prev:"Three days apart, at that age, is no difference at all.",
  body:`
    <p>Every class that meets this case says the same thing within a minute: <i>just look at the baby.</i> It is a good instinct, it does not work, and it is worth knowing exactly why.</p>
    <table class="ledger">
      <tr><th>Test suggested</th><th>Why it fails here</th></tr>
      <tr><td>Size and weight</td><td>The babies were born <b>three days apart</b>. At a few days old, that is not something you can see.</td></tr>
      <tr><td>Family likeness</td><td>Newborn babies change week by week, and there is no father in this case to compare them with.</td></tr>
      <tr><td>Birthmarks or scars</td><td>The record says there was <b>no mark of any kind</b> on the living baby.</td></tr>
      <tr><td>Clothes or wrappings</td><td>Both women used the same cloth from the same house.</td></tr>
      <tr><td>Which woman the baby settles with</td><td>A newborn will feed from either. It does not show which one gave birth to him.</td></tr>
    </table>
    <h4>The awkward truth</h4>
    <p>Nothing about the baby's body, his looks, or how he behaves can tell you whose he is. <b>The one thing at the centre of this case cannot tell you anything.</b></p>
    <div class="ref">Made-up note. Background: 1 Kings 3:16–22, where nothing like this is ever offered as evidence.</div>`
},

j04order:{
  prev:"Nobody chose. It is not a clue about anything.",
  body:`
    <p>People often reach for the order the two women spoke in: who went first, who came forward, who brought the case. The record shuts that door too.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Record</th></tr>
      <tr><td>Who brought the case to the king?</td><td><b>Both of them</b>. They came together.</td></tr>
      <tr><td>Who chose who spoke first?</td><td><b>The court did, by its normal rule</b> — whoever is standing nearest the door speaks first</td></tr>
      <tr><td>Did either of them object to that?</td><td class="n"><b>no</b></td></tr>
      <tr><td>Did going first help the first speaker?</td><td>No — the second one answered every point in turn</td></tr>
      <tr><td>Did either get time to prepare?</td><td>Neither. They both spoke the same morning.</td></tr>
    </table>
    <h4>Why this matters</h4>
    <p>"The one who speaks first is telling the truth" and "the one who speaks first has had time to make something up" are both popular, and they cannot both be right. Here neither of them applies at all: the order was decided by where they happened to be standing, not by either woman.</p>
    <p class="margin-note">An accident is not evidence. It only looks like evidence because we badly want there to be some.</p>
    <div class="ref">Made-up court record. The account itself never says the order meant anything.</div>`
},

j04sword:{
  prev:"“Bring me a sword. Cut the living child in two, and give half to each of them.”",
  body:`
    <div class="plate">${SVG.j04sword}<div class="cap">Click to make it bigger. The sword, and the cradle it was never used on.</div></div>
    <p>Having heard both women and asked nothing else, the king said this:</p>
    <div class="stamp">RECORDED IN OPEN COURT</div>
    <p style="font-size:18px">"One says, <i>this is my son who is alive and your son is the dead one</i>; and the other says, <i>no, your son is the dead one and my son is the living one.</i></p>
    <p style="font-size:18px"><b>Bring me a sword. Cut the living child in two, and give half to one and half to the other.</b>"</p>
    <h4>What you must notice here</h4>
    <ul>
      <li>It is <b>a suggestion, said out loud, in front of both women</b>. It is not an order that was carried out and then regretted.</li>
      <li>The sword was fetched. It was never used. Our note on the hearing says the test was suggested once and carried out <b>zero</b> times.</li>
      <li>He did not ask either woman a question. He put a situation in front of them and let them answer it however they liked.</li>
    </ul>
    <p class="margin-note">Read that as an investigator, not as somebody reading a story. He had no evidence, and no way of getting any by asking questions. So he stopped asking — and made some.</p>
    <div class="ref">Background: 1 Kings 3:23–25.</div>`
},

j04outcome:{
  prev:"One of them said give him to her. The other said cut him in half.",
  body:`
    <p>The two answers came straight away, and for the first time in the whole hearing they were <b>not the same</b>.</p>
    <table class="ledger">
      <tr><th></th><th>What she said</th></tr>
      <tr><td><b>One woman</b></td><td>"My lord, <b>give her the living baby — please do not kill him</b>." The record says her heart went out to her son.</td></tr>
      <tr><td><b>The other</b></td><td>"<b>He will be neither mine nor yours. Cut him in two.</b>"</td></tr>
    </table>
    <h4>The ruling</h4>
    <p>"Give the first woman the living child, and do not kill him. <b>She is his mother.</b>"</p>
    <h4>Why "no decision was possible" does not work</h4>
    <p>That explanation says the evidence ran out, so the case could not be decided — and going by the evidence that existed <i>when the women stopped speaking</i>, it is exactly right. That is why it is such a good answer, and why it is worth taking seriously before you throw it out.</p>
    <p>It fails because of what happened. <b>A decision was reached, based on evidence, in open court.</b> That evidence simply did not exist an hour earlier, because nobody had yet done the thing that produced it.</p>
    <div class="ref">Background: 1 Kings 3:26–27.</div>`
},

j04why:{
  prev:"He could not find the difference between them. So he built a situation that would show it.",
  body:`
    <p>This is the page the whole case exists for, and we would like you to be able to argue it yourself.</p>
    <h4>The problem, said exactly</h4>
    <p>Two claims that match in every single way, with no witness, no document, no mark and nobody else involved. <b>Nothing that had already happened could tell the two women apart.</b> Every normal investigating tool works on the past — and the past here is a locked room with two people in it.</p>
    <h4>What the king did instead</h4>
    <p>He stopped trying to read the past and <b>made something happen right now</b>. He suggested something that a mother and a non-mother would have to answer differently — and, importantly, one where the honest answer <i>costs</i> the honest person the very thing she came for.</p>
    <ul>
      <li>The real mother has to choose between her son's life and her claim to him. She gives up the claim.</li>
      <li>The other woman loses nothing by saying yes, and has no reason to want the baby alive.</li>
      <li>So the two answers cannot match, no matter how carefully either woman had prepared, <b>because they are not answering a question about the past at all</b>.</li>
    </ul>
    <h4>Is it a trick?</h4>
    <p>That is worth arguing about, and the file does not settle it for you. But notice what it is not. It is not a guess, it is not a coin toss, and it is not the king simply liking one woman's face better. <b>It is a test with a result he expected, run in public, where both women could see exactly what was being asked of them.</b></p>
    <p class="margin-note">When the record calls this wisdom, this is what it means: not knowing the answer, but knowing how to make the answer show itself.</p>
    <div class="ref">Background: 1 Kings 3:28 · compare 1 Kings 3:9–12.</div>`
},

j04after:{
  prev:"The whole country heard about it, and worked something out about the court.",
  body:`
    <p>The decision did not stay in that room.</p>
    <table class="ledger">
      <tr><th>After the ruling</th><th>Record</th></tr>
      <tr><td>Who heard about it</td><td><b>All Israel</b></td></tr>
      <tr><td>What they decided</td><td>That the wisdom of God was in him, to do what was right</td></tr>
      <tr><td>Effect on the court</td><td>People were in awe of the king</td></tr>
      <tr><td>Appeals or complaints recorded</td><td class="n"><b>none</b></td></tr>
      <tr><td>What he had asked for when he became king</td><td>Not a long life, not riches, not his enemies dead — <b>an understanding heart, to tell right from wrong</b></td></tr>
    </table>
    <h4>Why we keep this page</h4>
    <p>Because of who these two women were. They had no family in the case, no husband, no property and no standing at all — the record is blunt about that and does not soften it. They were the last two people in the kingdom you would expect to get a careful hearing.</p>
    <p><b>They got the king himself, and they got his full attention.</b> The country was not amazed that the case was clever. It was amazed that it was <i>fair</i> — and that the court had taken that much care over these two.</p>
    <div class="ref">Background: 1 Kings 3:28 · 1 Kings 3:5–14.</div>`
}

},

theories:{
  detail:{
    title:"1. One story has more detail, so it is more likely true",
    claim:"Made-up stories are usually thinner, or oddly stuffed with detail. Read both carefully and one will give itself away.",
    verdict:"The comparison proves this wrong. Nine claims each, in the same order, with the same house, the same three days, the same night and the same discovery in the morning light. Neither story has a detail only that woman could know, neither contradicts itself, and neither has a single claim that can be checked against anything. Swap the names in one and you have the other. There is no difference to find."
  },
  neighbour:{
    title:"2. A neighbour could settle it",
    claim:"Somebody always knows. Ask the people next door, or the midwife, or whoever saw the two babies together.",
    verdict:"The neighbourhood record proves this wrong. The house stands on its own with no shared wall, there were no visitors on the day of either birth, no midwife was there, nobody ever saw the two babies together, and nobody was awake in the house except the two of them. Both women say it themselves, because it protects both their stories: there was nobody else in the house with us."
  },
  appearance:{
    title:"3. What the baby looks like settles it",
    claim:"Look at the baby. Size, family likeness, a birthmark — something will show which woman he belongs to.",
    verdict:"The note on newborns proves this wrong. The babies were born three days apart, which at that age you cannot see. The living baby has no mark of any kind. Both women used the same cloth from the same house. There is no father here to compare a family likeness with. And a newborn will feed from either woman. The one thing at the centre of this case cannot tell you anything."
  },
  first:{
    title:"4. The one who spoke first is more likely telling the truth",
    claim:"The woman who was wronged would be the one to bring the case and speak first. The other one is just answering back.",
    verdict:"The order of speaking proves this wrong. They came to the king together, and the order was decided by the court's normal rule — whoever stands nearest the door goes first — not chosen by either of them. Neither objected, neither had time to prepare, and the second one answered every point in turn. An accident is not evidence, however much we want it to be."
  },
  nodecision:{
    title:"5. No decision was possible with this evidence",
    claim:"Two identical claims and nothing to weigh them against. An honest court would have to say it cannot decide.",
    verdict:"What happened proves this wrong — and this is the one worth arguing about longest, because going by the evidence that existed when the women stopped speaking, it is completely correct. What it misses is that evidence is not only something you find. A decision was reached in open court, based on a difference both women showed in front of everybody, an hour after there was nothing at all to go on."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the hearing papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero.",
    questions:[
      "How many women came before the king?",
      "How many babies were alive when the case reached court?",
      "How many other people were in the house that night?",
      "How many tests did the king suggest before the case was settled?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is in the court record. Question 2 is in the household record. Question 3 is on the plan of the house. Question 4 is in our note on the hearing."
    ],
    reward:"Field Chest B is open. The comparison of the two statements, the neighbourhood record, the note on newborns and the record of who spoke first are now on the desk. The ⚖ Testimony grid at the top is now working."
  },
  l2:{
    wrong:"Not quite. Fill in the testimony grid — the ⚖ button at the top — and look at what the third column is telling you.",
    name:"Sealed Pouch C — what he called for",
    blurb:"A five-letter keyword. You will not find it by reading harder. Take both statements to the testimony grid, match them claim by claim, and see for yourself that there is nothing to choose between them. Then the grid will tell you what the king reached for instead.",
    questions:[
      "Open the ⚖ Testimony grid from the top bar.",
      "Nine claims. Tick each woman's column where she makes that claim.",
      "Then tick the third column wherever anything else in the file backs the claim up.",
      "Look at the shape of the finished grid. The keyword follows from it."
    ],
    hints:[
      "Work along each row. Both women make every single one of the nine claims — the stories are identical with the names swapped.",
      "Now do the third column. Go hunting for one thing anywhere in the file that backs up any of it on its own, and notice that you cannot find a single one. That column stays completely empty."
    ],
    reward:"Sealed Pouch C is open. The test, what each woman said, our analysis of why that counts as evidence, and the record of what happened afterwards are now on the desk."
  }
},

matrix:{
  title:"The Testimony Grid",
  blurb:"Nine claims, and two women making them. Tick each woman's column wherever she makes that claim — then tick the third column wherever <b>anything else in the file</b> backs it up on its own. Fill in all three columns honestly, and the shape of the grid is the answer.",
  corner:"The claim",
  verify:"Check my grid",
  cols:{
    a:{label:"The first woman says",  note:"her statement"},
    b:{label:"The second woman says", note:"her statement"},
    c:{label:"Backed up by anything else", note:"a witness, a record, a mark"}
  },
  rows:{
    house:{label:"We two live in one house",             note:""},
    born: {label:"We both had babies, three days apart", note:""},
    alone:{label:"There was nobody else in the house",   note:""},
    died: {label:"Her baby died in the night",           note:"each says it about the other"},
    lay:  {label:"She rolled onto him in her sleep",     note:""},
    took: {label:"She took my son while I was asleep",   note:""},
    laid: {label:"She put the dead baby beside me",      note:""},
    morn: {label:"In the morning I saw he was not mine", note:""},
    mine: {label:"The living baby is mine",              note:""}
  },
  foot:{
    label:"What the court had to weigh them up with",
    note:"witnesses, documents, objects, marks",
    cells:{a:"one story", b:"one story", c:"nothing"}
  },
  note:"Both women make every claim on this list. The third column is the one that matters: go hunting for a single thing anywhere in the file that backs up any of it on its own — a witness, a record, a mark on the baby, a neighbour — and notice what you find.",
  reveal:{
    lead:"Two columns ticked exactly the same all the way down, and a third one that is completely empty. That is not a grid you can read an answer out of, and it is not meant to be — it is a picture of a case with no evidence in it at all. The king could not tell the two women apart using anything that had already happened. So he stopped asking about the past and called for one object, in open court, in front of them both.",
    caption:"He never used it. He never meant to. It was there to make the two women answer differently — and it did."
  }
},

verdicts:{
  detail:    {text:"One story has more detail, and that is the one to believe."},
  neighbour: {text:"A neighbour or a midwife could have settled it if anyone had asked."},
  appearance:{text:"What the baby looks like shows which woman he belongs to."},
  first:     {text:"The woman who spoke first is the one telling the truth."},
  nodecision:{text:"There was no evidence, so no honest decision was possible."},
  made:      {text:"Nothing in the past could tell the two women apart — so the king made evidence in the present, by suggesting something only one of them could bear to allow."}
},

debrief:{
  lead:"Nothing that had already happened could tell these two women apart, and the file has closed every ordinary way of trying: the stories are identical, there is nobody to ask, the baby himself can tell you nothing, and who spoke first was just where they happened to be standing. What broke the case was not something anyone found out. The king suggested an action in open court that a mother and a non-mother would have to answer differently — and one where the honest answer cost the honest woman the very thing she came for. He never used the sword. He used the question.",
  questions:[
    "Was the king's test fair? Argue it from the point of view of the woman who nearly lost her son to it, and then from the point of view of a court with no evidence at all.",
    "The file calls this 'making evidence' rather than finding it. Where else do people settle a question by setting up a situation instead of hunting for proof — in science, in a courtroom, in a classroom?",
    "The real mother won by giving up her claim. What does this case suggest about the difference between wanting something and loving it?",
    "The two women had no standing, no family in the case and nothing to bargain with, and the king himself heard them. Why might the record make a point of telling us who they were?"
  ]
}

};

registerEasy("jm04", EASY_JM04);
