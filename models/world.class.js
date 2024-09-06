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
    castingSpell = [];
    mana = new Mana();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
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
        if (this.keyboard.F) {
            let spell = new CastingSpell(this.character.x, this.character.y, this.character.otherDirection);
            this.castingSpell.push(spell);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('Colliding with Enemy', enemy);
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
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
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.mana);
        this.addObjectsToMap(this.castingSpell);

        this.ctx.translate(-this.camera_x, 0);

        let self = this
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
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