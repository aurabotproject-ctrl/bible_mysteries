"use strict";
/* ============================================================
   CASE JM-09 — THE MOULDY BREAD — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (3404 and MOULDY). Anything not named here stays as it is.
   ============================================================ */

const EASY_JM09 = {

teaser:"Ambassadors turn up with split wineskins, worn-out sandals and dry crumbling bread, as proof of a very long journey. A peace treaty is signed. Three days later they turn out to live a day's walk away.",
introSub:"A treaty signed because of some worn-out sandals.",
boardTitle:"How the Treaty Was Got",
boardIntro:"Five explanations have been offered. For each one, pin the <b>one</b> document that makes it impossible. When all five are closed, you can make your accusation.",
accusationIntro:"The kit was faked, nobody was misled, nobody was paid, the treaty was not cancelled, and this was not one man's idea. Say what the file can actually back up — including about the side that was tricked.",

items:{

j09letter:{
  prev:"A treaty signed with a country that turns out to be just down the road.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A group of ambassadors arrives at the Israelite camp saying they have come from a country very far away, and they have brought the journey with them: split wineskins, a torn sack, sandals worn through and patched, and bread gone dry and crumbly in the bag.</p>
    <p>They ask for a peace treaty. They get one, sworn on oath by the leaders of Israel.</p>
    <p><b>Three days later the truth comes out. They live about a day's walk away.</b> Four cities, close enough to see from the hills, and Israel has just sworn never to touch them.</p>
    <h4>Your job</h4>
    <p>Five explanations have been offered. The interesting question is not <i>how did they do it</i> — the props are on your desk and they are not very good props. It is <b>how careful people signed anyway</b>, and the answer to that is one line in the record that is very easy to read straight past.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Look at the props properly before you read anybody's opinion about them.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are hidden in documents you already have.</li>
      <li>The second lock opens using the <b>object study</b> — the 🔍 button at the top — once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Nobody in this file lies to Israel about anything except how far away they live. That is worth noticing early on.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from Joshua 9.</div>`
},

j09props:{
  prev:"Sacks, wineskins, sandals and bread — all worn out, and none of it right.",
  body:`
    <div class="plate">${SVG.j09props}<div class="cap">Click the plate to make it bigger.</div></div>
    <p>The ambassadors left everything behind when the truth came out, so we have the whole set.</p>
    <table class="ledger">
      <tr><th>Item</th><th>Said to be</th><th>What we noticed</th></tr>
      <tr><td>Sacks</td><td>Worn out on the road</td><td>Torn — and the tears have been sewn up</td></tr>
      <tr><td>Wineskins</td><td>Split and re-tied after long use</td><td>Split — and the ties are brand new cord</td></tr>
      <tr><td>Sandals</td><td>Worn through by the journey</td><td>Worn — and patched with fresh new leather</td></tr>
      <tr><td>Bread</td><td>Hot from the oven when they set off</td><td>Dry, cracked, crumbling</td></tr>
    </table>
    <h4>Four kinds of prop</h4>
    <p>Count them, because the number is part of the first lock. <b>Four</b> kinds of worn-out thing, and every single one of them says the same word: <i>far</i>.</p>
    <p class="margin-note">This is a good display and a bad fake. Take it to the object study when it opens and test each item properly — every one of them fails, and each one fails in a different way.</p>
    <div class="ref">Background: Joshua 9:4–5, 9:12–13.</div>`
},

j09speech:{
  prev:"“Your servants have come from a country very far away.”",
  body:`
    <div class="doc-body">
      <p>"Your servants have come from a country very far away, because of the name of the LORD your God — because we have heard how famous he is, and everything he did in Egypt.</p>
      <p>Our elders and all our people said to us: take food for the journey, and go and meet them, and say to them, <b>we are your servants; now make an agreement with us.</b></p>
      <p><b>This bread of ours we took hot out of our houses on the day we set off</b>, and now look, it is dry and mouldy. And these wineskins were new when we filled them, and look, they are split. And our clothes and our sandals are worn out from the very long journey."</p>
      <h4>What we notice about this speech</h4>
      <ul>
        <li>Every claim in it is <b>about distance</b>, and only about distance. They tell no lies about who they are, what they want, or what they will do.</li>
        <li>It is well put together: they flatter, they offer to serve, they show evidence, and then they ask.</li>
        <li>They never name their country. Not once. <b>One question — "which country?" — ends this in a sentence</b>, and nobody ever asks it.</li>
      </ul>
    </div>
    <div class="ref">Background: Joshua 9:6–13.</div>`
},

j09treaty:{
  prev:"Peace, their lives, and an oath. And one line that decides the whole case.",
  body:`
    <div class="plate">${SVG.j09treaty}<div class="cap">Click to make it bigger. The treaty as it was written out.</div></div>
    <table class="ledger">
      <tr><th>Part</th><th>Terms</th></tr>
      <tr><td>Who is signing</td><td>Israel, and the ambassadors on behalf of their people</td></tr>
      <tr><td>What is given</td><td>Peace. Their lives to be spared.</td></tr>
      <tr><td>Sealed by</td><td><b>An oath, sworn by the leaders of Israel</b></td></tr>
      <tr><td>Cities named in the treaty</td><td class="n"><b>4</b> — the ambassadors spoke for all of them</td></tr>
      <tr><td>Times anyone asked God about it before signing</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>The line the case turns on</h4>
    <div class="stamp">FROM THE RECORD</div>
    <p style="font-size:18px">"So the men took some of their food, <b>and did not ask counsel of the LORD.</b>"</p>
    <p>They examined the evidence. They never examined the <b>question</b>. Everything after this — finding out, the anger, the awkward ending — comes from one thing left undone, recorded in half a sentence.</p>
    <p class="margin-note">Count the cities. Count the times anyone asked. Both numbers are in the first lock.</p>
    <div class="ref">Background: Joshua 9:14–15.</div>`
},

j09map:{
  prev:"Four towns, all within a day. You can see two of them from the ridge.",
  body:`
    <div class="plate">${SVG.j09map}<div class="cap">Click the plan to make it bigger.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Gibeon</b> is the big city of the four — bigger than Ai, and the record says its men were fighters.</li>
      <li><b>Chephirah, Kiriath-jearim and Beeroth</b> are its neighbours. All four are within a day's travel of each other and of the Israelite camp.</li>
      <li>The ambassadors walked in from over that ridge, having dressed up somewhere behind it.</li>
      <li>There is no faraway country anywhere on this map, because there was never a journey.</li>
    </ul>
    <p class="margin-note">The distance a lie has to cover is the distance somebody decides not to check. It was half a day's ride.</p>
    <div class="ref">Background: Joshua 9:17.</div>`
},

j09discovery:{
  prev:"Three days after the treaty, Israel marched — and arrived at their cities.",
  body:`
    <table class="ledger">
      <tr><th>Day</th><th>Event</th></tr>
      <tr><td>0</td><td>The ambassadors arrive. The props are examined. The treaty is sworn.</td></tr>
      <tr><td><b>3</b></td><td><b>Israel hears that they are neighbours, living just up the road</b></td></tr>
      <tr><td>3</td><td>The army marches out and reaches the four cities on the third day</td></tr>
      <tr><td>3</td><td>The cities are not attacked. The oath holds.</td></tr>
      <tr><td>after</td><td>Everyone complains about the leaders who swore it</td></tr>
    </table>
    <h4>Note</h4>
    <p><b>Three days.</b> That is how long the trick lasted — and not because anybody investigated cleverly. Israel simply walked that way anyway and found them there.</p>
    <p class="margin-note">A lie that only has to last three days does not need to be a good lie. It just needs to be believed once.</p>
    <div class="ref">Background: Joshua 9:16–18.</div>`
},

j09compare:{
  prev:"Really road-worn kit, three months out. It looks nothing like theirs.",
  body:`
    <p>To test worn-out things, you need genuinely worn-out things to compare them with. We keep a comparison set: a messenger's kit that really has been three months on the road.</p>
    <table class="ledger">
      <tr><th>Item</th><th>Genuinely old</th><th>The ambassadors'</th></tr>
      <tr><td>Sack</td><td>Worn <b>thin along the folds</b>, holes where it rubs the shoulder</td><td>Tears cut in the middle of perfectly good cloth</td></tr>
      <tr><td>Wineskin</td><td>Stiff, darkened, cracked at the neck where hands hold it</td><td>Split down a seam, soft and supple everywhere else</td></tr>
      <tr><td>Sandals</td><td>Sole worn through <b>at the ball of the foot</b>; patches darkened by use</td><td>Sole perfectly sound; patches clean and pale</td></tr>
      <tr><td>Bread</td><td>Hard, grey-green, smells of mould</td><td>Dry and cracked, <b>and smells of nothing at all</b></td></tr>
    </table>
    <h4>The rule</h4>
    <p>Wear happens <b>where a thing gets used</b>. Damage happens wherever somebody puts it. Every item in that kit is damaged in the wrong place, and mended with material newer than the damage.</p>
    <p class="margin-note">Take this to the 🔍 object study. Four items, four tests, and each one fails a different test.</p>
    <div class="ref">Made-up comparison set. Background: Joshua 9:4–5.</div>`
},

j09accounts:{
  prev:"Nothing changed hands. There was nothing in it for anybody.",
  body:`
    <p>A treaty signed this fast makes you suspicious. We checked.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Gifts or payments recorded with the treaty</td><td class="n"><b>none</b></td></tr>
      <tr><td>Silver or goods coming into the camp that week</td><td class="n"><b>none</b></td></tr>
      <tr><td>Terms that are good for Israel</td><td class="n"><b>none</b> — Israel gives, and gets nothing back</td></tr>
      <tr><td>Private meetings before the treaty</td><td class="n"><b>none</b> — it was all done in the open, in front of everybody</td></tr>
      <tr><td>Who came out of it well</td><td><b>The four cities. Only them.</b></td></tr>
    </table>
    <h4>Why bribery does not fit</h4>
    <p>A leader who has been bribed gets something out of it. These men got a treaty that ties their hands, gains them nothing, and makes them so unpopular that everybody is complaining about them three days later.</p>
    <p class="margin-note">This was not corruption. It was a shortcut — which is far more common, and much harder to spot in yourself.</p>
    <div class="ref">Made-up accounts. Background: Joshua 9:15, 9:18.</div>`
},

j09oath:{
  prev:"They swore by the LORD. The leaders decided that settled it.",
  body:`
    <p>When the trick came out, the obvious answer was to cancel the treaty — got by lying, so not a real treaty. That is exactly what the people wanted. The leaders said no.</p>
    <table class="ledger">
      <tr><th>Question</th><th>The leaders' answer</th></tr>
      <tr><td>Was the treaty got by lying?</td><td><b>Yes.</b> Nobody argues about that</td></tr>
      <tr><td>Was it sworn on oath?</td><td><b>Yes — by the LORD, the God of Israel</b></td></tr>
      <tr><td>So can it be broken?</td><td><b>No.</b> "We have sworn to them; now we may not touch them"</td></tr>
      <tr><td>What was done instead</td><td>The Gibeonites were kept alive, and given the job of cutting wood and carrying water</td></tr>
      <tr><td>What everybody else thought of that</td><td>They complained about the leaders</td></tr>
    </table>
    <h4>Why this closes an explanation</h4>
    <p>"The treaty was not valid, so they cancelled it" is a perfectly reasonable legal argument, and it is not what happened. <b>Israel's leaders held themselves to an oath that had been tricked out of them</b>, at real cost, with their own people angry at them.</p>
    <p class="margin-note">That decision is the reason this case is in our archive at all. Anybody can keep a promise that suits them.</p>
    <div class="ref">Background: Joshua 9:18–21.</div>`
},

j09why:{
  prev:"“We were told what your God had done. We were terrified for our lives.”",
  body:`
    <div class="doc-body">
      <p>Joshua asked them straight out: why did you trick us?</p>
      <p>"Because your servants were told plainly what the LORD your God had commanded his servant Moses — to give you all this land and destroy everyone living in it. <b>So we were terrified for our lives because of you, and that is why we did it.</b></p>
      <p>And now, look, we are in your hands. Do to us whatever you think is right."</p>
      <h4>What we take from this</h4>
      <ul>
        <li>They admit it straight away and completely. No second story, no attempt to claim the treaty was honest.</li>
        <li>Their reason was <b>fear, not greed</b> — and their information was right: they had heard about Jericho and Ai and worked out the obvious.</li>
        <li>They did not fight, did not team up against Israel like the other kings did, and did not run away. <b>They negotiated.</b> Badly and dishonestly, but they negotiated.</li>
        <li>Four cities were in on it. Every one of them survives.</li>
      </ul>
      <p class="margin-note">This is a case where the liars tell the truth about everything except the one thing they were asked, and the people they lied to are undone by not asking.</p>
    </div>
    <div class="ref">Background: Joshua 9:22–25.</div>`
},

j09after:{
  prev:"Woodcutters and water-carriers — and later, a reason to go to war for them.",
  body:`
    <table class="ledger">
      <tr><th>Afterwards</th><th>Record</th></tr>
      <tr><td>What they became</td><td>Alive, under the treaty; woodcutters and water-carriers for the people and for the altar</td></tr>
      <tr><td>Where they worked</td><td>At the place of worship — closer to the centre of Israel's life than anybody expected</td></tr>
      <tr><td>When five kings attacked Gibeon for making peace</td><td><b>Israel marched all night to defend them</b></td></tr>
      <tr><td>Hundreds of years later, when Saul broke the treaty</td><td>It was treated as a serious wrong, and put right in David's time</td></tr>
      <tr><td>Gibeon later on</td><td>The tabernacle stood there in Solomon's day</td></tr>
    </table>
    <h4>Why we keep the ending</h4>
    <p>Because the treaty was not just put up with — <b>it was honoured, defended, and still binding four hundred years later.</b> A promise Israel was tricked into became a promise Israel marched all night to keep, and breaking it long afterwards counted as a national disgrace.</p>
    <div class="ref">Background: Joshua 9:26–27 · Joshua 10:6–8 · 2 Samuel 21:1–2 · 1 Kings 3:4.</div>`
},

j09lesson:{
  prev:"They tested the evidence. They never tested the question.",
  body:`
    <p>This is the idea you can take away and use everywhere, so it is worth making your team say it in their own words.</p>
    <h4>What Israel got right</h4>
    <p>They asked for evidence, and they looked at it. They handled the bread, checked the sandals, examined the wineskins. That is more than most people do.</p>
    <h4>What went wrong anyway</h4>
    <p>They tested <b>the evidence for the claim</b> instead of testing <b>the claim itself</b>. The props answered the question <i>have these people been travelling?</i> The question that actually mattered was <i>where are you from?</i> — and it was never asked.</p>
    <p>Notice how the props work. Each one is designed to get you thinking about distance, so you spend all your attention deciding whether the bread is old enough, and never notice that <b>no country has ever been named</b>.</p>
    <h4>The one line</h4>
    <p>"They did not ask counsel of the LORD." Whatever you make of that, as an investigating mistake it is exact: <b>they checked the stuff, and never checked the one source that was not part of the display the ambassadors had brought with them.</b></p>
    <p class="margin-note">When somebody hands you the evidence, ask who chose it. Then go and find some they did not choose.</p>
    <div class="ref">Background: Joshua 9:14 · compare Proverbs 14:15 · 1 John 4:1.</div>`
}

},

theories:{
  faraway:{
    title:"1. They really had come a long way",
    claim:"The kit speaks for itself: split skins, worn-out sandals, mouldy bread. That is a long road.",
    verdict:"The comparison set proves this wrong. Real wear happens where a thing gets used — a sack goes thin along the folds and at the shoulder, a sandal wears through at the ball of the foot, a wineskin cracks at the neck where hands hold it. Every one of their items is damaged in the wrong place, in the middle of perfectly good material, and mended with leather and cord newer than the damage. The bread is dry and cracked but does not smell of mould at all."
  },
  guide:{
    title:"2. A local guide had misled them",
    claim:"Maybe they honestly thought they were far from home — somebody had walked them a long way round.",
    verdict:"Their own speech proves this wrong. They go through their kit item by item and explain each one by how long the journey was. That is not a man who has been misled about where he is; that is a speech somebody prepared. They also never name a country at all, which is what somebody avoiding a checkable claim does, not somebody who is simply mistaken. And afterwards they admit the trick outright."
  },
  bribe:{
    title:"3. Israel's leaders were bribed",
    claim:"A treaty this bad, signed this fast, usually means somebody got paid.",
    verdict:"The accounts prove this wrong. No gifts, no payments, nothing coming into the camp, no private meetings — the whole thing was done out in the open in front of everybody. And the terms run entirely one way: Israel gives peace and gets nothing. The leaders ended up tied down, unpopular and complained about within three days. That is a shortcut, not a bribe."
  },
  void:{
    title:"4. The treaty was not valid, so they could just cancel it",
    claim:"An agreement got by lying is not an agreement. Israel could have torn it up the moment they knew.",
    verdict:"The oath record proves this wrong — not as a legal argument, but as a description of what actually happened. The people wanted exactly this. The leaders refused: they had sworn by the LORD, and they stuck to it against their own people's anger, at real cost, in favour of people who had just tricked them. Whatever you think of the reasoning, the treaty was not cancelled. It was kept."
  },
  lone:{
    title:"5. One clever ambassador did it all himself",
    claim:"A single sharp operator made up the story and everybody else just went along with it.",
    verdict:"The treaty proves this wrong. <b>Four cities</b> are named in it, and the ambassadors were negotiating for all of them — Gibeon, Chephirah, Kiriath-jearim and Beeroth. Four cities' worth of people agreed beforehand to hide behind one story, and every one of them was covered by the result. That is not one man making it up as he goes; that is a plan."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the examination papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero, and it is the most important number in the case.",
    questions:[
      "How many days after the treaty was the truth found out?",
      "How many kinds of worn-out prop did they bring?",
      "How many times did Israel ask God about it before signing?",
      "How many cities were in on it?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the record of the third day. Question 2 is the plate of the props. Question 3 is the treaty. Question 4 is the treaty as well — count the cities named in it."
    ],
    reward:"Field Chest B is open. The comparison set, the accounts, the note about the oath and the ambassadors' own explanation are now on the desk. The 🔍 Object study at the top is now working."
  },
  l2:{
    wrong:"Not quite. Run the object study — the 🔍 button at the top. Look at what the bread claims to be, and what it actually is.",
    name:"Sealed Pouch C — the word that gave it away",
    blurb:"A six-letter keyword. Take the four props to the object study and test each one against the genuinely old comparison kit. Every item fails, but they do not all fail the same test — and one of them fails on a word the ambassadors used about it themselves.",
    questions:[
      "Open the 🔍 Object study from the top bar.",
      "Four props down the side, four tests across the top.",
      "Tick a test only where that item really passes it.",
      "One row is empty except for a single claim the item cannot support. That claim is the keyword."
    ],
    hints:[
      "Work item by item. For each one ask: is the damage where use would put it, and is the repair older or newer than the damage?",
      "The bread is the odd one out. It really is dry and it really is cracked — it passes those tests. It fails on one thing only."
    ],
    reward:"Sealed Pouch C is open. What became of the four cities, and our analysis of the question nobody asked, are now on the desk."
  }
},

matrix:{
  title:"The Object Study",
  blurb:"Four props down the side, four tests across the top. Tick a box only where the item <b>really passes</b> that test when you hold it up against the genuinely old comparison kit. Leave it blank where it fails. Then look at which row has almost nothing in it, and why.",
  corner:"The item",
  verify:"Check my study",
  cols:{
    place:{label:"Damage in the right place",     note:"where use would put it"},
    age:  {label:"Repairs older than the damage", note:"darkened by use"},
    dry:  {label:"Really dried out",              note:"not just stale"},
    smell:{label:"Smells old",                    note:"the test nobody runs"}
  },
  rows:{
    sack: {label:"The sacks",     note:"cut in good cloth"},
    skin: {label:"The wineskins", note:"split at a seam"},
    shoe: {label:"The sandals",   note:"soles still sound"},
    bread:{label:"The bread",     note:"dry, cracked, crumbling"}
  },
  foot:{
    label:"What the comparison kit shows",
    note:"three months really on the road",
    cells:{place:"worn", age:"darkened", dry:"hard", smell:"of mould"}
  },
  note:"Be strict. A sack cut through good cloth is not worn out; a pale new patch is not older than the hole it covers; and bread that is dry is not the same as bread that is old. Only one box in this whole table earns a tick.",
  reveal:{
    lead:"One tick out of sixteen. The sacks, the skins and the sandals fail every test — damaged in the wrong places and mended with material newer than the damage. The bread is the only honest thing on the table: it really is dried out. But it passes exactly one test and fails the last one completely — and the last one is the word they used about it themselves.",
    caption:"They said their bread was dry and mouldy. It is dry. There is no mould on it and it does not smell of any — because it was baked about a day and a half before they walked into the camp."
  }
},

verdicts:{
  faraway:{text:"They really had travelled a long way, and the kit is genuine."},
  guide:  {text:"A guide misled them, and they honestly thought they were far from home."},
  bribe:  {text:"Israel's leaders were paid to sign and did not look too closely."},
  void:   {text:"The treaty was got by lying, so Israel simply cancelled it."},
  lone:   {text:"One clever ambassador made the whole story up on his own."},
  staged: {text:"Every item in those sacks was faked by four neighbouring cities working together — and it worked because Israel examined the evidence the ambassadors had chosen, and never asked the one question that would have ended it."}
},

debrief:{
  lead:"The props were made the day before: tears cut in good cloth, patches paler than the holes they cover, bread that really is dry and has no trace of the mould they claimed for it. Four cities agreed the story between them and sent one group of ambassadors to tell it. What made it work was not that the fake was good — it was poor — but that Israel tested the evidence the ambassadors brought and never asked the question they were avoiding. And when the truth came out, the leaders kept an oath that had been tricked out of them.",
  questions:[
    "Israel did examine the evidence — they handled the bread and looked at the sandals. So what exactly went wrong? Try to say it in one sentence.",
    "The Gibeonites were frightened, and they were right to be. Does being frightened make a lie more forgivable, less, or neither?",
    "The leaders kept a promise they had been tricked into, with their own people angry at them. Was that the right call? What would breaking it have cost that keeping it did not?",
    "All the props answer the same question. When somebody hands you evidence, how do you work out which question they are steering you towards — and which one they are steering you away from?"
  ]
}

};

registerEasy("jm09", EASY_JM09);
