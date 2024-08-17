class World {
    character = new Character();
    enemies = [new Goblin(), new Goblin(), new Goblin()];
    clouds = [new Cloud()];
    backgroundObjects =
        [
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/sky.png', -719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds1.png', -719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds2.png', -719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png', -719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks.png', -719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks2.png', -719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks3.png', -719),

            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/sky.png', 0),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds1.png', 0),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds2.png', 0),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png', 0),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks.png', 0),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks2.png', 0),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks3.png', 0),

            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/sky.png', 719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds1.png', 719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds2.png', 719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png', 719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks.png', 719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks2.png', 719),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks3.png', 719),

            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/sky.png', 719*2),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds1.png', 719*2),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds2.png', 719*2),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png', 719*2),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks.png', 719*2),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks2.png', 719*2),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks3.png', 719*2),

            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/sky.png', 719*3),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds1.png', 719*3),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds2.png', 719*3),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png', 719*3),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks.png', 719*3),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks2.png', 719*3),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks3.png', 719*3)
        ];

    canvas;
    ctx;
    keyboard;
    camera_x = 19;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }


}