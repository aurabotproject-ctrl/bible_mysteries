#!/usr/bin/env python3
"""Work out PRINT_FIT for src/part_print.js.

Serves the built single/*.html pages, opens each case at each reading level,
builds the paper pack, lays it out as print at A4 content width (188 mm) and
measures every plated sheet. Any sheet taller than one page gets its exhibit
narrowed in 4 mm steps until it fits. Prints the table, and with --write
replaces the block between the PRINT_FIT markers in part_print.js.

    python3 src/build.py && python3 tools/printfit.py --write && python3 src/build.py

Needs: playwright (python), chromium.
"""
import sys, json, re, threading, http.server, socketserver, functools, os
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OVER, TARGET, STEP, MINW = 270, 266, 4, 50          # mm
CASES = ['jm00','jm01','jm33','jm47','jm19','jm08','jm02','jm03','jm04','jm05','jm06','jm09',
         'jm10','jm11','jm13','jm14','jm15','jm16','jm18','jm20']
EASY = ['jm01','jm02','jm03','jm04','jm05','jm06','jm08','jm09','jm19','jm20','jm33','jm47']

JS = """([over,target,step,minw])=>{
  const out=[]; const mm=px=>px*25.4/96;
  document.querySelectorAll('.pp-card.sheet').forEach(c=>{
    const w=c.querySelector('.plate:not(.poi)'); if(!w||w.closest('.plate-pair')) return;
    const title=(c.querySelector('.pp-ct')||{}).textContent;
    let h=mm(c.getBoundingClientRect().height); if(h<=over) return;
    let width=mm(w.getBoundingClientRect().width);
    c.classList.add('fit');
    while(h>target && width>minw){ width-=step; c.style.setProperty('--pw',width.toFixed(0)+'mm'); h=mm(c.getBoundingClientRect().height); }
    out.push({title,width:Math.round(width),h:Math.round(h)});
  });
  return out;}"""

def main():
    write = '--write' in sys.argv
    only = sys.argv[sys.argv.index('--only')+1].split(',') if '--only' in sys.argv else None
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    handler.log_message = lambda *a, **k: None
    srv = socketserver.TCPServer(('127.0.0.1', 0), handler); port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    table = {}
    with sync_playwright() as p:
        b = p.chromium.launch()
        for case in (only or CASES):
            for lvl in ['medium'] + (['easy'] if case in EASY else []):
                pg = b.new_page(viewport={'width':1280,'height':800})
                pg.goto(f'http://127.0.0.1:{port}/single/{case}.html'); pg.wait_for_timeout(1200)
                pg.locator('[data-case]').first.click(); pg.wait_for_timeout(1200)
                pg.mouse.click(640,450); pg.wait_for_timeout(1500); pg.keyboard.press('Escape')
                if lvl == 'easy':
                    pg.evaluate("document.querySelector('.lvl-b[data-lvl=easy]').click()"); pg.wait_for_timeout(3000)
                pg.evaluate("window.print=()=>{}")
                pg.evaluate(f'printPack(CASE_REG["{case}"])'); pg.wait_for_timeout(1200)
                pg.emulate_media(media='print'); pg.set_viewport_size({'width':711,'height':1000}); pg.wait_for_timeout(600)
                res = pg.evaluate(JS, [OVER, TARGET, STEP, MINW])
                ids = pg.evaluate(f'(titles)=>titles.map(t=>(CASE_REG["{case}"].items.find(i=>i.title===t)||{{}}).id)', [r['title'] for r in res])
                for r, i in zip(res, ids):
                    key = ('easy:' if lvl == 'easy' else '') + i
                    table[key] = r['width']; print(f'{case} {lvl:6} {i:14} -> {r["width"]} mm  (page {r["h"]} mm)  {r["title"]}')
                pg.close()
        b.close()
    srv.shutdown()
    body = '\n'.join(f'  "{k}":{v},' for k, v in sorted(table.items()))
    if write:
        path = os.path.join(ROOT, 'src', 'part_print.js'); s = open(path).read()
        s2 = re.sub(r'(?s)/\*__PRINT_FIT__\*/.*?(?=\n\};)', '/*__PRINT_FIT__*/\n' + body, s, count=1)
        if s2 == s: print('no change')
        open(path, 'w').write(s2)
    else:
        print(body)

if __name__ == '__main__': main()
