const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{snapAll();const out={};
 const setup=()=>{phase='play';G.palot=0;G.queue=[];R=[];const a=mkR(T[1].pl[0],1),b=mkR(T[1].pl[1],2);R.push(a,b);send(b);send(a);a.prog=.1;b.prog=.1;
  const k=F[7];ball={x:k.x,y:k.y,h:0,s:'held',hold:k,hit:false,bounced:true};return k};
 // Scenario A: throw to 3rd (exact base target), then immediately toward 2nd via receiving fielder
 let k=setup();throwTo({x:B[3].x,y:B[3].y,base:3},.65);let t=0;while(ball.s!=='held'&&t<10){step(1/60);t+=1/60}
 out.A_after3=G.palot;const f3=ball.hold;throwTo({x:B[2].x,y:B[2].y,base:2},.65);for(let i=0;i<600&&phase==='play';i++)step(1/60);out.A_total=G.palot;out.A_left=R.length;
 // Scenario B: tap selected the 3-polttaja (fielder) instead of base
 k=setup();const p3=F[3];throwTo(p3,.65);t=0;while(ball.s!=='held'&&t<10){step(1/60);t+=1/60}out.B_after=G.palot;
 // Scenario C: 3 palot ends half
 setup();G.palot=1;throwTo({x:B[3].x,y:B[3].y,base:3},.65);for(let i=0;i<400;i++){step(1/60);if(ball.s==='held'&&ball.hold!==F[7]&&!out.c1){out.c1=1;throwTo({x:B[2].x,y:B[2].y,base:2},.65)}}
 out.C_half=G.half;out.C_phase=phase;return out});
console.log(JSON.stringify(res),errs);await br.close()})();
