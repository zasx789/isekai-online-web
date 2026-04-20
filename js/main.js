document.addEventListener('DOMContentLoaded', () => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  document.getElementById('portrait').addEventListener('click', cycleClass);

  for (let i = 0; i < 5; i++) {
    document.getElementById('sk'+i).addEventListener('click', (function(idx){ return () => useSkill(idx); })(i));
  }

  C.addEventListener('click', e => {
    const r  = C.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (C.width  / r.width);
    const my = (e.clientY - r.top)  * (C.height / r.height);
    if (Math.abs(mx - S.enemyX) < 55 && my < C.height - 40) useSkill(0);
  });

  document.addEventListener('keydown', e => {
    const map = {'1':0,'2':1,'3':2,'4':3,'5':4};
    if (map[e.key] !== undefined) useSkill(map[e.key]);
  });

  document.getElementById('chat-btn').addEventListener('click', sendChat);
  document.getElementById('chat-in').addEventListener('keydown', e => { if (e.key==='Enter') sendChat(); });

  drawPortrait();
  drawSkillIcons();
  updateSkillNames();
  updateHUD();
  addLog('Welcome to Isekai Online!', '#c89b3c');
  addLog('Click enemy or press 1-5 to attack!', '#aaa');
  gameLoop();
  setTimeout(() => { if (S.eAlive) enemyAttack(); }, 3000);
});

function sendChat() {
  const inp = document.getElementById('chat-in');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  addLog('You: ' + msg, '#7ecfff');
}
