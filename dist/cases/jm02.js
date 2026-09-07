"use strict";
/* ============================================================
   CASE JM-02 — THE MISSING BOY
   Jerusalem, about AD 8.  Source: Luke 2:41-52.
   ============================================================ */

SVG.j02road = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j02road.jpg" x="0" y="0" width="1536" height="1024"/><text x="549" y="58" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="176" lengthAdjust="spacingAndGlyphs">JERUSALEM</text><text x="549" y="82" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="168" lengthAdjust="spacingAndGlyphs">the feast is here</text><text x="815" y="355" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="220" lengthAdjust="spacingAndGlyphs">THE ROAD NORTH</text><text x="815" y="379" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="258" lengthAdjust="spacingAndGlyphs">one day out, and he was missed</text><text x="1241" y="546" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="218" lengthAdjust="spacingAndGlyphs">THE FIRST CAMP</text><text x="1241" y="570" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="224" lengthAdjust="spacingAndGlyphs">every relative was here</text></svg>`;
SVG.j02courts = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j02courts.jpg" x="0" y="0" width="1536" height="1024"/><text x="171" y="361" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="198" lengthAdjust="spacingAndGlyphs">THE SANCTUARY</text><text x="171" y="385" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="110" lengthAdjust="spacingAndGlyphs">priests only</text><text x="888" y="406" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="212" lengthAdjust="spacingAndGlyphs">THE COURT OF ISRAEL</text><text x="888" y="430" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="162" lengthAdjust="spacingAndGlyphs">open to the crowd</text><text x="1375" y="305" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="200" lengthAdjust="spacingAndGlyphs">THE COLONNADE</text><text x="1375" y="329" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="182" lengthAdjust="spacingAndGlyphs">the teachers sit here</text></svg>`;
SVG.j02log = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j02log.jpg" x="0" y="0" width="1536" height="1024"/><text x="768" y="262" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="40" font-weight="600" fill="#4a3520" textLength="250" lengthAdjust="spacingAndGlyphs">SEARCH LOG</text><text x="768" y="300" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">Jerusalem &#183; three days</text></svg>`;

const JM02_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j02letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Chronicle Society · Department of Unsolved Antiquities",
  prev:"A twelve-year-old is missing in a city of tens of thousands. It takes three days.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A family from Nazareth goes up to Jerusalem for the festival, as they do every year. The city is full — perhaps four or five times its usual size. When the feast ends they set out for home in a large travelling company of relatives and neighbours.</p>
    <p><b>A full day out, they discover their twelve-year-old son is not with the company.</b> They turn round. It takes them three days to find him.</p>
    <p>Three days is a very long time. That is the whole of the case: not what happened to him, but why finding him took as long as it did.</p>
    <h4>Your task</h4>
    <p>Five explanations have been offered for those three days. Close four of them with documents. Do not settle for the one that makes somebody look bad — the file is unusually kind to everybody in it, and that is part of the point.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before deciding anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened with the <b>search grid</b> — the 🗺 button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">A search is a list of places, in an order. Somebody chose that order.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Luke 2:41–52.</div>`
},
{
  id:"j02caravan", stage:0, kind:"Custom and practice", title:"How a Festival Caravan Travels",
  sub:"Society note on pilgrim companies",
  prev:"Children travelled with the company, not with their parents. Everybody's, all together.",
  x:52, y:22, rot:3, w:212,
  body:`
    <p>Modern readers arrive at this file already deciding the parents were careless. Before you do, here is how these journeys actually worked.</p>
    <table class="ledger">
      <tr><th>Feature</th><th>Practice</th></tr>
      <tr><td>Who travels</td><td>A whole village or extended family together — often 100 or more</td></tr>
      <tr><td>Where children walk</td><td><b>With the company</b>, among cousins and neighbours, not beside their parents</td></tr>
      <tr><td>Why</td><td>The road is safer in numbers, and every adult watches every child</td></tr>
      <tr><td>Order of march</td><td>Women and younger children ahead, men behind — the two groups meet at camp</td></tr>
      <tr><td>First stop</td><td><b>One day out.</b> The company camps and families reassemble for the evening meal</td></tr>
    </table>
    <h4>What follows from this</h4>
    <p>A twelve-year-old walking out of Jerusalem among a hundred relatives is exactly where he is supposed to be. Nobody is watching him <i>specifically</i>, because everybody is watching all of them.</p>
    <p class="margin-note">The first moment a family is alone together, and can count their own children, is the evening of the first day. That is not neglect. That is the system working exactly as designed — right up until it doesn't.</p>
    <div class="ref">Background: Luke 2:44 — "supposing him to be in the company".</div>`
},
{
  id:"j02search", stage:0, kind:"Official record", title:"The Search Record",
  sub:"Filed with the city watch",
  prev:"Three days. No ransom demand, no report, no sighting on any road.",
  x:78, y:26, rot:-4, w:210,
  body:`
    <p>Any search for a missing child in a festival city is registered with the watch. This is what the register holds.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Record</th></tr>
      <tr><td>Days searched</td><td class="n"><b>3</b></td></tr>
      <tr><td>Ransom demands received</td><td class="n"><b>none</b></td></tr>
      <tr><td>Reports of a child taken, that week</td><td class="n"><b>none</b></td></tr>
      <tr><td>Sightings on the roads out of the city</td><td class="n"><b>none</b></td></tr>
      <tr><td>Bodies or injuries answering the description</td><td class="n"><b>none</b></td></tr>
      <tr><td>Slave-market entries answering the description</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>The watch officer's remark</h4>
    <p>"When a child is taken in this city we hear about it, and quickly — either from the family who are being asked for money, or from the gates, or from the market. In this case we heard nothing at all from anybody, for three days, and then the family came back to say they had found him themselves.</p>
    <p><b>Nothing was ever done to this boy.</b> That much I would put my name to."</p>
    <div class="ref">Fictional register, consistent with Luke 2:44–46.</div>`
},
{
  id:"j02parents", stage:0, kind:"Statements", title:"The Parents' Accounts",
  sub:"Taken separately, at the Society's request",
  prev:"Two accounts, taken apart. They agree, including on the part that hurts.",
  x:26, y:56, rot:5, w:212,
  body:`
    <div class="doc-body">
      <h4>The mother</h4>
      <p>"He said nothing to me. Not a word about staying, not a hint of it. If he had told me I would have remembered it, because I would have said no.</p>
      <p>We looked for him among our relatives and our neighbours first — that is where a child of ours would be. When he was not there we went back. <b>Both of us went back.</b> We did not send a servant; there was no servant to send.</p>
      <p>Three days. I want that written down, because people say it lightly. Three days."</p>
      <h4>The father</h4>
      <p>"Nothing was said to me either, and we have spoken about it since and neither of us is protecting the other on this. He did not ask and we did not refuse.</p>
      <p>She has told you it was both of us and it was. We searched together and we did not stop."</p>
      <h4>What the Society notes</h4>
      <p>The statements were taken apart. They agree on the one point that would most have excused the parents if they could have claimed it — that he had asked and been given permission, or that they had misheard. <b>Neither of them takes that way out.</b> Accounts that agree on the inconvenient thing are worth more than accounts that agree on the convenient one.</p>
    </div>
    <div class="ref">Background: Luke 2:48 — "your father and I have sought you anxiously".</div>`
},
{
  id:"j02feast", stage:0, kind:"Calendar", title:"The Festival Calendar",
  sub:"Which feasts this family travelled for",
  prev:"Three great feasts in the year. This family made the journey for one.",
  x:56, y:52, rot:-2, w:206,
  body:`
    <p>Three great pilgrim feasts stand in the year, and a family from Galilee is a hard four days' walk from the city.</p>
    <table class="ledger">
      <tr><th>Feast</th><th>Season</th><th>Did this family travel for it?</th></tr>
      <tr><td>Passover</td><td>spring</td><td><b>Yes — every year</b></td></tr>
      <tr><td>Weeks (Pentecost)</td><td>early summer</td><td>no</td></tr>
      <tr><td>Tabernacles</td><td>autumn</td><td>no</td></tr>
    </table>
    <h4>Note</h4>
    <p>The record is specific: his parents went to Jerusalem <b>every year at the feast of the Passover</b>. Whatever else was or was not observed, the family made the journey for <b>one</b> feast a year, and this was it.</p>
    <p class="margin-note">Which matters more than it looks. This was not a family in Jerusalem often. It was the one week in the year they were there at all — and he had been coming since he could walk.</p>
    <div class="ref">Background: Luke 2:41 · Deuteronomy 16:16.</div>`
},
{
  id:"j02relatives", stage:0, kind:"Statements", title:"The Company's Statements",
  sub:"Relatives and neighbours of the travelling party",
  prev:"A hundred people, and not one of them had seen him since the city.",
  x:80, y:56, rot:4, w:206,
  body:`
    <p>Everybody in the company was asked the same two questions: when did you last see the boy, and did he say anything to you?</p>
    <table class="ledger">
      <tr><th>Answer</th><th>How many gave it</th></tr>
      <tr><td>"I assumed he was with somebody else in the company"</td><td class="n">most</td></tr>
      <tr><td>"I saw him in the city, before we formed up"</td><td class="n">several</td></tr>
      <tr><td>"I saw him on the road out"</td><td class="n"><b>none</b></td></tr>
      <tr><td>"He told me he was staying"</td><td class="n"><b>none</b></td></tr>
      <tr><td>"He seemed distressed or unwilling to leave"</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why the Society keeps this page</h4>
    <p>Notice the shape of it. A hundred people each correctly assumed the boy was safe, and the assumption was reasonable every single time — and the sum of a hundred reasonable assumptions is that nobody actually knew.</p>
    <p>Notice too what nobody reports: no argument, no sulking, no scene. Whatever he did, he did not storm off.</p>
    <div class="ref">Fictional statements, consistent with Luke 2:44.</div>`
},
{
  id:"j02road", stage:0, kind:"Plan", title:"The Road North and the First Camp",
  sub:"Jerusalem to the day-one camp", thumb:"j02road",
  prev:"One day out, at the first camp, the families count their own children.",
  x:14, y:44, rot:2, w:218,
  body:`
    <div class="plate">${SVG.j02road}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Jerusalem</b> stands on its ridge at the top of the road. The festival crowd leaves by the northern gate in companies, village by village.</li>
      <li><b>The road north</b> runs a full day's walk down into the valley. There is nowhere on it a child could be mislaid unnoticed — it is open ground with a hundred people on it.</li>
      <li><b>The first camp</b> is where the company stops for the night, and where the two halves of the march — the women and children ahead, the men behind — come back together.</li>
      <li>Every relative in the company was at that camp. He was not.</li>
    </ul>
    <p class="margin-note">The distance matters. Whatever happened, it happened before the company left the city — because the road itself has no hiding places on it.</p>
    <div class="ref">Background: Luke 2:44. A day's journey from Jerusalem is roughly 30 km.</div>`
},
{
  id:"j02courts", stage:0, kind:"Plan", title:"Plan of the Temple Courts",
  sub:"The largest single space in the city", thumb:"j02courts",
  prev:"Colonnades, courts, and the place where the teachers sat.",
  x:40, y:76, rot:-5, w:214,
  body:`
    <div class="plate">${SVG.j02courts}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li>The temple complex is enormous — the biggest enclosed space in Jerusalem, and at festival time the busiest.</li>
      <li><b>The sanctuary</b> at the centre is closed to everyone but priests.</li>
      <li><b>The court of Israel</b> and the great outer court are open, and during a feast they are packed.</li>
      <li><b>The colonnades</b> round the edge are where the teachers of the law sit through the day, with anyone who wants to listen sitting around them. They are open to the public, and a boy sitting among the listeners would draw no attention at all.</li>
    </ul>
    <p class="margin-note">This is a public place. Not a hiding place, not a restricted one — a place anybody could walk into, including two frantic parents, on any of three days.</p>
    <div class="ref">Background: Luke 2:46 — "in the temple, sitting in the midst of the teachers".</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j02log", stage:1, kind:"Search record", title:"The Search Log",
  sub:"Field Chest B · district by district, day by day", thumb:"j02log",
  prev:"Eight districts. Three days. Somebody chose the order.",
  x:28, y:26, rot:-3, w:216,
  body:`
    <div class="plate">${SVG.j02log}<div class="cap">Click to enlarge. The log as the parents kept it.</div></div>
    <p>The city was searched district by district. This is the log, in the order it was worked.</p>
    <table class="ledger">
      <tr><th>Day</th><th>Districts searched</th></tr>
      <tr><td><b>One</b></td><td>The northern gate quarter · The caravan lodgings · The gates and walls</td></tr>
      <tr><td><b>Two</b></td><td>The market streets · The upper city · The lower city and Siloam · The pool of Bethesda</td></tr>
      <tr><td><b>Three</b></td><td><b>The temple courts</b></td></tr>
    </table>
    <h4>Note from the Society</h4>
    <p>Take this log to the <b>search grid</b> — the 🗺 button in the top bar — and mark off every district against the day it was searched. Eight districts, three days, and one square in the grid that sits a long way from the rest.</p>
    <p class="margin-note">There is no mystery about where he was. The mystery is about the order.</p>
    <div class="ref">Fictional log, reconstructing the three days of Luke 2:46.</div>`
},
{
  id:"j02districts", stage:1, kind:"Society note", title:"How the Districts Were Chosen",
  sub:"Field Chest B · the reasoning behind the order",
  prev:"Every district was searched for a reason. So was the one they left till last.",
  x:58, y:24, rot:4, w:208,
  body:`
    <p>The parents were not searching at random. Each district was chosen because it answered a question they were asking.</p>
    <table class="ledger">
      <tr><th>District</th><th>Why they looked there</th></tr>
      <tr><td>The northern gate quarter</td><td>Where the company formed up. Perhaps he was still standing there.</td></tr>
      <tr><td>The caravan lodgings</td><td>Where they had stayed. Perhaps he went back to the room.</td></tr>
      <tr><td>The gates and walls</td><td>Perhaps he had tried to follow and been turned back.</td></tr>
      <tr><td>The market streets</td><td>Perhaps he was hungry, or had been drawn in by the stalls.</td></tr>
      <tr><td>The upper city</td><td>Perhaps somebody had taken him in.</td></tr>
      <tr><td>The lower city and Siloam</td><td>Perhaps he had come to harm at the water.</td></tr>
      <tr><td>The pool of Bethesda</td><td>The same, and where the sick and the lost gather.</td></tr>
      <tr><td><b>The temple courts</b></td><td><b>—</b></td></tr>
    </table>
    <h4>The blank line</h4>
    <p>There is no reason written against the last one, and the Society thinks that is the most interesting thing in the file. Every other district answers the question <i>where would a lost, frightened or endangered child end up?</i></p>
    <p>The temple answers a different question — <i>where would this child choose to be?</i> — and nobody thought to ask it for two days.</p>
    <div class="ref">Fictional analysis of Luke 2:45–46.</div>`
},
{
  id:"j02roads", stage:1, kind:"Official record", title:"The Road Watch",
  sub:"Field Chest B · every road out of the city",
  prev:"Nobody left with him. Nobody was asking for money.",
  x:80, y:44, rot:-6, w:206,
  body:`
    <p>When a child goes missing in a walled city, the first question is whether he is still inside it. The watch answered that one immediately.</p>
    <table class="ledger">
      <tr><th>Check</th><th>Result</th></tr>
      <tr><td>Gates open during the search</td><td>all, as normal for festival week</td></tr>
      <tr><td>Parties leaving with an unaccounted child</td><td class="n"><b>none reported</b></td></tr>
      <tr><td>Traders' caravans searched on departure</td><td class="n">eleven</td></tr>
      <tr><td>Children found in them</td><td class="n"><b>none unaccounted for</b></td></tr>
      <tr><td>Ransom demands, threats, or approaches to the family</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why this closes a door</h4>
    <p>A taking has a shape. Somebody moves the child, and somebody wants something — money, labour, or silence. In three days of an open, searched, gossiping city at its busiest, <b>not one part of that shape appeared</b>.</p>
    <p class="margin-note">He was inside the walls the whole time, and no one had him.</p>
    <div class="ref">Fictional record consistent with the account, which reports no crime at all.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j02found", stage:2, kind:"Field report", title:"Where He Was Found",
  sub:"Sealed Pouch C · the third day",
  prev:"Sitting among the teachers. Listening, and asking questions.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <p>They found him in the temple courts, in the colonnade where the teachers sat.</p>
    <table class="ledger">
      <tr><th>Observation</th><th>Record</th></tr>
      <tr><td>What he was doing</td><td><b>Sitting among the teachers, listening and asking questions</b></td></tr>
      <tr><td>Condition</td><td>Unharmed. Not hungry, not frightened, not hiding.</td></tr>
      <tr><td>How long he had been there</td><td>Since the company left, so far as anyone could tell</td></tr>
      <tr><td>Reaction of the teachers</td><td>Astonished at his understanding and his answers</td></tr>
      <tr><td>His reaction on being found</td><td>Surprise — that they had been looking anywhere else</td></tr>
    </table>
    <h4>Why this page settles an explanation</h4>
    <p>A lost child is frightened, and a frightened twelve-year-old does not spend three days in sustained conversation with adult scholars. He hides, or he cries, or he asks the first adult he sees for help — and in a city this full he would have found one in minutes.</p>
    <p><b>He was not lost.</b> He knew exactly where he was, and so, it turns out, did everyone sitting around him.</p>
    <div class="ref">Background: Luke 2:46–47.</div>`
},
{
  id:"j02sayings", stage:2, kind:"Statement", title:"What He Said When They Found Him",
  sub:"Sealed Pouch C",
  prev:"“Why were you looking for me?”",
  x:56, y:30, rot:4, w:208,
  body:`
    <div class="doc-body">
      <p>His mother spoke first. "Son, why have you treated us this way? Look — your father and I have been searching for you, in great distress."</p>
      <div class="stamp">RECORDED REPLY</div>
      <p style="font-size:18px">"<b>Why were you looking for me? Did you not know that I must be about my Father's business?</b>"</p>
      <h4>What the Society notices</h4>
      <ul>
        <li>It is a question, not an excuse. He does not say he forgot, or lost track of the time, or meant to catch them up.</li>
        <li>He assumes they already knew where he would be — which is why he never thought to tell anyone.</li>
        <li>The record adds, plainly, that <b>they did not understand what he said to them</b>. Nobody in this file is pretending to have understood it at the time.</li>
      </ul>
      <p class="margin-note">Two people searched every place a child might be taken to. He was in the one place he would go to.</p>
    </div>
    <div class="ref">Background: Luke 2:48–50.</div>`
},
{
  id:"j02after", stage:2, kind:"Follow-up file", title:"What Happened Next",
  sub:"Sealed Pouch C",
  prev:"He went home with them, and stayed there for eighteen years.",
  x:78, y:60, rot:-5, w:206,
  body:`
    <p>This page is here because it closes the last explanation, and because it is the part everybody forgets.</p>
    <table class="ledger">
      <tr><th>After the third day</th><th>Record</th></tr>
      <tr><td>Did he stay in Jerusalem?</td><td><b>No — he went down with them to Nazareth</b></td></tr>
      <tr><td>His conduct at home afterwards</td><td><b>He was subject to them</b></td></tr>
      <tr><td>Further incidents of this kind</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Years before he is heard of again</td><td class="n">about 18</td></tr>
      <tr><td>His mother's response</td><td>She kept all these sayings in her heart</td></tr>
    </table>
    <h4>Why this kills the runaway</h4>
    <p>A child running from his family does not walk home with them the same afternoon and then live quietly under their roof for the next eighteen years. Running away is a direction. <b>This was a destination.</b></p>
    <p class="margin-note">And the mother, who had every reason to want the three days forgotten, is the one who kept them on record.</p>
    <div class="ref">Background: Luke 2:51–52.</div>`
},
{
  id:"j02why", stage:2, kind:"Society analysis", title:"Why the Last Place Should Have Been the First",
  sub:"Sealed Pouch C",
  prev:"The search was competent, thorough, and looking for the wrong child.",
  x:44, y:76, rot:2, w:212,
  body:`
    <p>The Society keeps this case not because it is hard to solve but because of what the solution shows about searching.</p>
    <h4>The search was good</h4>
    <p>Eight districts in three days, in a city swollen to several times its normal size, with two people and no help. Nothing in the log is lazy or stupid. Every district they chose was a sensible answer to the question they were asking.</p>
    <h4>The question was wrong</h4>
    <p>They asked: <b>where does a lost child end up?</b> The right question was: <b>where does <i>this</i> child go?</b> The first question produces seven districts and three days. The second produces one district and an afternoon.</p>
    <h4>Why nobody asked it</h4>
    <p>Because he was twelve, and the assumption underneath the whole search was that a twelve-year-old is something that happens to a city rather than someone who makes a choice in it. The one place they left until last is the one place he had chosen on purpose.</p>
    <h4>What to take out of the file</h4>
    <p class="margin-note">When a search fails, it is usually not because the searchers are careless. It is because everybody is answering a question nobody has said out loud — and the place you have not looked is the place your question rules out.</p>
    <div class="ref">Background: Luke 2:41–52 · compare Psalm 27:4.</div>`
}
];

const JM02_THEORIES = [
  {
    id:"taken",
    title:"1. He was taken",
    claim:"A festival city is full of strangers and a twelve-year-old is worth money. Somebody took him.",
    answer:"j02roads",
    verdict:"The road watch kills it. Every road out was watched, eleven departing caravans were searched, and no unaccounted child was found in any of them. No ransom demand, no threat and no approach was ever made to the family, and the watch had no report of a child taken that week. A taking has a shape — somebody moves the child and somebody wants something — and in three days of an open, crowded, gossiping city not one part of that shape appeared."
  },
  {
    id:"lost",
    title:"2. He was lost and frightened",
    claim:"He got separated in the crowd, panicked, and could not find his way back to a family that had already gone.",
    answer:"j02found",
    verdict:"Where he was found kills it. He was sitting in the colonnade among the teachers, listening and asking questions, unharmed and unhurried, and had been there the whole time. A frightened child hides or cries or asks the first adult he sees — and in that crowd he would have found one in minutes. He was surprised they had been looking anywhere else."
  },
  {
    id:"ranaway",
    title:"3. He ran away from the family",
    claim:"Twelve is exactly the age for it. He stayed behind deliberately to get away from them.",
    answer:"j02after",
    verdict:"What happened next kills it. He went down with them to Nazareth the same day and lived under their roof for the next eighteen years with nothing of the kind ever recorded again. Running away is a direction — away from something. This was a destination, and when they came for him he simply went home."
  },
  {
    id:"careless",
    title:"4. The parents were careless",
    claim:"They walked a full day without checking their own child was with them. Any parent would have noticed.",
    answer:"j02caravan",
    verdict:"The caravan custom kills it. Children did not walk beside their parents; they walked with the company, among cousins and neighbours, with the whole group watching all of them. The march split into two parts that only reunited at the evening camp — which is the first moment any family could count its own children. Assuming he was in the company was not negligence; it was the correct assumption on every previous journey they had made."
  },
  {
    id:"told",
    title:"5. He had told them and they forgot",
    claim:"He asked to stay, got a distracted yes, and two exhausted parents forgot the conversation.",
    answer:"j02parents",
    verdict:"The parents' accounts kill it. Taken separately, both say plainly that he said nothing — and that is the one answer that would have excused them if they could have claimed it. Neither takes the way out. The company's statements agree: not one of a hundred relatives was told he was staying. Accounts that agree on the inconvenient thing are worth more than accounts that agree on the convenient one."
  }
];

const JM02_LOCKS = [
  {
    id:"l1", type:"number", code:"1321", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the search papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. Every answer is a single digit.",
    questions:[
      "How many days out from Jerusalem was the company when he was missed?",
      "How many days did the search take?",
      "How many people searched for him?",
      "How many feasts a year did this family travel to Jerusalem for?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the note on how a festival caravan travels. Question 2 is the search record. Question 3 is the parents' accounts. Question 4 is the festival calendar.",
      "The company camps one day out. The search took three days. Both parents went back — two of them. And the calendar says this family went up for one feast a year, the Passover."
    ],
    reward:"Field Chest B is open: the search log, the note on how the districts were chosen and the road watch are now on the desk. The 🗺 Search grid in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"TEMPLE", len:6,
    wrong:"Not that. Fill in the search grid from the log — the 🗺 button in the top bar. The district that stands alone on day three is the keyword.",
    name:"Sealed Pouch C — the last district",
    blurb:"A six-letter keyword. It is not written as an answer anywhere in the file. You get it by taking the search log to the search grid and marking off every district against the day it was searched — then looking at the shape that appears.",
    questions:[
      "Open the 🗺 Search grid from the top bar.",
      "Work down the search log and tick each district against the day it was searched.",
      "Seven districts fill the first two days.",
      "One district sits alone on the third. Its name is the keyword."
    ],
    hints:[
      "The log lists three districts on day one, four on day two, and one on day three.",
      "Mark all eight and look at the third column. Only one square in it is ticked.",
      "The district they left until last is the temple. Six letters."
    ],
    reward:"Sealed Pouch C is open: where he was found, what he said, what happened next, and the Society's analysis of the search are now on the desk."
  }
];

const JM02_MATRIX = {
  button:"🗺 Search grid",
  title:"The Search Grid",
  blurb:"Eight districts of Jerusalem, three days of searching. Work down <b>The Search Log</b> and tick each district against the day it was searched. When the grid is right, the shape of the search will tell you the keyword.",
  corner:"District",
  verify:"Check the grid",
  mark:"✔",
  cols:[
    {id:"d1", label:"Day one",   note:"the day they came back"},
    {id:"d2", label:"Day two",   note:""},
    {id:"d3", label:"Day three", note:"the day they found him"}
  ],
  rows:[
    {id:"gate",    label:"The northern gate quarter", note:"where the company formed up"},
    {id:"lodge",   label:"The caravan lodgings",      note:"where they had stayed"},
    {id:"walls",   label:"The gates and walls",       note:""},
    {id:"market",  label:"The market streets",        note:""},
    {id:"upper",   label:"The upper city",            note:""},
    {id:"lower",   label:"The lower city and Siloam", note:""},
    {id:"pool",    label:"The pool of Bethesda",      note:"where the lost and the sick gather"},
    {id:"temple",  label:"The temple courts",         note:"the largest space in the city"}
  ],
  truth:["gate|d1","lodge|d1","walls|d1",
         "market|d2","upper|d2","lower|d2","pool|d2",
         "temple|d3"],
  note:"Seven of the eight districts answer the question <i>where does a lost child end up?</i> Look at which one does not — and at how long it waited.",
  reveal:{
    lead:"There it is. Seven districts searched in two days, and one district standing alone on the third — the biggest, most public, most obvious place in Jerusalem, and the last place they looked.",
    answer:"TEMPLE",
    caption:"That is the keyword for Sealed Pouch C. The debrief asks the harder question: why was it last?"
  }
};

const JM02_VERDICTS = [
  {id:"taken",    text:"He was taken by someone in the festival crowd."},
  {id:"lost",     text:"He was lost and frightened and could not find his way back."},
  {id:"ranaway",  text:"He stayed behind deliberately to get away from his family."},
  {id:"careless", text:"His parents were careless and did not check he was with them."},
  {id:"told",     text:"He told them he was staying and, in the rush, they forgot."},
  {id:"chose",    text:"He never left the city. He stayed, deliberately and openly, in the temple — the one place he would choose, which is why it was the last place anybody thought to look."}
];

const CASE_JM02 = {
  id:"jm02", code:"CASE JM-02", title:"The Missing Boy",
  period:"Jerusalem · c. AD 8", colour:"#5c7d8a", poster:"poster_jm02",
  teaser:"A family leaves the festival in a company of a hundred relatives. A full day out, a twelve-year-old is not among them. It takes two exhausted parents three days to find a child who was never hiding.",
  introSub:"A day out, and the boy is not in the company.",
  items:JM02_ITEMS, theories:JM02_THEORIES, locks:JM02_LOCKS, verdicts:JM02_VERDICTS,
  matrix:JM02_MATRIX,
  correct:"chose",
  boardTitle:"Why It Took Three Days",
  boardIntro:"Five explanations have been offered for those three days. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"Nothing was done to this boy, he was not lost, he did not run, his parents were not careless and nobody forgot a conversation. State what the file will actually support.",
  debrief:{
    lead:"Every explanation that makes somebody at fault has been closed. He was not taken, not lost, not running and not forgotten, and the search that took three days was careful, exhausting and entirely competent. It failed for two days because everybody was answering the question <i>where does a lost child end up?</i> — and the answer to that question rules out the temple. He was where he had chosen to be, in the most public place in the city, and he was surprised anyone had looked elsewhere.",
    questions:[
      "The parents searched seven districts before the temple. Was that a mistake, or the sensible order given what they knew at the time?",
      "A hundred relatives each made a reasonable assumption and the result was that nobody knew where he was. Where else does that pattern show up — at school, in a team, in a family?",
      "His answer to his mother is a question, not an apology. Is that fair to her? The record says plainly that they did not understand him — what does it cost a family when somebody they love is doing something they cannot follow?",
      "He went home afterwards and lived quietly for eighteen years. Why might the writer have included that detail, when the dramatic part of the story was already over?"
    ],
    refs:"Luke 2:41–52 · Deuteronomy 16:16 · Psalm 27:4 · 1 Samuel 3:1–10"
  },
  teacher:{
    answers:"Lock 1 code <b>1321</b> (1 day out · 3 days searching · 2 parents · 1 feast a year). Lock 2 keyword <b>TEMPLE</b>, obtained from the 🗺 Search grid: three districts on day one (northern gate quarter, caravan lodgings, gates and walls), four on day two (market streets, upper city, lower city and Siloam, pool of Bethesda), and the temple courts alone on day three.",
    pairs:"Taken → The Road Watch; lost and frightened → Where He Was Found; ran away → What Happened Next; careless parents → How a Festival Caravan Travels; told them and they forgot → The Parents' Accounts.",
    conclusion:"He never left Jerusalem. He stayed behind deliberately and openly in the temple courts, and the search took three days because everybody was looking for a lost child rather than for this one.",
    prompts:"\"Where would a lost child go? Now — where would THIS child go?\" · \"Who actually saw him on the road?\" · \"If he were running away, why did he go home the same afternoon?\" · \"Look at the third column of your grid. Why is it nearly empty?\"",
    extra:"This case rewards a class discussion before the pinboard: ask them to predict where they would search first, write the list on the board, and see how long it takes anyone to say the temple. They will reproduce the parents' order almost exactly, which makes the debrief land much harder. Note for sensitivity: some students will have real experience of being lost or of a family member going missing — the file deliberately contains no crime, no harm and no blame, and it is worth saying so at the start."
  }
};

registerCase(CASE_JM02);
