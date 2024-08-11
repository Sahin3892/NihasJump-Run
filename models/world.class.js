class World {
    character = new Character();
    enemies = [new Goblin(), new Goblin(), new Goblin()];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, 100, 100);
    }
}