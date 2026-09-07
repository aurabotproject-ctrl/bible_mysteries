#!/usr/bin/env python3
"""
Cut a contact sheet of plates into separate images.

    python3 src/split4.py sheet.png                     -> sheet_1.jpg .. sheet_4.jpg
    python3 src/split4.py sheet.png -o "tobuild/JM-30 — NABOTH'S VINEYARD"
    python3 src/split4.py sheet.png --names poster_jm30 j30_1 j30_2 j30_3

Image models will happily return four plates as one 2x2 picture. This finds the
gutters between them — the near-white rows and columns that run the full width or
height — cuts on those, trims the leftover white edge off each piece, and writes
them out in reading order: top-left, top-right, bottom-left, bottom-right.

It falls back to a clean halfway split if no gutter is found, and copes with a
1x2, 2x1 or 3x3 sheet as well as the usual 2x2.

A warning worth reading: four plates in one 1536x1024 picture means each plate is
only 768x512, which is half the resolution the app expects. They will look soft
when a student zooms into a plate. Use this for reference or for a quick look —
for the real thing, generate one image per prompt at full size.
"""
import os, sys
from PIL import Image

WHITE = 236          # a pixel this bright in all channels counts as gutter
MIN_RUN = 4          # a gutter has to be at least this many pixels thick
EDGE = 0.06          # ignore gutters within this fraction of an edge


def gutters(px, w, h, vertical):
    """Rows (or columns) that are near-white the whole way across."""
    span, other = (w, h) if not vertical else (h, w)
    blank = []
    for i in range(other):
        pale = 0
        for j in range(0, span, 3):                      # sample every 3rd pixel
            r, g, b = px[(i, j)] if vertical else px[(j, i)]
            if r > WHITE and g > WHITE and b > WHITE:
                pale += 1
        if pale >= (span // 3) * 0.97:
            blank.append(i)
    # group consecutive blank lines into runs, keep the middle of each
    runs, cur = [], []
    for i in blank:
        if cur and i == cur[-1] + 1:
            cur.append(i)
        else:
            if len(cur) >= MIN_RUN:
                runs.append(cur)
            cur = [i]
    if len(cur) >= MIN_RUN:
        runs.append(cur)
    lo, hi = other * EDGE, other * (1 - EDGE)
    return [sum(r) // len(r) for r in runs if lo < sum(r) / len(r) < hi]


def bands(cuts, size):
    edges = [0] + sorted(cuts) + [size]
    return [(edges[i], edges[i + 1]) for i in range(len(edges) - 1)]


def trim(im):
    """Shave any remaining white border off a single plate."""
    w, h = im.size
    px = im.load()
    def pale_row(y): return all(sum(px[x, y]) / 3 > WHITE for x in range(0, w, 7))
    def pale_col(x): return all(sum(px[x, y]) / 3 > WHITE for y in range(0, h, 7))
    t, b, l, r = 0, h - 1, 0, w - 1
    while t < b and pale_row(t): t += 1
    while b > t and pale_row(b): b -= 1
    while l < r and pale_col(l): l += 1
    while r > l and pale_col(r): r -= 1
    return im.crop((l, t, r + 1, b + 1))


def split(path, out_dir=None, names=None, quality=90):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    px = im.load()

    cols = bands(gutters(px, w, h, vertical=True), w)
    rows = bands(gutters(px, w, h, vertical=False), h)
    if len(cols) == 1 and len(rows) == 1:            # no gutter found — assume 2x2
        cols, rows = [(0, w // 2), (w // 2, w)], [(0, h // 2), (h // 2, h)]

    out_dir = out_dir or os.path.dirname(os.path.abspath(path)) or '.'
    os.makedirs(out_dir, exist_ok=True)
    stem = os.path.splitext(os.path.basename(path))[0]

    made, i = [], 0
    for (y0, y1) in rows:
        for (x0, x1) in cols:
            piece = trim(im.crop((x0, y0, x1, y1)))
            if piece.width < 80 or piece.height < 80:
                continue
            name = names[i] if names and i < len(names) else '%s_%d' % (stem, i + 1)
            dest = os.path.join(out_dir, name + '.jpg')
            piece.save(dest, 'JPEG', quality=quality, optimize=True, progressive=True)
            made.append((dest, piece.size))
            i += 1
    return made, (len(cols), len(rows))


def main():
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__.strip())
    path, out_dir, names = args[0], None, None
    if '-o' in args:
        out_dir = args[args.index('-o') + 1]
    if '--names' in args:
        names = args[args.index('--names') + 1:]
    made, grid = split(path, out_dir, names)
    print('  %dx%d sheet -> %d images' % (grid[0], grid[1], len(made)))
    for dest, size in made:
        print('    %-44s %d x %d' % (os.path.basename(dest), size[0], size[1]))
    if made and made[0][1][0] < 1000:
        print('\n  Note: each plate is only %d x %d. The app draws plates at 1536 x 1024,'
              % made[0][1])
        print('  so these will look soft when a student zooms in. Fine for a look;'
              '\n  for the real thing generate one image per prompt at full size.')


if __name__ == '__main__':
    main()
