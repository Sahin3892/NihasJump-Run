class CastingSpell extends MovableObject {

    IMAGES_SPELL_FIRE = [
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire1.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire2.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire3.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire4.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire5.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire6.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire7.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire8.png',
        'src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire9.png'
    ];
    castPoint;

    constructor(x, y, direction) {
        super()
        this.loadImage('src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Fire/fire1.png');
        this.loadImages(this.IMAGES_SPELL_FIRE);
        this.x = x + 100;
        this.castPoint = this.x;
        this.y = y + 50;
        this.height = 32;
        this.width = 32;
        this.otherDirection = direction;
        this.cast();
    }


    cast() {
        this.speedY = 10;
 this.applyGravity();
        if (this.otherDirection) {
            setInterval(() => {
                this.playAnimation(this.IMAGES_SPELL_FIRE);
                if (this.x > (this.castPoint - 300)) {
                    this.x -= 40;
                } else {
                    this.x += 0;
                }
            }, 60);
        } else {
            setInterval(() => {
                this.playAnimation(this.IMAGES_SPELL_FIRE);
                if (this.x < (this.castPoint + 300)) {
                    this.x += 40;
                } else {
                    this.x += 0;
                }
            }, 60);
        }
    }

}