const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/?auto');
const res=await pg.evaluate(()=>{const out={};const setup=(fi,prog)=>{snapAll();R=[];G.palot=0;G.koppi=false;phase='play';G.play++;const r=mkR(G.batter||T[batT()].pl[0],0);R.push(r);r.st='run';r.from=0;r.to=1;r.prog=prog;
  const f=F[fi];f.x=30;f.y=128;ball={x:f.x,y:f.y,h:0,s:'roll',vx:0,vy:0,hit:false,bounced:true};return r};
 // fielder (kenttä #4) fields ball near 1st, batter halfway -> must burn
 let n=0;for(let k=0;k<20;k++){const r=setup(4,.45);for(let i=0;i<240&&R.includes(r)&&r.st==='run';i++)step(1/60);if(G.palot>0)n++}out.burn1st=n+'/20';
 // runner nearly there -> should not be burned (sanity)
 n=0;for(let k=0;k<20;k++){const r=setup(4,.93);for(let i=0;i<240&&R.includes(r)&&r.st==='run';i++)step(1/60);if(G.palot>0)n++}out.lateRunnerBurned=n+'/20';return out});
console.log(JSON.stringify(res),errs);await br.close()})();
