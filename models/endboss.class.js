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

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    takeDamage(amount) {
        this.health -= amount;

        // Berechnen und setzen des neuen Gesundheitsprozentsatzes
        const newHealthPercentage = Math.max(this.health, 0);
        this.statusbar.setPercentage(newHealthPercentage);

        this.playAnimation(this.IMAGES_HURT);
        setTimeout(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 500);

        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        console.log("Der Boss ist besiegt!");
    }
}