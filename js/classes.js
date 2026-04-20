const CLASSES = [
  {
    name: 'Warrior', color: '#c0392b', accent: '#e74c3c',
    skills: [
      { name: 'Slash',        cd: 0,     mp: 0,  dmg: [18,28],  type: 'phys',   color: '#e74c3c', desc: 'Quick slash. Generates mana on hit.' },
      { name: 'Power Strike', cd: 4000,  mp: 15, dmg: [45,70],  type: 'phys',   color: '#e67e22', desc: 'Heavy blow dealing massive physical damage.' },
      { name: 'War Cry',      cd: 8000,  mp: 25, dmg: [20,35],  type: 'buff',   color: '#f1c40f', desc: 'Battle cry that boosts ATK for 8 seconds.' },
      { name: 'Whirlwind',    cd: 6000,  mp: 30, dmg: [35,55],  type: 'aoe',    color: '#e74c3c', desc: 'Spin and strike all nearby enemies.' },
      { name: 'Berserk',      cd: 12000, mp: 50, dmg: [80,130], type: 'phys',   color: '#c0392b', desc: 'Enter berserker rage for devastating damage.' }
    ]
  },
  {
    name: 'Mage', color: '#8e44ad', accent: '#9b59b6',
    skills: [
      { name: 'Arcane Bolt', cd: 0,     mp: 0,  dmg: [15,25],  type: 'magic',  color: '#9b59b6', desc: 'Arcane bolt. Generates mana on crit.' },
      { name: 'Fireball',    cd: 4000,  mp: 20, dmg: [50,80],  type: 'magic',  color: '#e67e22', desc: 'Hurl a blazing fireball.' },
      { name: 'Blizzard',    cd: 7000,  mp: 30, dmg: [40,60],  type: 'magic',  color: '#85c1e9', desc: 'Blizzard that slows and damages.' },
      { name: 'Thunder',     cd: 6000,  mp: 25, dmg: [35,65],  type: 'magic',  color: '#f7dc6f', desc: 'Call down a lightning strike.' },
      { name: 'Meteor',      cd: 14000, mp: 60, dmg: [90,150], type: 'magic',  color: '#e74c3c', desc: 'Rain a meteor for catastrophic damage.' }
    ]
  },
  {
    name: 'Rogue', color: '#1abc9c', accent: '#16a085',
    skills: [
      { name: 'Stab',          cd: 0,     mp: 0,  dmg: [20,30],  type: 'phys',   color: '#1abc9c', desc: 'Quick stab. High crit chance.' },
      { name: 'Shadow Step',   cd: 5000,  mp: 20, dmg: [60,90],  type: 'phys',   color: '#8e44ad', desc: 'Teleport behind enemy and strike.' },
      { name: 'Poison',        cd: 6000,  mp: 15, dmg: [15,25],  type: 'dot',    color: '#27ae60', desc: 'Apply deadly poison (damage over time).' },
      { name: 'Smoke Bomb',    cd: 9000,  mp: 30, dmg: [10,20],  type: 'debuff', color: '#7f8c8d', desc: 'Reduce enemy accuracy with smoke.' },
      { name: 'Assassination', cd: 15000, mp: 70, dmg: [100,160],type: 'phys',   color: '#c0392b', desc: 'Lethal killing blow.' }
    ]
  }
];

const SKILL_COLORS = [
  ['#e74c3c','#e67e22','#f1c40f','#e74c3c','#c0392b'],
  ['#9b59b6','#e67e22','#85c1e9','#f7dc6f','#e74c3c'],
  ['#1abc9c','#8e44ad','#27ae60','#7f8c8d','#c0392b']
];

const SKILL_SYMBOLS = [
  ['S','P','W','H','B'],
  ['A','F','B','T','M'],
  ['S','D','P','G','K']
];
