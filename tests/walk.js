const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};
 const t=(from,to,prog)=>{snapAll();R=[];G.palot=0;phase='play';G.play++;const p=T[1].pl[5];const r=mkR(p,from);R.push(r);r.st='run';r.from=from;r.to=to;r.prog=prog;r.x=B[from].x+(B[to].x-B[from].x)*prog;r.y=B[from].y+(B[to].y-B[from].y)*prog;
  palo(r);const o={reachedBase:false,crossed:0,arrivedSlot:false,steps:0};let inBaseLeg=true;
  for(let i=0;i<1500;i++){updWalk(1/60);const q={x:p.wx,y:p.wy};if(inBaseLeg){if(d2(q,B[to])<1){o.reachedBase=true;inBaseLeg=false}continue}
   const xl=q.y<118?XL:XL+(q.y-118)*22.5/30,xr=q.y<99.4?XR:74.1-(q.y-99.4)*29.1/48.6;const interior=q.x>xl+1&&q.x<xr-1&&q.y<146&&d2(q,B[to])>BR[to]+3;if(interior)o.crossed++;if(!p.path||!p.path.length){o.arrivedSlot=true;o.steps=i;break}}
  phase='pre';return o};
 out.burned1to2=t(1,2,.5);out.burned2to3=t(2,3,.4);out.burned3toHome=t(3,0,.3);
 // pitch not blocked: walker still walking but batter ready -> pitch allowed
 snapAll();const r=mkR(T[1].pl[4],2);R.push(r);r.st='run';r.from=2;r.to=3;r.prog=.3;phase='play';palo(r);phase='pre';G.preT=0;doPitch();out.pitchWhileWalking=phase==='pitch'&&!!(r.p.path&&r.p.path.length);
 // tap-skip clears paths
 snapAll();out.skipCleared=!(r.p.path&&r.p.path.length);return out});
console.log(JSON.stringify(res),errs);await br.close()})();
