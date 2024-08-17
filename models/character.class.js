class Character extends MovableObject {
    y = 300
    height = 150;
    width = 150;
    speed = 3.5;
    IMAGES_WALKING = [
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk1.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk2.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk3.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk4.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk5.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk6.png'
    ];
    world;

    constructor() {
        super().loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else {
                this.loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png');
            }
        }, 50);
    }


    jump() {

    }

}