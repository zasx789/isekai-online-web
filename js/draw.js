const C   = document.getElementById('scene-canvas');
const ctx = C.getContext('2d');
const PORT  = document.getElementById('portrait');
const pctx  = PORT.getContext('2d');

function resizeCanvas() {
  C.width  = C.offsetWidth  || 900;
  C.height = C.offsetHeight || 340;
}

/* ── Background ── */
function drawBackground() {
  const w = C.width, h = C.height;
  ctx.fillStyle = '#1a0a2e'; ctx.fillRect(0,0,w,h);
  const mc = ['#2d1b4e','#3d2060','#251540','#2a1855','#1e0f3a'];
  for (let i=0;i<5;i++) {
    const x=i*(w/5)+20, sz=40+i*15;
    ctx.fillStyle=mc[i];
    ctx.beginPath(); ctx.moveTo(x,h-60); ctx.lineTo(x-sz/2,h-60-sz*1.5); ctx.lineTo(x+sz/2,h-60-sz*1.5); ctx.closePath(); ctx.fill();
    ctx.fillStyle='#4a2878';
    ctx.beginPath(); ctx.moveTo(x,h-60); ctx.lineTo(x-sz/3,h-60-sz*1.1); ctx.lineTo(x+sz/3,h-60-sz*1.1); ctx.closePath(); ctx.fill();
  }
  ctx.fillStyle='#0d0520'; ctx.fillRect(0,h-60,w,60);
  ctx.strokeStyle='#6a0dad'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(0,h-60); ctx.lineTo(w,h-60); ctx.stroke();
  ctx.fillStyle='#1a0830'; ctx.fillRect(0,h-58,w,58);
  for (let i=0;i<w;i+=40) { ctx.fillStyle='rgba(106,13,173,0.15)'; ctx.fillRect(i,h-58,20,58); }
  for (let i=0;i<60;i++) {
    const sx=(i*97+13)%w, sy=(i*53+7)%(h-80), a=0.3+((i*17)%10)*0.05;
    ctx.fillStyle=`rgba(255,255,255,${a})`; ctx.beginPath(); ctx.arc(sx,sy,0.8,0,Math.PI*2); ctx.fill();
  }
  ctx.fillStyle='rgba(180,100,255,0.15)'; ctx.beginPath(); ctx.arc(w/2,30,60,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(180,100,255,0.08)'; ctx.beginPath(); ctx.arc(w/2,30,90,0,Math.PI*2); ctx.fill();
}

/* ── Player characters ── */
function drawWarrior(x, y, attAnim, bob) {
  ctx.save();
  ctx.translate(x+S.shakeX, y+bob+S.shakeY);
  if (attAnim>0) ctx.translate(attAnim*15,0);
  ctx.strokeStyle='#000'; ctx.lineWidth=2.5;

  if (S.classIdx===0) {
    ctx.fillStyle='#8B4513'; ctx.beginPath(); ctx.arc(0,-90,14,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#f4c57a'; ctx.beginPath(); ctx.arc(0,-90,12,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#1a1a2e'; ctx.fillRect(-8,-82,4,4); ctx.fillRect(4,-82,4,4);
    ctx.beginPath(); ctx.arc(0,-78,3,0,Math.PI); ctx.fill();
    ctx.fillStyle='#3a5fa0'; ctx.beginPath(); ctx.moveTo(-14,-76); ctx.lineTo(-16,-40); ctx.lineTo(16,-40); ctx.lineTo(14,-76); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#5a7fc0'; ctx.fillRect(-14,-76,4,36); ctx.fillRect(10,-76,4,36);
    ctx.fillStyle='#c89b3c'; ctx.fillRect(-2,-76,4,36);
    ctx.fillStyle='#c0c0c0'; ctx.beginPath(); ctx.moveTo(20,-75); ctx.lineTo(24,-40); ctx.lineTo(28,-75); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#c89b3c'; ctx.fillRect(14,-65,14,5);
    ctx.fillStyle='#3a5fa0'; ctx.fillRect(-14,-40,12,30); ctx.stroke(); ctx.fillRect(2,-40,12,30); ctx.stroke();
    ctx.fillStyle='#2a3f70'; ctx.fillRect(-14,-12,28,12); ctx.stroke();

  } else if (S.classIdx===1) {
    ctx.fillStyle='#4a2070'; ctx.beginPath(); ctx.moveTo(-14,-104); ctx.lineTo(14,-104); ctx.lineTo(12,-88); ctx.lineTo(-12,-88); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#f4c57a'; ctx.beginPath(); ctx.arc(0,-90,12,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#1a1a2e'; ctx.fillRect(-8,-93,4,5); ctx.fillRect(4,-93,4,5);
    ctx.fillStyle='#6a2090'; ctx.beginPath(); ctx.moveTo(-14,-78); ctx.lineTo(-16,-42); ctx.lineTo(16,-42); ctx.lineTo(14,-78); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='#9b59b6'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(-10,-78); ctx.lineTo(-10,-42); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(10,-78); ctx.lineTo(10,-42); ctx.stroke();
    ctx.strokeStyle='#000'; ctx.lineWidth=2.5;
    ctx.fillStyle='#8e44ad'; ctx.fillRect(-16,-78,4,36); ctx.stroke(); ctx.fillRect(12,-78,4,36); ctx.stroke();
    ctx.fillStyle='#c89b3c'; ctx.beginPath(); ctx.arc(22,-80,6,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#9b59b6'; ctx.fillRect(20,-80,3,50); ctx.stroke();
    ctx.fillStyle='#8e44ad'; ctx.fillRect(-14,-42,12,28); ctx.stroke(); ctx.fillRect(2,-42,12,28); ctx.stroke();
    ctx.fillStyle='rgba(180,100,255,0.4)';
    for (let i=0;i<4;i++) { ctx.beginPath(); ctx.arc(rand(-20,20),rand(-100,-40),2,0,Math.PI*2); ctx.fill(); }

  } else {
    ctx.fillStyle='#1a1a1a'; ctx.beginPath(); ctx.arc(0,-90,13,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#f4c57a'; ctx.beginPath(); ctx.arc(0,-90,11,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#1a1a2e'; ctx.fillRect(-6,-93,3,4); ctx.fillRect(3,-93,3,4);
    ctx.fillStyle='#1a3a2a'; ctx.beginPath(); ctx.moveTo(-13,-79); ctx.lineTo(-15,-42); ctx.lineTo(15,-42); ctx.lineTo(13,-79); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#1abc9c'; ctx.fillRect(-13,-79,4,37); ctx.stroke(); ctx.fillRect(9,-79,4,37); ctx.stroke(); ctx.fillRect(-3,-79,6,5);
    ctx.fillStyle='#c0c0c0';
    ctx.beginPath(); ctx.moveTo(18,-78); ctx.lineTo(22,-55); ctx.lineTo(20,-55); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(20,-56); ctx.lineTo(26,-52); ctx.lineTo(20,-48); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#1a3a2a'; ctx.fillRect(-13,-42,11,28); ctx.stroke(); ctx.fillRect(2,-42,11,28); ctx.stroke();
    ctx.fillStyle='#0d2018'; ctx.fillRect(-13,-15,26,15); ctx.stroke();
  }
  ctx.restore();
}

/* ── Enemy ── */
function drawEnemy(x, y, bob) {
  ctx.save();
  ctx.translate(x+S.shakeX, y+bob+S.shakeY);
  ctx.scale(-1,1);
  if (!S.eAlive) ctx.globalAlpha=0.3;
  ctx.fillStyle='#2d0050'; ctx.strokeStyle='#000'; ctx.lineWidth=3;
  ctx.beginPath(); ctx.arc(0,-85,32,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.fillStyle='#5a0090'; ctx.beginPath(); ctx.arc(-10,-85,28,Math.PI,0); ctx.fill();
  ctx.strokeStyle='#ff2222'; ctx.lineWidth=2; ctx.fillStyle='#ff4444';
  ctx.beginPath(); ctx.ellipse(-12,-80,7,5,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(12,-80,7,5,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.fillStyle='#000'; ctx.beginPath(); ctx.arc(-12,-80,3,0,Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(12,-80,3,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#000'; ctx.lineWidth=2.5;
  ctx.beginPath(); ctx.moveTo(-12,-68); ctx.lineTo(-8,-72); ctx.lineTo(0,-70); ctx.lineTo(8,-72); ctx.lineTo(12,-68); ctx.stroke();
  for (let i=-3;i<=3;i++) {
    const tx=i*12, curve=i%2===0?-20:20;
    ctx.beginPath(); ctx.moveTo(tx,-53); ctx.quadraticCurveTo(tx+curve,-35,tx,-20);
    ctx.lineWidth=7; ctx.strokeStyle='#2d0050'; ctx.stroke();
    ctx.lineWidth=5; ctx.strokeStyle='#5a0090'; ctx.stroke();
    ctx.lineWidth=3; ctx.strokeStyle='#7a00c0'; ctx.stroke();
  }
  ctx.fillStyle='#c89b3c';
  const a=(Date.now()%3000)/3000*Math.PI*2;
  for (let i=0;i<3;i++) {
    const ang=a+i*(Math.PI*2/3);
    ctx.beginPath(); ctx.arc(Math.cos(ang)*40,Math.sin(ang)*20-85,4,0,Math.PI*2); ctx.fill();
  }
  ctx.restore();
}

/* ── Enemy HP bar ── */
function drawEnemyHPBar() {
  const x=S.enemyX-50, y=50, w=100, h=10;
  ctx.fillStyle='#1a0a2e'; ctx.fillRect(x-2,y-2,w+4,h+4);
  ctx.strokeStyle='#6a0dad'; ctx.lineWidth=1.5; ctx.strokeRect(x-2,y-2,w+4,h+4);
  ctx.fillStyle='#c0392b'; ctx.fillRect(x,y,Math.max(0,(S.eHp/S.eMaxHp)*w),h);
  ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.fillRect(x,y,Math.max(0,(S.eHp/S.eMaxHp)*w),h/2);
  ctx.fillStyle='#fff'; ctx.font='bold 9px Arial'; ctx.textAlign='center';
  ctx.fillText('Shadow Wisp Lv.7',S.enemyX,y-6);
  ctx.fillText(Math.max(0,S.eHp)+'/'+S.eMaxHp,S.enemyX,y+h-1);
}

/* ── Portrait ── */
function drawPortrait() {
  pctx.fillStyle='#1a0a2e'; pctx.fillRect(0,0,52,52);
  pctx.save(); pctx.translate(26,52); pctx.scale(0.42,0.42);
  // draw head only for portrait preview
  const ci=S.classIdx;
  const skinColor='#f4c57a';
  const hatColor=['#8B4513','#4a2070','#1a1a1a'][ci];
  const bodyColor=['#3a5fa0','#6a2090','#1a3a2a'][ci];
  pctx.strokeStyle='#000'; pctx.lineWidth=2.5;
  pctx.fillStyle=hatColor; pctx.beginPath(); pctx.arc(0,-90,14,0,Math.PI*2); pctx.fill(); pctx.stroke();
  pctx.fillStyle=skinColor; pctx.beginPath(); pctx.arc(0,-90,12,0,Math.PI*2); pctx.fill(); pctx.stroke();
  pctx.fillStyle='#1a1a2e'; pctx.fillRect(-6,-83,4,4); pctx.fillRect(3,-83,4,4);
  pctx.fillStyle=bodyColor;
  pctx.beginPath(); pctx.moveTo(-14,-76); pctx.lineTo(-16,-40); pctx.lineTo(16,-40); pctx.lineTo(14,-76); pctx.closePath(); pctx.fill(); pctx.stroke();
  pctx.restore();
}

/* ── Skill icons ── */
function drawSkillIcon(canvasId, idx, classIdx) {
  const sk=document.getElementById(canvasId); if (!sk) return;
  const sc=sk.getContext('2d'); const w=62,h=42;
  sc.clearRect(0,0,w,h); sc.fillStyle='#0d0614'; sc.fillRect(0,0,w,h);
  const col=SKILL_COLORS[classIdx][idx];
  sc.strokeStyle=col; sc.lineWidth=1.5; sc.strokeRect(1,1,w-2,h-2);
  sc.fillStyle=col+'44'; sc.fillRect(2,2,w-4,h-4);
  sc.fillStyle=col; sc.font='bold 18px serif'; sc.textAlign='center'; sc.textBaseline='middle';
  sc.fillText(SKILL_SYMBOLS[classIdx][idx],w/2,h/2);
  sc.fillStyle='rgba(255,255,255,0.5)'; sc.fillRect(2,2,w-4,4);
}

function drawSkillIcons() { for (let i=0;i<5;i++) drawSkillIcon('si'+i,i,S.classIdx); }
function updateSkillNames() { const sk=cls().skills; for (let i=0;i<5;i++) document.getElementById('sn'+i).textContent=sk[i].name; }

/* ── Main render loop ── */
function gameLoop() {
  requestAnimationFrame(gameLoop);
  frameT++;
  ctx.clearRect(0,0,C.width,C.height);
  if (S.shakeX!==0){S.shakeX*=0.7; if(Math.abs(S.shakeX)<0.5)S.shakeX=0;}
  if (S.shakeY!==0){S.shakeY*=0.7; if(Math.abs(S.shakeY)<0.5)S.shakeY=0;}
  drawBackground();
  S.playerBob=Math.sin(frameT*0.07)*3;
  S.enemyBob=Math.sin(frameT*0.05+1)*4;
  if (S.playerAttAnim>0) S.playerAttAnim=Math.max(0,S.playerAttAnim-0.1);
  drawWarrior(S.playerX, C.height-55, S.playerAttAnim, S.playerBob);
  drawEnemy(S.enemyX, C.height-55, S.enemyBob);
  drawEnemyHPBar();
  updateParticles(ctx);
}
