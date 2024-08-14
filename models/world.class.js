class World {
    character = new Character();
    enemies = [new Goblin(), new Goblin(), new Goblin()];
    clouds = [new Cloud()];
    backgroundObjects =
        [
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/sky.png'),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds1.png'),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds2.png'),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png'),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks.png'),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks2.png'),
            new BackgroundObject('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/rocks3.png')
    ];
   // roadObjects =
   //     [
   //     new Road('src/img/mountain-platformer-pixel-art-tileset/PNG/Tiles_ground/ground_tile07.png'),
   //     new Road('src/img/mountain-platformer-pixel-art-tileset/PNG/Tiles_ground/ground_tile07.png'),
   //     new Road('src/img/mountain-platformer-pixel-art-tileset/PNG/Tiles_ground/ground_tile07.png')
   // ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
// Einen Weg einfügen        this.addObjectsToMap(this.roadObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);


        // Junus/DA Fragen
        // requestAnimationFrame(this.draw.bind(this));
        let self = this
        requestAnimationFrame(function () {
            self.draw();
        });


    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }


}