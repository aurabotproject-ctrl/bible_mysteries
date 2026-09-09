const JM33_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"Your task is not to guess. It is to eliminate.",
  x:26, y:30, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Jerusalem. Spring, around the year AD 33. A man executed on the Friday is buried before sunset in a tomb cut into rock. A stone weighing more than a small car is rolled across the entrance. On the Saturday the tomb is sealed by Roman order and a watch of soldiers is posted.</p>
    <p>On the Sunday morning the stone is found rolled back and the tomb is empty.</p>
    <p>Within seven weeks, in that same city, his followers are standing in public and saying he is alive. The authorities want the claim stopped. To stop it they need to do one thing only: produce the body. They never do.</p>
    <h4>Your task</h4>
    <p>Five explanations have been offered for the empty tomb. Your job is not to pick your favourite. Your job is to <b>test each one against the evidence and throw out the ones that cannot survive it</b>. Whatever is left standing at the end — however hard it is to believe — is your conclusion.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk right now is yours to read. Read all of it before you decide anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>When you have everything, go to the <b>Pinboard</b> and pin the one piece of evidence that destroys each theory.</li>
      <li>Only then will the accusation form open.</li>
    </ul>
    <p class="margin-note">Detectives get one thing right and one thing wrong. Right: they follow the evidence. Wrong: they fall in love with a theory before they've read the file.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case uses the four gospel accounts (Matthew 27–28, Mark 15–16, Luke 23–24, John 19–20) as its primary sources, together with historical background on Roman burial, sealing and guard practice.</div>`
},
{
  id:"roster", stage:0, kind:"Military record", title:"Watch Order — the Garden Tomb",
  sub:"Posted the evening before the Sabbath", thumb:"roster",
  prev:"Signed on watch by the men themselves.",
  x:70, y:20, rot:4, w:206,
  body:`
    <div class="plate">${SVG.roster}<div class="cap">The posting board, copied from the cohort's day-book.</div></div>
    <h4>Order of posting</h4>
    <p>Detail assigned from the Jerusalem cohort at the request of the chief priests, by authority of the Prefect. The men signed for themselves at the posting of the watch:</p>
    <table class="ledger">
      <tr><th>Name</th><th>Rank</th></tr>
      <tr><td>Lucius Varo</td><td>decanus — in command</td></tr>
      <tr><td>Gaius Petronius</td><td>legionary</td></tr>
      <tr><td>Marcus Silvanus</td><td>legionary</td></tr>
      <tr><td>Tiberius Rufus</td><td>legionary</td></tr>
    </table>
    <h4>Standing orders</h4>
    <ul>
      <li>The stone is to be sealed with the cord and wax of the Prefect. <b>The seal is not to be broken.</b></li>
      <li>The watch does not sleep. Men stand in turns; at no hour is the tomb unwatched.</li>
      <li>Any man who leaves his post before his relief arrives answers for it <b>with his life</b>.</li>
    </ul>
    <p>Relief due at first light on the third day.</p>
    <div class="ref">Background: Matthew 27:62–66. Roman military discipline treated sleeping on watch or deserting a post as a capital offence.</div>`
},
{
  id:"receipt", stage:0, kind:"Merchant's receipt", title:"Purchase of Burial Spices",
  sub:"House of Simeon, spice merchant, Lower City",
  prev:"Myrrh and aloes. Seventy-five litrai. Paid in full.",
  x:82, y:56, rot:-6, w:196,
  body:`
    <div class="doc-body">
      <p><b>Day of Preparation, before sunset. Urgent order. Paid in full at the counter.</b></p>
      <table class="ledger">
        <tr><th>Goods</th><th>Preparation</th><th class="n">Weight</th></tr>
        <tr><td>Myrrh</td><td>resin, mixed</td><td class="n">—</td></tr>
        <tr><td>Aloes</td><td>powdered</td><td class="n">—</td></tr>
        <tr><td colspan="2"><b>Total weight of the order</b></td><td class="n"><b>75 litrai (≈ 34 kg)</b></td></tr>
      </table>
      <p><b>Purchaser:</b> Nicodemus, of the Council.<br>
         <b>Delivered to:</b> the garden ground of Joseph of Arimathea, outside the gate.</p>
      <p class="margin-note">Merchant's own note: "A burial quantity fit for a king. I have not sold so much at once in twenty years. What he paid would keep an ordinary family for a year or more."</p>
      <div class="stamp">PAID · NOT COLLECTED BACK</div>
      <p>The goods were carried out of the shop and were never returned, resold, or reported stolen.</p>
    </div>
    <div class="ref">Background: John 19:39–40. Two spices are named on this order — count them; you will need the number.</div>`
},
{
  id:"timeline", stage:0, kind:"Case notes", title:"Timeline of the Three Days",
  sub:"Compiled from all four accounts",
  prev:"Friday · Saturday · Sunday. Count them as the sources count them.",
  x:44, y:62, rot:2, w:212,
  body:`
    <h4>Day one — Friday, the Day of Preparation</h4>
    <ul>
      <li>Mid-afternoon: the execution ends. Death confirmed by the soldiers before the body is released.</li>
      <li>Late afternoon: Joseph of Arimathea asks the Prefect for the body and is granted it.</li>
      <li>Before sunset: the body is wrapped in linen strips with the spices and laid in a <b>new</b> rock tomb in Joseph's garden. A large disc stone is rolled across the mouth.</li>
      <li><b>The women follow and watch where he is laid.</b> They note the place so they can return.</li>
    </ul>
    <h4>Day two — Saturday, the Sabbath</h4>
    <ul>
      <li>No work. No trading. No long journeys. The city is still.</li>
      <li>The chief priests go to the Prefect and ask for a guard, saying the followers may steal the body. The tomb is sealed and the watch is posted.</li>
    </ul>
    <h4>Day three — Sunday, the first day of the week</h4>
    <ul>
      <li>Before dawn: women set out with more spices, worrying aloud about who will roll the stone away for them.</li>
      <li>First light: the stone is already rolled back. The tomb is open and empty. The guards are gone from the post.</li>
      <li>Shortly after: two of the men run to the tomb and go inside.</li>
    </ul>
    <p class="margin-note">Counted the way the sources count them, burial to discovery covers three days: Friday, Saturday, Sunday.</p>
    <div class="ref">Background: Matthew 27:57–28:8; Mark 15:42–16:8; Luke 23:50–24:12; John 19:38–20:10.</div>`
},
{
  id:"mary", stage:0, kind:"Witness statement", title:"Statement — Mary of Magdala",
  sub:"Taken at the garden, first day of the week",
  prev:"“I did not go alone. There were three of us.”",
  x:20, y:66, rot:-5, w:204,
  body:`
    <div class="doc-body">
      <p>"I watched them bury him. I want that written down first, because people keep asking me if I am sure of the place. I sat opposite the tomb on the Friday until the stone was closed. I know which tomb it was. I could walk to it in the dark — and I did.</p>
      <p>I did not go alone. <b>Mary the mother of James came, and Salome. Three of us</b> set out before the light with the spices we had prepared, and the whole way we were arguing about the same problem: who is going to roll the stone back for us? Not one of us thought we could shift it ourselves.</p>
      <p>We came round the trees and the stone was already off the mouth of the tomb. No soldiers. Nobody. I did not think 'he is alive'. I thought <b>somebody has taken him and I don't know where they have put him</b>. That is what I said, and that is what I ran and told the others.</p>
      <p>I want to be honest about that, because I know how it sounds now. The first thing I believed was a robbery."</p>
      <div class="sig">Mary of Magdala</div>
    </div>
    <div class="ref">Background: Mark 15:47; Mark 16:1–3; John 20:1–2, 11–15. Note how many women are named in this statement.</div>`
},
{
  id:"guards", stage:0, kind:"Witness statement", title:"Sworn Report of the Watch",
  sub:"Lucius Varo, decanus, for the detail",
  prev:"“We were not asleep. Nobody says that but the men who paid us to say it.”",
  x:70, y:70, rot:6, w:200,
  body:`
    <div class="doc-body">
      <p>"The stone was in place when we came on. The cord was sound and the wax was whole; I checked it myself, because if that seal breaks it is my neck, not anyone else's.</p>
      <p>Between the middle watch and the light there was a shaking of the ground. When we could stand again the stone was off its channel and the mouth was open. I sent two men in with a torch. There was linen on the shelf and nothing else. No body. No man carrying a body. Nobody had come past us up the path — you cannot get to that tomb another way, the rock is behind it.</p>
      <p>We went to the priests before we went to the Prefect, and I will say plainly why. A guard who loses what he is set over is a dead man. They heard us out, they talked among themselves, and then they gave us money and a story: <b>say his followers came in the night and took him while you slept.</b>
      <p>I took the money. I am not proud of it. But think about what they told us to say. <b>If we were asleep, how would we know who did it?</b> And if a Roman guard admits sleeping on watch, he does not get paid — he gets executed. They promised to keep us out of trouble with the Prefect. Men do not pay to bury a story they can disprove."</p>
      <div class="stamp">STATEMENT RETRACTS EARLIER ACCOUNT</div>
      <div class="sig">Lucius Varo</div>
    </div>
    <div class="ref">Background: Matthew 28:11–15, which records that the guards were paid to say the disciples stole the body while they slept.</div>`
},
{
  id:"map", stage:0, kind:"Plan", title:"Plan of Jerusalem and the Garden",
  sub:"Reconstructed from the sources", thumb:"map",
  prev:"The tomb, the execution ground, the council hall and the room where the followers were hiding.",
  x:52, y:34, rot:-2, w:224,
  body:`
    <div class="plate">${SVG.map}<div class="cap">Reconstructed plan of the city and the garden, c. AD 33. Click to enlarge.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li>The tomb is <b>outside the city wall</b>, in a private garden belonging to Joseph of Arimathea, close to the execution ground.</li>
      <li>There is <b>one path in</b>. The rock face is behind the tomb; nobody reaches the mouth without passing the guard post.</li>
      <li>The room where the followers were hiding is <b>inside the walls</b>. Anyone carrying a body out of that garden and back to the city would have to come in through the gate, past whoever was on it.</li>
      <li>The Council Hall — where the chief priests met — is a few minutes from the temple and well within reach of the garden.</li>
    </ul>
    <div class="ref">Background: John 19:41–42 (a garden near the place of execution, a new tomb); Acts 1:12–13 (the upper room in the city).</div>`
},
{
  id:"cipher", stage:0, kind:"Physical object", title:"Tally Scrap from the Guard's Kit",
  sub:"Five letters, written in cipher", thumb:"cipher",
  prev:"Five letters. Nothing else on it.",
  x:34, y:84, rot:8, w:178,
  body:`
    <div class="plate">${SVG.cipher}</div>
    <p>A torn strip of papyrus found folded inside a soldier's kit. Five letters, nothing else. The Bureau's archivists believe it was the keyword to the archive pouch the Council used for sensitive papers — soldiers on guard duty were often told a keyword in cipher so it could not simply be read off them.</p>
    <p class="margin-note">Use the decoder strip. Move each letter back, not forward.</p>
    <div class="ref">Fictional prop. Caesar-shift ciphers of this kind really were used by Roman commanders.</div>`
},
{
  id:"decoder", stage:0, notEvidence:true, kind:"Tool", title:"Field Cipher Decoder Strip",
  sub:"Tenth Legion issue", thumb:"decoder",
  prev:"Each letter written three places forward. Read it three places back.",
  x:12, y:46, rot:5, w:186,
  body:`
    <div class="plate">${SVG.decoder}</div>
    <h4>How to use it</h4>
    <p>Every letter of the true word was written <b>three places forward</b> in the alphabet. To read it, you move each letter three places back.</p>
    <p>On the strip, find your cipher letter on the <b>bottom</b> line. The letter directly above it on the <b>top</b> line is the true letter.</p>
    <p class="margin-note">Worked example: the cipher letters G R J read back as D O G.</p>
    <p>Work through the scrap one letter at a time and write the answer down before you type it anywhere.</p>
    <div class="ref">Tool. Not evidence — it proves nothing on its own.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"tombsketch", stage:1, kind:"Scene sketch", title:"Inside the Tomb",
  sub:"Evidence Bag B · drawn from the eyewitness descriptions", thumb:"tomb",
  prev:"The wrappings lying flat. The face cloth folded, by itself.",
  x:30, y:26, rot:-4, w:222,
  body:`
    <div class="plate">${SVG.tomb}<div class="cap">Click to enlarge. Interior of the tomb, looking in from the mouth.</div></div>
    <h4>What the first men inside described</h4>
    <ul>
      <li><b>A.</b> The linen strips were <b>lying where the body had been</b> — still in their coils, not unwound, not thrown about.</li>
      <li><b>B.</b> The cloth that had been around the head was <b>not with the other linen</b>. It was folded up in a place by itself.</li>
      <li>Nothing was overturned. Nothing was searched. The shelf was otherwise bare.</li>
    </ul>
    <p class="margin-note">Ask yourself: if you were stealing a body in the dark, with soldiers somewhere near, would you stop to unwrap it — and then fold the face cloth?</p>
    <div class="ref">Background: John 20:5–8; Luke 24:12.</div>`
},
{
  id:"inventory", stage:1, kind:"Inventory", title:"Evidence Inventory — Tomb Interior",
  sub:"Evidence Bag B",
  prev:"Nothing of value was taken. Everything of value was left.",
  x:58, y:22, rot:3, w:200,
  body:`
    <table class="ledger">
      <tr><th>Item</th><th>Found</th><th>Value</th></tr>
      <tr><td>Linen burial wrappings</td><td>Present, on the shelf</td><td>High — fine linen</td></tr>
      <tr><td>Face cloth</td><td>Present, folded apart</td><td>High</td></tr>
      <tr><td>Myrrh and aloes, 75 litrai</td><td>Present in and around the wrappings</td><td><b>Very high</b></td></tr>
      <tr><td>Body</td><td><b>ABSENT</b></td><td>—</td></tr>
    </table>
    <h4>Investigator's remark</h4>
    <p>This is the detail that should stop you. The spices alone were worth about a year's wages for an ordinary family, and they were portable, untraceable and easy to sell. The linen was worth taking too.</p>
    <p><b>All of it was left behind. The only thing missing was the one thing with no resale value at all.</b></p>
    <div class="ref">Background: John 19:39–40; John 20:6–7.</div>`
},
{
  id:"stone", stage:1, kind:"Technical report", title:"The Sealing Stone — Engineer's Report",
  sub:"Evidence Bag B", thumb:"stone",
  prev:"Between 1.3 and 2 tonnes. It had to be rolled uphill to open it.",
  x:80, y:34, rot:-7, w:210,
  body:`
    <div class="plate">${SVG.stone}<div class="cap">Click to enlarge. Section through the tomb mouth and the stone channel.</div></div>
    <h4>Findings</h4>
    <ul>
      <li>Disc-shaped limestone slab, roughly 1.6 m across and 30 cm thick. Estimated mass <b>1,300–2,000 kg</b>.</li>
      <li>It runs in a carved channel that <b>slopes down toward the tomb mouth</b>. Closing it is easy — one man can let it roll. <b>Opening it means pushing that weight back uphill.</b></li>
      <li>Stone on stone. The noise carries. It cannot be done quietly.</li>
      <li>On the Sunday morning the stone was found <b>completely clear of the channel</b>, not merely eased open a hand's width — which is all a body would need.</li>
    </ul>
    <p class="margin-note">Three women walked out before dawn openly worrying that they could not move it. They were right.</p>
    <div class="ref">Background: Mark 16:3–4. Rolling-stone tombs of this type have been excavated in Jerusalem.</div>`
},
{
  id:"peterjohn", stage:1, kind:"Witness statement", title:"Statement — the Two Who Ran",
  sub:"Evidence Bag B",
  prev:"“If we had taken him, I would know. I was the one hiding behind a locked door.”",
  x:66, y:64, rot:5, w:198,
  body:`
    <div class="doc-body">
      <p>"She came shouting that the tomb was open and we ran, both of us. The younger one got there first and stopped at the mouth. I went straight in.</p>
      <p>The linen was lying there. The cloth from his head was folded and set apart from the rest. That is what I keep coming back to. It was <b>tidy</b>. Nothing about that night was tidy.</p>
      <p>People say we took him. I want to be plain about what we were like that weekend. We ran when they arrested him. I denied I even knew him, three times, to people who could not have hurt me. On the Sunday morning we were behind a locked door because we thought we were next.</p>
      <p>Then work out what you are accusing us of. Getting past four Roman soldiers. Breaking the Prefect's own seal. Rolling that stone clear — the three of us together could not have shifted it, let alone silently. Unwrapping a body in the dark and folding the cloth. Carrying him back through a city gate.</p>
      <p><b>And then dying for a story we would have known was a lie.</b> I have watched what happens to men who keep saying this. Not one of us has taken it back."</p>
      <div class="sig">Simon, called Peter</div>
    </div>
    <div class="ref">Background: Mark 14:50 (they all fled); Luke 22:54–62 (the denials); John 20:19 (the doors locked for fear); John 20:3–8.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"ledger", stage:2, kind:"Financial record", title:"Council Ledger — Payment to the Watch",
  sub:"Archive pouch C",
  prev:"A large sum of money, and a story to go with it.",
  x:24, y:24, rot:-3, w:206,
  body:`
    <table class="ledger">
      <tr><th>Entry</th><th>Detail</th><th class="n">Out</th></tr>
      <tr><td>To the soldiers of the garden watch</td><td>"a large sum" — paid direct, not through the treasury</td><td class="n">▮▮▮▮</td></tr>
      <tr><td>Condition of payment</td><td>The men are to say: <i>his disciples came by night and stole him while we were asleep</i></td><td class="n">—</td></tr>
      <tr><td>Further undertaking</td><td>If this reaches the Prefect, the Council will "satisfy him and keep you out of trouble"</td><td class="n">—</td></tr>
      <tr><td>Search parties despatched</td><td><b>none recorded</b></td><td class="n">—</td></tr>
      <tr><td>Body recovered</td><td><b>none recorded — ever</b></td><td class="n">—</td></tr>
    </table>
    <h4>Investigator's remark</h4>
    <p>Read what this record does <b>not</b> contain. There is no hunt. No house searched, no follower arrested and questioned about the location of a corpse — and these were men with the authority to do exactly that, in a city where the claim was being shouted in public within weeks.</p>
    <p><b>One body, produced once, ends the entire movement.</b> Instead the Council spent money on a rumour. People pay to bury a story they cannot disprove.</p>
    <div class="ref">Background: Matthew 28:11–15.</div>`
},
{
  id:"joseph", stage:2, kind:"Deposition", title:"Deposition — Joseph of Arimathea",
  sub:"Archive pouch C · owner of the tomb",
  prev:"“It was my own tomb. I never touched it again.”",
  x:56, y:28, rot:4, w:202,
  body:`
    <div class="doc-body">
      <p>"The tomb was mine. New, cut for me, never used. I gave it because it was close and the sun was going down and there was no time to do anything else properly.</p>
      <p>I am asked whether I moved him afterwards to a permanent place. Consider what you are asking.</p>
      <ul>
        <li>It was <b>my own new tomb</b>. There was no better place to move him to. That is the whole reason I offered it.</li>
        <li>On the Sabbath I could not have moved so much as a basket, let alone a body, without every neighbour knowing.</li>
        <li>By the Sunday the stone carried <b>the Prefect's seal</b>. I sit on the Council. I know exactly what Rome does to a man who breaks a Roman seal on a tomb the Prefect himself ordered guarded.</li>
        <li>And when they began saying he had risen, <b>I could have ended it with one sentence</b>: I moved him, he is over there. I never said it. I never said it because it is not true."</li>
      </ul>
      <div class="sig">Joseph, of Arimathea</div>
    </div>
    <div class="ref">Background: Matthew 27:57–60; John 19:41–42; Luke 23:50–53.</div>`
},
{
  id:"sealorder", stage:2, kind:"Roman order", title:"The Sealing Order & the Broken Seal",
  sub:"Archive pouch C", thumb:"seal",
  prev:"The cord was torn straight through the middle.",
  x:78, y:60, rot:-5, w:200,
  body:`
    <div class="plate">${SVG.seal}<div class="cap">Click to enlarge. The cord and wax as found on the Sunday morning.</div></div>
    <h4>Order of the Prefect</h4>
    <p>At the request of the chief priests, the tomb in the garden of Joseph of Arimathea is to be made secure until the third day. A cord is to be drawn across the stone and fixed at each side with the Prefect's wax. A watch is to be set.</p>
    <div class="stamp">SEAL OF ROME · BREAKING IS AN OFFENCE AGAINST THE STATE</div>
    <h4>Condition when found</h4>
    <ul>
      <li>The cord was <b>torn through</b>, not cut cleanly, not slipped off. Both wax discs remained fixed to the rock.</li>
      <li>The stone was clear of its channel entirely.</li>
      <li>The watch was absent from the post.</li>
    </ul>
    <p class="margin-note">Nobody with anything to lose breaks a Roman seal. That rules out a great many quiet, sensible explanations.</p>
    <div class="ref">Background: Matthew 27:62–66.</div>`
},
{
  id:"aftermath", stage:2, kind:"Follow-up file", title:"What Happened Next",
  sub:"Archive pouch C · the following months and years",
  prev:"Seven weeks later they said it in public, in the same city, and nobody produced a body.",
  x:44, y:70, rot:2, w:210,
  body:`
    <h4>Fifty days later</h4>
    <p>The same followers who had been hiding behind a locked door stood up <b>in Jerusalem</b> — a short walk from the tomb, in front of people who had been in the crowd — and said publicly that he had been raised. Thousands were persuaded that day.</p>
    <h4>The response of the authorities</h4>
    <p>They arrested the speakers. They threatened them. They flogged them. They did the one thing that never works and never did the one thing that would have worked instantly: <b>walk half a mile and open the tomb</b>.</p>
    <h4>The witnesses afterwards</h4>
    <ul>
      <li>They gained no money, no safety and no status from the claim.</li>
      <li>They were beaten, imprisoned and in most cases killed for refusing to withdraw it.</li>
      <li><b>Not one of them ever retracted</b>, even when retracting would have saved their life.</li>
    </ul>
    <p class="margin-note">People will die for something false if they believe it is true. It is very much harder to find people who will die for something they know for a fact they made up — especially when all of them would have to keep the same secret, for decades, under torture.</p>
    <div class="ref">Background: Acts 2:22–41; Acts 4:1–22; Acts 5:27–42; 1 Corinthians 15:3–8.</div>`
}
];

/* ---------------- THE FIVE THEORIES ---------------- */
const JM33_THEORIES = [
  {
    id:"disciples",
    title:"1. The followers stole the body",
    claim:"They came at night, moved the stone, took him, and invented the rest.",
    answer:"tombsketch",
    verdict:"The tomb interior kills it. Grave robbers in the dark, with soldiers nearby, do not stop to unwind a body and then fold the face cloth and set it apart. The wrappings were left lying in place and the cloth was folded — that is not a robbery, it is a scene someone left calmly. Add the stone (they could not have moved it), the seal (breaking it was a capital offence), and the fact that they were hiding behind a locked door and later died rather than take the story back."
  },
  {
    id:"authorities",
    title:"2. The authorities moved it",
    claim:"The chief priests or the Romans took the body to stop it becoming a shrine.",
    answer:"ledger",
    verdict:"The Council ledger kills it. If they had the body, they had the perfect answer — produce it, once, in public, and the movement ends the same afternoon. Instead they paid the guards to spread a theft story, ordered no search, and never recovered a body. You do not buy a rumour to cover up something you could simply show people."
  },
  {
    id:"joseph",
    title:"3. Joseph of Arimathea moved him",
    claim:"The tomb was borrowed in a hurry. He quietly shifted the body to a permanent grave.",
    answer:"joseph",
    verdict:"Joseph's own deposition kills it. It was his own new tomb — there was nowhere better to move him to. The Sabbath made it impossible, and by Sunday the stone carried the Prefect's seal, which a Council member would never break. Above all, one sentence from him would have ended the whole claim. He never said it."
  },
  {
    id:"wrongtomb",
    title:"4. The women went to the wrong tomb",
    claim:"In the half-dark they simply walked up to an empty tomb next door.",
    answer:"mary",
    verdict:"Mary's statement kills it. She sat opposite the tomb on the Friday and watched exactly where he was laid, specifically so she could come back. Two of the men then ran to the same tomb and went inside. The guards had been posted at the correct tomb and it was open and empty — and the authorities, who knew the place perfectly well, never once said 'you are at the wrong grave'."
  },
  {
    id:"thieves",
    title:"5. Grave robbers took him",
    claim:"Thieves broke in for whatever the burial was worth.",
    answer:"inventory",
    verdict:"The inventory kills it. Thieves take what sells. Seventy-five litrai of myrrh and aloes — worth about a year's wages, portable and untraceable — were left lying in the tomb, along with the fine linen. The only thing missing was the one thing on the shelf with no resale value. And robbers do not get past a Roman guard, break the Prefect's seal, and roll a two-tonne stone uphill for nothing."
  }
];

/* ---------------- THE LOCKS ---------------- */
const JM33_LOCKS = [
  {
    id:"l1", type:"number", code:"4332", len:4,
    wrong:"Not that. Check each digit against its own document — one of the four is wrong.",
    name:"Evidence Bag B — the tomb itself",
    blurb:"A four-digit lock. Each digit is the answer to one question, and every answer is somewhere on the desk already. Read the documents; do not guess.",
    questions:[
      "How many soldiers signed the Watch Order?",
      "Counting the way the timeline counts them, how many days does burial to discovery cover?",
      "How many women are named as going to the tomb in Mary of Magdala's statement?",
      "How many different spices are listed on the burial receipt?"
    ],
    hints:[
      "Every answer is a single digit, and the questions are in order. Question 1 → first digit.",
      "Question 1 is the Watch Order. Question 2 is the Timeline. Question 3 is Mary's statement. Question 4 is the spice receipt."
    ],
    reward:"Evidence Bag B is open: the sketch of the tomb interior, the inventory, the engineer's report on the stone, and Peter's statement are now on the desk."
  },
  {
    id:"l2", type:"word", code:"LINEN", len:5,
    wrong:"Not that. Shift each letter BACK three places, not forward.",
    name:"Archive Pouch C — the Council's papers",
    blurb:"A five-letter keyword. The keyword was written in the Tenth Legion's field cipher on the tally scrap found in a guard's kit. Use the decoder strip.",
    questions:[
      "Find the tally scrap. It shows five cipher letters.",
      "Find the decoder strip. It tells you which way to shift.",
      "Decode the five letters and type the true word."
    ],
    hints:[
      "The scrap reads O L Q H Q. Every letter needs to move BACK three places in the alphabet.",
      "O goes back to L. Now do the other four the same way."
    ],
    reward:"Archive Pouch C is open: the Council ledger, Joseph of Arimathea's deposition, the sealing order, and the follow-up file are now on the desk."
  }
];

/* ---------------- THE ACCUSATION ---------------- */
const JM33_VERDICTS = [
  {id:"disciples", text:"His followers stole the body."},
  {id:"authorities", text:"The chief priests or the Romans removed the body."},
  {id:"joseph", text:"Joseph of Arimathea quietly moved him to another grave."},
  {id:"wrongtomb", text:"The women went to the wrong tomb in the dark."},
  {id:"thieves", text:"Grave robbers took the body."},
  {id:"risen", text:"Every natural explanation fails. The remaining conclusion is the one the witnesses gave: he was raised from the dead."}
];

/* ---------------- THE CASE ---------------- */
const CASE_JM33 = {
  id:"jm33", code:"CASE JM-33", title:"The Empty Tomb",
  period:"Jerusalem · c. AD 33", colour:"#8c2f1f", poster:"poster_jm33",
  teaser:"A sealed tomb, four Roman guards on watch, and no body in the morning. Five explanations have been offered. Only one survives the file.",
  introSub:"A sealed tomb. Four guards. No body.",
  items:JM33_ITEMS, theories:JM33_THEORIES, locks:JM33_LOCKS, verdicts:JM33_VERDICTS,
  correct:"risen",
  boardTitle:"The Elimination Board",
  boardIntro:"Five explanations. For each one, pin the <b>single</b> piece of evidence that destroys it. When all five are correct, the accusation form opens.",
  accusationIntro:"Whatever remains after every impossible answer has been thrown out is your conclusion — whether or not it is the answer you expected to reach.",
  debrief:{
    lead:"Every natural explanation offered for the empty tomb has been tested against the file and has failed. What is left is not a gap in the evidence — it is the explanation the witnesses themselves gave, and went on giving when it cost them everything.",
    questions:[
      "Which single piece of evidence did you find hardest to explain away? Why that one?",
      "The followers had everything to gain by quietly dropping the claim, and nothing to gain by keeping it. What does that tell you about whether they believed it?",
      "A detective is allowed to reach a conclusion that surprises them. Did this one surprise you?",
      "Paul wrote that if this did not happen, the whole faith is empty and worthless (1 Corinthians 15:14–19). Why would he be willing to stake everything on one event?"
    ],
    refs:"Matthew 27:57 – 28:15 · Mark 15:42 – 16:8 · Luke 23:50 – 24:12 · John 19:38 – 20:18 · Acts 2:22–41 · 1 Corinthians 15:3–8"
  },
  teacher:{
    answers:"Lock 1 code <b>4332</b> (4 soldiers · 3 days · 3 women · 2 spices). Lock 2 keyword <b>LINEN</b> (Caesar shift back three from OLQHQ).",
    pairs:"followers → Inside the Tomb; authorities → Council Ledger; Joseph → Joseph's Deposition; wrong tomb → Mary's Statement; robbers → Evidence Inventory.",
    conclusion:"The resurrection — the only explanation the evidence leaves standing.",
    prompts:"\"What would the chief priests have done if they had the body?\" · \"Why does it matter that the spices were left behind?\" · \"What were the disciples like on the Friday night?\""
  }
};

registerCase(CASE_JM33);
