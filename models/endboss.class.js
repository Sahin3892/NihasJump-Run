class Endboss extends MovableObject {
    height = 600;
    width = 600;
    y = -15;
    world;

    IMAGES_WALKING = [
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger1.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger2.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger3.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger4.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger5.png'
    ];

    IMAGES_HURT = [
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Hurt1.png'
    ];

    offset = {
        top: 170,
        left: 215,
        right: 215,
        bottom: 140
    };


    constructor() {
        super().loadImage('src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);

        this.health = 100; // Prozentuale Lebenspunkte
        this.statusbar = new StatusbarhealthBoss(); // Statusbar initialisieren

        this.x = 2350;
        this.animate();
    }


    getHit() {
        this.playAnimation(this.IMAGES_HURT);
    }

    bossDie(){

    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }


}