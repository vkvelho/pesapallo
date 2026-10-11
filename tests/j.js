const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();await pg.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8787/');await pg.click('#ovb');await pg.evaluate(()=>{phase='play';endHalf()});await pg.click('#ovb');await new Promise(r=>setTimeout(r,300));
await pg.evaluate(()=>snapAll());await pg.click('#jb button');await new Promise(r=>setTimeout(r,400));console.log(await pg.evaluate(()=>G.batter.n+' '+G.jUsed+' btns:'+document.querySelectorAll('#jb button').length));
await pg.screenshot({path:'/workspace/pesapallo/sisavuoro.png'});console.log(errs);await br.close()})();
