const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};const ev=b=>({preventDefault(){},clientX:B[b].x*S+OX,clientY:B[b].y*S+OY});const fr=n=>{for(let i=0;i<n;i++)frame(1/60)};
 const pick=(t,n)=>T[t].pl.find(p=>n?has(p,'N'):!has(p,'N'));
 const prep=(p)=>{snapAll();R=[];G.palot=0;G.vaarat=0;const r=mkR(p,1);R.push(r);phase='pre';G.preT=0;G.karkP=G.play;kark(r);r.prog=LP(r);return r};
 // A: ihmislukkari polttaa ykköseltä varastavan (heitto kakkoselle)
 {const r=prep(pick(1,0));doPitch();G.aiH=-1;steal(r);const tc=()=>(ball.vh+Math.sqrt(ball.vh*ball.vh+80*(ball.h-8)))/40;while(tc()>.66)fr(1);down(ev(2));out.A_pendingHold=!!hold&&hold.ab;let i=0;while(phase==='pitch'&&i++<200)fr(1);out.A_aborted=phase==='play'&&ball.hold===F[0];out.A_meterAtCatch=+hold.t.toFixed(2);
  up(ev(2));out.A_thrown=ball.s==='throw';fr(240);out.A_palo=G.palot===1&&!R.includes(r);out.A_vaarat=G.vaarat}
 // B+C: ihminen lyö -> AI-lukkari
 G.half=1;startHalf();fr(400);snapAll();
 let burned=0,N=10;for(let k=0;k<N;k++){const r=prep(pick(0,0));G.lkDone=-1;doPitch();steal(r);fr(400);if(!R.includes(r))burned++}out.B_aiBurnRate=burned+'/'+N;
 let ok=0;for(let k=0;k<N;k++){const r=prep(pick(0,1));G.lkDone=-1;doPitch();steal(r);fr(400);if(R.includes(r)&&r.st==='safe'&&r.base===2)ok++}out.C_fastStealOk=ok+'/'+N;
 // D: kärkkyjä palaa napautuksella (pre)
 {const r=prep(pick(0,0));fr(30);const e={preventDefault(){},clientX:r.x*S+OX,clientY:r.y*S+OY};down(e);up(e);fr(60);out.D_back=r.st==='safe'&&d2(r,B[1])<.5}
 return out});
console.log(JSON.stringify(res),errs);await br.close()})();
