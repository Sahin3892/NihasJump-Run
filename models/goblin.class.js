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
    goblin_sound_death = new Audio('src/audio/Goblin2.mp3');
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
        setInterval(() => {
            // this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);
        setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
                if (this.currentImage === 4) {
                    // Hier ist alles zu Ende
                    // Alle Animationen anhalten
                    // Goblin löschen
                }
            } else {
                this.playAnimation(this.IMAGES_WALKING);
                //  this.goblinScream();
            }
        }, 300);
    }

    die(enemies, enemyIndex) {
        if (!this.isDead) {
            this.currentImage = 0;
            this.isDead = true;
            setTimeout(() => {
                // Gegner löschen
                enemies.splice(enemyIndex, 1);
            }, 500);
        }
    }

    goblinScream() {
        this.goblin_sound.play();
        this.goblin_sound.volume = 0.05;
    }
}