const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};const ev=(x,y)=>({preventDefault(){},clientX:x*S+OX,clientY:y*S+OY});const fr=n=>{for(let i=0;i<n;i++)frame(1/60)};
 let msgs=[];const s0=say;window.say=m=>{msgs.push(m);s0(m)};
 const prep=()=>{snapAll();R=[];G.palot=0;G.vaarat=0;G.lyonnit=0;phase='pre';G.preT=0;G.karkP=G.play;G.feint=null;msgs=[]};
 const land=()=>{G.aiH=-1;ball.vaara=false;ball.x=PLATE.x;let i=0;while(ball.s==='pitch'&&i++<400)fr(1)};
 // tap = normal
 prep();down(ev(40,60));up(ev(40,60));out.tap_apex=ball.apex;out.tap_low=ball.low;land();out.tap_vaarat=G.vaarat;out.tap_msg=msgs.join('|');
 // short flick = low -> unhit vaara
 prep();down(ev(40,60));mv(ev(40,60-18/S));up(ev(40,60-18/S));out.low_apex=+ball.apex.toFixed(2);out.low_low=ball.low;let mx=0;G.aiH=-1;ball.vaara=false;ball.x=PLATE.x;while(ball.s==='pitch'){fr(1);mx=Math.max(mx,ball.h)}out.low_peak=+mx.toFixed(2);out.low_vaarat=G.vaarat;out.low_msg=msgs.join('|');
 // long swipe = high legal
 prep();down(ev(40,100));mv(ev(40,100-120/S));up(ev(40,100-120/S));out.high_apex=+ball.apex.toFixed(2);land();out.high_vaarat=G.vaarat;
 // low but hit -> valid
 prep();G.batter=G.batter||G.queue[0];G.batter.wx=SPOT.x;G.batter.wy=SPOT.y;doPitch(4);out.lowhit_pitched=ball.s==='pitch';ball.vaara=false;G.aiH=-1;let i=0;while(ball.s==='pitch'&&!(ball.vh<0&&ball.h<2.6)&&i++<300)fr(1);const q=timingQ();doSwing(Math.max(q,.3),{x:40,y:60});out.lowhit_q=+q.toFixed(2);out.lowhit_play=phase==='play'&&ball.hit;out.lowhit_vaarat=G.vaarat;out.lowhit_lyonnit=G.lyonnit;
 // feint -> fooled kärkkyjä from 1st -> throw to 2nd burns
 {let ok=0,fooled=0,N=10;for(let k=0;k<N;k++){prep();const r=mkR(T[1].pl.find(p=>!has(p,'N')),1);R.push(r);kark(r);r.prog=LP(r);
   down(ev(40,100));mv(ev(40,100-40/S));up(ev(40,100-5/S));if(k===0)out.feint_started=!!G.feint&&phase==='pre';
   let j=0;while(r.st!=='run'&&G.feint&&j++<60)fr(1);if(r.st==='run'){fooled++;fr(20);down(ev(B[2].x,B[2].y));fr(40);up(ev(B[2].x,B[2].y));fr(240);if(!R.includes(r))ok++}}
  out.feint_fooled=fooled+'/'+N;out.feint_burned=ok+'/'+fooled;out.feint_vaarat=G.vaarat}
 // feint w/o target: lukkari keeps ball after 1s
 prep();down(ev(40,100));mv(ev(40,100-40/S));up(ev(40,100-5/S));fr(70);out.feint_keep=phase==='pre'&&!G.feint&&ball.hold===F[0];
 G.half=1;startHalf();fr(400);snapAll();{let burned=0,N=6;for(let k=0;k<N;k++){prep();const r=mkR(T[0].pl.find(p=>!has(p,'N')),1);R.push(r);kark(r);r.prog=LP(r);feint();out.aiFeint_ai=G.feint.ai;fr(6);const e=ev(r.x,r.y);down(e);up(e);fr(400);if(!R.includes(r))burned++}out.aiFeint_burnedFooledHuman=burned+'/'+N}
 window.say=s0;return out});
console.log(JSON.stringify(res),errs);await br.close()})();
