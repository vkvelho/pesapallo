const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{snapAll();const out={};const fr=n=>{for(let i=0;i<n;i++)frame(1/60)};
 const setup=(prog,sp)=>{phase='play';G.palot=0;G.queue=[];G.endPalo=0;R=[];const r=mkR(T[1].pl[0],0);r.sp=sp||12;R.push(r);send(r);r.prog=prog;return r};
 const fire=(ox,oy)=>{const k=F[4];ball={x:k.x,y:k.y,h:0,s:'held',hold:k,hit:false,bounced:true};
  throwTo({x:B[1].x,y:B[1].y,base:1},(k.sw[0]+k.sw[1])/2);
  ball.land={x:B[1].x+ox,y:B[1].y+oy};const L=Math.hypot(ball.land.x-k.x,ball.land.y-k.y)||1;
  ball.vx=(ball.land.x-k.x)/L*TS;ball.vy=(ball.land.y-k.y)/L*TS;ball.rem=L/TS;ball.x=k.x;ball.y=k.y};
 // A: slightly-off (+3.2 right), runner still ~0.5s out when ball arrives -> palo without leaving
 {const r=setup(.7,11);const f1=F[1];fire(3.2,-.5);
  const throwT=ball.rem,runT=(1-r.prog)*legLen(0,1)/r.sp;out.A_throwT=+throwT.toFixed(2);out.A_runT=+runT.toFixed(2);
  let left=false;for(let i=0;i<400;i++){fr(1);if(!onBase(f1,1)&&ball.s!=='held')left=true;
   if(ball.s==='held'){out.A_catchOnBase=onBase(ball.hold,1);out.A_d=+d2(ball.hold,B[1]).toFixed(2);out.A_rProg=+r.prog.toFixed(2);break}}
  out.A_leftBase=left;out.A_palo=G.palot;out.A_burned=!R.includes(r)||r.st!=='run'&&r.st!=='safe'}
 // B: wide throw, slow runner still out -> fielder leaves then burns on return
 {const r=setup(.35,10);fire(12,0);let left=false;for(let i=0;i<600;i++){fr(1);
   if(ball.s==='held'&&ball.hold===F[1]&&!onBase(F[1],1))left=true;if(G.palot)break}
  out.B_left=left;out.B_palo=G.palot}
 // C: messages
 {phase='play';const msgs=[];const say0=say;window.say=m=>{msgs.push(m);say0(m)};
  const k=F[0];ball={x:k.x,y:k.y,h:0,s:'held',hold:k,hit:false,bounced:true};
  throwTo({x:B[2].x,y:B[2].y,base:2},(k.sw[0]+k.sw[1])/2);out.C_good=msgs.some(m=>m.includes('Hyvä'));
  ball={x:k.x,y:k.y,h:0,s:'held',hold:k,hit:false,bounced:true};throwTo({x:B[2].x,y:B[2].y,base:2},.99);out.C_bad=msgs.some(m=>m.includes('Epätarkka'));
  window.say=say0}
 return out});
console.log(JSON.stringify(res),errs);await br.close()})();
