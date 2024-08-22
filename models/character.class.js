class Character extends MovableObject {
    y = 100; //300 Standart
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
    walking_sound = new Audio('src/audio/step.mp3');



    constructor() {
        super().loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png');
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
                this.walking_sound.volume = 0.2;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
                this.walking_sound.volume = 0.2;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png');
            }
        }, 50);
    }


    jump() {

    }

}