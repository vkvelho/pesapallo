const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});let tot={snap:0,ret:0,maxRet:0};
for(let g=0;g<4;g++){const pg=await br.newPage();await pg.goto('http://localhost:8787/?auto');await pg.evaluate(()=>{window.C={snap:0,ret:0,maxRet:0};const os=snapAll;snapAll=function(){C.snap++;return os()};const ot=toReturn;toReturn=function(){C.ret++;return ot()};
 const ost=step;step=function(dt){const ph=phase;ost(dt);if(ph==='return'&&phase==='pre')C.maxRet=Math.max(C.maxRet,G.retT)}});
let r;for(let i=0;i<300;i++){r=await pg.evaluate(()=>__run(30));if(r.over)break}const c=await pg.evaluate(()=>C);tot.snap+=c.snap;tot.ret+=c.ret;tot.maxRet=Math.max(tot.maxRet,c.maxRet);await pg.close()}
console.log(JSON.stringify(tot));await br.close()})();
