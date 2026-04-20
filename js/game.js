const S = {
  hp: 500, maxHp: 500,
  mp: 200, maxMp: 200,
  xp: 5,   maxXp: 100,
  level: 5, gold: 350, rank: 3,
  kills: 0, questDone: false,
  classIdx: 0,
  eHp: 400, eMaxHp: 400, eAlive: true,
  cds: [0,0,0,0,0],
  playerX: 110, enemyX: 480,
  playerBob: 0, enemyBob: 0,
  playerAttAnim: 0,
  shakeX: 0, shakeY: 0
};

let particles = [];
let frameT = 0;

function cls() { return CLASSES[S.classIdx]; }
function rand(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }

function cycleClass() {
  S.classIdx = (S.classIdx + 1) % 3;
  document.getElementById('cls-lbl').textContent = cls().name;
  drawPortrait();
  drawSkillIcons();
  updateSkillNames();
  addLog('Class changed to ' + cls().name + '!', '#c89b3c');
}

function spawnParticle(x, y, text, color, size) {
  particles.push({ x, y, text, color, size: size || 18, vy: -2, life: 60, maxLife: 60 });
}

function updateParticles(ctx) {
  particles = particles.filter(p => {
    p.y += p.vy; p.vy *= 0.95; p.life--;
    const alpha = p.life / p.maxLife;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = p.color; ctx.strokeStyle = '#000'; ctx.lineWidth = 2;
    ctx.font = `bold ${p.size}px Arial`; ctx.textAlign = 'center';
    ctx.strokeText(p.text, p.x, p.y);
    ctx.fillText(p.text, p.x, p.y);
    ctx.restore();
    return p.life > 0;
  });
}

function addLog(msg, col) {
  const c1 = document.getElementById('cl1');
  const c2 = document.getElementById('cl2');
  c1.textContent = c2.textContent;
  c1.style.color = c2.style.color || '#aaa';
  c2.textContent = msg;
  c2.style.color = col || '#aaa';
}

function updateHUD() {
  document.getElementById('hp-bar').style.width = Math.max(0,(S.hp/S.maxHp)*100)+'%';
  document.getElementById('mp-bar').style.width = Math.max(0,(S.mp/S.maxMp)*100)+'%';
  document.getElementById('xp-bar').style.width = Math.max(0,(S.xp/S.maxXp)*100)+'%';
  document.getElementById('hp-txt').textContent = S.hp+'/'+S.maxHp;
  document.getElementById('mp-txt').textContent = S.mp+'/'+S.maxMp;
  document.getElementById('xp-txt').textContent = S.xp+'/'+S.maxXp;
  document.getElementById('plv').textContent   = S.level;
  document.getElementById('gold').textContent  = S.gold;
  document.getElementById('rank').textContent  = S.rank;
  if (!S.questDone)
    document.getElementById('quest-prog').textContent = 'Defeat Shadow Wisps: '+S.kills+'/5';
}
