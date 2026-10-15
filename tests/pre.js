const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{snapAll();const out={};const ev=b=>({preventDefault(){},clientX:B[b].x*S+OX,clientY:B[b].y*S+OY});
 const setup=()=>{phase='play';G.palot=0;G.queue=[];R=[];const a=mkR(T[1].pl[0],1);R.push(a);send(a);a.prog=0;const k=F[7];ball={x:k.x,y:k.y,h:0,s:'held',hold:k,hit:false,bounced:true};throwTo(F[4],.65);return F[4]};
 // A: release before catch -> queued, fires on catch
 let rc=setup();down(ev(2));for(let i=0;i<39;i++)frame(1/60);up(ev(2));out.A_queued=!!queued&&queued.base===2;out.A_q=+queued.q.toFixed(2);
 let t=0;while(!(ball.s==='throw'&&ball.tgt.base===2)&&t<10){frame(1/60);t+=1/60}out.A_firedSameFrameAsCatch=ball.s==='throw'&&ball.tgt.base===2;out.A_queueCleared=queued===null;
 for(let i=0;i<300&&ball.s==='throw';i++)frame(1/60);out.A_palo=G.palot;
 // B: still holding at catch -> meter continues, release after
 setup();down(ev(2));let caught=false;for(let i=0;i<600;i++){frame(1/60);if(ball.s==='held'&&ball.hold===rc){caught=true;break}}out.B_holdingAfterCatch=caught&&!!hold&&!hold.pre;for(let i=0;i<10;i++)frame(1/60);up(ev(2));out.B_thrown=ball.s==='throw'&&ball.tgt.base===2;
 return out});
console.log(JSON.stringify(res),errs);await br.close()})();
