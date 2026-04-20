# Isekai Online — Web Edition

A browser-based AQW-style MMORPG built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just open `index.html` and play!

## Play
Open `index.html` in any modern browser. No server required.

## Controls
| Key | Action |
|-----|--------|
| `1` | Auto attack |
| `2` | Skill 2 |
| `3` | Skill 3 |
| `4` | Skill 4 |
| `5` | Skill 5 (ultimate) |
| Click enemy | Auto attack |
| Click portrait | Cycle class |
| Enter | Send chat |

## Classes
| Class | Playstyle |
|-------|-----------|
| Warrior | Physical damage, War Cry buff, Berserk ultimate |
| Mage | Spells, AOE Blizzard, Meteor ultimate |
| Rogue | Fast attacks, Poison DoT, Assassination ultimate |

## Features
- AQW-style dark purple/gold HUD
- 5-skill hotbar with cooldown timers
- HP / MP / XP bars with live numbers
- Character portrait (click to switch class)
- 3 hand-drawn original characters on canvas (Warrior, Mage, Rogue)
- Animated boss enemy with orbiting particles
- Floating damage numbers with crit system
- Screen shake on hit
- Enemy respawn system
- Quest tracker
- Gold and XP drops
- Level up system
- Chat bar
- Pure canvas rendering — zero images needed

## Structure
```
isekai-online-web/
  index.html        # Main game page
  css/
    style.css       # HUD and layout styles
  js/
    classes.js      # Class definitions and skill data
    game.js         # Game state, particles, HUD updates
    draw.js         # Canvas drawing — characters, background, skill icons
    combat.js       # Combat logic — player attacks, enemy attacks
    main.js         # Entry point — event listeners and game loop
```

## Roadmap
- [ ] Multiple zones / rooms
- [ ] More enemy types and bosses
- [ ] Equipment / inventory system
- [ ] Shop NPC with gold currency
- [ ] More classes (Necromancer, Paladin, DoomKnight)
- [ ] Multiplayer via WebSockets
- [ ] Save system (localStorage)
- [ ] Quest chain expansion
