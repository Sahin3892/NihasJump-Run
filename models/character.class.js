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
    IMAGES_JUMPING = [
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump1.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump2.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump3.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump4.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump5.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump6.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump7.png',
    ];
    IMAGES_DEAD = [
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death1.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death2.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death3.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death4.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death5.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death6.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death7.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death8.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death9.png'
    ];
    IMAGES_HURT = [
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt1.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt2.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt3.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt4.png'
    ];
    world;
    walking_sound = new Audio('src/audio/step.mp3');
    jumping_sound = new Audio('src/audio/jump.mp3');
    offset = {
        top: 60,
        left: 45,
        right: 45,
        bottom: 15
    };


    constructor() {
        super().loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
        this.soundSettings();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.soundSettings();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.soundSettings();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround() || this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if
            (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                } else {
                    this.loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png');
                }
            }
        }, 50);
    }

    soundSettings() {
        this.walking_sound.play();
        this.walking_sound.volume = 0.2;
    }

}