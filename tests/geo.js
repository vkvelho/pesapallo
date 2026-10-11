const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};
 out.legal_between_lines=legalLanding(14,125);out.legal_right_of_home1st=legalLanding(30,125);out.legal_outer_right_lower=legalLanding(70,125);out.legal_front=legalLanding(40,60);
 // ball landing between outer left line and home-1st line -> laiton in play
 snapAll();R=[];phase='play';G.play++;G.lyonnit=1;const bat=G.batter;ball={x:14,y:125,h:.01,vx:0,vy:0,vh:-5,s:'flight',hit:true,bounced:false,age:1};step(1/60);out.laiton_called=phase==='dead';
 // runner 3->home rounds flag on outside
 snapAll();R=[];phase='play';G.play++;G.koppi=false;const k=F[7];ball={x:k.x,y:k.y,h:0,s:'held',hold:k,hit:false,bounced:true};const r=mkR(T[1].pl[2],3);R.push(r);send(r);let minXnearFlag=99,t=0,done=false;
 for(let i=0;i<900;i++){step(1/60);t+=1/60;if(!R.includes(r)){done=true;break}if(Math.abs(r.y-116.6)<3)minXnearFlag=Math.min(minXnearFlag,r.x)}
 out.flagX=12.5;out.runnerXnearFlag=+minXnearFlag.toFixed(1);out.outsideFlag=minXnearFlag<12.5;out.scored=done;out.time=+t.toFixed(2);out.pathLen=+legLen(3,0).toFixed(1);out.straight=+d2(B[3],B[0]).toFixed(1);
 return out});
console.log(JSON.stringify(res),errs);await br.close()})();
