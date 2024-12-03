class Goblin extends MovableObject {
    height = 200;
    width = 200;
    y = 290;
    IMAGES_WALKING = [
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk2.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk3.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk4.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk5.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk6.png'
    ];
    IMAGES_DEAD = [
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/death1.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/death2.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/death3.png',
        'src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/death4.png'
    ];

    goblin_sound = new Audio('src/audio/orcgaunt1.mp3');
    goblin_sound_death = new Audio('src/audio/goblin-death.mp3');
    offset = {
        top: 65,
        left: 70,
        right: 70,
        bottom: 60
    };

    isDead = false;

    constructor() {
        super().loadImage('src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/0goblin.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.goblinScream();
    }

    animate() {
        this.movementInterval = setInterval(() => {
            if (!this.isDead) {
                this.otherDirection = false;
                // this.moveLeft();
            }
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            if (this.isDead && this.currentImage < this.IMAGES_DEAD.length - 1) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isDead && this.currentImage >= this.IMAGES_DEAD.length - 1) {
                this.clearAnimation();
            } else {
                this.playAnimation(this.IMAGES_WALKING);
                // this.goblinScream();
            }
        }, 300);
    }

    die(enemies) {
        if (!this.isDead) {
            this.currentImage = 0;
            this.isDead = true;
            this.goblin_sound_death.play();
            this.clearMovement();
            setTimeout(() => {
                // Filtere die lebenden Gegner heraus
                const filteredEnemies = enemies.filter(enemy => enemy !== this);
                // Setze das gefilterte Array zurück
                enemies.length = 0;
                enemies.push(...filteredEnemies);
            }, 300 * this.IMAGES_DEAD.length); // Zeit für die Abspielung der Todesanimation
        }
    }

    clearAnimation() {
        clearInterval(this.animationInterval);
    }

    clearMovement() {
        clearInterval(this.movementInterval);
    }

    goblinScream() {
        this.goblin_sound.play();
        this.goblin_sound.volume = 0.05;
    }
}