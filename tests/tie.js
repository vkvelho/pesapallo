const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};
 const setup=(runnerT)=>{snapAll();R=[];G.palot=0;G.koppi=false;phase='play';G.play++;const r=mkR(T[1].pl[2],1);R.push(r);send(r);const L=d2(B[1],B[2]);r.prog=1-(BR[2]+PR_+r.sp*runnerT)/L;return r};
 const throwArr=(arrT)=>{const f=F[6];const tgt={x:B[2].x,y:B[2].y,base:2};const d=34*arrT;const ang=Math.atan2(f.y-B[2].y,f.x-B[2].x);f.x=B[2].x+Math.cos(ang)*d;f.y=B[2].y+Math.sin(ang)*d;ball={x:f.x,y:f.y,h:0,s:'held',hold:f};throwTo(tgt,.65)};
 const sim=s=>{for(let t=0;t<s;t+=1/60)step(1/60)};
 // runner enters area 0.1s before ball -> safe
 let r=setup(.25);throwArr(.4);sim(1.5);out.runnerFirst_safe=R.includes(r)&&r.st==='safe'&&G.palot===0;
 // ball first by 0.15s -> palo
 r=setup(.45);throwArr(.25);sim(1.5);out.ballFirst_palo=G.palot===1;
 // runner is visually inside area (just entered) when ball caught -> safe
 r=setup(-.01);out.insideArea_safe_before=r.st;sim(.05);out.insideArea_safe=r.st==='safe';
 // fielder holds ball 6.5 units from base center (outside area) while runner still coming: no burn until he steps in
 r=setup(1.0);const f=F[3];f.x=B[2].x+BR[2]+PR_+1;f.y=B[2].y-1;ball={x:f.x,y:f.y,h:0,s:'held',hold:f};burnHeld(f);out.outsideArea_noBurn=G.palot===0;
 return out});
console.log(JSON.stringify(res),errs);await br.close()})();
