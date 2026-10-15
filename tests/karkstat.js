const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});const N=+process.argv[2]||10;const C={viol:0,kark:0,steal:0,abort:0,stealPalo:0,stealOk:0,runs:0,games:0};
for(let g=0;g<N;g++){const pg=await br.newPage();await pg.goto('http://localhost:8787/?auto');await pg.evaluate(()=>{window.C={kark:0,steal:0,abort:0,stealPalo:0,stealOk:0};const k=kark,s=steal,a=abortPitch,p=palo;
 window.kark=r=>{const v=k(r);if(v)C.kark++;return v};window.steal=r=>{const v=s(r);if(v){C.steal++;r.stl=r.to}return v};window.abortPitch=()=>{C.abort++;if(phase==='pitch'||(phase==='pickup'&&!ball.landed))C.viol=(C.viol||0)+1;a()};window.palo=r=>{if(r.stl!=null){C.stealPalo++;r.stl=null}p(r)};
 setInterval(()=>{},1e9)});
 let r;for(let i=0;i<300;i++){r=await pg.evaluate(()=>{R.forEach(x=>{if(x.stl!=null&&x.st==='safe'&&x.base===x.stl){C.stealOk++;x.stl=null}});return __run(30)});if(r.over)break}
 const c=await pg.evaluate(()=>C);for(const k in c)C[k]+=c[k];C.runs+=r.runs[0].reduce((a,b)=>a+(b||0),0)+r.runs[1].reduce((a,b)=>a+(b||0),0);C.games++;await pg.close()}
console.log(JSON.stringify(C));await br.close()})();
