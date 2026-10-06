# B.I.B. Facelift — Image Prompts

The app's structure works. What makes it look cheap is that almost everything
on screen is drawn with flat CSS: a brown gradient for the desk, cream
rectangles for the evidence cards, dotted orange for the cork. The two
reference images feel real for three reasons, and this brief chases all three:

1. **Real materials, photographed.** Wood with grain, cork with holes, paper
   with fibre and creases, metal that catches light.
2. **Layers.** Nothing sits on its own. A photo is clipped to a report, a tag
   is tied to an object, tape holds a corner, a coffee ring sits on the edge.
3. **People.** A case file has faces in it. Long-lens photographs of the
   people involved are what make the board feel like an investigation.

Generate these in ChatGPT (or any image tool). Bring them back in batches and
I'll wire them in. The finished images go into
`~/Desktop/claude_auto/investigate/tobuild/facelift/`, named exactly as
listed.

---

## How to generate (read once)

- **No words in any image.** No labels, no stamps with words, no captions, no
  watermarks. Every word is added afterwards as real text so it stays sharp
  and can change with the reading level. This is the same pipeline as the
  case art.
- **Transparent background** where it says **PNG · transparent**. In ChatGPT
  say "transparent background, PNG" at the end of the prompt. If it gives you
  a white or checkered background instead, send it back anyway and I'll cut
  it out.
- **Sizes.** Square is 1024×1024, landscape is 1536×1024, portrait is
  1024×1536.
- **Paste the style block** for that section at the end of every prompt in
  that section. That is what keeps the whole set looking like one kit
  instead of 80 unrelated pictures.

---

## Part 1 — The workspace kit (do this first)

These are shared by all 19 cases, so this one batch lifts the whole app at
once. Fifteen images.

### Style block for Part 1 (paste after each prompt)

> Photorealistic studio photograph, top-down view, soft warm light from a
> desk lamp at the upper left, gentle realistic shadow, true-to-life
> material texture and wear. Muted vintage palette: walnut brown, aged
> cream, manila, oxblood red, tarnished brass. No text, no letters, no
> numbers, no logos, no watermark.

| # | File | Size | Prompt |
|---|------|------|--------|
| 1 | `desk-wood.jpg` | 1536×1024 | A dark walnut detective's desk surface seen from directly above, deep grain, a few light scratches and old ink stains, slightly darker at the edges, evenly lit across the middle, empty with nothing on it, seamless and tileable. |
| 2 | `cork-board.jpg` | 1536×1024 | A well-used cork noticeboard seen straight on, dark natural cork with fine grain, scattered small pin holes, faint marks where paper was once taped, slightly darker toward the edges, empty, seamless and tileable. |
| 3 | `case-folder-open.png` | 1536×1024 · transparent | An open manila case folder lying flat, seen from above, both inside faces empty, a tab on the right edge, a steel paper clip on the left flap, worn corners, a faint coffee ring on one side, nothing written on it. |
| 4 | `case-folder-closed.png` | 1024×1536 · transparent | A closed manila case folder lying flat, seen from above, tied shut with a red string wound round a button, a blank rectangular label area in the upper left, a blank tab on top, worn edges and soft creases. |
| 5 | `paper-report.png` | 1024×1536 · transparent | A single sheet of aged typing paper, slightly yellowed, two punched holes on the left edge, a soft fold line across the middle, faint foxing spots, completely blank. |
| 6 | `paper-index.png` | 1536×1024 · transparent | A single aged index card, ruled with faint blue lines and one red line across the top, soft dog-eared corner, completely blank. |
| 7 | `paper-ledger.png` | 1024×1536 · transparent | A single sheet of old ledger paper with pale green columns and ruled lines, a torn left edge from a bound book, slightly stained, completely blank. |
| 8 | `paper-statement.png` | 1024×1536 · transparent | A single sheet of thin onionskin paper, slightly translucent and crinkled, faint ruled lines, the top edge slightly torn, completely blank. |
| 9 | `photo-polaroid.png` | 1024×1024 · transparent | An empty instant-photo frame, thick white border slightly yellowed, wider at the bottom, the picture area a flat mid-grey, a small curl at one corner, a soft shadow. |
| 10 | `evidence-tag.png` | 1024×1536 · transparent | A blank manila evidence tag with a reinforced eyelet hole and a short loop of red string through it, faint printed ruled lines and nothing written on them, slightly creased. |
| 11 | `hardware-set.png` | 1536×1024 · transparent | Laid out separately with space between each: one steel paper clip, one black binder clip, two red round-headed push pins, one brass push pin, three torn strips of beige masking tape at different angles. |
| 12 | `stamp-frames.png` | 1536×1024 · transparent | Three empty rubber-stamp ink impressions on white, in faded red ink, with patchy uneven ink coverage: one rectangle with a double border, one circle with a double border, one long thin rectangle. The insides are empty. |
| 13 | `desk-props-left.png` | 1024×1536 · transparent | Arranged as if at the left edge of a desk: a brass magnifying glass, a fountain pen, a small stack of three old leather notebooks, a white mug of black coffee with a stain on its rim. |
| 14 | `desk-props-right.png` | 1024×1536 · transparent | Arranged as if at the right edge of a desk: the round brass base of a green-shaded banker's lamp seen from above, an old brass key, a short coil of red string, a scatter of four push pins. |
| 15 | `smudges.png` | 1536×1024 · transparent | Separated from each other: two coffee rings of different sizes, one inky thumbprint, one faint grey fingerprint, a small splash of ink. |

---

## Part 2 — Persons of interest (surveillance photographs)

Each case gets a **Persons of Interest** card: three or four photographs of
the people in the story, as if a detective had been hiding with a long lens.
They are printed into polaroid frames with handwritten captions, and each
witness's photo is also clipped to the corner of their own statement card.

### Rules for these photographs

- **Never show the face of Jesus.** Where he is in the scene, he is seen from
  behind, or in the distance, or just out of frame. God and angels are never
  shown.
- **Suitable for 10–13 year olds.** No blood, no bodies, no weapons being
  used, nothing frightening for its own sake.
- **Respect.** These are not mugshots. A caption decides what each person is
  ("witness", "person of interest", "the accused", "investigator"). The
  photograph only shows them going about the moment the case is about.
- **Ancient, accurately.** No modern clothes, objects, buildings or plants.
  The joke of the whole idea is a modern camera in an ancient place, so the
  look is modern film while everything in front of the lens is ancient.

### Style block for Part 2 (paste after each prompt)

> Candid surveillance photograph, taken with a long telephoto lens from a
> hidden position, the subject unaware of the camera. Part of the frame is
> blocked by something out of focus in the foreground. Grainy 35mm film,
> slightly faded colour, cool shadows and warm highlights, very shallow
> depth of field, a touch of motion blur, natural light only. Historically
> accurate ancient Near Eastern clothing, hair, objects and buildings, no
> modern items anywhere. Photorealistic. Square. No text, no border, no
> frame, no watermark.

The foreground blocker is in each prompt (a branch, a doorway, a crowd). That
is the detail that makes it look secretly taken rather than posed.

### The evidence close-ups

Each case also gets one **evidence photo**: a close-up of the key object with
**blank yellow evidence markers** standing beside it, like the reference
board. Paste this style block after those instead:

> Forensic evidence photograph, close-up, hard flash from the camera, sharp
> focus, a crisp shadow behind each object, slightly cold colour. Small blank
> yellow folding evidence markers stand beside the objects, with nothing
> printed on them. A plain grey photographic scale ruler with no numbers lies
> along the bottom edge. Ancient objects only. No text, no numbers, no
> watermark. Landscape.

The numbers on the markers are added afterwards.

---

### JM-01 — The Ransom
*Three Who Came to the Door.* No crosses with bodies; no face of Jesus.

| File | Prompt |
|------|--------|
| `p01-ruler.jpg` | A wealthy young man in fine embroidered robes and rings walking away down a dusty street, shoulders slumped, holding a heavy purse, glimpsed between two market stall awnings. |
| `p01-pharisee.jpg` | A man in fine religious robes with long tassels standing tall in a stone temple court, chin raised, hands lifted, others giving him space, seen through a gap in a crowd. |
| `p01-collector.jpg` | A man in plain clothes standing at the back of a stone temple court, head bowed, one hand on his chest, far from everyone else, seen past a blurred stone pillar. |
| `e01-payments.jpg` (evidence) | On a stone table: a small pile of silver coins, a rolled scroll tied with cord, a woven cage with two doves, a folded fine robe. |

### JM-33 — The Empty Tomb
| File | Prompt |
|------|--------|
| `p33-mary.jpg` | A woman in a dark head covering, carrying a small jar of spices, hurrying along a garden path among olive trees at first light, seen through blurred olive leaves. |
| `p33-guards.jpg` | Two Roman soldiers in helmets and red cloaks sitting by a fire at night in front of a large round stone across a rock tomb, seen through dark branches. |
| `p33-running.jpg` | Two men running hard down a stony garden path at dawn, one younger and ahead, robes flying, motion blur, seen from behind past a blurred stone wall. |
| `p33-payment.jpg` | Close on hands only: an elder's ringed hand passing a heavy leather purse of coins to a soldier's hand, in a shadowed doorway, seen past a blurred doorframe. |
| `p33-joseph.jpg` | A dignified older councillor in rich robes carrying a folded bundle of clean linen through a quiet street in late afternoon, seen through a blurred archway. |
| `e33-linen.jpg` (evidence) | On a rock ledge inside a tomb: long linen grave cloths lying flat and empty, and a separate face cloth folded neatly by itself. |

### JM-47 — The Leak
| File | Prompt |
|------|--------|
| `p47-king.jpg` | A bearded king of Aram in a crown and heavy robe pacing beside a lamp-lit table covered in clay tablets and a map, seen through a half-open carved door. |
| `p47-naaman.jpg` | A battle-hardened army commander in scale armour and a cloak standing at a palace window looking out, arms folded, seen past a blurred hanging curtain. |
| `p47-hazael.jpg` | A palace official in fine robes walking down a torchlit stone corridor, glancing back over his shoulder, seen from behind a blurred pillar. |
| `p47-elisha.jpg` | An older man with a staff standing alone on a hilltop above a small walled town at dawn, looking out over the valley, very far away, seen through tall grass. |
| `e47-dispatch.jpg` (evidence) | A clay dispatch tablet inside a clay envelope with an unbroken seal impression, a cylinder seal beside it, a reed stylus, on a wooden table. |

### JM-19 — The Broken Riddle
| File | Prompt |
|------|--------|
| `p19-samson.jpg` | A very strong young man with seven long braids walking alone along a vineyard road, eating from a piece of honeycomb, seen through blurred vine leaves. |
| `p19-thirty.jpg` | A group of young Philistine men in feathered headbands huddled close at the end of a long feast table, talking in low voices, seen past blurred hanging lamps. |
| `p19-wife.jpg` | A young bride in fine Philistine dress sitting by a window at dusk, face in her hands, crying, seen through a blurred lattice screen. |
| `p19-parents.jpg` | An older man and woman in plain Israelite clothes walking on a hill road toward a town, the woman looking back, seen through blurred tall grass. |
| `e19-honey.jpg` (evidence) | An old, clean, sun-bleached lion skull and ribs lying in dry grass, with a wild honeycomb built inside the ribs and a few bees on it. No flesh. |

### JM-08 — The Stolen Plunder
| File | Prompt |
|------|--------|
| `p08-achan.jpg` | A man at the entrance of a goat-hair tent at dusk, glancing over his shoulder, one hand holding the tent flap shut, seen from between two other blurred tents. |
| `p08-scouts.jpg` | Three Israelite scouts crouched on a rocky ridge looking down at a small walled hill town, seen from behind past blurred thornbushes. |
| `p08-joshua.jpg` | An older military leader in a simple cloak standing with a group of elders before a large tent at sunset, faces grave, seen through a blurred crowd of onlookers. |
| `e08-cache.jpg` (evidence) | A freshly dug hole in the earthen floor of a tent, holding a rich embroidered robe folded, a small heap of silver pieces and a single bar of gold. |

### JM-02 — The Missing Boy
No face of Jesus: seen from behind only.

| File | Prompt |
|------|--------|
| `p02-parents.jpg` | A worried man and woman in travelling clothes moving through a crowded festival caravan camp at evening, asking people, the woman holding her head covering, seen through a blurred crowd. |
| `p02-caravan.jpg` | A long festival caravan of families, donkeys and children on a dusty hill road heading north, seen from far above through blurred dry grass. |
| `p02-temple.jpg` | Elderly teachers in long robes seated in a shaded stone colonnade, listening closely to a boy of about twelve who sits among them, the boy seen only from behind, all seen past a blurred pillar. |
| `e02-camp.jpg` (evidence) | An empty child's bedroll and a small leather travel bag beside a cold campfire ring on dry ground. |

### JM-03 — The Bush That Would Not Burn
| File | Prompt |
|------|--------|
| `p03-shepherd.jpg` | An older shepherd with a staff and a flock of sheep and goats on a rocky mountain slope, alone, seen from very far away through blurred dry scrub. |
| `p03-bush.jpg` | Far across a mountain ledge, a small thorny bush glowing with fire that gives off no smoke, the bush still green, seen through blurred rocks. |
| `p03-jethro.jpg` | An older Midianite priest sitting outside a large tent among his family's tents, seen through a blurred tent rope and pole. |
| `e03-samples.jpg` (evidence) | Three small clay jars on a rock: one with grey ash, one with charred twigs, one with a fresh green thorny sprig. |

### JM-04 — The Judgment
No babies in any of these images.

| File | Prompt |
|------|--------|
| `p04-first.jpg` | A young woman in a plain headscarf standing in a palace queue, arms folded, staring ahead, seen through a blurred crowd. |
| `p04-second.jpg` | A different young woman in a plain headscarf, tired and anxious, waiting by a stone wall in the same queue, seen through a blurred pillar. |
| `p04-king.jpg` | A young king on a carved ivory throne in a bright hall of cedar, listening, chin on hand, seen from far back through an open doorway past blurred guards. |
| `e04-room.jpg` (evidence) | A small dark mud-brick room with two empty sleeping mats on the floor, side by side, and a clay oil lamp between them. |

### JM-05 — The Writing on the Wall
| File | Prompt |
|------|--------|
| `p05-king.jpg` | A Babylonian king at a huge feast, raising a gold cup, lamplight on his face, seen through blurred guests and hanging fabric. |
| `p05-queen.jpg` | An elderly royal woman in rich robes walking quickly into a banquet hall, attendants behind her, seen past a blurred doorway. |
| `p05-daniel.jpg` | An old man with a white beard in simple dignified robes walking through a tall palace corridor carrying a scroll, seen past a blurred column. |
| `p05-river.jpg` | At night, Persian soldiers wading through a low, nearly drained river under a great city wall, seen through blurred reeds. |
| `e05-vessels.jpg` (evidence) | Gold and silver temple cups and bowls lying among spilled wine on a banquet table. |

### JM-06 — The Walls
| File | Prompt |
|------|--------|
| `p06-rahab.jpg` | A woman at a small window in a house built into a city wall, a bright scarlet cord hanging from the sill, seen from far below through blurred palm leaves. |
| `p06-priests.jpg` | A line of priests in white carrying ram's horn trumpets, marching in silence around a city wall, seen from the wall top through a blurred battlement. |
| `p06-watchmen.jpg` | Two watchmen on top of a city wall looking down, one pointing, seen from below past blurred palm fronds. |
| `e06-cord.jpg` (evidence) | A coil of scarlet cord on top of fallen mud bricks, one short section of wall still standing behind. |

### JM-09 — The Mouldy Bread
| File | Prompt |
|------|--------|
| `p09-delegation.jpg` | A small group of men in ragged, patched travel clothes leading tired donkeys with worn sacks toward a large camp, seen through blurred thornbushes. |
| `p09-bread.jpg` | Close on hands only: a man holding out a piece of dry, mouldy bread to another man, seen past a blurred shoulder. |
| `p09-oath.jpg` | Leaders of Israel standing in a semicircle, hands raised, swearing an oath to the ragged delegation, seen through a blurred tent opening. |
| `p09-council.jpg` | At night, four men from different cities meeting in secret around one lamp, seen through a blurred wall gap. |
| `e09-props.jpg` (evidence) | Cracked and patched wineskins, worn-through patched sandals, a ragged cloak and a torn sack of dry mouldy bread. |

### JM-10 — The Ten Blows
| File | Prompt |
|------|--------|
| `p10-pharaoh.jpg` | An Egyptian pharaoh on a palace balcony above a river, arms folded, seen through blurred papyrus reeds. |
| `p10-magicians.jpg` | Egyptian court magicians with shaved heads in white linen, gathered round a bowl on a stand, seen through a blurred columned doorway. |
| `p10-moses.jpg` | Two elderly Hebrew men standing on a riverbank at dawn, one holding a staff, seen from behind through blurred reeds. |
| `p10-goshen.jpg` | At night, a village with warm lamplit windows on the far side of a channel, while the near side is completely dark, seen through blurred reeds. |
| `e10-frogs.jpg` (evidence) | A clay bowl of reddened river water beside a scatter of locusts and a single small frog on a stone step. |

### JM-11 — The Cart That Chose Its Own Road
| File | Prompt |
|------|--------|
| `p11-priests.jpg` | Philistine priests and diviners in feathered headdresses arguing around a table, seen through a blurred temple doorway. |
| `p11-cart.jpg` | Two milk cows pulling a new wooden cart alone along a road, no driver, a wooden chest on the cart, seen from a ridge far above through blurred grass. |
| `p11-lords.jpg` | Five Philistine lords on foot following far behind the cart, seen from behind through blurred trees. |
| `p11-harvest.jpg` | Israelite harvesters in a golden wheat field straightening up and looking at something in the distance, seen through blurred wheat. |
| `e11-chest.jpg` (evidence) | An open wooden chest containing small gold mouse figures and small gold lumps, on new rough wood. |

### JM-13 — The Twelve Reports
| File | Prompt |
|------|--------|
| `p13-grapes.jpg` | Two men carrying one enormous cluster of grapes hung from a pole between them, walking down a hill road, seen through blurred vines. |
| `p13-caleb.jpg` | A strong middle-aged man standing on a rock speaking to a large crowd, arm outstretched, seen through the blurred crowd. |
| `p13-ten.jpg` | A group of men talking in low voices inside a tent, shaking their heads, seen through a blurred tent flap. |
| `p13-city.jpg` | A large walled city with tall towers on a hill, seen very far away through blurred thornbushes. |
| `e13-fruit.jpg` (evidence) | A huge grape cluster, three pomegranates and a heap of figs on a woven mat. |

### JM-14 — The Crossing
| File | Prompt |
|------|--------|
| `p14-camp.jpg` | A huge camp of tents by the shore at night, families sitting by fires, the sea dark behind them, seen from a hill through blurred thornbushes. |
| `p14-chariots.jpg` | Egyptian chariot officers on a ridge at dusk, horses restless, looking down toward the sea, seen through blurred desert grass. |
| `p14-moses.jpg` | An old man on a rock at the edge of the sea at night, staff held out over the water, strong wind blowing his robes, seen from behind. |
| `p14-walking.jpg` | Families with animals walking across wet seabed between two walls of standing water, at dawn, seen from far away on a high shore. |

### JM-15 — The Witnesses Who Would Not Agree
No face of Jesus: seen from behind only.

| File | Prompt |
|------|--------|
| `p15-witnesses.jpg` | Two men whispering in a dark stone courtyard at night, one pressing a coin into the other's hand, seen through a blurred doorway. |
| `p15-highpriest.jpg` | A high priest in rich robes and a turban sitting at the head of a council chamber lit by lamps, seen past blurred seated elders. |
| `p15-peter.jpg` | A fisherman warming his hands at a courtyard fire at night among servants, looking down, seen through a blurred gateway. |
| `p15-accused.jpg` | A man in a plain robe standing alone in a lamp-lit council chamber, hands bound, seen only from behind, facing seated elders. |

### JM-16 — The Bread on the Ground
| File | Prompt |
|------|--------|
| `p16-gathering.jpg` | Families kneeling to gather small white flakes from the ground around their tents at sunrise, seen through blurred desert shrubs. |
| `p16-hoarder.jpg` | A man peering unhappily into a clay jar of spoiled, discoloured food inside his tent, seen through a blurred tent flap. |
| `p16-traders.jpg` | A small trader caravan with camels passing far away on the edge of a desert, seen through blurred grasses. |
| `e16-omer.jpg` (evidence) | Clay measuring jars of three sizes, one full of small white flakes, one half full, one empty, on woven matting. |

### JM-18 — The Contest on Carmel
| File | Prompt |
|------|--------|
| `p18-baal.jpg` | Many priests in bright robes dancing and shouting around a stone altar at midday, seen through the blurred crowd. |
| `p18-elijah.jpg` | A rugged old prophet in a hairy cloak pouring a large jar of water over an altar of twelve stones, seen through blurred onlookers. |
| `p18-ahab.jpg` | A king in a chariot at the edge of a mountain crowd, watching, seen through blurred spears and banners. |
| `e18-jars.jpg` (evidence) | Twelve large empty water jars beside an altar of twelve rough stones with a water-filled trench round it. |

### JM-20 — The Rock at Meribah
| File | Prompt |
|------|--------|
| `p20-moses.jpg` | An old man raising a staff to strike a large rock, a second old man beside him, seen from behind through a blurred crowd. |
| `p20-crowd.jpg` | A thirsty, angry crowd with empty water skins, shouting and pointing, in a dry desert valley, seen through blurred heat haze and thornbushes. |
| `e20-staff.jpg` (evidence) | A worn wooden shepherd's staff leaning against a large rock with a fresh crack and a trickle of water. |

---

## Part 3 — What I'll build with them

So you know where each image is going before you make it.

- **The desk** becomes real walnut lit by a lamp from one corner, with the
  coffee, magnifier, notebooks and lamp base scattered round the edges
  (decoration only; they can't be picked up and never cover a card).
- **Evidence cards** stop being identical cream rectangles. Each card kind
  gets its own paper: briefing letters on typed report sheets, statements on
  onionskin with the witness's photograph clipped to the corner, ledgers and
  registers on ledger paper, records on index cards. Tape, clips and pins
  hold them down. The dark "Click to read" bar becomes a small evidence tag.
- **A new "Persons of Interest" card** in every case: the photographs in
  polaroid frames with handwritten captions, plus the evidence close-up with
  numbered markers.
- **The case intro** becomes the closed manila folder (string and button),
  which opens out into the open folder.
- **The pinboard** gets real cork. Each explanation becomes an index card
  under a push pin, a pinned piece of evidence shows as its polaroid, and
  red string runs from the evidence to the card it disproves.
- **Stamps** (CONFIDENTIAL, EVIDENCE, CASE CLOSED, PAID IN FULL and so on)
  are drawn by typesetting the words into the stamp shapes, so they print
  sharply and in any colour.

### Suggested order

1. **Part 1, all fifteen.** This changes every case at once and is where most
   of the "flat and cheap" feeling goes.
2. **Part 2 for the first ten cases on the shelf** (JM-01, 33, 47, 19, 08, 02,
   03, 04, 05, 06): about 40 images.
3. **The other nine cases.**

You don't need to finish a whole part before sending. A few images are
enough for me to start building.
