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

    IMAGES_DEAD_BOSS = [
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death0.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death1.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death2.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death3.png',
        'src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death4.png'
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
        clearInterval(this.walkingInterval); // Stop walking animation
        this.playAnimation(this.IMAGES_HURT); // Play hurt animation
        if (this.health <= 0) {
            this.health = 0;
            this.percentage = 0;
            this.bossDie();
        } else {
            setTimeout(() => {
                this.animate(); // Resume walking animation after hurt animation
            }, 500); // Adjust the timeout duration as needed
        }
    }

    animate() {
        this.walkingInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    bossDie() {
        clearInterval(this.walkingInterval); // Clear walking animation
        this.currentImage = 0; // Reset animation frame

        // Play death animation once
        const deathInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD_BOSS);
            
            // Stop the animation after playing through all frames once
            if (this.currentImage >= this.IMAGES_DEAD_BOSS.length) {
                clearInterval(deathInterval);
                this.loadImage(this.IMAGES_DEAD_BOSS[this.IMAGES_DEAD_BOSS.length - 1]); // Stay on last frame
                setTimeout(() => {
                    this.y = -5000; // Move the boss off screen
                }, 500); // Adjust the timeout duration as needed
            }
        }, 200);
    }
} // Endboss class end