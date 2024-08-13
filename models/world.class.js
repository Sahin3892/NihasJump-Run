class World {
    ctx;
    character = new Character();
    enemies = [new Goblin(), new Goblin(), new Goblin()];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, 150, 150);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, 150, 150);
        });


        // Junus/DA Fragen
        // requestAnimationFrame(this.draw.bind(this));

        let self = this
        requestAnimationFrame(function () {
            self.draw();
        });


    }
}