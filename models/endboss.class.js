class Endboss extends MovableObject {
    height = 600;
    width = 600;
    y = -15;
    health = 100; // Add a health property
    percentage = 100; // Add a percentage property

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

    getHit(damage) {
        const actualDamage = Math.min(damage, 20); // Ensure damage does not exceed 20
        this.health -= actualDamage; // Decrease health by actual damage
        this.percentage = this.health; // Update percentage for health bar
        this.playAnimation(this.IMAGES_HURT); // Play hurt animation
        if (this.health <= 0) {
            this.health = 0;
            this.percentage = 0;
            this.bossDie();
        }
    }

    bossDie() {
        // Implement boss death logic here
        console.log('Boss is dead');
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}