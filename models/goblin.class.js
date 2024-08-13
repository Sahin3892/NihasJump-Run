class Goblin  extends MovableObject {

    y= 330;
    img;

    constructor() {
        super().loadImage('src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/0goblin.png');
        this.x = 200 + Math.random() * 500;
    }

}