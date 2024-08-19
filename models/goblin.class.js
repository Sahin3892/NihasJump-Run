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
    goblin_sound = new Audio('src/audio/orcgaunt1.mp3');


    constructor() {
        super().loadImage('src/img/pixel-art-monster-enemy-game-sprites/PNG/goblin/0goblin.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 300 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 300);
        setInterval(() => {
            this.goblin_sound.play();
            this.goblin_sound.volume = 0.1;
        },2000);

    }
}