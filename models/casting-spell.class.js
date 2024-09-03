class CastingSpell extends MovableObject {

    constructor(x, y) {
        super().loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire1.png');
        this.x = x;
        this.y = y;
        this.height = 32;
        this.width = 32;
        this.cast();
    }


    cast() {
        this.speedY = 5;
        this.applyGravity();
        setInterval(()=>{
            this.x += 100;
        }, 60);
    }
}