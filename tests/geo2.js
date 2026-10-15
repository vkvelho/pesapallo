const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();await pg.goto('http://localhost:8787/');await pg.click('#ovb');
console.log(await pg.evaluate(()=>{snapAll();return [1,2,3].map(b=>({b,leg:legLen(b,(b+1)%4).toFixed(1),home2next:d2(F[0],B[(b+1)%4]).toFixed(1),home2this:d2(F[0],B[b]).toFixed(1)}))}));await br.close()})();
