const pp=require('puppeteer-core');(async()=>{const br=await pp.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox'],headless:'new'});
const pg=await br.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));await pg.goto('http://localhost:8787/');await pg.click('#ovb');
const res=await pg.evaluate(()=>{const out={};
 const t=(from,to,prog,bat)=>{snapAll();R=[];G.palot=0;G.haav=0;G.haavL=[];G.koppi=false;phase='play';G.play++;
  const r=mkR(bat?G.batter:T[1].pl[5],from);if(bat)G.batter=null;R.push(r);r.st='run';r.from=from;r.to=to;r.prog=prog;r.bat=!!bat;r.playId=G.play;
  const st=mkR(T[1].pl[6],3);R.push(st); // runner standing on 3rd
  const f=F[7];ball={x:f.x,y:f.y,h:2,vx:0,vy:0,vh:0,s:'flight',hit:true,bounced:false,age:1};window.__noDrop=1;step(1/60);window.__noDrop=0;
  const o={caught:G.koppi,pendAtCatch:!!r.pend,standerUntouched:R.includes(st)&&st.st==='safe'};let prevD=d2(r,B[to]),approach=true,leftAt=null;
  for(let i=0;i<600;i++){step(1/60);if(R.includes(r)){const d=d2(r,B[to]);if(d>prevD+1e-6)approach=false;prevD=d}else{leftAt=d2({x:r.p.wx,y:r.p.wy},B[to]);break}}
  o.alwaysApproached=approach;o.distAtHaav=leftAt&&+leftAt.toFixed(2);o.touchedArea=leftAt!=null&&leftAt<=BR[to]+PR_+.5;o.haav=G.haav;o.palo=G.palot;o.standerStill=R.includes(st);return o};
 out.runner1to2=t(1,2,.2);out.batter0to1=t(0,1,.15,true);return out});
console.log(JSON.stringify(res,null,0),errs);await br.close()})();
