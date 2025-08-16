class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 19;
  statusBarBoarder = new StatusbarBoarder();
  statusBarHealth = new Statusbarhealth();
  statusBarIcon = new StatusbarIcon();
  statusBarMana = new StatusbarMana();
  statusBarBoss = new StatusbarhealthBoss();
  castingSpell = [];
  endboss = new Endboss();

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkCastingObjects();
    }, 200);
  }

  checkCastingObjects() {
    if (this.keyboard.F && this.statusBarMana.percentage > 0) {
      let spell = new CastingSpell(
        this.character.x,
        this.character.y,
        this.character.otherDirection
      );
      this.castingSpell.push(spell);
      this.statusBarMana.percentage -= 10; // Reduziert den Anteil um 10
      this.statusBarMana.setPercentage(this.statusBarMana.percentage); // Aktualisiert den Prozentwert
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        console.log("Colliding with Enemy", enemy);
        this.character.hit();
        this.statusBarHealth.setPercentage(this.character.energy);
      }
    });

    this.level.mana.forEach((mana, index) => {
      if (
        this.character.isColliding(mana) &&
        this.statusBarMana.percentage < 100
      ) {
        console.log("Colliding with Mana", mana);
        this.collectMana(index);
      }
    });

    this.castingSpell.forEach((spell, spellIndex) => {
      this.level.enemies.forEach((enemy, enemyIndex) => {
        if (spell.isColliding(enemy)) {
          console.log("Zauber Getroffen", enemy);
          enemy.die(this.level.enemies, enemyIndex);
        }
      });
    });

    this.castingSpell.forEach((spell, spellIndex) => {
      this.level.boss.forEach((boss) => {
        if (spell.isColliding(boss)) {
          console.log("Zauber Getroffen", boss);
          this.endboss.getHit(20);
          this.statusBarBoss.setPercentage(this.endboss.percentage);
          this.castingSpell.splice(spellIndex, 1);
        }
      });
    });
  }

  collectMana(index) {
    this.level.mana.splice(index, 1);
    this.statusBarMana.percentage = Math.min(
      this.statusBarMana.percentage + 20,
      100
    );
    this.statusBarMana.setPercentage(this.statusBarMana.percentage);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);

    this.ctx.translate(-this.camera_x, 0);
    // ------ Space for fixed Objects ------
    this.addToMap(this.statusBarBoarder);
    this.addToMap(this.statusBarIcon);
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarMana);

    this.ctx.translate(this.camera_x, 0); // Forward

    this.addToMap(this.character);
    this.addToMap(this.statusBarBoss);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.boss);
    this.addObjectsToMap(this.level.mana);
    this.addObjectsToMap(this.castingSpell);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
