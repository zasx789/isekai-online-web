function useSkill(i) {
  if (!S.eAlive) return;
  const now = Date.now();
  if (S.cds[i] > now) { addLog('Skill on cooldown!','#e74c3c'); return; }
  const sk = cls().skills[i];
  if (S.mp < sk.mp) { addLog('Not enough MP!','#3498db'); return; }

  S.mp = Math.max(0, S.mp - sk.mp);
  const isCrit = Math.random() < 0.22;
  let dmg = rand(sk.dmg[0], sk.dmg[1]);
  if (isCrit) dmg = Math.floor(dmg * 1.75);
  S.eHp = Math.max(0, S.eHp - dmg);
  S.playerAttAnim = 1;
  S.shakeX = isCrit ? 8 : 4;
  S.shakeY = isCrit ? -4 : -2;

  const dmgCol = isCrit ? '#f1c40f' : sk.color;
  spawnParticle(S.enemyX+rand(-20,20), C.height-120, isCrit ? 'CRIT! '+dmg : String(dmg), dmgCol, isCrit?24:18);
  addLog(sk.name+(isCrit?' CRITICAL HIT':'')+'! -'+dmg+' dmg', sk.color);

  if (sk.cd > 0) {
    S.cds[i] = now + sk.cd;
    const btn = document.getElementById('sk'+i);
    btn.classList.add('cd');
    const cdDiv = document.createElement('div');
    cdDiv.className = 'sk-cd';
    btn.appendChild(cdDiv);
    const iv = setInterval(() => {
      const left = Math.ceil((S.cds[i]-Date.now())/1000);
      if (left <= 0) { clearInterval(iv); btn.classList.remove('cd'); if (cdDiv.parentNode) cdDiv.remove(); }
      else cdDiv.textContent = left;
    }, 100);
  }

  S.mp = Math.min(S.maxMp, S.mp + (isCrit ? 12 : 6));

  if (S.eHp <= 0) {
    S.eAlive = false;
    S.kills++;
    const xpG=rand(18,28), gG=rand(10,18);
    S.xp += xpG; S.gold += gG;
    spawnParticle(S.enemyX,      C.height-160, '+'+xpG+' XP',   '#d4ac0d', 14);
    spawnParticle(S.enemyX+30,   C.height-145, '+'+gG+' Gold',  '#f39c12', 13);
    addLog('Shadow Wisp defeated! +'+xpG+' XP +'+gG+' Gold', '#d4ac0d');
    if (S.xp >= S.maxXp) {
      S.level++; S.xp -= S.maxXp; S.maxXp = Math.floor(S.maxXp*1.6);
      S.maxHp += 60; S.hp = S.maxHp;
      S.maxMp += 20; S.mp = S.maxMp;
      spawnParticle(S.playerX, C.height-150, 'LEVEL UP!', '#c89b3c', 20);
      addLog('LEVEL UP! Now level '+S.level+'!', '#c89b3c');
    }
    if (S.kills >= 5 && !S.questDone) {
      S.questDone = true;
      document.getElementById('quest-prog').textContent = 'Quest Complete! +300 XP';
      S.xp += 300;
      addLog('Quest complete! +300 XP!', '#c89b3c');
    }
    setTimeout(() => { S.eHp=S.eMaxHp; S.eAlive=true; addLog('A new Shadow Wisp appears!','#e74c3c'); }, 2500);
  }
  updateHUD();
  setTimeout(() => { if (S.eAlive) enemyAttack(); }, 800);
}

function enemyAttack() {
  if (!S.eAlive || S.hp <= 0) return;
  const dmg = rand(20,38);
  S.hp = Math.max(0, S.hp - dmg);
  spawnParticle(S.playerX+rand(-15,15), C.height-120, String(dmg), '#e74c3c', 16);
  addLog('Shadow Wisp attacks for '+dmg+'!', '#e74c3c');
  if (S.hp <= 0) {
    addLog('You were defeated! Respawning...','#ff4444');
    setTimeout(() => { S.hp=S.maxHp; addLog('Respawned!','#7ecfff'); updateHUD(); }, 2000);
  }
  updateHUD();
}
