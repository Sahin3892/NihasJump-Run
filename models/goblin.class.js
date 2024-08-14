class Goblin  extends MovableObject {
    height = 200;
    width = 200;
    y= 290;
    img;

    constructor() {
        super().loadImage('src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/0goblin.png');
        this.x = 300 + Math.random() * 500;
    }

}