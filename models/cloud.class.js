class Cloud extends MovableObject {
    y = 0;
    height = 480;
    width = 720;

    constructor(posX) {
        super().loadImage('src/img/mountain-platformer-pixel-art-tileset/PNG/Background/bright/clouds3.png')
        this.x = posX;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}