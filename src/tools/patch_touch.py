# -*- coding: utf-8 -*-
"""Make the walk-in experiences usable on a touch screen.

The students open this in Chrome on an iPad. Three of the tours moved with
the arrow keys only, which on a tablet means they do not move at all. This
adds an on-screen pad that fires the very same key events the tours already
listen for, so nothing inside them has to change or even be understood, and
it fixes the page-level touch behaviour that otherwise makes a drag scroll
the page instead of the scene.

Run:  python3 patch_touch.py <tour.html> [...]
It is safe to run twice - a file that already carries the block is skipped.
"""
import io, os, re, sys

MARK = 'bib-touch-controls'

VIEWPORT = ('<meta name="viewport" content="width=device-width,initial-scale=1,'
            'maximum-scale=1,user-scalable=no,viewport-fit=cover">')

CSS = """
<style id="bib-touch-controls-css">
/* ---- touch, and the on-screen pad -------------------------------------
   The students use this on an iPad in Chrome. Everything here is about
   that: no rubber-band scroll behind the scene, no long-press callout, no
   double-tap zoom, and a real control for tours that were built around the
   arrow keys. The pad only appears on a coarse pointer, so a laptop keeps
   its keyboard and sees nothing. ------------------------------------- */
html,body{overscroll-behavior:none;-webkit-text-size-adjust:100%}
body{-webkit-touch-callout:none}
canvas,#stage,#mapImg,#player{touch-action:none}
/* panels may still be scrolled and read with a finger */
#ui,#hud,#help,#placeHud,#weightPanel,#flagList,#banner{touch-action:pan-y}

.bibpad{
  /* bottom centre: every one of these tours keeps its legend in a bottom
     corner, and the middle of the bottom edge is the one strip that is
     scenery in all of them. */
  position:fixed;left:50%;transform:translateX(-50%);bottom:12px;
  z-index:60;display:none;
  grid-template-columns:repeat(3,54px);grid-template-rows:repeat(3,54px);
  gap:5px;touch-action:none;user-select:none;-webkit-user-select:none;
}
.bibpad .bp{
  grid-column:var(--c);grid-row:var(--r);
  display:flex;align-items:center;justify-content:center;
  background:rgba(30,20,12,.74);border:1px solid #7a5a2e;border-radius:11px;
  color:#e9d9b6;font:700 19px/1 Georgia,serif;cursor:pointer;
  -webkit-tap-highlight-color:transparent;touch-action:none;
  box-shadow:0 3px 10px rgba(0,0,0,.45);transition:background .08s,transform .08s;
}
.bibpad .bp.on{background:rgba(201,169,112,.92);color:#241a10;transform:scale(.94)}
.bibpad .up{--c:2;--r:1} .bibpad .left{--c:1;--r:2}
.bibpad .right{--c:3;--r:2} .bibpad .down{--c:2;--r:3}
.bibpad .hubcap{
  --c:2;--r:2;grid-column:var(--c);grid-row:var(--r);
  display:flex;align-items:center;justify-content:center;
  color:#9c8763;font:600 9px/1.15 Georgia,serif;text-align:center;opacity:.8;
  pointer-events:none;
}
@media (pointer:coarse){ .bibpad{display:grid} }
.bibpad.force{display:grid}
@media (max-height:520px){
  .bibpad{grid-template-columns:repeat(3,46px);grid-template-rows:repeat(3,46px)}
}
@media print{ .bibpad{display:none!important} }
</style>
"""

HTML = """
<div class="bibpad" id="bibPad" role="group" aria-label="Move">
  <button class="bp up"    data-k="ArrowUp"    aria-label="Move up">&#9650;</button>
  <button class="bp left"  data-k="ArrowLeft"  aria-label="Move left">&#9664;</button>
  <div class="hubcap">move</div>
  <button class="bp right" data-k="ArrowRight" aria-label="Move right">&#9654;</button>
  <button class="bp down"  data-k="ArrowDown"  aria-label="Move down">&#9660;</button>
</div>
"""

JS = """
<script id="bib-touch-controls-js">
/* The pad does not know anything about the tour it is sitting on. It fires
   the same keydown/keyup the tour already listens for, so it keeps working
   however the movement code is written, and a keyboard still works too. */
(function(){
  var pad = document.getElementById('bibPad');
  if(!pad) return;
  var held = {};
  function fire(type, key){
    window.dispatchEvent(new KeyboardEvent(type, {key:key, code:key, bubbles:true}));
  }
  function press(k){ if(held[k]) return; held[k] = 1; fire('keydown', k); }
  function release(k){ if(!held[k]) return; delete held[k]; fire('keyup', k); }
  Array.prototype.forEach.call(pad.querySelectorAll('[data-k]'), function(b){
    var k = b.getAttribute('data-k');
    b.addEventListener('pointerdown', function(e){
      e.preventDefault();
      if(b.setPointerCapture){ try{ b.setPointerCapture(e.pointerId); }catch(err){} }
      b.classList.add('on'); press(k);
    });
    ['pointerup','pointercancel','pointerleave'].forEach(function(t){
      b.addEventListener(t, function(){ b.classList.remove('on'); release(k); });
    });
    b.addEventListener('contextmenu', function(e){ e.preventDefault(); });
    b.addEventListener('dragstart', function(e){ e.preventDefault(); });
  });
  // a finger lifted outside the window must not leave the walker running
  window.addEventListener('blur', function(){
    Object.keys(held).forEach(function(k){
      var b = pad.querySelector('[data-k="' + k + '"]');
      if(b) b.classList.remove('on');
      release(k);
    });
  });
  // A tour that tells you to use the arrow keys should not say that on a
  // tablet. Rewritten at the text node, wherever it sits, so no tour has to
  // be known about in advance.
  if(window.matchMedia && window.matchMedia('(pointer:coarse)').matches){
    var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var hits = [], n;
    while((n = walk.nextNode())){ if(/arrow keys/i.test(n.nodeValue)) hits.push(n); }
    hits.forEach(function(t){
      t.nodeValue = t.nodeValue
        .replace(/use the arrow keys to move/gi, 'use the pad below to move')
        .replace(/move with the arrow keys/gi, 'move with the pad below')
        .replace(/with the arrow keys/gi, 'with the pad below')
        .replace(/the arrow keys/gi, 'the pad below')
        .replace(/arrow keys/gi, 'the pad below');
    });
  }
})();
</script>
"""


def patch(path, pad=True):
    s = io.open(path, encoding='utf-8').read()
    if MARK in s:
        return 'already done'
    out = []

    # 1. a viewport meta, or an iPad renders it at desktop width and zooms out.
    #    A tour that brought its own weak one is upgraded, not left alone: without
    #    user-scalable=no a double tap zooms the page while the student is trying
    #    to turn the scene.
    if 'name="viewport"' not in s:
        s = s.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n' + VIEWPORT, 1)
        s = s.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n' + VIEWPORT, 1)
        out.append('viewport')
    elif 'user-scalable=no' not in s:
        s = re.sub(r'<meta name="viewport"[^>]*>', VIEWPORT, s, count=1)
        out.append('viewport upgraded')

    # 2. the touch stylesheet, at the end of the head so it wins
    if '</head>' not in s:
        sys.exit('%s: no </head>' % path)
    s = s.replace('</head>', CSS + '</head>', 1)
    out.append('touch css')

    # 3. the pad, for tours that move on the arrow keys
    block = (HTML if pad else '') + JS
    s = s.replace('</body>', block + '</body>', 1)
    out.append('pad' if pad else 'js only')

    io.open(path, 'w', encoding='utf-8').write(s)
    return ', '.join(out)


if __name__ == '__main__':
    # dragged rather than walked, so the pad would have nothing to do
    NO_PAD = {'jericho-spoil.html', 'book-of-life.html'}   # both are dragged, not walked
    # already carries a purpose-built touch layer of its own - a joystick,
    # look-drag, run and map buttons. Leave it alone.
    SKIP = {'jerusalem-ad33.html', 'house-investigation.html'}
    for p in sys.argv[1:]:
        n = os.path.basename(p)
        if n in SKIP:
            print('%-24s %s' % (n, 'skipped - has its own touch controls'))
            continue
        print('%-24s %s' % (n, patch(p, pad=n not in NO_PAD)))
