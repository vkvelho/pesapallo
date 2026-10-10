const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};const run=s=>{for(let t=0;t<s;t+=1/60)step(1/60)};
 const base=()=>{snapAll();R=[];G.palot=0;G.haav=0;G.haavL=[];G.koppi=false;G.lyonnit=0;G.vaarat=0;T.forEach(t=>t.runs[G.pi]=0);if(!G.batter)nextBatter()};
 const flyCatch=()=>{phase='play';G.play++;const f=F[6];ball={x:f.x,y:f.y,h:2,vx:0,vy:0,vh:0,s:'flight',hit:true,bounced:false,age:1};let t=0;while(ball.s!=='held'&&t<3){window.__noDrop=1;step(1/60);t+=1/60}window.__noDrop=0;};
 const rnd0=Math.random;
 // 1a koppi, runner reaches base -> haav
 base();let r=mkR(T[1].pl[3],2);R.push(r);send(r);r.prog=.3;flyCatch();out.k_pending=r.pend===true&&R.includes(r);
 for(let i=0;i<600&&R.includes(r);i++)step(1/60);out.k_haav=G.haav;out.k_palo=G.palot;
 // 1b koppi, ball thrown to 3rd first -> palo
 base();r=mkR(T[1].pl[3],2);R.push(r);send(r);r.prog=.2;flyCatch();throwTo({x:B[3].x,y:B[3].y,base:3},.65);for(let i=0;i<600&&R.includes(r);i++)step(1/60);out.k2_palo=G.palot;out.k2_haav=G.haav;
 // 2a vaara empty bases -> batter free to 1st
 base();phase='pre';doPitch();ball.vaara=true;ball.h=0;ball.vh=-1;const bat=G.batter;pitchLanded();out.v_empty=R.length===1&&R[0].p===bat&&R[0].free&&R[0].to===1;
 // 2b runners: first vaara nothing, second -> lead advances
 base();r=mkR(T[1].pl[4],2);R.push(r);phase='pre';doPitch();ball.vaara=true;pitchLanded();out.v1_noadv=r.st==='safe'&&r.base===2;
 run(3);phase='pre';doPitch();ball.vaara=true;pitchLanded();out.v2_adv=r.st==='run'&&r.to===3&&r.free;
 // 2c lead on 3rd + 2 vaara -> run
 base();r=mkR(T[1].pl[4],3);R.push(r);G.vaarat=1;phase='pre';doPitch();ball.vaara=true;pitchLanded();run(5);out.v_run=T[batT()].runs[G.pi];
 // 3a laiton: ball lands outside sideline; runner returns, lyönti counted
 base();r=mkR(T[1].pl[4],1);R.push(r);phase='play';G.play++;G.lyonnit=1;send(r);r.prog=.3;ball={x:5,y:60,h:.01,vx:-1,vy:0,vh:-5,s:'flight',hit:true,bounced:false,age:1};step(1/60);out.l_phase=phase;out.l_back=r.st;run(4);out.l_returned=r.st==='safe'&&r.base===1;
 // 3b 3rd lyonti laiton (batter at home) -> palo
 base();phase='play';G.play++;G.lyonnit=3;ball={x:42,y:147,h:.01,vx:0,vy:0,vh:-5,s:'flight',hit:true,bounced:false,age:1};const p0=G.palot;step(1/60);out.l3_palo=G.palot-p0;
 return out});
console.log(JSON.stringify(res),errs);await br.close()})();
