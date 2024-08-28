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
    offset = {
        top: 150, // Y
        left: 275, // X
        right: 360, // width
        bottom: 295 // height
    };

    constructor() {
        super().loadImage('src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2350;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}