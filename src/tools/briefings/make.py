import json,re,sys,os
D=os.path.dirname(os.path.abspath(__file__));out=sys.argv[1] if len(sys.argv)>1 else D+'/out'
os.makedirs(out,exist_ok=True)
t=open(D+'/template.html').read();mo=open(D+'/motifs.js').read()
only=sys.argv[2:] 
for f in sorted(os.listdir(D+'/cases')):
    if only and f[:-3] not in only: continue
    c=open(D+'/cases/'+f).read();meta=json.loads(c.split('\n',1)[0].replace('//META ',''))
    h=t.replace('@@TITLE@@',meta['title']).replace('@@KICK@@',meta['kick']).replace('/*@@MOTIFS@@*/',mo).replace('/*@@CASE@@*/',c.split('\n',1)[1])
    open('%s/%s-briefing.html'%(out,meta['slug']),'w').write(h);print(meta['slug'],len(h))
