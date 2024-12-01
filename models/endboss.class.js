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
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Hurt2.png',
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
        this.x = 2350;
        this.health = 100; // Beispielwert für die Lebenspunkte
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        // Logik für das Sterben des Bosses, z.B. Animation oder Spielstatus ändern
        console.log("Der Boss ist besiegt!");
    }
}