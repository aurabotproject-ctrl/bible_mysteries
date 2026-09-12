"use strict";
/* ============================================================
   CASE JM-04 — THE JUDGMENT
   Jerusalem, about 960 BC.  Source: 1 Kings 3:16-28.
   ============================================================ */

SVG.j04house = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j04house__" x="0" y="0" width="1536" height="1024"/><text x="181" y="122" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="236" lengthAdjust="spacingAndGlyphs">SLEEPING ROOM ONE</text><text x="181" y="149" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="178" lengthAdjust="spacingAndGlyphs">one mat, one cradle</text><text x="1382" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="206" lengthAdjust="spacingAndGlyphs">SLEEPING ROOM TWO</text><text x="1382" y="158" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="178" lengthAdjust="spacingAndGlyphs">one mat, one cradle</text><text x="775" y="846" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="190" lengthAdjust="spacingAndGlyphs">THE ONLY DOOR</text><text x="775" y="873" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="210" lengthAdjust="spacingAndGlyphs">no other way in or out</text></svg>`;
SVG.j04sheets = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j04sheets__" x="0" y="0" width="1536" height="1024"/><text x="409" y="120" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="470" lengthAdjust="spacingAndGlyphs">STATEMENT OF THE FIRST WOMAN</text><text x="409" y="152" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">taken in the king&#8217;s hall</text><text x="1127" y="120" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="470" lengthAdjust="spacingAndGlyphs">STATEMENT OF THE SECOND WOMAN</text><text x="1127" y="152" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">taken in the king&#8217;s hall</text></svg>`;
/* Each woman's statement written onto her own sheet. Derived from the blank
   plate by string replace, so the photograph is carried only once in the build.
   The signature is capped at y=930 - below that it lands on the paper's crease. */
SVG.j04sheetsA = SVG.j04sheets.replace('</svg>', `<text x="104" y="236" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">“My lord, this woman and I live in one</text><text x="104" y="282" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">house, and I gave birth to a son while</text><text x="104" y="328" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">she was in the house with me. Three</text><text x="104" y="374" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">days after I gave birth, she gave birth</text><text x="104" y="420" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">too. We were together. There was no</text><text x="104" y="466" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">stranger with us in the house — only</text><text x="104" y="512" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">the two of us. Her son died in the</text><text x="104" y="558" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">night. In the night, while I was</text><text x="104" y="604" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">asleep, she got up and took my son from</text><text x="104" y="650" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">beside me and laid him at her breast,</text><text x="104" y="696" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and laid her dead son at mine. When I</text><text x="104" y="742" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">rose in the morning to feed my child,</text><text x="104" y="788" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">he was not alive — and when I looked at</text><text x="104" y="834" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">him closely in the morning light, he</text><text x="104" y="880" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">was not my son.”</text><text x="104" y="930" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-style="italic" fill="#6b4a28" opacity=".85">&#8212; the first woman</text></svg>`);
SVG.j04sheetsB = SVG.j04sheets.replace('</svg>', `<text x="852" y="236" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">“My lord, that is not what happened,</text><text x="852" y="282" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and she knows it. We live in one house,</text><text x="852" y="328" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">the two of us, and there was no one</text><text x="852" y="374" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">else with us. She gave birth first and</text><text x="852" y="420" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">I gave birth three days after her. Only</text><text x="852" y="466" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">the two of us were there. Her son died</text><text x="852" y="512" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">in the night. In the night, while I was</text><text x="852" y="558" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">asleep, she got up and took my son from</text><text x="852" y="604" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">beside me and laid him at her breast,</text><text x="852" y="650" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and laid her dead son at mine. In the</text><text x="852" y="696" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">morning I looked at the child at my</text><text x="852" y="742" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">breast and he was not my son. The</text><text x="852" y="788" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">living one is my son and the dead one</text><text x="852" y="834" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">is hers.”</text><text x="852" y="892" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-style="italic" fill="#6b4a28" opacity=".85">&#8212; the second woman</text></svg>`);
SVG.j04sheetsAe = SVG.j04sheets.replace('</svg>', `<text x="104" y="236" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">“My lord, this woman and I live in one</text><text x="104" y="282" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">house, and I had a baby son while she</text><text x="104" y="328" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">was in the house with me. Three days</text><text x="104" y="374" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">after I gave birth, she had a baby too.</text><text x="104" y="420" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">We were together. There was nobody else</text><text x="104" y="466" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">in the house with us — just the two of</text><text x="104" y="512" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">us. Her son died in the night. In the</text><text x="104" y="558" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">night, while I was asleep, she got up</text><text x="104" y="604" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and took my son from beside me and held</text><text x="104" y="650" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">him, and put her dead son beside me</text><text x="104" y="696" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">instead. When I got up in the morning</text><text x="104" y="742" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">to feed my baby, he was not alive — and</text><text x="104" y="788" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">when I looked at him properly in the</text><text x="104" y="834" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">morning light, he was not my son.”</text><text x="104" y="892" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-style="italic" fill="#6b4a28" opacity=".85">&#8212; the first woman</text></svg>`);
SVG.j04sheetsBe = SVG.j04sheets.replace('</svg>', `<text x="852" y="236" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">“My lord, that is not what happened,</text><text x="852" y="282" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and she knows it. We live in one house,</text><text x="852" y="328" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">the two of us, and there was nobody</text><text x="852" y="374" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">else with us. She had her baby first</text><text x="852" y="420" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and I had mine three days later. Only</text><text x="852" y="466" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">the two of us were there. Her son died</text><text x="852" y="512" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">in the night. In the night, while I was</text><text x="852" y="558" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">asleep, she got up and took my son from</text><text x="852" y="604" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">beside me and held him, and put her</text><text x="852" y="650" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">dead son beside me instead. In the</text><text x="852" y="696" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">morning I looked at the baby beside me</text><text x="852" y="742" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">and he was not my son. The living one</text><text x="852" y="788" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-style="italic" fill="#3f2c18" opacity=".92">is my son and the dead one is hers.”</text><text x="852" y="846" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-style="italic" fill="#6b4a28" opacity=".85">&#8212; the second woman</text></svg>`);


SVG.j04sword = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j04sword__" x="0" y="0" width="1536" height="1024"/><text x="700" y="110" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-weight="600" fill="#4a3520" textLength="148" lengthAdjust="spacingAndGlyphs">THE SWORD</text><text x="700" y="137" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="218" lengthAdjust="spacingAndGlyphs">what the king called for</text><text x="1335" y="229" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-weight="600" fill="#4a3520" textLength="168" lengthAdjust="spacingAndGlyphs">THE CRADLE</text><text x="1335" y="256" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="236" lengthAdjust="spacingAndGlyphs">one living child, unmarked</text></svg>`;

const JM04_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j04letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"Two women. One living child. And not one piece of evidence in the world.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Two women share a house. Each has an infant son, born three days apart. In the night one of the babies dies. In the morning both women claim the living child, and each accuses the other of swapping them while she slept.</p>
    <p>They lived alone. There were no other adults in the house, no servants, no neighbours in the room, and nobody at all who saw anything. There is no document, no mark, no possession and no third account.</p>
    <p><b>This is the hardest evidential problem in the archive, and I want you to feel how hard it is before you start solving it.</b> Two claims, perfectly matched, and nothing whatever to weigh one against the other. Every ordinary tool an investigator has — a witness, a record, a detail that only one person could know — is simply absent.</p>
    <h4>Your task</h4>
    <p>Five ways out have been proposed. Four of them are the ways people usually try to break a deadlock like this, and the file will not carry any of them. Close them, and then look honestly at what the king actually did.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read both statements carefully — including how alike they are.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened with the <b>testimony grid</b> — the ⚖ button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">A note before you begin. A baby died in this case. The file treats that plainly and without detail, and so should we.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from 1 Kings 3:16–28.</div>`
},
{
  id:"j04court", stage:0, kind:"Court record", title:"The Court Record",
  sub:"The hearing, as registered",
  prev:"Two claimants. No witnesses. Nothing produced in evidence.",
  x:52, y:22, rot:3, w:212,
  body:`
    <p>The hearing was held before the king himself, in open court. The register is short because there was so little to register.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Record</th></tr>
      <tr><td>Claimants appearing</td><td class="n"><b>2</b> — both women of the same household</td></tr>
      <tr><td>Witnesses called</td><td class="n"><b>none</b> — none existed</td></tr>
      <tr><td>Documents produced</td><td class="n"><b>none</b></td></tr>
      <tr><td>Objects produced in evidence</td><td class="n"><b>none</b></td></tr>
      <tr><td>Marks or tokens identifying the child</td><td class="n"><b>none</b></td></tr>
      <tr><td>Statements taken</td><td class="n">2, in open court, each in the other's hearing</td></tr>
    </table>
    <h4>The registrar's remark</h4>
    <p>"I have kept this register eleven years and I have never entered a case with less in it. Ordinarily there is something — a debt tablet, a neighbour, a mark on a garment, a servant who was awake. Here there is a house with two women in it and nothing else.</p>
    <p>Both accounts were given in full. <b>Neither woman contradicted herself, and neither could be caught out</b>, because there was nothing to catch either of them against."</p>
    <div class="ref">Background: 1 Kings 3:16–22.</div>`
},
{
  id:"j04household", stage:0, kind:"Household record", title:"The Household Record",
  sub:"Who lived in the house, and what happened in it",
  prev:"Two women, two sons born three days apart. By morning there is one child.",
  x:78, y:26, rot:-4, w:210,
  body:`
    <p>The record of the household, so far as it can be reconstructed.</p>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Adults in the house</td><td class="n"><b>2</b> — the two women, and no one else</td></tr>
      <tr><td>Children born</td><td class="n">2 — sons, three days apart</td></tr>
      <tr><td>Servants, lodgers or family living with them</td><td class="n"><b>none</b></td></tr>
      <tr><td>Present at either birth</td><td class="n"><b>only the two of them</b></td></tr>
      <tr><td>Children alive when the case came to court</td><td class="n"><b>1</b></td></tr>
      <tr><td>Cause of the other child's death</td><td>Not established. One of the two says it happened in the night.</td></tr>
    </table>
    <h4>Why this matters to the investigation</h4>
    <p>Two women, two babies, one house and no one else at all. Every fact in this case comes from one of exactly two people, and each of those people has the strongest possible reason to say what she is saying.</p>
    <p class="margin-note">There is no neutral source anywhere in the file. Not one.</p>
    <div class="ref">Background: 1 Kings 3:17–18.</div>`
},
{
  id:"j04house", stage:0, kind:"Plan", title:"Plan of the House",
  sub:"Two rooms, one door", thumb:"j04house",
  prev:"One door in or out, and nobody else on the other side of it.",
  x:26, y:56, rot:5, w:216,
  body:`
    <div class="plate">${SVG.j04house}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li>A small two-room house. One sleeping room each, a mat and a cradle in each, and a shared outer wall.</li>
      <li><b>There is one door.</b> No second entrance, no window a person could pass through, no yard door, no shared wall with a neighbour.</li>
      <li>The rooms open onto each other. A woman crossing from one to the other in the night has a few paces to walk and no door to open.</li>
      <li><b>Other people in the house that night: none.</b></li>
    </ul>
    <p class="margin-note">This is the plan of a house in which the thing described is perfectly possible — and in which it is impossible for anyone to have seen it.</p>
    <div class="ref">Fictional plan, drawn from the description in 1 Kings 3:17–18.</div>`
},
{
  id:"j04note", stage:0, notEvidence:true, kind:"Bureau note", title:"Note on the Hearing",
  sub:"How the case was concluded",
  prev:"The king asked no further questions. He proposed one thing, once.",
  x:56, y:52, rot:-2, w:204,
  body:`
    <p>A procedural note, because students of the archive routinely misremember what happened at the end of this hearing.</p>
    <table class="ledger">
      <tr><th>Stage</th><th>What took place</th></tr>
      <tr><td>Both statements heard</td><td>In full, each in the other's presence</td></tr>
      <tr><td>Questions put to the claimants afterwards</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Adjournments</td><td class="n"><b>none</b></td></tr>
      <tr><td>Enquiries ordered</td><td class="n"><b>none</b></td></tr>
      <tr><td>Tests proposed by the king</td><td class="n"><b>1</b></td></tr>
      <tr><td>Times that test was carried out</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>What the Bureau wants you to notice now</h4>
    <p>He did not investigate. He did not send anyone to ask the neighbours, or examine the child, or take the women aside separately. He listened to both, said one thing, and the case was over.</p>
    <p class="margin-note"><b>Count the tests. One.</b> That number is part of the first lock — and by the end of this file it will be the most interesting number in it.</p>
    <div class="ref">Background: 1 Kings 3:23–27.</div>`
},
{
  id:"j04first", stage:0, kind:"Statement", title:"Statement of the First Woman",
  sub:"Taken in the king's hall", thumb:"j04sheetsA",
  prev:"“This woman and I live in one house. I gave birth, and she gave birth three days later.”",
  x:80, y:56, rot:4, w:208,
  body:`
    <div class="plate">${SVG.j04sheetsA}<div class="cap">Click to enlarge. Her statement, in the registrar&rsquo;s hand. The second sheet beside it is the other woman&rsquo;s, still to be read.</div></div>
    <div class="doc-body">
      <p>"My lord, this woman and I live in one house, and I gave birth to a son while she was in the house with me.</p>
      <p>Three days after I gave birth, she gave birth too. We were together. <b>There was no stranger with us in the house — only the two of us.</b></p>
      <p>Her son died in the night. In the night, while I was asleep, <b>she got up and took my son from beside me and laid him at her breast, and laid her dead son at mine.</b></p>
      <p>When I rose in the morning to feed my child, he was not alive — and when I looked at him closely in the morning light, <b>he was not my son.</b>"</p>
      <div class="sig">the first woman</div>
    </div>
    <div class="ref">Background: 1 Kings 3:17–21.</div>`
},
{
  id:"j04second", stage:0, kind:"Statement", title:"Statement of the Second Woman",
  sub:"Taken in the king's hall, immediately after", thumb:"j04sheetsB",
  prev:"“No — the living one is my son, and the dead one is yours.”",
  x:40, y:76, rot:-5, w:208,
  body:`
    <div class="plate">${SVG.j04sheetsB}<div class="cap">Click to enlarge. Her statement, on the second sheet, taken immediately after the first.</div></div>
    <div class="doc-body">
      <p>"My lord, that is not what happened, and she knows it.</p>
      <p>We live in one house, the two of us, and there was no one else with us. She gave birth first and I gave birth three days after her. <b>Only the two of us were there.</b></p>
      <p><b>Her</b> son died in the night. In the night, while I was asleep, <b>she got up and took my son from beside me and laid him at her breast, and laid her dead son at mine.</b></p>
      <p>In the morning I looked at the child at my breast and <b>he was not my son.</b> The living one is my son and the dead one is hers."</p>
      <div class="sig">the second woman</div>
      <h4>The registrar's note</h4>
      <p>The court record adds one line about what followed: the two of them said this to each other, back and forth, <b>in front of the king</b>, until there was nothing left to say. Neither changed a word.</p>
    </div>
    <div class="ref">Background: 1 Kings 3:22.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j04compare", stage:1, kind:"Analysis", title:"The Two Statements Compared",
  sub:"Field Chest B · line for line",
  prev:"Nine claims each. The same nine, in the same order, with the names reversed.",
  x:28, y:26, rot:-3, w:216,
  body:`
    <p>The Bureau's standard first move with two competing accounts is to look for the asymmetry: the extra detail, the hesitation, the fact one speaker knows and the other does not. There is none here, and the absence is worth seeing properly.</p>
    <table class="ledger">
      <tr><th>Measure</th><th>First woman</th><th>Second woman</th></tr>
      <tr><td>Separate claims made</td><td class="n">9</td><td class="n">9</td></tr>
      <tr><td>Order of the claims</td><td>identical</td><td>identical</td></tr>
      <tr><td>Details only she could know</td><td class="n"><b>0</b></td><td class="n"><b>0</b></td></tr>
      <tr><td>Internal contradictions</td><td class="n"><b>0</b></td><td class="n"><b>0</b></td></tr>
      <tr><td>Claims that can be checked</td><td class="n"><b>0</b></td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>Why "one story is more detailed" fails here</h4>
    <p>It is a sound instinct in general — invented accounts are often thinner, or oddly over-furnished. It fails here because <b>the two accounts are the same account</b>. Same house, same three days, same night, same act, same discovery in the morning light. Reverse the names in one and you have the other.</p>
    <p>Take them to the <b>testimony grid</b> — the ⚖ button in the top bar — and match them claim by claim. You will not be able to separate them, and finding that out properly is the point.</p>
    <div class="ref">Background: 1 Kings 3:17–22.</div>`
},
{
  id:"j04neighbours", stage:1, kind:"Official record", title:"The Neighbourhood Record",
  sub:"Field Chest B · everyone who could have known anything",
  prev:"Nobody visited. Nobody heard. Nobody was asked because there was nobody to ask.",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>The obvious way out of a deadlock is to find somebody who was there. The Bureau looked.</p>
    <table class="ledger">
      <tr><th>Enquiry</th><th>Result</th></tr>
      <tr><td>Adults resident in the house</td><td class="n"><b>2</b> — the claimants</td></tr>
      <tr><td>Households sharing a wall</td><td class="n"><b>none</b> — the house stands alone</td></tr>
      <tr><td>Visitors on the day of either birth</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Midwives attending</td><td class="n"><b>none</b> — both women state they were alone</td></tr>
      <tr><td>Anyone who saw both children together</td><td class="n"><b>none</b></td></tr>
      <tr><td>Anyone awake in the house that night</td><td class="n"><b>none but the two of them</b></td></tr>
    </table>
    <h4>The point</h4>
    <p>Both women agree on this — it is the one thing they say identically and without conflict: <b>there was no stranger with us in the house.</b> Each of them says it because it protects her own account. Between them, they have closed the only door through which independent evidence could have come.</p>
    <p class="margin-note">A witness would settle this in a sentence. There is no witness. That is not an oversight in the investigation; it is a fact about the night.</p>
    <div class="ref">Background: 1 Kings 3:18.</div>`
},
{
  id:"j04newborns", stage:1, kind:"Bureau note", title:"Note on Newborns",
  sub:"Field Chest B · why looking at the child settles nothing",
  prev:"Three days apart, at that age, is no difference at all.",
  x:80, y:44, rot:-6, w:206,
  body:`
    <p>Every class that meets this case says the same thing within a minute: <i>just look at the baby.</i> It is a good instinct and it does not work, and it is worth knowing exactly why.</p>
    <table class="ledger">
      <tr><th>Test proposed</th><th>Why it fails here</th></tr>
      <tr><td>Size and weight</td><td>The children were born <b>three days apart</b>. At a few days old that is not a visible difference.</td></tr>
      <tr><td>Family resemblance</td><td>Newborns change week by week, and no father is present in the case to compare against.</td></tr>
      <tr><td>Birthmarks or scars</td><td>The record notes <b>no distinguishing mark of any kind</b> on the living child.</td></tr>
      <tr><td>Clothing or wrappings</td><td>Both households used the same cloth from the same house.</td></tr>
      <tr><td>Which woman the child settles with</td><td>A newborn takes milk from either. It proves nothing about which of them bore him.</td></tr>
    </table>
    <h4>The awkward truth</h4>
    <p>Nothing about the child's body, appearance or behaviour can tell you whose he is. <b>The one object at the centre of the case is silent.</b></p>
    <div class="ref">Fictional note. Background: 1 Kings 3:16–22, where no such evidence is ever offered.</div>`
},
{
  id:"j04order", stage:1, kind:"Court record", title:"The Order of Speaking",
  sub:"Field Chest B · how it was decided who went first",
  prev:"Nobody chose. It is not a clue about anything.",
  x:46, y:62, rot:3, w:206,
  body:`
    <p>Students often reach for the order of the accounts: the one who spoke first, or who came forward, or who brought the case. The record closes that door too.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Record</th></tr>
      <tr><td>Who brought the case to the king?</td><td><b>Both</b>. They came together.</td></tr>
      <tr><td>Who chose the order of speaking?</td><td><b>The court, by its own procedure</b> — the claimant nearest the door speaks first</td></tr>
      <tr><td>Did either object to the order?</td><td class="n"><b>no</b></td></tr>
      <tr><td>Did the first speaker gain anything by it?</td><td>No — the second answered every point in turn</td></tr>
      <tr><td>Was either given time to prepare?</td><td>Neither. Both spoke the same morning.</td></tr>
    </table>
    <h4>Why this matters</h4>
    <p>"The one who speaks first is telling the truth" and "the one who speaks first has had time to prepare a story" are both popular, and they cannot both be right. Here neither applies: the order was set by the shape of the room, not by either woman.</p>
    <p class="margin-note">An accident of procedure is not evidence. It only looks like evidence because we badly want there to be some.</p>
    <div class="ref">Fictional procedural record. The account itself gives no significance to the order.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j04sword", stage:2, kind:"Court record", title:"The Test",
  sub:"Sealed Pouch C · what the king proposed", thumb:"j04sword",
  prev:"“Bring me a sword. Divide the living child, and give half to each.”",
  x:26, y:28, rot:-3, w:212,
  body:`
    <div class="plate">${SVG.j04sword}<div class="cap">Click to enlarge. The sword, and the cradle it was never used on.</div></div>
    <p>Having heard both women and asked nothing further, the king said this:</p>
    <div class="stamp">RECORDED IN OPEN COURT</div>
    <p style="font-size:18px">"The one says, <i>this is my son that lives and your son is the dead one</i>; and the other says, <i>no, your son is the dead one and my son is the living one.</i></p>
    <p style="font-size:18px"><b>Bring me a sword. Divide the living child in two, and give half to the one and half to the other.</b>"</p>
    <h4>What the Bureau insists you notice</h4>
    <ul>
      <li>It is <b>a proposal, made aloud, in front of both women</b>. It is not an order carried out and then regretted.</li>
      <li>The sword was fetched. It was never used. The note on the hearing records the test proposed once and carried out <b>zero</b> times.</li>
      <li>He did not ask either woman a question. He put a situation in front of them and let them answer it however they chose.</li>
    </ul>
    <p class="margin-note">Read that as an investigator, not as a reader of stories. He had no evidence and no way to get any by asking. So he stopped asking — and made some.</p>
    <div class="ref">Background: 1 Kings 3:23–25.</div>`
},
{
  id:"j04outcome", stage:2, kind:"Court record", title:"What Each Woman Said",
  sub:"Sealed Pouch C · the moment the case broke",
  prev:"One of them said give it to her. The other said divide it.",
  x:56, y:30, rot:4, w:208,
  body:`
    <p>The two answers came at once, and for the first time in the whole hearing they were <b>not the same</b>.</p>
    <table class="ledger">
      <tr><th></th><th>What she said</th></tr>
      <tr><td><b>One woman</b></td><td>"My lord, <b>give her the living child, and by no means kill him</b>." The record says her heart yearned over her son.</td></tr>
      <tr><td><b>The other</b></td><td>"<b>He shall be neither mine nor yours. Divide him.</b>"</td></tr>
    </table>
    <h4>The ruling</h4>
    <p>"Give the first woman the living child, and by no means kill him. <b>She is his mother.</b>"</p>
    <h4>Why "no decision was possible" fails</h4>
    <p>That explanation says the evidence ran out, so the case could not be decided — and on the evidence <i>that existed when the women stopped speaking</i>, it is exactly right. That is why it is such a good answer, and why it is worth taking seriously before you throw it out.</p>
    <p>It fails on the outcome. <b>A decision was reached, on evidence, in open court.</b> The evidence simply had not existed an hour earlier, because nobody had yet done anything that would produce it.</p>
    <div class="ref">Background: 1 Kings 3:26–27.</div>`
},
{
  id:"j04why", stage:2, kind:"Bureau analysis", title:"Why That Counts As Evidence",
  sub:"Sealed Pouch C",
  prev:"He could not find the difference between them. So he built a situation that would show it.",
  x:78, y:60, rot:-5, w:208,
  body:`
    <p>This is the page the case exists for, and the Bureau would like students to be able to argue it themselves.</p>
    <h4>The problem, stated exactly</h4>
    <p>Two claims, identical in every respect, with no witness, no document, no mark and no third party. <b>Nothing that had already happened could distinguish the two women.</b> Every ordinary investigative tool works on the past, and the past here is a locked room with two people in it.</p>
    <h4>What the king did instead</h4>
    <p>He stopped trying to read the past and <b>made something happen in the present</b>. He proposed an action that a mother and a non-mother would answer differently — and crucially, one where the honest answer <i>costs</i> the honest person the thing she came for.</p>
    <ul>
      <li>The real mother must choose between the child's life and her claim to him. She gives up the claim.</li>
      <li>The other has no such cost, and no reason to prefer the child alive.</li>
      <li>So the two answers cannot match, however carefully either woman has prepared, <b>because they are not answering a question about the past at all</b>.</li>
    </ul>
    <h4>Is it a trick?</h4>
    <p>It is worth arguing about, and the file does not settle it for you. Notice, though, what it is not: it is not a guess, not a coin toss, and not the king deciding he liked one woman's face better. <b>It is a test with a predicted result, run in public, and both parties could see exactly what was being asked of them.</b></p>
    <p class="margin-note">When the record calls this wisdom, this is what it means: not knowing the answer, but knowing how to make the answer appear.</p>
    <div class="ref">Background: 1 Kings 3:28 · compare 1 Kings 3:9–12.</div>`
},
{
  id:"j04after", stage:2, kind:"Follow-up file", title:"What Followed",
  sub:"Sealed Pouch C",
  prev:"The whole country heard about it, and drew a conclusion about the court.",
  x:44, y:76, rot:2, w:210,
  body:`
    <p>The judgment did not stay in the room.</p>
    <table class="ledger">
      <tr><th>After the ruling</th><th>Record</th></tr>
      <tr><td>Who heard of it</td><td><b>All Israel</b></td></tr>
      <tr><td>What they concluded</td><td>That the wisdom of God was in him to do justice</td></tr>
      <tr><td>Effect on the court</td><td>They stood in awe of the king</td></tr>
      <tr><td>Appeals or challenges recorded</td><td class="n"><b>none</b></td></tr>
      <tr><td>What he had asked for on becoming king</td><td>Not long life, not riches, not the death of his enemies — <b>an understanding heart to discern between good and evil</b></td></tr>
    </table>
    <h4>Why the Bureau keeps this page</h4>
    <p>Because of who the two women were. They had no family in the case, no husband, no property and no standing whatever — the record is blunt about their position and does not soften it. They were the least likely pair of claimants in the kingdom to get a careful hearing.</p>
    <p><b>They got the king himself, and they got his full attention.</b> The country did not marvel that the case was clever. It marvelled that it was <i>just</i> — and that the court had spent that much care on these two.</p>
    <div class="ref">Background: 1 Kings 3:28 · 1 Kings 3:5–14.</div>`
}
];

const JM04_THEORIES = [
  {
    id:"detail",
    title:"1. One story is more detailed, so more likely true",
    claim:"Invented accounts are usually thinner, or oddly over-furnished. Read both carefully and one will give itself away.",
    answer:"j04compare",
    verdict:"The comparison kills it. Nine claims each, in the same order, with the same house, the same three days, the same night and the same discovery in the morning light. Neither account has a detail only that speaker could know, neither contradicts itself, and neither contains a single claim that can be checked against anything. Reverse the names in one and you have the other — there is no asymmetry to find."
  },
  {
    id:"neighbour",
    title:"2. A neighbour could settle it",
    claim:"Somebody always knows. Ask the people next door, or the midwife, or whoever saw the two babies together.",
    answer:"j04neighbours",
    verdict:"The neighbourhood record kills it. The house stands alone with no shared wall, there were no visitors on the day of either birth, no midwife attended, nobody ever saw the two children together, and nobody was awake in the house but the two of them. Both women state it themselves, because it protects each of their accounts: there was no stranger with us in the house."
  },
  {
    id:"appearance",
    title:"3. The child's appearance settles it",
    claim:"Look at the baby. Size, resemblance, a birthmark — something will show which woman he belongs to.",
    answer:"j04newborns",
    verdict:"The note on newborns kills it. The children were born three days apart, which at that age is not a visible difference; the living child carries no distinguishing mark of any kind; both households used the same cloth from the same house; there is no father present to compare a resemblance against; and a newborn will take milk from either woman. The one object at the centre of the case cannot tell you anything."
  },
  {
    id:"first",
    title:"4. The one who spoke first is more likely truthful",
    claim:"The wronged woman would be the one to bring the case and speak first. The other is answering.",
    answer:"j04order",
    verdict:"The order of speaking kills it. They came to the king together, and the order was set by the court's own procedure — the claimant nearest the door speaks first — not chosen by either of them. Neither objected, neither had time to prepare, and the second answered every point in turn. An accident of procedure is not evidence, however much we want it to be."
  },
  {
    id:"nodecision",
    title:"5. No decision was possible on the evidence",
    claim:"Two identical claims and nothing to weigh them against. An honest court would have to say it cannot decide.",
    answer:"j04outcome",
    verdict:"The outcome kills it — and this is the explanation worth arguing over longest, because on the evidence that existed when the women stopped speaking it is entirely correct. What it misses is that evidence is not only something you find. A decision was reached in open court, on a difference both women demonstrated in front of everyone, an hour after there was nothing to go on at all."
  }
];

const JM04_LOCKS = [
  {
    id:"l1", type:"number", code:"2101", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the hearing papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero.",
    questions:[
      "How many women came before the king?",
      "How many children were alive when the case came to court?",
      "How many other people were in the house that night?",
      "How many tests did the king propose before the case was settled?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the court record. Question 2 is the household record. Question 3 is the plan of the house. Question 4 is the Bureau's note on the hearing."
    ],
    reward:"Field Chest B is open: the comparison of the two statements, the neighbourhood record, the note on newborns and the record of the order of speaking are now on the desk. The ⚖ Testimony grid in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"SWORD", len:5,
    wrong:"Not that. Fill in the testimony grid — the ⚖ button in the top bar — and look at what the third column is telling you.",
    name:"Sealed Pouch C — what he called for",
    blurb:"A five-letter keyword. You will not find it by reading harder. Take both statements to the testimony grid, match them claim by claim, and see for yourself that there is nothing to choose between them — then the grid will tell you what the king reached for instead.",
    questions:[
      "Open the ⚖ Testimony grid from the top bar.",
      "Nine claims. Tick each column where that woman makes that claim.",
      "Then tick the third column wherever anything else in the file confirms the claim.",
      "Look at the shape of the finished grid. The keyword follows from it."
    ],
    hints:[
      "Work along each row. Both women make every single one of the nine claims — the accounts are identical with the names reversed.",
      "Now the third column. Go looking for one thing in the whole file that confirms any of it independently, and notice that you cannot find any. That column stays completely empty."
    ],
    reward:"Sealed Pouch C is open: the test, what each woman said, the Bureau's analysis of why it counts as evidence, and the record of what followed are now on the desk."
  }
];

const JM04_MATRIX = {
  button:"⚖ Testimony grid",
  title:"The Testimony Grid",
  blurb:"Nine claims, and two women making them. Tick each woman's column wherever she makes that claim — then tick the third column wherever <b>anything else in the file</b> confirms it independently. Fill in all three columns honestly and the shape of the grid is the answer.",
  corner:"The claim",
  verify:"Check the grid",
  mark:"✔",
  cols:[
    {id:"a", label:"The first woman says",  note:"her statement"},
    {id:"b", label:"The second woman says", note:"her statement"},
    {id:"c", label:"Confirmed by anything else", note:"a witness, a record, a mark"}
  ],
  rows:[
    {id:"house",  label:"We two live in one house",              note:""},
    {id:"born",   label:"We both gave birth, three days apart",  note:""},
    {id:"alone",  label:"There was no stranger in the house",    note:""},
    {id:"died",   label:"Her child died in the night",           note:"each says it of the other"},
    {id:"lay",    label:"She lay on him in her sleep",           note:""},
    {id:"took",   label:"She took my son while I slept",         note:""},
    {id:"laid",   label:"She laid the dead child at my breast",  note:""},
    {id:"morn",   label:"In the morning I saw he was not mine",  note:""},
    {id:"mine",   label:"The living child is mine",              note:""}
  ],
  truth:[
    "house|a","born|a","alone|a","died|a","lay|a","took|a","laid|a","morn|a","mine|a",
    "house|b","born|b","alone|b","died|b","lay|b","took|b","laid|b","morn|b","mine|b"
  ],
  foot:{
    label:"What the court had to weigh them with",
    note:"witnesses, documents, objects, marks",
    cells:{a:"one account", b:"one account", c:"nothing"}
  },
  note:"Both women make every claim on this list. The third column is the one that matters: go looking for a single thing anywhere in the file that confirms any of it independently — a witness, a record, a mark on the child, a neighbour — and notice what you find.",
  reveal:{
    lead:"Two columns ticked identically all the way down, and a third that is completely empty. That is not a grid you can read an answer out of, and it is not meant to be — it is a picture of a case with no evidence in it at all. The king could not tell the two women apart by anything that had already happened. So he stopped asking about the past and called for one object, in open court, in front of them both.",
    answer:"SWORD",
    caption:"He never used it. He never intended to. It was there to make the two women answer differently — and it did."
  }
};

const JM04_VERDICTS = [
  {id:"detail",     text:"One account is more detailed, and that is the one to believe."},
  {id:"neighbour",  text:"A neighbour or a midwife could have settled it if anyone had asked."},
  {id:"appearance", text:"The child's own appearance shows which woman he belongs to."},
  {id:"first",      text:"The woman who spoke first is the one telling the truth."},
  {id:"nodecision", text:"There was no evidence, so no honest decision was possible."},
  {id:"made",       text:"There was nothing in the past that could separate the two women — so the king made evidence in the present, by proposing something only one of them could bear to allow."}
];

const CASE_JM04 = {
  id:"jm04", code:"CASE JM-04", title:"The Judgment",
  period:"Jerusalem · c. 960 BC", colour:"#7d6b4a", poster:"poster_jm04",
  teaser:"Two women, one living child, and not a single witness, document or mark to tell them apart. Both tell exactly the same story with the names reversed. The Bureau regards this as the hardest evidential problem in the archive.",
  introSub:"Two identical accounts. No witnesses. Nothing to weigh.",
  items:JM04_ITEMS, theories:JM04_THEORIES, locks:JM04_LOCKS, verdicts:JM04_VERDICTS,
  matrix:JM04_MATRIX,
  correct:"made",
  boardTitle:"Ways Out of a Deadlock",
  boardIntro:"Five ways out have been proposed — four of them the things people reach for when two accounts cannot be separated. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"There is no witness, no document, no mark and no third account, and neither woman can be caught out. State what the file will actually support about how this case was decided.",
  debrief:{
    lead:"Nothing that had already happened could tell these two women apart, and the file has closed every ordinary way of trying: the accounts are identical, there is no one to ask, the child himself is silent, and the order of speaking was an accident of the room. What broke the case was not a discovery. The king proposed an action in open court that a mother and a non-mother would have to answer differently — and one where the honest answer cost the honest woman the very thing she had come for. He never used the sword. He used the question.",
    questions:[
      "Was the king's test fair? Argue it from the point of view of the woman who nearly lost her son to it, and then from the point of view of a court with no evidence at all.",
      "The file calls this 'making evidence' rather than finding it. Where else do people settle a question by setting up a situation instead of looking for proof — in science, in a courtroom, in a classroom?",
      "The real mother won by giving up her claim. What does the case suggest about the difference between wanting something and loving it?",
      "The two women had no standing, no family in the case and nothing to bargain with, and they were heard by the king himself. Why might the record make a point of telling us who they were?"
    ],
    refs:"1 Kings 3:16–28 · 1 Kings 3:5–14 · Proverbs 2:6–9 · James 1:5"
  },
  teacher:{
    answers:"Lock 1 code <b>2101</b> (2 women · 1 living child · 0 others in the house · 1 test proposed). Lock 2 keyword <b>SWORD</b>, from the ⚖ Testimony grid: both women's columns tick all nine claims, and the third column — anything confirming a claim independently — stays completely empty. Two identical columns and an empty one is the picture of a case with no evidence in it.",
    pairs:"More detailed story → The Two Statements Compared; a neighbour could settle it → The Neighbourhood Record; the child's appearance → Note on Newborns; the first to speak → The Order of Speaking; no decision was possible → What Each Woman Said.",
    conclusion:"Nothing in the past could separate the two claims. The king created evidence in the present by proposing to divide the child, and the two women's answers to that proposal were the first and only thing that distinguished them.",
    prompts:"\"Find me one fact in her story that isn't in the other one.\" · \"Who could you ask? Now check whether that person exists.\" · \"If you can't find out what happened, is there anything you could DO that would show you?\" · \"He asked for a sword and never used it. Why not?\"",
    extra:"Sensitivity note, worth reading before you run this one. A baby dies in this case, and the king proposes cutting a living one in half. The file keeps both at the level of plain statement with no detail, and the artwork shows an empty cradle rather than anything else — but a class will feel it, and some students will have reason to feel it sharply. Say at the start that a baby died in the story, that nobody in the file is glad about it, and that the sword was never used. The second and third debrief questions are where the real learning is; leave time for them. This case pairs unusually well with JM-15 (The Witnesses Who Would Not Agree), which is the same problem from the opposite direction: there, two accounts that should match and do not."
  }
};

registerCase(CASE_JM04);
