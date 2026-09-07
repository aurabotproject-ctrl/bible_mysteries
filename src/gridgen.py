import random, json
WORDS = [
 ("TIMNAH","The Philistine town where the wedding feast was held"),
 ("VINEYARD","Where the young lion came roaring at Samson"),
 ("RIDDLE","What Samson set before the thirty men"),
 ("THIRTY","How many companions were brought to the feast"),
 ("HONEY","What Samson scraped out of the carcass"),
 ("SUNSET","The deadline on the seventh day"),
 ("LINEN","The kind of garments staked in the wager"),
 ("SWEET","'Out of the strong, something ____'"),
 ("SEVEN","How many days the feast was to last"),
 ("BEES","What had made a nest inside the dead lion"),
 ("LION","What Samson killed with his bare hands"),
 ("FIRE","What the thirty threatened Samson's wife with"),
]
N = 17

def blank(): return [[None]*N for _ in range(N)]

def can_place(g, w, r, c, d):
    dr, dc = (0,1) if d=='A' else (1,0)
    L = len(w)
    er, ec = r+dr*(L-1), c+dc*(L-1)
    if r<0 or c<0 or er>=N or ec>=N: return None
    # cell before and after must be empty
    br, bc = r-dr, c-dc
    ar, ac = er+dr, ec+dc
    if 0<=br<N and 0<=bc<N and g[br][bc] is not None: return None
    if 0<=ar<N and 0<=ac<N and g[ar][ac] is not None: return None
    cross = 0
    for i,ch in enumerate(w):
        rr, cc = r+dr*i, c+dc*i
        cur = g[rr][cc]
        if cur is None:
            # perpendicular neighbours must be empty
            pr, pc = (1,0) if d=='A' else (0,1)
            for s in (-1,1):
                nr, nc = rr+pr*s, cc+pc*s
                if 0<=nr<N and 0<=nc<N and g[nr][nc] is not None: return None
        elif cur == ch:
            cross += 1
        else:
            return None
    return cross

def place(g, w, r, c, d):
    dr, dc = (0,1) if d=='A' else (1,0)
    for i,ch in enumerate(w): g[r+dr*i][c+dc*i] = ch

def build(seed):
    rnd = random.Random(seed)
    words = sorted([w for w,_ in WORDS], key=len, reverse=True)
    g = blank(); placed = []
    first = words[0]
    r, c = N//2, (N-len(first))//2
    place(g, first, r, c, 'A'); placed.append((first, r, c, 'A'))
    rest = words[1:]
    rnd.shuffle(rest)
    for _ in range(4):
        for w in list(rest):
            best = None
            for r0 in range(N):
                for c0 in range(N):
                    for d in ('A','D'):
                        cr = can_place(g, w, r0, c0, d)
                        if cr and cr > 0:
                            # prefer more crossings, then closer to centre
                            score = cr*100 - (abs(r0-N//2)+abs(c0-N//2))
                            if best is None or score > best[0]: best = (score, r0, c0, d)
            if best:
                _, r0, c0, d = best
                place(g, w, r0, c0, d); placed.append((w, r0, c0, d)); rest.remove(w)
        if not rest: break
    return (g, placed) if not rest else None

best = None
for seed in range(4000):
    out = build(seed)
    if not out: continue
    g, placed = out
    rs = [r for r in range(N) if any(g[r][c] for c in range(N))]
    cs = [c for c in range(N) if any(g[r][c] for r in range(N))]
    area = (max(rs)-min(rs)+1) * (max(cs)-min(cs)+1)
    if best is None or area < best[0]: best = (area, g, placed, seed)
area, g, placed, seed = best
rs = [r for r in range(N) if any(g[r][c] for c in range(N))]
cs = [c for c in range(N) if any(g[r][c] for r in range(N))]
r0, c0 = min(rs), min(cs)
H, W = max(rs)-r0+1, max(cs)-c0+1
print('seed',seed,'size',W,'x',H,'area',area)
grid = [[g[r0+r][c0+c] for c in range(W)] for r in range(H)]
for row in grid: print(''.join(ch or '.' for ch in row))
entries=[(w, r-r0, c-c0, d) for w,r,c,d in placed]
json.dump({'W':W,'H':H,'grid':[[ch or '' for ch in row] for row in grid],'entries':entries,
           'clues':{w:cl for w,cl in WORDS}}, open('grid.json','w'))
