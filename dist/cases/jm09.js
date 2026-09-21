"use strict";
/* ============================================================
   CASE JM-09 — THE MOULDY BREAD
   Gibeon.  Source: Joshua 9.
   ============================================================ */

SVG.j09props = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j09props.jpg" x="0" y="0" width="1536" height="1024"/><text x="477" y="92" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="144" lengthAdjust="spacingAndGlyphs">THE SACK</text><text x="477" y="116" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="238" lengthAdjust="spacingAndGlyphs">torn, and freshly re-stitched</text><text x="1054" y="92" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="220" lengthAdjust="spacingAndGlyphs">THE WINESKINS</text><text x="1054" y="116" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="206" lengthAdjust="spacingAndGlyphs">split, and tied up again</text><text x="1164" y="703" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="152" lengthAdjust="spacingAndGlyphs">THE BREAD</text><text x="1164" y="727" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="226" lengthAdjust="spacingAndGlyphs">dry, cracked &#8212; and not old</text></svg>`;
SVG.j09map = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j09map.jpg" x="0" y="0" width="1536" height="1024"/><text x="1191" y="86" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="140" lengthAdjust="spacingAndGlyphs">GIBEON</text><text x="1191" y="110" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="216" lengthAdjust="spacingAndGlyphs">the great city of the four</text><text x="229" y="166" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="190" lengthAdjust="spacingAndGlyphs">CHEPHIRAH</text><text x="229" y="190" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">half a day from Gibeon</text><text x="1372" y="358" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">KIRIATH-JEARIM</text><text x="1372" y="382" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="150" lengthAdjust="spacingAndGlyphs">a morning&#8217;s walk</text><text x="234" y="839" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="158" lengthAdjust="spacingAndGlyphs">BEEROTH</text><text x="234" y="863" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="198" lengthAdjust="spacingAndGlyphs">the nearest of the four</text></svg>`;
SVG.j09treaty = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j09treaty.jpg" x="0" y="0" width="1536" height="1024"/><text x="768" y="250" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="44" font-weight="600" fill="#4a3520" textLength="430" lengthAdjust="spacingAndGlyphs">TREATY OF PEACE</text><text x="768" y="306" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="380" lengthAdjust="spacingAndGlyphs">between Israel and the four cities</text><text x="768" y="760" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".85" textLength="380" lengthAdjust="spacingAndGlyphs">sworn by the leaders of the congregation</text></svg>`;

const JM09_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j09letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"A treaty signed with a country that turns out to be down the road.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A delegation arrives at the Israelite camp saying they have come from a very distant country, and they have brought their journey with them: split wineskins, a torn sack, sandals worn through and mended, and bread gone dry and crumbling in the bag.</p>
    <p>They ask for a treaty. They get one, sworn on oath by the leaders of Israel.</p>
    <p><b>Three days later the truth comes out. They live about a day's walk away.</b> Four cities, close enough to see from the hills, and Israel has just sworn never to touch them.</p>
    <h4>Your task</h4>
    <p>Five explanations have been offered. The interesting one is not <i>how did they do it</i> — the props are on your desk and they are not very good props. It is <b>how a careful people signed anyway</b>, and the answer to that is one line in the record that is easy to read straight past.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Look at the props properly before you read anybody's opinion of them.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened with the <b>object study</b> — the 🔍 button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Nobody in this file lies to Israel about anything except distance. That is worth noticing early.</p>
    <div class="sig">Luke</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Joshua 9.</div>`
},
{
  id:"j09props", stage:0, kind:"Object study", title:"The Props, Laid Out",
  sub:"Everything the delegation carried, as received", thumb:"j09props",
  prev:"Sacks, wineskins, sandals and bread — all of it worn, and none of it right.",
  x:52, y:22, rot:3, w:216,
  body:`
    <div class="plate">${SVG.j09props}<div class="cap">Click the plate to enlarge it.</div></div>
    <p>The delegation left everything behind when the truth came out, so the Bureau has the whole set.</p>
    <table class="ledger">
      <tr><th>Item</th><th>Presented as</th><th>First impression</th></tr>
      <tr><td>Sacks</td><td>Worn out on the road</td><td>Torn — and the tears are stitched</td></tr>
      <tr><td>Wineskins</td><td>Split and re-tied from long use</td><td>Split — and the ties are new cord</td></tr>
      <tr><td>Sandals</td><td>Worn through by the journey</td><td>Worn — and patched with fresh leather</td></tr>
      <tr><td>Bread</td><td>Hot from the oven when they set out</td><td>Dry, cracked, crumbling</td></tr>
    </table>
    <h4>Four kinds of prop</h4>
    <p>Count them, because the number is part of the first lock. <b>Four</b> classes of worn-out thing, and every one of them says the same word: <i>far</i>.</p>
    <p class="margin-note">This is a good display and a bad forgery. Take it to the object study when it opens and test each item properly — every one of them fails, and each fails in a different way.</p>
    <div class="ref">Background: Joshua 9:4–5, 9:12–13.</div>`
},
{
  id:"j09speech", stage:0, kind:"Transcript", title:"What the Delegation Said",
  sub:"Taken down at the camp at Gilgal",
  prev:"“From a very far country your servants have come.”",
  x:78, y:26, rot:-4, w:208,
  body:`
    <div class="doc-body">
      <p>"From a very far country your servants have come, because of the name of the LORD your God — for we have heard of his fame, and of all he did in Egypt.</p>
      <p>Our elders and all the people of our country spoke to us, saying: take provisions for the journey, and go to meet them, and say to them, <b>we are your servants; now make a covenant with us.</b></p>
      <p><b>This bread of ours we took hot for our provision out of our houses on the day we set out</b>, and now, see, it is dry and mouldy. And these wineskins were new when we filled them, and see, they are split. And these garments and sandals of ours are worn out by the very long journey."</p>
      <h4>What the Bureau notices about this speech</h4>
      <ul>
        <li>Every claim in it is <b>about distance</b>, and only about distance. They tell no lie about who they are, what they want, or what they will do.</li>
        <li>It is well made: they praise, they submit, they produce evidence, and they ask.</li>
        <li>They name no country. Not once. <b>A single question — "which country?" — ends this in a sentence</b>, and it is never asked.</li>
      </ul>
    </div>
    <div class="ref">Background: Joshua 9:6–13.</div>`
},
{
  id:"j09treaty", stage:0, kind:"Treaty", title:"The Treaty, As Signed",
  sub:"Sworn by the leaders of the congregation", thumb:"j09treaty",
  prev:"Peace, life and an oath. And one line that decides the whole case.",
  x:26, y:56, rot:5, w:214,
  body:`
    <div class="plate">${SVG.j09treaty}<div class="cap">Click to enlarge. The treaty parchment as it was drawn up.</div></div>
    <table class="ledger">
      <tr><th>Clause</th><th>Terms</th></tr>
      <tr><td>Parties</td><td>Israel, and the delegation on behalf of their people</td></tr>
      <tr><td>Grant</td><td>Peace. Their lives to be spared.</td></tr>
      <tr><td>Confirmed by</td><td><b>An oath, sworn by the leaders of the congregation</b></td></tr>
      <tr><td>Cities named in the treaty</td><td class="n"><b>4</b> — the delegation spoke for all of them</td></tr>
      <tr><td>Counsel sought before signing</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>The line the case turns on</h4>
    <div class="stamp">FROM THE RECORD</div>
    <p style="font-size:18px">"So the men took some of their provisions, <b>and did not ask counsel of the LORD.</b>"</p>
    <p>They examined the evidence. They did not examine the <b>question</b>. Everything after this — the discovery, the anger, the awkward outcome — follows from one omission recorded in half a sentence.</p>
    <p class="margin-note">Count the cities. Count the times counsel was asked. Both numbers are in the first lock.</p>
    <div class="ref">Background: Joshua 9:14–15.</div>`
},
{
  id:"j09map", stage:0, kind:"Plan", title:"How Near They Actually Were",
  sub:"The four cities, and the camp", thumb:"j09map",
  prev:"Four towns, all within a day. You can see two of them from the ridge.",
  x:56, y:52, rot:-2, w:216,
  body:`
    <div class="plate">${SVG.j09map}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Gibeon</b> is the great city of the four — larger than Ai, and the record says its men were fighters.</li>
      <li><b>Chephirah, Kiriath-jearim and Beeroth</b> are its neighbours. All four are within a day's travel of each other and of the Israelite camp.</li>
      <li>The delegation walked in from over that ridge, having dressed the part somewhere behind it.</li>
      <li>There is no distant country anywhere on this map, because there was never a journey.</li>
    </ul>
    <p class="margin-note">The distance a lie has to cover is the distance somebody chooses not to check. It was half a day's ride.</p>
    <div class="ref">Background: Joshua 9:17.</div>`
},
{
  id:"j09discovery", stage:0, kind:"Official record", title:"The Third Day",
  sub:"How the truth came out",
  prev:"Three days after the treaty, Israel marched — and arrived at their cities.",
  x:80, y:56, rot:4, w:206,
  body:`
    <table class="ledger">
      <tr><th>Day</th><th>Event</th></tr>
      <tr><td>0</td><td>The delegation arrives. The props are examined. The treaty is sworn.</td></tr>
      <tr><td><b>3</b></td><td><b>Israel hears that they are neighbours, living among them</b></td></tr>
      <tr><td>3</td><td>The army marches out and reaches the four cities on the third day</td></tr>
      <tr><td>3</td><td>The cities are not attacked. The oath holds.</td></tr>
      <tr><td>after</td><td>The congregation murmurs against the leaders who swore it</td></tr>
    </table>
    <h4>Note</h4>
    <p><b>Three days.</b> That is how long the deception survived — not because anybody investigated cleverly, but because Israel walked in that direction anyway and found them there.</p>
    <p class="margin-note">A lie that only has to last three days does not need to be a good lie. It needs to be believed once.</p>
    <div class="ref">Background: Joshua 9:16–18.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j09compare", stage:1, kind:"Object study", title:"The Comparison Set",
  sub:"Field Chest B · genuinely old kit, for testing against",
  prev:"Real road-worn gear, three months out. It looks nothing like theirs.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>To test worn-out things you need genuinely worn-out things. The Bureau keeps a comparison set: a courier's kit that really has been three months on the road.</p>
    <table class="ledger">
      <tr><th>Item</th><th>Genuinely old</th><th>The delegation's</th></tr>
      <tr><td>Sack</td><td>Worn <b>thin along the fold lines</b>, holes where it rubs the shoulder</td><td>Cut tears in the middle of sound cloth</td></tr>
      <tr><td>Wineskin</td><td>Stiff, darkened, cracked at the neck where it is handled</td><td>Split down a seam, supple everywhere else</td></tr>
      <tr><td>Sandals</td><td>Sole worn through <b>at the ball of the foot</b>; repairs darkened by wear</td><td>Sole sound; patches clean and pale</td></tr>
      <tr><td>Bread</td><td>Hard, grey-green, smells of mould</td><td>Dry and cracked, <b>smells of nothing at all</b></td></tr>
    </table>
    <h4>The principle</h4>
    <p>Wear happens <b>where a thing is used</b>. Damage happens where somebody puts it. Every item in that delegation's kit is damaged in the wrong place, and mended with material newer than the damage.</p>
    <p class="margin-note">Take this to the 🔍 object study. Four items, four tests, and each one fails a different test.</p>
    <div class="ref">Fictional comparison set. Background: Joshua 9:4–5.</div>`
},
{
  id:"j09accounts", stage:1, kind:"Accounts", title:"The Accounts",
  sub:"Field Chest B · testing the bribery explanation",
  prev:"Nothing changed hands. There was nothing in it for anybody.",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>A treaty signed too quickly invites the obvious suspicion. The Bureau checked it.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Gifts or payments recorded with the treaty</td><td class="n"><b>none</b></td></tr>
      <tr><td>Silver or goods entering the camp that week</td><td class="n"><b>none</b></td></tr>
      <tr><td>Terms favourable to Israel</td><td class="n"><b>none</b> — Israel gives, and receives nothing</td></tr>
      <tr><td>Private meetings before the treaty</td><td class="n"><b>none</b> — it was done in the open, before the congregation</td></tr>
      <tr><td>Who benefited</td><td><b>The four cities. Only them.</b></td></tr>
    </table>
    <h4>Why bribery does not fit</h4>
    <p>A bribed leader gets something. These men got a treaty that binds them, gains them nothing, and makes them so unpopular that the whole congregation murmurs against them three days later.</p>
    <p class="margin-note">This was not corruption. It was a shortcut — which is a great deal more common and much harder to notice in yourself.</p>
    <div class="ref">Fictional accounts. Background: Joshua 9:15, 9:18.</div>`
},
{
  id:"j09oath", stage:1, kind:"Legal note", title:"The Oath and What It Bound",
  sub:"Field Chest B · could the treaty have been torn up?",
  prev:"They swore by the LORD. The leaders decided that settled it.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <p>When the deception came out, the obvious remedy was to declare the treaty void — obtained by fraud, therefore no treaty. The congregation wanted exactly that. The leaders refused.</p>
    <table class="ledger">
      <tr><th>Question</th><th>The leaders' answer</th></tr>
      <tr><td>Was the treaty obtained by deception?</td><td><b>Yes.</b> Nobody disputes it</td></tr>
      <tr><td>Was it sworn?</td><td><b>Yes — by the LORD, the God of Israel</b></td></tr>
      <tr><td>Can it therefore be broken?</td><td><b>No.</b> "We have sworn to them; now we may not touch them"</td></tr>
      <tr><td>What was done instead</td><td>The Gibeonites were kept alive, and made woodcutters and water-carriers for the congregation</td></tr>
      <tr><td>What the congregation thought of this</td><td>They murmured against the leaders</td></tr>
    </table>
    <h4>Why this closes an explanation</h4>
    <p>"The treaty was invalid and could be voided" is a perfectly good legal argument, and it is not what happened. <b>Israel's leaders held themselves to an oath that had been obtained from them by a trick</b>, at real cost, in the face of their own people's anger.</p>
    <p class="margin-note">That decision is the reason this case is in the archive at all. Anyone can keep a promise that suits them.</p>
    <div class="ref">Background: Joshua 9:18–21.</div>`
},
{
  id:"j09why", stage:1, kind:"Statement", title:"Why They Did It",
  sub:"Field Chest B · the delegation, questioned afterwards",
  prev:"“We were told what your God had done. We were afraid for our lives.”",
  x:46, y:62, rot:3, w:206,
  body:`
    <div class="doc-body">
      <p>Joshua asked them directly: why have you deceived us?</p>
      <p>"Because your servants were told plainly what the LORD your God commanded his servant Moses — to give you all the land and destroy everyone living in it. <b>So we were very much afraid for our lives because of you, and we did this thing.</b></p>
      <p>And now, see, we are in your hand. Do to us as it seems good and right to you."</p>
      <h4>What the Bureau draws from this</h4>
      <ul>
        <li>They admit it immediately and completely. No second story, no attempt to argue the treaty was honest.</li>
        <li>Their motive was <b>fear, not greed</b> — and their information was accurate: they had heard about Jericho and Ai and drawn the obvious conclusion.</li>
        <li>They did not fight, did not form an alliance against Israel as the other kings did, and did not run. <b>They negotiated.</b> Badly and dishonestly, but they negotiated.</li>
        <li>Four cities were in on it. Every one of them survives.</li>
      </ul>
      <p class="margin-note">This is a case where the deceivers tell the truth about everything except the one thing they were asked, and where the deceived are undone by not asking.</p>
    </div>
    <div class="ref">Background: Joshua 9:22–25.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j09after", stage:2, kind:"Follow-up file", title:"What Became of Them",
  sub:"Sealed Pouch C",
  prev:"Woodcutters and water-carriers — and, later, a reason to go to war for them.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Afterwards</th><th>Record</th></tr>
      <tr><td>Status granted</td><td>Alive, under treaty; woodcutters and water-carriers for the congregation and for the altar</td></tr>
      <tr><td>Where they served</td><td>At the place of worship — closer to the centre of Israel's life than anyone expected</td></tr>
      <tr><td>When five kings attacked Gibeon for making peace</td><td><b>Israel marched all night to defend them</b></td></tr>
      <tr><td>Centuries later, when Saul broke the treaty</td><td>It was treated as a serious wrong, and put right in David's time</td></tr>
      <tr><td>Gibeon's later standing</td><td>The tabernacle stood there in Solomon's day</td></tr>
    </table>
    <h4>Why the Bureau keeps the sequel</h4>
    <p>Because the treaty was not merely endured — <b>it was honoured, defended, and still binding four hundred years later.</b> A promise Israel was tricked into became a promise Israel marched all night to keep, and breaking it long afterwards counted as a national offence.</p>
    <div class="ref">Background: Joshua 9:26–27 · Joshua 10:6–8 · 2 Samuel 21:1–2 · 1 Kings 3:4.</div>`
},
{
  id:"j09lesson", stage:2, kind:"Bureau analysis", title:"The Question Nobody Asked",
  sub:"Sealed Pouch C",
  prev:"They tested the evidence. They never tested the question.",
  x:56, y:30, rot:4, w:212,
  body:`
    <p>This is the transferable idea, and it is worth making your team say it in their own words.</p>
    <h4>What Israel did right</h4>
    <p>They asked for evidence, and they examined it. They handled the bread, looked at the sandals, checked the wineskins. That is more than most people do.</p>
    <h4>What went wrong anyway</h4>
    <p>They tested <b>the evidence for the claim</b> instead of testing <b>the claim</b>. The props answered the question <i>have these people been travelling?</i> The question that mattered was <i>where are you from?</i> — and it was never put.</p>
    <p>Notice how the props work. Each one is designed to make you think about distance, so you spend your attention deciding whether the bread is old enough rather than noticing that <b>no country has been named</b>.</p>
    <h4>The one line</h4>
    <p>"They did not ask counsel of the LORD." Whatever a reader makes of that theologically, as an investigative failure it is exact: <b>they consulted the material and did not consult the one source that was not part of the delegation's display.</b></p>
    <p class="margin-note">When somebody hands you the evidence, ask who chose it. Then go and find some they did not choose.</p>
    <div class="ref">Background: Joshua 9:14 · compare Proverbs 14:15 · 1 John 4:1.</div>`
}
];

const JM09_THEORIES = [
  {
    id:"faraway",
    title:"1. They really had come a long way",
    claim:"The kit speaks for itself: split skins, worn sandals, mouldy bread. That is a long road.",
    answer:"j09compare",
    verdict:"The comparison set kills it. Genuine road wear happens where a thing is used — a sack thins along the fold and at the shoulder, a sandal goes through at the ball of the foot, a wineskin cracks at the neck where it is handled. Every one of their items is damaged in the wrong place, in the middle of sound material, and mended with leather and cord newer than the damage. The bread is dry and cracked but does not smell of mould at all."
  },
  {
    id:"guide",
    title:"2. A local guide misled the delegation",
    claim:"Perhaps they genuinely thought they were far away — somebody had led them a long way round.",
    answer:"j09speech",
    verdict:"Their own speech kills it. They describe the state of their kit item by item and explain each one by the length of the journey — that is not a man who has been misled about where he is, that is a prepared account. They also name no country at all, which is the behaviour of somebody avoiding a checkable claim rather than somebody mistaken about one. And afterwards they admit the deception outright."
  },
  {
    id:"bribe",
    title:"3. Israel's leaders were bribed",
    claim:"A treaty this bad, this fast, usually means somebody was paid.",
    answer:"j09accounts",
    verdict:"The accounts kill it. No gifts, no payments, nothing entering the camp, no private meetings — the whole thing was done in the open before the congregation. And the terms run entirely one way: Israel gives peace and receives nothing. The leaders ended up bound, unpopular and murmured against within three days. That is a shortcut, not a bribe."
  },
  {
    id:"void",
    title:"4. The treaty was invalid and could simply be voided",
    claim:"An agreement obtained by fraud is no agreement. Israel could have torn it up the moment they knew.",
    answer:"j09oath",
    verdict:"The oath record kills it — as a description of what happened, not as a legal argument. The congregation wanted exactly this. The leaders refused: they had sworn by the LORD, and they held to it against their own people's anger, at real cost, in favour of people who had just tricked them. Whatever you think of the reasoning, the treaty was not voided; it was kept."
  },
  {
    id:"lone",
    title:"5. One clever ambassador acted alone",
    claim:"A single sharp operator invented the story and the rest were carried along.",
    answer:"j09treaty",
    verdict:"The treaty kills it. <b>Four cities</b> are named in it, and the delegation negotiated on behalf of all of them — Gibeon, Chephirah, Kiriath-jearim and Beeroth. Four cities' worth of people agreed in advance to hide behind one story, and every one of them was covered by the result. That is not one man's improvisation; it is a policy."
  }
];

const JM09_LOCKS = [
  {
    id:"l1", type:"number", code:"3404", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the examination papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero, and it is the most important number in the case.",
    questions:[
      "How many days after the treaty was the truth discovered?",
      "How many kinds of worn-out prop did they bring?",
      "How many times did Israel ask counsel before signing?",
      "How many cities were in on it?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the record of the third day. Question 2 is the plate of the props. Question 3 is the treaty. Question 4 is the treaty as well — count the cities named in it."
    ],
    reward:"Field Chest B is open: the comparison set, the accounts, the note on the oath and the delegation's own explanation are now on the desk. The 🔍 Object study in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"MOULDY", len:6,
    wrong:"Not that. Run the object study — the 🔍 button in the top bar. Look at what the bread claims to be, and what it actually is.",
    name:"Sealed Pouch C — the word that gave it away",
    blurb:"A six-letter keyword. Take the four props to the object study and test each one against the genuinely old comparison kit. Every item fails, but they do not all fail the same test — and one of them fails on a word the delegation used about it themselves.",
    questions:[
      "Open the 🔍 Object study from the top bar.",
      "Four props down the side, four tests across the top.",
      "Tick a test only where that item actually passes it.",
      "One row is empty except for a single claim the item cannot support. That claim is the keyword."
    ],
    hints:[
      "Work item by item. Ask of each: is the damage where use would put it, and is the repair older or newer than the damage?",
      "The bread is the odd one out. It is genuinely dry and genuinely cracked — it passes those tests. It fails on one thing only."
    ],
    reward:"Sealed Pouch C is open: what became of the four cities, and the Bureau's analysis of the question nobody asked, are now on the desk."
  }
];

const JM09_MATRIX = {
  button:"🔍 Object study",
  title:"The Object Study",
  blurb:"Four props down the side, four tests across the top. Tick a box only where the item <b>actually passes</b> that test when set against the genuinely old comparison kit. Leave it blank where it fails. Then look at which row has almost nothing in it, and why.",
  corner:"The item",
  verify:"Check the study",
  mark:"✔",
  cols:[
    {id:"place", label:"Damage in the right place", note:"where use would put it"},
    {id:"age",   label:"Repairs older than the damage", note:"darkened by wear"},
    {id:"dry",   label:"Genuinely dried out",       note:"not merely stale"},
    {id:"smell", label:"Smells of age",             note:"the test nobody runs"}
  ],
  rows:[
    {id:"sack",  label:"The sacks",     note:"cut in sound cloth"},
    {id:"skin",  label:"The wineskins", note:"split at a seam"},
    {id:"shoe",  label:"The sandals",   note:"soles still sound"},
    {id:"bread", label:"The bread",     note:"dry, cracked, crumbling"}
  ],
  truth:["bread|dry"],
  foot:{
    label:"What the comparison kit shows",
    note:"three months genuinely on the road",
    cells:{place:"worn", age:"darkened", dry:"hard", smell:"of mould"}
  },
  note:"Be strict. A sack cut through sound cloth is not worn; a pale new patch is not older than the hole it covers; and bread that is dry is not the same as bread that is old. Only one box in this whole table earns a tick.",
  reveal:{
    lead:"One tick in sixteen. The sacks, the skins and the sandals fail every test — damaged in the wrong places and mended with material newer than the damage. The bread is the only honest thing on the table: it really is dried out. But it passes exactly one test and fails the last one completely, and the last one is the word they used about it themselves.",
    answer:"MOULDY",
    caption:"They said their bread was dry and mouldy. It is dry. There is no mould on it, and it does not smell of any — because it was baked about a day and a half before they walked into the camp."
  }
};

const JM09_VERDICTS = [
  {id:"faraway", text:"They really had travelled a long way, and the kit is genuine."},
  {id:"guide",   text:"A guide misled them, and they honestly believed they were far from home."},
  {id:"bribe",   text:"Israel's leaders were paid to sign and did not look too closely."},
  {id:"void",    text:"The treaty was obtained by fraud, so Israel simply voided it."},
  {id:"lone",    text:"One clever ambassador invented the whole story on his own."},
  {id:"staged",  text:"Every item in the sacks was staged by four neighbouring cities acting together — and it worked because Israel examined the evidence the delegation had chosen, and never asked the one question that would have ended it."}
];

const CASE_JM09 = {
  id:"jm09", code:"CASE JM-09", title:"The Mouldy Bread",
  period:"Gibeon · c. 1400 BC", colour:"#7d7a4a", poster:"poster_jm09",
  teaser:"Ambassadors arrive with split wineskins, worn-through sandals and dry crumbling bread as proof of a very long journey. A treaty is sworn. Three days later they turn out to live a day's walk away.",
  introSub:"A treaty signed on the strength of some worn-out sandals.",
  items:JM09_ITEMS, theories:JM09_THEORIES, locks:JM09_LOCKS, verdicts:JM09_VERDICTS,
  matrix:JM09_MATRIX,
  correct:"staged",
  boardTitle:"How the Treaty Was Got",
  boardIntro:"Five explanations have been offered. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"The kit is staged, nobody was misled, nobody was paid, the treaty was not voided and this was not one man's idea. State what the file will actually support — including about the side that was deceived.",
  debrief:{
    lead:"The props were made the day before: tears cut in sound cloth, patches paler than the holes they cover, bread genuinely dry and entirely free of the mould they claimed for it. Four cities agreed the story between them and sent one delegation to tell it. What made it work was not the quality of the forgery — it was poor — but that Israel tested the evidence the delegation had brought and never asked the question the delegation was avoiding. And when the truth came out, the leaders kept an oath that had been obtained from them by a trick.",
    questions:[
      "Israel did examine the evidence — they handled the bread and looked at the sandals. So what exactly went wrong? Try to say it in one sentence.",
      "The Gibeonites were afraid, and they were right to be. Does being frightened make a deception more forgivable, less, or neither?",
      "The leaders kept a promise they had been tricked into, against their own people's anger. Was that the right call? What would breaking it have cost that keeping it did not?",
      "The props all answer the same question. When someone hands you evidence, how do you work out which question they are steering you toward — and which one they are steering you away from?"
    ],
    refs:"Joshua 9 · Joshua 10:6–8 · 2 Samuel 21:1–2 · Proverbs 14:15 · 1 John 4:1"
  },
  teacher:{
    answers:"Lock 1 code <b>3404</b> (3 days to discovery · 4 kinds of prop · 0 times counsel was asked · 4 cities). Lock 2 keyword <b>MOULDY</b>, from the 🔍 Object study: only one box in the whole table earns a tick — the bread is genuinely dried out. Everything else fails, and the bread fails the smell test, which is the word the delegation used about it themselves.",
    pairs:"They came a long way → The Comparison Set; a guide misled them → What the Delegation Said; bribery → The Accounts; the treaty could be voided → The Oath and What It Bound; one ambassador acted alone → The Treaty, As Signed.",
    conclusion:"The kit was staged the day before by four neighbouring cities acting together. It succeeded because Israel examined the delegation's chosen evidence and never asked where they were from.",
    prompts:"\"Where does a sandal actually wear out? Now look at where this one is damaged.\" · \"Is the patch older or newer than the hole?\" · \"They never name their country. Why not?\" · \"What one question ends this in a sentence?\"",
    extra:"The object study is deliberately lopsided — fifteen blanks and one tick — and some groups will assume they have done it wrong. That reaction is the lesson: the forgery is bad, and it still worked. Worth pairing with the fourth debrief question, which is the transferable one; a good extension is to ask each group to design a display that would make you believe something, then say what question would puncture it. Note the ordering opportunity: this case sits directly after JM-06 and JM-08 in the Joshua sequence, and the three together make a strong unit on evidence, obedience and consequence."
  }
};

registerCase(CASE_JM09);
