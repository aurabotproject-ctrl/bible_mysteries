"use strict";
/* ============================================================
   CASE JM-47 — THE LEAK
   Aram against Israel, about 850 BC.  Source: 2 Kings 6:8–23.
   ============================================================ */

SVG.j47map = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j47map.jpg" x="0" y="0" width="1536" height="1024"/><text x="1330" y="250" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#7d2b1b" textLength="190" lengthAdjust="spacingAndGlyphs" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">DAMASCUS</text><text x="1330" y="276" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d2b1b" font-style="italic" opacity=".85" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">the war council sits here</text><text x="250" y="578" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#2f5c3a" textLength="168" lengthAdjust="spacingAndGlyphs" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">SAMARIA</text><text x="250" y="603" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#2f5c3a" font-style="italic" opacity=".9" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">Israel&#8217;s king</text><text x="383" y="356" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#2f5c3a" textLength="124" lengthAdjust="spacingAndGlyphs" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">DOTHAN</text><text x="383" y="378" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#2f5c3a" font-style="italic" opacity=".85" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">unwalled, no garrison</text><text x="612" y="200" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#31506b" opacity=".9" transform="rotate(-80 612 200)" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">THE JORDAN</text><text x="1290" y="335" text-anchor="start" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">1 &#183; REHOB</text><text x="1268" y="660" text-anchor="start" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">2 &#183; GOLAN</text><text x="872" y="275" text-anchor="start" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">3 &#183; KARNAIM</text><text x="952" y="755" text-anchor="start" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">4 &#183; ASHTAROTH</text><text x="812" y="548" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">5 &#183; HELAM</text><text x="1140" y="470" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d2b1b" font-style="italic" opacity=".9" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">the fifth march &#8212; four days from Damascus</text><text x="545" y="62" text-anchor="end" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" font-style="italic" opacity=".85" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">ISRAEL &#8592;</text><text x="700" y="62" text-anchor="start" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" font-style="italic" opacity=".85" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">&#8594; ARAM</text><text x="1143.3" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">0</text><text x="1215" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">20</text><text x="1285" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">40</text><text x="1356.7" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">60</text><text x="1441.7" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">80</text><text x="1292" y="958" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#4a3520" textLength="90" lengthAdjust="spacingAndGlyphs" opacity=".85" paint-order="stroke" stroke="#f0e3c4" stroke-width="4" stroke-linejoin="round">KILOMETRES</text></svg>`;

SVG.j47chamber = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j47chamber.jpg" x="0" y="0" width="1536" height="1024"/><text x="368" y="136" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="282" lengthAdjust="spacingAndGlyphs" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">THE ANTECHAMBER</text><text x="898" y="153" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="248" lengthAdjust="spacingAndGlyphs" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">BARRED FROM INSIDE</text><text x="1314" y="137" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="258" lengthAdjust="spacingAndGlyphs" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">THE INNER CHAMBER</text><text x="820" y="345" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="500" fill="#4a3520" font-style="italic" opacity=".85" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">two guards</text><text x="1210" y="345" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="500" fill="#4a3520" font-style="italic" opacity=".85" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">the king and his scribe</text><text x="1210" y="640" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="500" fill="#7d2b1b" font-style="italic" opacity=".9" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">no window &#183; solid stone on three sides</text><text x="80" y="475" text-anchor="start" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" opacity=".8" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">&#8776; 6 M</text><text x="517" y="812" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" opacity=".8" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">&#8776; 8 M</text><text x="1170" y="812" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#4a3520" opacity=".8" paint-order="stroke" stroke="#efe6d4" stroke-width="3.5" stroke-linejoin="round">&#8776; 5 M</text></svg>`;

SVG.j47disp = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j47disp.jpg" x="0" y="0" width="1536" height="1024"/><text x="360" y="224" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="330" lengthAdjust="spacingAndGlyphs">SEAL WHOLE ON ARRIVAL</text></svg>`;

SVG.j47dothan = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j47dothan.jpg" x="0" y="0" width="1536" height="1024"/></svg>`;

const JM47_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j47letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"Five plans. Five empty ambushes. Somebody is talking.",
  x:24, y:28, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Aram and Israel are at war. It is the border sort of war — no great battles, just raiding columns sent down out of the hills to catch the other side moving.</p>
    <p>The king of Aram is good at this. He picks his ground, he keeps it quiet, and he sends his men by night. <b>Five times he has laid an ambush. Five times the Israelites have simply not come.</b> Not once have they walked into a trap, and twice they changed their route before the Aramean column had even reached its position.</p>
    <p>The king has drawn the obvious conclusion. Somebody in that room is talking to Israel. He has said so to their faces, and he means to find the man.</p>
    <h4>Your task</h4>
    <p>You are not here to guess who. You are here to work out <b>how</b> the information is getting out — and to close, one by one, every route it could possibly have taken. Five explanations have been offered. Test each one against the file. Throw out the ones that will not survive it.</p>
    <p>Be warned: the king already has a favourite suspect, and the favourite suspect is the obvious one. Obvious suspects are how investigations go wrong.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before deciding anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>When you have everything, go to the <b>Pinboard</b> and close off each route in turn.</li>
    </ul>
    <p class="margin-note">A leak is not a person. A leak is a route. Find the route and the person follows.</p>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from 2 Kings 6:8–23, with background from 2 Kings 5 (Naaman) and 2 Kings 8 (Hazael).</div>`
},
{
  id:"j47register", stage:0, kind:"Military record", title:"Campaign Register of Ambushes",
  sub:"Kept by the king's own hand",
  prev:"Five plans. Five positions. Five times nobody came.",
  x:56, y:24, rot:3, w:216,
  body:`
    <p>The king keeps this list himself. Each line is one ambush: where it was laid, how many companies of men were sent, and what happened when the Israelites were supposed to arrive.</p>
    <table class="ledger">
      <tr><th>Plan</th><th>Position</th><th class="n">Companies</th><th>Outcome</th></tr>
      <tr><td>1</td><td><b>REHOB</b></td><td class="n">3</td><td>Position found empty. No enemy.</td></tr>
      <tr><td>2</td><td><b>GOLAN</b></td><td class="n">2</td><td>Israel turned aside a day early.</td></tr>
      <tr><td>3</td><td><b>KARNAIM</b></td><td class="n">3</td><td>Position found empty. No enemy.</td></tr>
      <tr><td>4</td><td><b>ASHTAROTH</b></td><td class="n">2</td><td>Israel took the other road.</td></tr>
      <tr><td>5</td><td><b>HELAM</b></td><td class="n">2</td><td>Position found empty. No enemy.</td></tr>
    </table>
    <h4>The king's note at the foot of the page</h4>
    <p class="margin-note">"Five positions. Five times warned. Not one of these places did they blunder into, and two of them they avoided before my own column had been told where it was going."</p>
    <div class="ref">Background: 2 Kings 6:8–10. The place names are drawn from towns of the region; Dothan is named in the account itself.</div>`
},
{
  id:"j47council", stage:0, kind:"Court record", title:"The War Council — Roster and Attendance",
  sub:"Who sat, and who was in the room for each plan",
  prev:"Six men on the council. Not one of them heard all five plans.",
  x:80, y:52, rot:-5, w:206,
  body:`
    <p>Six men sit on the war council of Aram. The king gives the plan; the council hears it; the orders go out afterwards.</p>
    <table class="ledger">
      <tr><th>Councillor</th><th>Office</th></tr>
      <tr><td>Naaman</td><td>commander of the army</td></tr>
      <tr><td>Hazael</td><td>officer of the king's household</td></tr>
      <tr><td>Rezon</td><td>quartermaster</td></tr>
      <tr><td>Idri</td><td>scribe of the council</td></tr>
      <tr><td>Ben-Hadar</td><td>captain of the chariots</td></tr>
      <tr><td>Zakkur</td><td>captain of the guard</td></tr>
    </table>
    <h4>Attendance, plan by plan</h4>
    <table class="ledger">
      <tr><th>Plan</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>Naaman</td><td>✔</td><td>✔</td><td><b>—</b></td><td>✔</td><td><b>—</b></td></tr>
      <tr><td>Hazael</td><td><b>—</b></td><td><b>—</b></td><td>✔</td><td>✔</td><td>✔</td></tr>
      <tr><td>Rezon</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td><b>—</b></td></tr>
      <tr><td>Idri</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
      <tr><td>Ben-Hadar</td><td>✔</td><td>✔</td><td><b>—</b></td><td>✔</td><td>✔</td></tr>
      <tr><td>Zakkur</td><td>✔</td><td><b>—</b></td><td>✔</td><td>✔</td><td><b>—</b></td></tr>
    </table>
    <p class="margin-note">Naaman was away with the northern column for plans 3 and 5. Both of those plans leaked anyway.</p>
    <div class="ref">Fictional record built around the account. Naaman and Hazael are named in 2 Kings; the others are invented for the case.</div>`
},
{
  id:"j47king", stage:0, kind:"Statement", title:"Statement of the King of Aram",
  sub:"Taken in the council chamber, Damascus",
  prev:"“Which of you is on the side of the king of Israel?”",
  x:44, y:60, rot:2, w:210,
  body:`
    <div class="doc-body">
      <p>"I have laid five ambushes against Israel this season. <b>In not one of them did we so much as see an Israelite.</b> Five times. That is not luck and I will not be told it is.</p>
      <p>Plan four I gave in this room, in the afternoon, to my council. By the second watch of that same night the Israelite column had turned onto the other road. They did not blunder off it. They turned before they reached the fork.</p>
      <p>Plan five I gave to nobody but my scribe, behind a barred door, in my own bedchamber, because by then I did not trust the walls. It made no difference at all.</p>
      <p>So I put it to them plainly: <b>which of you is on the side of the king of Israel?</b> I watched their faces when I said it. I have hanged men on less."</p>
      <div class="sig">the king of Aram</div>
    </div>
    <div class="ref">Background: 2 Kings 6:11. The king really did accuse his own officers of treachery.</div>`
},
{
  id:"j47naaman", stage:0, kind:"Statement", title:"Statement — Naaman, Commander of the Army",
  sub:"The king's own suspect",
  prev:"“I owe that prophet my skin. I have never denied it.”",
  x:22, y:64, rot:-6, w:204,
  body:`
    <div class="doc-body">
      <p>"I know exactly why you are standing in front of me, so let us have it out.</p>
      <p>Yes. I went into Israel. Yes, I went to their prophet Elisha, because I had a disease no physician in Damascus could touch, and I came home clean. I said afterwards, in front of witnesses, that I would worship no god but the God of Israel. <b>I have never once hidden any of that</b>, and if I meant to betray my king I would have been a great deal quieter about all of it.</p>
      <p>But look at your own attendance book before you decide.</p>
      <ul>
        <li><b>I was not in the room for plan three.</b> I was six days north with the column.</li>
        <li><b>I was not in the room for plan five.</b> Nobody was, except the king and his scribe.</li>
        <li>Both of them leaked exactly like the others.</li>
      </ul>
      <p>I cannot pass on what I was never told. Whatever is carrying these plans out of Damascus does not need me in the room — and that should frighten you far more than I do."</p>
      <div class="sig">Naaman</div>
    </div>
    <div class="ref">Background: 2 Kings 5:1–19. Naaman, commander of Aram's army, was healed at Elisha's word and declared he would worship the God of Israel.</div>`
},
{
  id:"j47scribe", stage:0, kind:"Official record", title:"The Scribe's Dispatch Book",
  sub:"Idri, scribe of the council",
  prev:"Two of the five plans were never written down at all.", thumb:"j47disp",
  x:66, y:74, rot:5, w:204,
  body:`
    <div class="plate">${SVG.j47disp}<div class="cap">Click to enlarge. Two sealed dispatches as returned to the archive.</div></div>
    <p>Every written order leaving Damascus is copied into this book: what was sent, by whom, and the state of the seal when it arrived.</p>
    <table class="ledger">
      <tr><th>Plan</th><th>Written down?</th><th>Courier</th><th>Seal on arrival</th></tr>
      <tr><td>1</td><td>Yes — one dispatch</td><td>Abda</td><td>Whole</td></tr>
      <tr><td>2</td><td><b>NO — spoken only</b></td><td>—</td><td>—</td></tr>
      <tr><td>3</td><td>Yes — two dispatches</td><td>Abda, Shemer</td><td>Whole</td></tr>
      <tr><td>4</td><td>Yes — one dispatch</td><td>Shemer</td><td>Whole</td></tr>
      <tr><td>5</td><td><b>NO — spoken only</b></td><td>—</td><td>—</td></tr>
    </table>
    <h4>Scribe's own note</h4>
    <p>"Not one dispatch has gone missing. Not one seal has come to hand broken — <b>the count of broken seals this whole season is none at all</b>. Every courier has returned and every courier can be accounted for.</p>
    <p>And two of the five plans I never wrote down. There was no document to steal, no rider to stop and no wax to lift. <b>Those two leaked the same as the rest.</b>"</p>
    <div class="ref">Fictional record. Sealed clay and wax dispatches carried by royal couriers were the standard method of the period.</div>`
},
{
  id:"j47map", stage:0, kind:"Plan", title:"Campaign Map — the Border Country",
  sub:"Damascus, the five positions, and the Israelite ground", thumb:"j47map",
  tour:{href:"../tours/aram-campaign.html", label:"🗺 Open the campaign map",
        note:"Follow the fifth march position by position"},
  prev:"Where each ambush was laid, and how far it is from anywhere.",
  x:40, y:34, rot:-2, w:222,
  body:`
    <div class="plate">${SVG.j47map}<div class="cap">Click the map to enlarge it.</div></div>
    <h4>What the map tells you</h4>
    <ul>
      <li>The council sits at <b>Damascus</b>, well east of the Jordan. The nearest ambush position is two days' march away; the furthest is four.</li>
      <li>Three of the five positions are <b>out of sight of any road</b> — dry valleys and folds of ground chosen precisely because a column on the highway cannot see into them.</li>
      <li>Israel's king is at <b>Samaria</b>, west of the river. Anything leaving Damascus has to cross that whole distance before it is any use to him.</li>
      <li><b>Dothan</b> is a small unwalled town a short walk north of Samaria — no wall, no garrison, nothing of military value. Remember it anyway. It is the one place on this map you will meet again.</li>
    </ul>
    <div class="ref">Background: 2 Kings 6:8–13. Dothan is named in the account as the town the Aramean king sent his army to surround.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j47chamber", stage:1, kind:"Plan", title:"The King's Inner Chamber",
  sub:"Field Chest B · as it stood when the fifth plan was given", thumb:"j47chamber",
  prev:"Two men inside. Two guards outside. No window.",
  x:30, y:26, rot:-4, w:220,
  body:`
    <div class="plate">${SVG.j47chamber}<div class="cap">Click the plan to enlarge it. The royal apartments at Damascus.</div></div>
    <h4>Statement of Zakkur, captain of the guard</h4>
    <p>"The fifth plan was given in the king's own bedchamber. I set the watch myself and I stood one of them.</p>
    <ul>
      <li>The door was <b>barred on the inside</b>. There is one door. There is no window and no second way in — solid stone on three sides.</li>
      <li>Every servant of the household was <b>put out of the apartments</b> before the king went in, and they stayed out. I counted them out and I counted them back.</li>
      <li>Two of us stood the whole watch at the door. <b>We could not hear a word through it</b>, and I know that because I tried.</li>
      <li>Only two men were inside: the king, and Idri his scribe.</li>
    </ul>
    <p class="margin-note">And that plan reached Samaria like all the others.</p>
    <div class="ref">Background: 2 Kings 6:12 — the officer's phrase is "the words you speak in your bedchamber".</div>`
},
{
  id:"j47household", stage:1, kind:"Household record", title:"The Steward's Book",
  sub:"Field Chest B · servants of the royal apartments",
  prev:"Nobody absent. Nobody paid. Nobody suddenly rich.",
  x:58, y:22, rot:3, w:200,
  body:`
    <p>After the third failure the king had the whole household examined. The steward's book records what was found.</p>
    <table class="ledger">
      <tr><th>Check</th><th>Result</th></tr>
      <tr><td>Servants absent from the apartments on any plan night</td><td class="n"><b>none</b></td></tr>
      <tr><td>Servants who left Damascus that season</td><td class="n"><b>none</b></td></tr>
      <tr><td>Unexplained silver found in the searches</td><td class="n"><b>none</b></td></tr>
      <tr><td>Israelite servants in the household</td><td class="n">two — both questioned, both confined since plan two</td></tr>
      <tr><td>Plans that leaked <i>after</i> those two were confined</td><td class="n"><b>three</b></td></tr>
    </table>
    <h4>Investigator's remark</h4>
    <p>The two obvious candidates were locked up after the second failure. Plans three, four and five went out to Israel anyway. Whatever is carrying the king's words, it was not walking about the servants' quarters.</p>
    <div class="ref">Fictional record consistent with the account's picture of a leak the household could not explain.</div>`
},
{
  id:"j47hazael", stage:1, kind:"Statement", title:"Statement — Hazael of the Household",
  sub:"Field Chest B",
  prev:"“I would happily see Naaman fall. That is not the same as this.”",
  x:78, y:36, rot:-7, w:206,
  body:`
    <div class="doc-body">
      <p>"I will save you the trouble of asking it politely. Yes, I want Naaman's command. Everybody in Damascus knows it, and if he were disgraced tomorrow I would not pretend to grieve. That gives me a motive and I am not going to stand here and deny having one.</p>
      <p>It does not give me the plans.</p>
      <ul>
        <li><b>I was not on the council for plans one and two.</b> I was not appointed until after the second failure — look at the attendance book. Both of those leaked before I had heard a word of them.</li>
        <li>If I were leaking to bring Naaman down, I would leak the plans <b>he</b> was in the room for. Two of the five he was nowhere near, and those two went out just the same.</li>
      </ul>
      <p>Whatever is doing this began before me and does not need me. I would rather like to know what it is, since I intend to be sitting in that room for some years yet."</p>
      <div class="sig">Hazael</div>
    </div>
    <div class="ref">Background: 2 Kings 8:7–15. Hazael was an officer of the Aramean court who did later become king.</div>`
},
{
  id:"j47scouts", stage:1, kind:"Field analysis", title:"Were They Simply Watching the Roads?",
  sub:"Field Chest B · analysis of Israelite movements",
  prev:"They turned aside before the column had been told where it was going.",
  x:66, y:66, rot:5, w:204,
  body:`
    <p>The simplest answer to any leak is that there is no leak — that the other side is just watching, and watching well. The Bureau tested that answer against the five failures. It does not hold.</p>
    <h4>What ordinary scouting could explain</h4>
    <p>A watcher on high ground can see a column on the march. Given a day, he can guess roughly where it is heading and warn his king to keep clear.</p>
    <h4>What it cannot explain</h4>
    <ul>
      <li><b>Three positions were invisible from any road.</b> Dry valleys and folds of ground, chosen for exactly that reason. There was nothing to see until you were inside them.</li>
      <li>On plans two and four, <b>Israel turned aside before the Aramean column had been given its destination</b>. There was no marching army to watch yet. The warning ran ahead of the army.</li>
      <li>Plan three was <b>changed at the last hour</b>. Israel avoided the new position, not the old one.</li>
      <li>Israel's watchers were on their own side of the Jordan, days away from Damascus. <b>The plans were leaving the council chamber, not the battlefield.</b></li>
    </ul>
    <p class="margin-note">Scouts can tell you where an army is. They cannot tell you what a king said indoors before the army moved.</p>
    <div class="ref">Background: 2 Kings 6:9–10 — the warnings reached Israel's king in time to avoid the place, repeatedly.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j47officer", stage:2, kind:"Council minute", title:"What the Officer Said in Council",
  sub:"Sealed Pouch C · the answer to the king's accusation",
  prev:"“None of us, my lord king.”",
  x:26, y:26, rot:-3, w:206,
  body:`
    <div class="doc-body">
      <p>The king had just demanded to know which of them was on the side of the king of Israel. The room stayed quiet. Then one of his own officers answered him — and what he said was not a denial, it was an explanation.</p>
      <div class="stamp">MINUTE OF COUNCIL</div>
      <p style="font-size:18px"><b>"None of us, my lord the king. It is Elisha, the prophet who is in Israel, who tells the king of Israel the very words you speak in your bedchamber."</b></p>
      <h4>Why the council took this seriously</h4>
      <ul>
        <li>The officer was not accusing a colleague. He had nothing to gain and a great deal to lose by saying something so easy to laugh at.</li>
        <li>He named the one thing every other explanation had failed to account for: <b>the bedchamber</b>. Not the council room. Not the dispatches. The room with two men in it and a barred door.</li>
        <li>Nobody in that chamber contradicted him. They had all watched five plans go out of a sealed room.</li>
      </ul>
      <p class="margin-note">The king's response was not to argue. It was to ask where the prophet was — and to send an army to fetch him.</p>
      <div class="ref">Background: 2 Kings 6:12.</div>`
},
{
  id:"j47dothan", stage:2, kind:"Field report", title:"The Raid on Dothan",
  sub:"Sealed Pouch C · what the army was sent to do",
  prev:"Horses, chariots and a strong force — sent by night to take one man.", thumb:"j47dothan",
  x:56, y:30, rot:4, w:206,
  body:`
    <div class="plate">${SVG.j47dothan}<div class="cap">Click to enlarge. Dothan at first light, the ridges held on every side.</div></div>
    <p>Told that the source was a single man in a small town, the king did the thing a king does. He sent an army for him.</p>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Objective</td><td>Seize the prophet Elisha at Dothan</td></tr>
      <tr><td>Force sent</td><td>Horses, chariots and a strong body of men</td></tr>
      <tr><td>Timing</td><td>By night, surrounding the town before first light</td></tr>
      <tr><td>Result</td><td><b>The force did not return with the prophet</b></td></tr>
      <tr><td>Where the force was next seen</td><td><b>Inside Samaria — the enemy capital</b></td></tr>
    </table>
    <h4>What the Aramean survivors reported</h4>
    <p>That the prophet's servant saw them at dawn and panicked, and the prophet did not. That the prophet prayed, and the servant then said the hills around Dothan were <b>full of horses and chariots of fire</b>. That the whole Aramean force was struck blind, and that a man they took to be a guide led them — straight through the gates of Samaria.</p>
    <p class="margin-note">An army sent to capture one man walked, sightless and unresisting, into the capital city of the enemy it was at war with.</p>
    <div class="ref">Background: 2 Kings 6:13–19.</div>`
},
{
  id:"j47after", stage:2, kind:"Follow-up file", title:"What Happened Next",
  sub:"Sealed Pouch C",
  prev:"They were fed, and let go. And the raids stopped.",
  x:44, y:68, rot:2, w:210,
  body:`
    <h4>In Samaria</h4>
    <p>The king of Israel had an entire enemy army standing helpless inside his own walls, and asked the prophet twice whether he should kill them.</p>
    <p>He was told no. He was told to <b>set bread and water in front of them</b>. A great feast was prepared, the Aramean force ate, and they were sent home to their master.</p>
    <h4>The result</h4>
    <p>The record is blunt about what followed: <b>the Aramean raiding parties stopped coming into Israel.</b> Not because they were beaten in the field. Because the war stopped making any sense to fight.</p>
    <h4>Why the Bureau keeps this page in the file</h4>
    <p>Every ordinary explanation of the leak assumed somebody was being paid, blackmailed, or was quietly working for the other side. This ending fits none of that. The side that held all the advantage gave it away and fed its enemies — which is not how spies, traitors or informers behave.</p>
    <div class="ref">Background: 2 Kings 6:20–23.</div>`
},
{
  id:"j47prophet", stage:2, kind:"Background file", title:"The Man at Dothan",
  sub:"Sealed Pouch C · who Elisha was",
  prev:"He never entered Damascus. He never needed to.",
  x:78, y:62, rot:-5, w:200,
  body:`
    <p>The Bureau's file on Elisha, so far as it can be reconstructed:</p>
    <ul>
      <li>A prophet in Israel, successor to Elijah. Lived plainly, held no office and commanded no soldiers.</li>
      <li><b>He had no agent in Damascus, no household there, and no recorded correspondence with anyone in Aram.</b></li>
      <li>He had, however, already been at the centre of one Aramean file: Naaman, the king's own commander, went to him and came home healed. Aram had met this man before.</li>
      <li>He is recorded warning Israel's king repeatedly and specifically — not "beware of Aram", but <b>do not pass that place</b>.</li>
    </ul>
    <h4>The point the file turns on</h4>
    <p>Every other explanation needs a route: a person in the room, a document on the road, an ear at the door, an eye on the hill. Close all four and the information should stop.</p>
    <p><b>All four were closed, and the information did not stop.</b> What is left is a source that needed no route at all — and the only person who claimed to be that source is the man the king then sent an army to silence.</p>
    <div class="ref">Background: 2 Kings 2–8 for Elisha; 2 Kings 6:9–12 for the warnings.</div>`
}
];

const JM47_THEORIES = [
  {
    id:"naaman",
    title:"1. Naaman is passing word to Israel",
    claim:"The commander owes the Israelite prophet his life and says openly he worships Israel's God. The obvious traitor.",
    answer:"j47council",
    verdict:"The attendance book kills it. Naaman was not in the room for plan three — he was six days north with the column — and nobody but the king and the scribe heard plan five. Both leaked exactly like the rest. A man cannot pass on what he was never told, and the leak did not need him present. Motive is not evidence: the obvious suspect had no access to two of the five."
  },
  {
    id:"dispatch",
    title:"2. The written dispatches are being intercepted",
    claim:"Orders leave Damascus by courier. Stop a rider, lift a seal, and you have the plan.",
    answer:"j47scribe",
    verdict:"The scribe's dispatch book kills it. Two of the five plans were never written down at all — no document, no rider, no wax — and they leaked the same as the others. On top of that, not one dispatch went missing all season and not one seal came to hand broken. You cannot intercept a message that was never sent."
  },
  {
    id:"servant",
    title:"3. A servant is listening at the door",
    claim:"Palaces are full of servants. One of them hears, and sells what he hears.",
    answer:"j47chamber",
    verdict:"The chamber plan kills it. The fifth plan was given behind a door barred from the inside, in a room with no window and no second entrance, with every servant put out of the apartments and two guards on the door who could hear nothing through it. Two men were inside. That plan reached Samaria like all the others — and the two Israelite servants had been confined since the second failure anyway."
  },
  {
    id:"scouts",
    title:"4. There is no leak — Israel is simply watching",
    claim:"Good scouts on high ground can see a column coming and warn their king to keep clear.",
    answer:"j47scouts",
    verdict:"The movement analysis kills it. Three of the positions could not be seen from any road, and twice Israel turned aside before the Aramean column had even been told where it was going — the warning ran ahead of the army. Plan three was changed at the last hour and Israel avoided the new position, not the old one. Scouts can tell you where an army is; they cannot tell you what a king said indoors before it moved."
  },
  {
    id:"hazael",
    title:"5. Hazael is leaking to bring Naaman down",
    claim:"An ambitious officer wants the commander's job, and a run of failures would finish him.",
    answer:"j47hazael",
    verdict:"The timing kills it. Hazael was not appointed to the council until after the second failure — plans one and two leaked before he had heard a word of them. And if the object were to destroy Naaman, the plans to leak would be the ones Naaman was in the room for; instead the two he was nowhere near went out just the same. A real motive, but no access and no fit."
  }
];

const JM47_LOCKS = [
  {
    id:"l1", type:"number", code:"5260", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the sealed room",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero — do not assume a question is broken just because the count comes to nothing.",
    questions:[
      "How many ambush plans are listed in the campaign register?",
      "How many of those plans were never written down at all?",
      "How many men sit on the war council?",
      "According to the king, how many times did an ambush actually catch the Israelites?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the campaign register. Question 2 is the scribe's dispatch book. Question 3 is the council roster. Question 4 is the king's own statement."
    ],
    reward:"Field Chest B is open: the plan of the king's inner chamber, the steward's book, Hazael's statement and the analysis of Israelite movements are now on the desk."
  },
  {
    id:"l2", type:"word", code:"HORSE", len:5,
    wrong:"Not that. Work down the register in plan order, and let the number of companies tell you which letter to take.",
    name:"Sealed Pouch C — the council's own answer",
    blurb:"A five-letter keyword, built from the campaign register itself. The register gives five positions, in order, and beside each one the number of companies sent there.",
    questions:[
      "Take the five positions from the campaign register, in plan order.",
      "Beside each position, read the number of companies assigned to it.",
      "From each position's name, take the letter standing in that place — three companies means the third letter.",
      "Read your five letters in order and enter the word."
    ],
    hints:[
      "Start with plan one: REHOB, three companies. Count three letters into REHOB.",
      "R-E-H — the third letter is H. Now do GOLAN with two companies, KARNAIM with three, and so on."
    ],
    reward:"Sealed Pouch C is open: the council minute, the report of the raid on Dothan, the follow-up file and the Bureau's file on the prophet are now on the desk."
  }
];

const JM47_VERDICTS = [
  {id:"naaman",   text:"Naaman, the commander, is passing the plans to Israel."},
  {id:"dispatch", text:"The written dispatches are being intercepted on the road."},
  {id:"servant",  text:"A servant of the household is listening and selling what he hears."},
  {id:"scouts",   text:"There is no leak at all — Israel's scouts are simply watching the roads."},
  {id:"hazael",   text:"Hazael is leaking the plans to bring Naaman down and take his command."},
  {id:"prophet",  text:"Every route into that room is closed. The plans reached Israel from someone who was never in the room and never received a message: Elisha, the prophet at Dothan."}
];

const CASE_JM47 = {
  id:"jm47", code:"CASE JM-47", title:"The Leak",
  period:"Aram and Israel · c. 850 BC", colour:"#2f5c7d", poster:"poster_jm47",
  teaser:"Five ambushes laid in secret. Five times the enemy simply did not come. The king of Aram is certain one of his own officers is talking — and he is about to be told something far stranger.",
  introSub:"Five secret plans. Five empty ambushes. Somebody is talking.",
  items:JM47_ITEMS, theories:JM47_THEORIES, locks:JM47_LOCKS, verdicts:JM47_VERDICTS,
  correct:"prophet",
  boardTitle:"Closing the Routes",
  boardIntro:"A leak is not a person — it is a route. Five routes have been proposed for how the king's plans reached Israel. For each one, pin the <b>single</b> piece of evidence that closes it. When all five are closed, the accusation form opens.",
  accusationIntro:"You have closed every route by which a human being in Damascus could have carried these plans to Samaria. The information still arrived. State what the file will actually support — not what sounds most sensible.",
  debrief:{
    lead:"Every route out of that chamber has been closed: the man in the room, the message on the road, the ear at the door, the eye on the hill, the rival with a motive. The plans went to Israel anyway. The only account that fits every failure is the one the king's own officer gave him — and the king believed it enough to send an army after one unarmed man.",
    questions:[
      "The king's first instinct was to look for a traitor. Why is that always the first place investigators look, and how did it nearly send this one wrong?",
      "Naaman had the strongest motive and the clearest connection to Israel. What does it show that the evidence cleared him anyway?",
      "The Aramean army was fed and sent home instead of killed, and the raids stopped. Why might that end a war better than a victory would?",
      "Elisha kept warning Israel's king about danger he could not have seen. Where else in the Bible does God warn people about something ahead of time — and what is it usually for?"
    ],
    refs:"2 Kings 6:8–23 · 2 Kings 5:1–19 (Naaman) · 2 Kings 8:7–15 (Hazael) · Psalm 139:1–12"
  },
  teacher:{
    answers:"Lock 1 code <b>5260</b> (5 plans · 2 never written · 6 councillors · 0 successful ambushes). Lock 2 keyword <b>HORSE</b> — from the campaign register, the 'companies' number gives the letter position in each place name: REHOB(3)=H, GOLAN(2)=O, KARNAIM(3)=R, ASHTAROTH(2)=S, HELAM(2)=E.",
    pairs:"Naaman → Council Roster and Attendance; dispatches → Scribe's Dispatch Book; servant → The King's Inner Chamber; scouts → Were They Simply Watching the Roads?; Hazael → Hazael's Statement.",
    conclusion:"The source was Elisha the prophet — someone with no route into the room at all.",
    prompts:"\"Which plans did Naaman never hear?\" · \"What is different about plans two and five?\" · \"If Israel were only watching the roads, how did they turn aside before the army had been told where to go?\""
  }
};

registerCase(CASE_JM47);
