# KOMPLETTE PROJEKT-ERKLÄRUNG: "Nihas Jump & Run"

## 🎮 WAS IST DAS PROJEKT?

Ein **2D Jump & Run Spiel** im Browser, ähnlich wie Super Mario oder Castlevania.
Du steuerst einen **Magier**, der gegen **Goblins** kämpft und am Ende gegen einen **Endboss** antritt.

---

## 📁 PROJEKT-STRUKTUR

```
NihasJump-Run/
├── index.html          → Einstiegspunkt (HTML-Seite)
├── game.js             → Hauptlogik (Spielstart, Tastatur)
├── style.css           → Design/Layout
├── levels/
│   └── level1.js       → Level-Definition (Gegner, Hintergrund)
└── models/             → Alle Spielobjekte (Klassen)
    ├── drawable-object.class.js
    ├── movable-object.class.js
    ├── character.class.js
    ├── goblin.class.js
    ├── endboss.class.js
    ├── casting-spell.class.js
    ├── world.class.js
    └── ... (Statusbars, etc.)
```

---

## 🏗️ HIERARCHIE DER KLASSEN (Vererbung)

```
DrawableObject (Basis - kann gezeichnet werden)
    ↓
MovableObject (kann sich bewegen + Kollision)
    ↓
    ├── Character (Spieler)
    ├── Goblin (Gegner)
    ├── Endboss (Boss)
    ├── CastingSpell (Zauber)
    ├── Mana (Mana-Items)
    ├── Cloud (Wolken)
    └── BackgroundObject (Hintergrund)
```

**Was bedeutet das?**
- Alle Objekte erben Fähigkeiten von oben nach unten
- `Character` hat **ALLE** Funktionen von MovableObject **UND** DrawableObject

---

# 📋 DETAILLIERTE DATEI-ERKLÄRUNG

## 1. index.html - Der Einstiegspunkt

```html
<canvas id="canvas" width="720" height="480"></canvas>
```

### Was ist ein Canvas?
Eine **Zeichenfläche**, wie ein leeres Blatt Papier, auf dem du mit JavaScript malen kannst.

### Zeilen 11-29: Script-Tags
```html
<script src="models/drawable-object.class.js"></script>
<script src="models/character.class.js"></script>
...
```

**WICHTIG:** Die Reihenfolge ist entscheidend!
- DrawableObject muss **VOR** Character geladen werden (weil Character davon erbt)
- Wie beim Bauen: Fundament → Wände → Dach

### Zeile 31: `<body onload="init()">`
- Sobald die Seite geladen ist → Rufe `init()` auf

---

## 2. game.js - Die Haupt-Steuerung

### Globale Variablen (Zeilen 1-4)

```javascript
let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
```

- `canvas` = Die Zeichenfläche
- `ctx` = Der "Pinsel" zum Zeichnen (Context)
- `world` = Die Spielwelt (enthält alles)
- `keyboard` = Tastendrücke speichern

### init()-Funktion (Zeilen 7-14)

```javascript
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  ctx = canvas.getContext("2d");
}
```

**Was passiert hier?**
1. Hole das Canvas-Element
2. Erstelle die Spielwelt
3. Hole den 2D-Zeichenkontext

**Analogie:**
- Canvas = Leinwand
- ctx = Pinsel
- world = Das Gemälde

### Keyboard-Listener (Zeilen 31-71)

```javascript
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {  // Pfeil rechts
    keyboard.RIGHT = true;
  }
  ...
});
```

**Was macht das?**
Überwacht Tastatureingaben und speichert sie in `keyboard`.

**Beispiel:**
1. Du drückst Pfeil rechts
2. `keyboard.RIGHT` wird `true`
3. Das Spiel kann jetzt prüfen: "Ist RIGHT gedrückt?"

**keyup-Event (Zeile 52):**
Wenn du die Taste loslässt → `keyboard.RIGHT = false`

---

## 3. DrawableObject - Die Basis-Klasse

**Aufgabe:** Objekte, die gezeichnet werden können

### Wichtige Eigenschaften

```javascript
x = 30;        // X-Position (horizontal)
y = 30;        // Y-Position (vertikal)
img;           // Das Bild-Objekt
imageCache = {};    // Alle geladenen Bilder speichern
currentImage = 0;
height = 150;  // Höhe
width = 150;   // Breite
```

### loadImage() (Zeilen 10-13)

```javascript
loadImage(path) {
  this.img = new Image();
  this.img.src = path;
}
```

**Was macht das?**
Lädt **EIN** Bild von der Festplatte.

**Beispiel:**
```javascript
loadImage("bilder/held.png");
```

### loadImages() (Zeilen 50-56)

```javascript
loadImages(arr) {
  arr.forEach((path) => {
    let img = new Image();
    img.src = path;
    this.imageCache[path] = img;
  });
}
```

**Was macht das?**
Lädt **MEHRERE** Bilder und speichert sie im Cache.

**Warum Cache?**
Stell dir vor, du hast 100 Bilder für Animationen. Wenn du sie jedes Mal neu laden würdest, wäre das Spiel extrem langsam. Der Cache speichert sie im Speicher.

**Beispiel:**
```javascript
loadImages(["bild1.png", "bild2.png", "bild3.png"]);

// imageCache sieht dann so aus:
{
  "bild1.png": <Image-Objekt>,
  "bild2.png": <Image-Objekt>,
  "bild3.png": <Image-Objekt>
}
```

### draw() (Zeilen 15-21)

```javascript
draw(ctx) {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}
```

**Was macht das?**
Zeichnet das Bild auf das Canvas.

**Parameter:**
- `ctx` = Der Pinsel
- `this.img` = Das zu zeichnende Bild
- `this.x, this.y` = Position
- `this.width, this.height` = Größe

### drawFrame() (Zeilen 23-48)

```javascript
drawFrame(ctx) {
  if (this instanceof Character || ...) {
    // Zeichne blauen Rahmen (Gesamtbild)
    ctx.rect(this.x, this.y, this.width, this.height);

    // Zeichne roten Rahmen (Kollisionsbox)
    ctx.rect(this.x + this.offset.left, ...);
  }
}
```

**Was macht das?**
Zeichnet Debug-Rahmen, damit du die Kollisionsbereiche sehen kannst.

**Visualisierung:**
```
┌─────────────────┐ ← Blauer Rahmen (Gesamtbild)
│  ┌─────────┐    │
│  │ ROTER   │    │ ← Roter Rahmen (echte Kollision)
│  │ RAHMEN  │    │
│  └─────────┘    │
└─────────────────┘
```

---

## 4. MovableObject - Bewegliche Objekte

**Erbt von:** DrawableObject
**Aufgabe:** Objekte, die sich bewegen können + Kollision + Schwerkraft

### Wichtige Eigenschaften

```javascript
speed = 0.15;        // Geschwindigkeit
otherDirection = false;  // Blickrichtung (gespiegelt?)
speedY = 0;          // Vertikale Geschwindigkeit
acceleration = 1;    // Beschleunigung (Schwerkraft)
offset = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
energy = 100;        // Lebensenergie
lastHit = 0;         // Zeitpunkt des letzten Treffers
```

### applyGravity() (Zeilen 15-22)

```javascript
applyGravity() {
  setInterval(() => {
    if (this.isAboveGround() || this.speedY > 0) {
      this.y -= this.speedY;
      this.speedY -= this.acceleration;
    }
  }, 1000 / 60);  // 60 FPS
}
```

**Was macht das?**
Simuliert Schwerkraft (wie im echten Leben).

**Schritt-für-Schritt:**
1. Prüfe: Ist das Objekt in der Luft?
2. Falls ja: Bewege es nach unten (`this.y -= this.speedY`)
3. Verringere die Geschwindigkeit (`speedY -= acceleration`)

**Beispiel:**
```
Sprung: speedY = 22 (schnell nach oben)
Frame 1: y -= 22  → speedY = 21
Frame 2: y -= 21  → speedY = 20
...
Frame 22: y -= 1  → speedY = 0  (Höchster Punkt)
Frame 23: y -= -1 → speedY = -1 (fällt runter)
...
```

### isColliding() (Zeilen 32-39)

```javascript
isColliding(mo) {
  return (
    this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
    this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
    this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
    this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
  );
}
```

**Was macht das?**
Prüft, ob zwei Objekte sich überschneiden (Kollision).

**Einfache Visualisierung:**
```
Objekt A       Objekt B
┌─────┐        ┌─────┐
│  A  │────────│  B  │  → Überlappung = Kollision!
└─────┘        └─────┘
```

**Die Formel prüft:**
1. Ist die rechte Kante von A weiter rechts als die linke Kante von B?
2. Ist die untere Kante von A tiefer als die obere Kante von B?
3. Usw. für alle 4 Seiten

### hit() (Zeilen 41-48)

```javascript
hit() {
  this.energy -= 5;
  if (this.energy <= 0) {
    this.energy = 0;
  } else {
    this.lastHit = new Date().getTime();
  }
}
```

**Was macht das?**
Wird aufgerufen, wenn das Objekt getroffen wird.

1. Ziehe 5 Energie ab
2. Speichere den Zeitpunkt (für `isHurt()`)

### playAnimation() (Zeilen 60-65)

```javascript
playAnimation(images) {
  let i = this.currentImage % images.length;
  let path = images[i];
  this.img = this.imageCache[path];
  this.currentImage++;
}
```

**Was macht das?**
Spielt eine Animation ab (Daumenkino-Effekt).

**Beispiel:**
```javascript
images = ["walk1.png", "walk2.png", "walk3.png"];

Frame 1: currentImage = 0 → Zeige walk1.png
Frame 2: currentImage = 1 → Zeige walk2.png
Frame 3: currentImage = 2 → Zeige walk3.png
Frame 4: currentImage = 3 % 3 = 0 → Zeige walk1.png (wieder von vorne)
```

**Modulo (%):**
`currentImage % images.length` sorgt dafür, dass es von vorne anfängt.

---

## 5. Character - Der Spieler

**Erbt von:** MovableObject

### Constructor (Zeilen 59-71)

```javascript
constructor() {
  super().loadImage("...");  // Lade Startbild
  this.loadImages(this.IMAGES_WALKING);  // Lade alle Animationen
  this.applyGravity();  // Starte Schwerkraft
  this.animate();       // Starte Animation
  this.soundSettings(); // Sound-Einstellungen
}
```

### animate() - Die Haupt-Schleife (Zeilen 73-119)

#### Intervall 1: Bewegung (60 FPS)

```javascript
setInterval(() => {
  if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
    this.moveRight();
    this.otherDirection = false;
  }
  ...
  this.world.camera_x = -this.x + 100;  // Kamera folgt dem Spieler
}, 1000 / 60);
```

**Was macht das?**
1. Prüfe Tasteneingaben
2. Bewege den Charakter
3. Bewege die Kamera mit

#### Intervall 2: Animation (50ms)

```javascript
setInterval(() => {
  if (this.isDead()) {
    this.playAnimation(this.IMAGES_DEAD);
  } else if (this.isHurt()) {
    this.playAnimation(this.IMAGES_HURT);
  } else if (this.isAboveGround()) {
    this.playAnimation(this.IMAGES_JUMPING);
  } ...
}, 50);
```

**Was macht das?**
Entscheidet, welche Animation gezeigt wird (Prioritätsliste).

**Priorität:**
1. Tot? → Todes-Animation
2. Verletzt? → Schmerz-Animation
3. In der Luft? → Sprung-Animation
4. F-Taste? → Zauber-Animation
5. Sonst: Lauf- oder Idle-Animation

---

## 6. World - Die Spielwelt

**Aufgabe:** Verbindet alles miteinander

### Constructor (Zeilen 16-23)

```javascript
constructor(canvas, keyboard) {
  this.ctx = canvas.getContext("2d");
  this.canvas = canvas;
  this.keyboard = keyboard;
  this.draw();      // Starte Zeichnen
  this.setWorld();  // Verbinde Charakter mit Welt
  this.run();       // Starte Kollisionsprüfung
}
```

### run() (Zeilen 29-34)

```javascript
run() {
  setInterval(() => {
    this.checkCollisions();
    this.checkCastingObjects();
  }, 200);
}
```

**Was macht das?**
Prüft alle 200ms:
1. Gibt es Kollisionen?
2. Wurde ein Zauber geworfen?

### checkCollisions() (Zeilen 49-87)

#### 1. Kollision mit Gegnern (Zeilen 50-56)

```javascript
this.level.enemies.forEach((enemy) => {
  if (this.character.isColliding(enemy)) {
    this.character.hit();
    this.statusBarHealth.setPercentage(this.character.energy);
  }
});
```

**Was passiert?**
- Für jeden Gegner: Prüfe Kollision
- Falls ja: Charakter verliert Energie
- Aktualisiere Lebensanzeige

#### 2. Kollision mit Mana (Zeilen 58-66)

```javascript
this.level.mana.forEach((mana, index) => {
  if (this.character.isColliding(mana) && this.statusBarMana.percentage < 100) {
    this.collectMana(index);
  }
});
```

#### 3. Zauber trifft Gegner (Zeilen 68-75)

```javascript
this.castingSpell.forEach((spell, spellIndex) => {
  this.level.enemies.forEach((enemy, enemyIndex) => {
    if (spell.isColliding(enemy)) {
      enemy.die(this.level.enemies, enemyIndex);
    }
  });
});
```

#### 4. Zauber trifft Boss (Zeilen 77-86)

```javascript
this.castingSpell.forEach((spell, spellIndex) => {
  this.level.boss.forEach((boss) => {
    if (spell.isColliding(boss)) {
      this.endboss.getHit(20);  // Boss nimmt 20 Schaden
      this.statusBarBoss.setPercentage(this.endboss.percentage);
      this.castingSpell.splice(spellIndex, 1);  // Entferne Zauber
    }
  });
});
```

### draw() - Die Render-Schleife (Zeilen 98-127)

```javascript
draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Lösche Canvas

  this.ctx.translate(this.camera_x, 0);  // Bewege Kamera
  this.addObjectsToMap(this.level.backgroundObject);  // Zeichne Hintergrund

  this.ctx.translate(-this.camera_x, 0);  // Zurück
  // Zeichne fixe UI-Elemente (Statusbars)
  this.addToMap(this.statusBarHealth);

  this.ctx.translate(this.camera_x, 0);  // Wieder Kamera
  this.addToMap(this.character);  // Zeichne Charakter
  this.addObjectsToMap(this.level.enemies);  // Zeichne Gegner

  this.ctx.translate(-this.camera_x, 0);  // Zurück

  requestAnimationFrame(() => this.draw());  // Wiederhole
}
```

**Was macht das?**
1. Lösche das Canvas (leeres Blatt)
2. Zeichne alles neu (60x pro Sekunde)
3. Wiederhole endlos (Game Loop)

**translate():**
Verschiebt das gesamte Koordinatensystem (für Kamera-Bewegung).

**Visualisierung:**
```
Ohne translate:     Mit translate(-100, 0):
┌─────────┐        ┌─────────┐
│ 🧙      │        │      🧙 │  (Charakter bewegt sich scheinbar)
└─────────┘        └─────────┘
```

---

## 7. level1.js - Level-Definition

```javascript
const level1 = new Level(
  [new Goblin(), new Goblin(), new Goblin()],  // 3 Goblins
  [new Endboss()],                             // 1 Boss
  [new Mana(), new Mana(), ...],               // 11 Mana-Items
  [new Cloud(-719), new Cloud(0), ...],        // 5 Wolken
  [new BackgroundObject(...), ...]             // Hintergrund-Bilder
);
```

**Was macht das?**
Definiert, was im Level vorkommt.

---

## 8. CastingSpell - Der Zauber

### Constructor (Zeilen 15-28)

```javascript
constructor(x, y, direction) {
  super();
  this.loadImage("fire1.png");
  this.x = x + 100;  // Starte vor dem Charakter
  this.castPoint = this.x;  // Merke Startpunkt
  this.y = y + 50;
  this.otherDirection = direction;  // Richtung vom Charakter
  this.cast();
}
```

### cast() (Zeilen 30-52)

```javascript
cast() {
  if (this.otherDirection) {  // Nach links
    setInterval(() => {
      this.playAnimation(this.IMAGES_SPELL_FIRE);
      if (this.x > this.castPoint - 300) {  // Maximal 300px weit
        this.x -= 50;  // Bewege nach links
      }
    }, 60);
  } else {  // Nach rechts
    setInterval(() => {
      this.playAnimation(this.IMAGES_SPELL_FIRE);
      if (this.x < this.castPoint + 300) {
        this.x += 40;  // Bewege nach rechts
      }
    }, 60);
  }
}
```

**Was macht das?**
1. Bewegt den Zauber in Blickrichtung
2. Stoppt nach 300 Pixeln
3. Animiert den Feuerball

---

## 9. Endboss - Der Endboss

**Erbt von:** MovableObject

### Eigenschaften (Zeilen 2-6)

```javascript
height = 600;
width = 600;
y = -15;
health = 100;      // Lebenspunkte des Bosses (startet bei 100)
percentage = 100;  // Prozentsatz für die Lebensanzeige (100%)
```

### Bild-Arrays (Zeilen 8-33)

```javascript
IMAGES_WALKING = [...]    // 5 Bilder für die "Wut-Animation"
IMAGES_HURT = [...]       // 2 Bilder für die "Getroffen"-Animation
IMAGES_DEAD_BOSS = [...]  // 5 Bilder für die "Sterbe"-Animation
IMAGES_BOSS_IDLE = [...]  // 3 Bilder für die "Leerlauf"-Animation
```

### Intervall-Variablen (Zeilen 35-37)

```javascript
walkingInterval;
hurtInterval;
dieInterval;
```

**Was sind Intervalle?**
Wie Wecker, die regelmäßig klingeln. Sie führen Code wiederholt aus (z.B. alle 200ms ein neues Bild zeigen).

**Zweck dieser Variablen:**
Sie speichern die "Wecker-IDs", damit du sie später stoppen kannst (mit `clearInterval`).

### Offset-Objekt (Zeilen 41-46)

```javascript
offset = {
  top: 170,
  left: 215,
  right: 215,
  bottom: 140,
};
```

**Was ist das?**
Ein "unsichtbarer Rand" für die Kollisionserkennung.

**Warum braucht man das?**
Stell dir vor, das Boss-Bild ist 600x600 Pixel groß, aber der Boss selbst nimmt nur einen Teil davon ein (der Rest ist transparenter Hintergrund). Der Offset definiert, wo der "echte" Boss anfängt.

**Visualisierung:**
```
┌─────────────────────┐ ← Gesamtes Bild (600x600)
│  ← 215px            │
│  ┌─────────────┐    │ ← 170px
│  │             │    │
│  │   Boss      │    │ ← Eigentlicher Boss
│  │             │    │
│  └─────────────┘    │ ← 140px
│            215px →  │
└─────────────────────┘
```

### Constructor (Zeilen 48-58)

```javascript
constructor() {
  super().loadImage("...");
  this.loadImages(this.IMAGES_WALKING);
  this.loadImages(this.IMAGES_HURT);
  this.loadImages(this.IMAGES_DEAD_BOSS);
  this.loadImages(this.IMAGES_BOSS_IDLE);
  this.x = 2350;
  this.animate();
}
```

**Was ist ein Constructor?**
Eine spezielle Funktion, die **AUTOMATISCH** aufgerufen wird, wenn du einen neuen Boss erstellst:

```javascript
let boss = new Endboss(); // ← Constructor wird jetzt ausgeführt
```

**Was passiert hier?**

1. **Zeile 49-50:** `super().loadImage(...)`
   - Ruft die Funktion der Elternklasse (MovableObject) auf
   - Lädt das erste Bild (Startbild)

2. **Zeilen 52-55:** `this.loadImages(...)`
   - Lädt ALLE Bilder für die Animationen in den Speicher
   - Wie Bilder vorladen, damit sie später sofort verfügbar sind

3. **Zeile 56:** `this.x = 2350;`
   - Setzt die horizontale Position des Bosses (ganz rechts im Level)

4. **Zeile 57:** `this.animate();`
   - Startet die Animation

### getHit-Funktion (Zeilen 60-75)

```javascript
getHit(damage) {
  const actualDamage = Math.min(damage, 20);
  this.health -= actualDamage;
  this.percentage = this.health;
  clearInterval(this.walkingInterval);
  this.playAnimation(this.IMAGES_HURT);
  if (this.health <= 0) {
    this.health = 0;
    this.percentage = 0;
    this.bossDie();
  } else {
    setTimeout(() => {
      this.animate();
    }, 500);
  }
}
```

**Was macht diese Funktion?**
Sie wird aufgerufen, wenn der Boss getroffen wird.

**Schritt-für-Schritt:**

**Zeile 61:** `const actualDamage = Math.min(damage, 20);`
- `Math.min` wählt die kleinere Zahl
- Beispiel: Wenn `damage = 50`, wird `actualDamage = 20` (maximal 20 Schaden pro Treffer)
- Beispiel: Wenn `damage = 10`, wird `actualDamage = 10`

**Zeile 62:** `this.health -= actualDamage;`
- Zieht den Schaden von der Gesundheit ab
- `health = health - actualDamage`
- Beispiel: 100 - 20 = 80 Lebenspunkte übrig

**Zeile 63:** `this.percentage = this.health;`
- Aktualisiert die Prozentanzeige für die Lebensanzeige

**Zeile 64:** `clearInterval(this.walkingInterval);`
- Stoppt die laufende Animation (den "Wecker")

**Zeile 65:** `this.playAnimation(this.IMAGES_HURT);`
- Zeigt die "Getroffen"-Animation (Hurt1.png, Hurt2.png)

**Zeilen 66-70:** Ist der Boss tot?
```javascript
if (this.health <= 0) {
  this.health = 0;
  this.percentage = 0;
  this.bossDie();
}
```
- Wenn Gesundheit ≤ 0 → Boss ist tot
- Ruft `bossDie()` auf

**Zeilen 71-74:** Boss lebt noch
```javascript
setTimeout(() => {
  this.animate();
}, 500);
```
- `setTimeout` = Warte 500ms (0,5 Sekunden)
- Dann starte die normale Animation wieder

### animate-Funktion (Zeilen 77-83)

```javascript
animate() {
  setInterval(() => {
    if (this.getHit == true) {
      this.playAnimation(this.IMAGES_HURT);
    } else this.playAnimation(this.IMAGES_BOSS_IDLE);
  }, 200);
}
```

**Was macht diese Funktion?**
Sie erstellt eine Animation, die sich alle 200ms wiederholt.

**Wie funktioniert setInterval?**
```javascript
setInterval(() => {
  // Dieser Code läuft alle 200ms
}, 200);
```

**⚠️ PROBLEM in Zeile 79:**
```javascript
if (this.getHit == true) {
```
- `getHit` ist eine **FUNKTION**, kein Boolean
- Diese Bedingung funktioniert nicht korrekt
- Sollte ein Flag wie `isHurt` sein

**Was soll passieren:**
- Wenn Boss getroffen wurde → Zeige Hurt-Animation
- Sonst → Zeige Idle-Animation (Boss steht herum)

### bossDie-Funktion (Zeilen 85-88)

```javascript
bossDie() {
  console.log("Boss is dead");
}
```

**Was macht diese Funktion?**
Wird aufgerufen, wenn der Boss stirbt.

**Aktueller Stand:**
Gibt nur eine Nachricht in der Konsole aus.

**Was sollte hier stehen:**
- Sterbe-Animation abspielen
- Spiel beenden
- Victory-Screen zeigen
- Etc.

---

# 🎯 WIE ALLES ZUSAMMENSPIELT

## 1. Spielstart

```
Browser lädt index.html
  ↓
Alle Scripts werden geladen (in Reihenfolge!)
  ↓
<body onload="init()">
  ↓
init() in game.js wird aufgerufen
  ↓
new World() wird erstellt
  ↓
world.draw() startet (Game Loop)
world.run() startet (Kollisionsprüfung)
```

## 2. Game Loop (60 FPS)

```
1. draw() → Lösche Canvas
2. draw() → Zeichne alles neu
3. requestAnimationFrame() → Wiederhole in 16ms
```

## 3. Spieler bewegt sich

```
Spieler drückt Pfeil rechts
  ↓
keydown-Event → keyboard.RIGHT = true
  ↓
Character.animate() prüft keyboard.RIGHT
  ↓
moveRight() → this.x += this.speed
  ↓
world.camera_x = -this.x + 100 (Kamera folgt)
  ↓
draw() zeichnet Charakter an neuer Position
```

## 4. Spieler wirft Zauber

```
Spieler drückt F
  ↓
keyboard.F = true
  ↓
world.checkCastingObjects()
  ↓
new CastingSpell(x, y, direction)
  ↓
castingSpell.push(spell) → Zur Liste hinzufügen
  ↓
spell.cast() → Zauber fliegt
  ↓
draw() zeichnet Zauber
  ↓
checkCollisions() prüft: Trifft Zauber Boss?
  ↓
Falls ja: boss.getHit(20)
```

## 5. Kollision mit Gegner

```
checkCollisions() läuft alle 200ms
  ↓
Prüfe: character.isColliding(enemy)?
  ↓
Falls ja:
  ↓
character.hit() → energy -= 5
  ↓
statusBarHealth.setPercentage(energy)
  ↓
Lebensanzeige wird rot
```

---

# 🔧 WICHTIGE KONZEPTE

## setInterval vs requestAnimationFrame

### setInterval:
```javascript
setInterval(() => {
  // Code läuft GENAU alle 200ms
}, 200);
```
**Gut für:** Logik (Kollisionsprüfung, AI)

### requestAnimationFrame:
```javascript
requestAnimationFrame(() => {
  // Code läuft ~60x pro Sekunde (optimiert)
  draw();
});
```
**Gut für:** Zeichnen (Game Loop)

---

## Vererbung (extends)

```javascript
class Character extends MovableObject {
  // Character hat ALLE Methoden von MovableObject
  // + eigene Methoden
}
```

**Warum?**
Vermeidet Code-Duplikate. Statt in jeder Klasse `moveRight()` zu schreiben, schreibst du es einmal in MovableObject.

---

## Modulo-Operator (%)

Der Modulo-Operator gibt den **Rest** einer Division zurück.

**Beispiele:**
```javascript
5 % 3 = 2   // 5 geteilt durch 3 = 1 Rest 2
10 % 3 = 1  // 10 geteilt durch 3 = 3 Rest 1
6 % 3 = 0   // 6 geteilt durch 3 = 2 Rest 0
```

**Wird verwendet für:**
- Endlos-Schleifen durch Arrays (`currentImage % images.length`)
- Damit die Animation immer von vorne anfängt

---

## Canvas translate()

`translate()` verschiebt das gesamte Koordinatensystem.

**Ohne translate:**
```javascript
ctx.drawImage(img, 100, 50);  // Zeichne bei X=100, Y=50
```

**Mit translate:**
```javascript
ctx.translate(50, 0);
ctx.drawImage(img, 100, 50);  // Wird bei X=150, Y=50 gezeichnet!
```

**Warum?**
Für Kamera-Bewegung. Statt jedes Objekt einzeln zu verschieben, verschiebst du das gesamte Koordinatensystem.

---

## Arrow Functions ( => )

**Alte Schreibweise:**
```javascript
function hello() {
  console.log("Hello");
}
```

**Neue Schreibweise (Arrow Function):**
```javascript
const hello = () => {
  console.log("Hello");
}
```

**Vorteile:**
- Kürzer
- Behält den this-Kontext bei

---

## forEach-Schleife

**Alte Schreibweise:**
```javascript
for (let i = 0; i < enemies.length; i++) {
  console.log(enemies[i]);
}
```

**Neue Schreibweise:**
```javascript
enemies.forEach((enemy) => {
  console.log(enemy);
});
```

**Mit Index:**
```javascript
enemies.forEach((enemy, index) => {
  console.log(index, enemy);
});
```

---

# 🐛 BEKANNTE PROBLEME IM CODE

## 1. Memory Leaks

**Problem:** Viele `setInterval` ohne `clearInterval`
**Ort:** endboss.class.js:72, casting-spell.class.js:34

**Was passiert?**
Jedes Mal wenn `getHit()` aufgerufen wird, wird ein neues Intervall erstellt, aber das alte nie gestoppt. Nach 10 Treffern laufen 10 Animationen gleichzeitig!

**Lösung:**
Intervall-ID speichern und mit `clearInterval()` stoppen.

---

## 2. Falsche Bedingung

**Problem:** `if (this.getHit == true)`
**Ort:** endboss.class.js:79

**Was passiert?**
`getHit` ist eine **FUNKTION**, kein Boolean. Die Bedingung funktioniert nicht.

**Lösung:**
Ein `isHurt`-Flag verwenden (wie im Character).

---

## 3. Fehlende Interval-Speicherung

**Problem:** `this.walkingInterval` wird nicht gespeichert
**Ort:** endboss.class.js:78

**Was passiert?**
Zeile 64 versucht `this.walkingInterval` zu stoppen, aber das Intervall wurde nie in dieser Variable gespeichert.

**Lösung:**
```javascript
this.walkingInterval = setInterval(...)
```

---

## 4. Fehlende Zauber-Entfernung

**Problem:** Zauber verschwinden nicht nach maximaler Reichweite

**Was passiert?**
Die Zauber bleiben im `castingSpell`-Array, auch wenn sie gestoppt sind. Das Array wird immer größer → Performance-Probleme.

**Lösung:**
Zauber nach 300px aus dem Array entfernen mit `splice()`.

---

# 🎮 SPIELSTEUERUNG

## Tastatur-Belegung:

| Taste | Funktion |
|-------|----------|
| **Pfeiltaste RECHTS** | Charakter bewegt sich nach rechts |
| **Pfeiltaste LINKS** | Charakter bewegt sich nach links |
| **Pfeiltaste OBEN** | Charakter springt |
| **LEERTASTE** | Charakter springt |
| **F-Taste** | Zauber werfen (kostet Mana) |

## Spielmechanik:

- ✨ Sammle Mana-Items ein (blaue Kristalle)
- 🔥 Werfe Zauber auf Goblins und den Endboss
- ⚔️ Vermeide Kollisionen mit Goblins (verlierst Lebensenergie)
- 👹 Besiege den Endboss am Ende des Levels

## Status-Anzeigen:

- ❤️ Lebensanzeige (oben links, rot)
- 💙 Mana-Anzeige (oben links, blau)
- 👑 Boss-Lebensanzeige (erscheint beim Boss-Kampf)

---

# 🔍 NÜTZLICHE DEBUGGING-TIPPS

## 1. Kollisionsboxen anzeigen

Die **blauen** und **roten** Rahmen um Objekte zeigen die Kollisionsbereiche.
Aktiviert in: `drawable-object.class.js` (drawFrame)

## 2. Console-Logs

Im Code sind mehrere `console.log()`-Befehle eingebaut:
- "Colliding with Enemy" → Wenn Spieler Gegner trifft
- "Colliding with Mana" → Wenn Spieler Mana sammelt
- "Zauber Getroffen" → Wenn Zauber trifft
- "Boss is dead" → Wenn Boss stirbt

## 3. Browser DevTools

**F12** → Developer Tools öffnen
- **Console:** Siehe Fehler und console.log()-Ausgaben
- **Sources:** Setze Breakpoints im Code
- **Performance:** Prüfe FPS und Performance

## 4. Häufige Fehler

### "Cannot read property 'x' of undefined"
→ Ein Objekt existiert nicht (z.B. world.character)

### "Maximum call stack size exceeded"
→ Endlos-Rekursion (Funktion ruft sich selbst auf)

### Spiel läuft langsam
→ Zu viele setInterval ohne clearInterval (Memory Leak)

---

# 💡 WEITERFÜHRENDE IDEEN

## Verbesserungen, die du hinzufügen könntest:

1. 🔊 Sound-Effekte beim Treffer
2. 💀 Boss-Sterbe-Animation implementieren
3. 🏆 Victory-Screen nach Boss-Sieg
4. ☠️ Game-Over-Screen bei Tod
5. 🗺️ Mehrere Levels
6. ⚡ Verschiedene Zauber-Arten
7. 💪 Power-Ups (Stärke, Geschwindigkeit)
8. 💾 Speichern/Laden des Spielstands
9. 🏅 Highscore-System
10. 📱 Mobile-Touch-Steuerung

---

# 📝 ZUSAMMENFASSUNG

Das Projekt ist ein klassisches **2D Jump & Run Spiel**, aufgebaut mit:

## Kern-Technologien:
- HTML5 Canvas für Grafik
- JavaScript für Logik
- Objektorientierte Programmierung (Klassen, Vererbung)

## Hauptkomponenten:
- **DrawableObject:** Basis für alle sichtbaren Objekte
- **MovableObject:** Basis für bewegliche Objekte
- **Character:** Der Spieler
- **World:** Verwaltet alles
- **Level:** Definiert Level-Inhalt

## Game Loop:
- 60 FPS für Zeichnen (`requestAnimationFrame`)
- Verschiedene Intervalle für Logik (`setInterval`)

Das Spiel ist funktional, hat aber einige Bugs, die behoben werden sollten (siehe "Bekannte Probleme im Code").

---

**Ende der Projekt-Erklärung**
