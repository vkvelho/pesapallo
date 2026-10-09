const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});const N=+process.argv[2]||20,out=[];let errsAll=0,lock=0;
for(let g=0;g<N;g++){const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/?auto');let r;for(let i=0;i<300;i++){r=await pg.evaluate(()=>__run(30));if(r.over||errs.length)break}
if(!r.over)lock++;errsAll+=errs.length;if(errs.length)console.log(errs[0]);const s=t=>r.runs[t].slice(0,8).reduce((a,b)=>a+(b||0),0),k=t=>r.runs[t].slice(9).reduce((a,b)=>a+(b||0),0);
out.push([s(0),s(1),r.stage,k(0)+'-'+k(1),await pg.evaluate(()=>G.winner)]);await pg.close()}
console.log(out.map(o=>o.join(' ')).join('\n'));const all=out.flatMap(o=>[o[0],o[1]]);console.log('avg',all.reduce((a,b)=>a+b)/all.length,'min',Math.min(...all),'max',Math.max(...all),'errs',errsAll,'locks',lock);await br.close()})();
