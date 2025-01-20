class Endboss extends MovableObject {
    height = 600;
    width = 600;
    y = -15;

    IMAGES_WALKING = [
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger1.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger2.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger3.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger4.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger5.png'
    ];

    IMAGES_HURT = [
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Hurt1.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Hurt2.png'
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
        this.x = 2350;
        this.animate();
    }


    getHit() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_HURT);
        }, 1000 / 60);
    }

    bossDie() {

    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);

    }


}