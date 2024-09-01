class Statusbarhealth extends DrawableObject {

    IMAGES_HEALTH = [
        'src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_corner1.png',
        'src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full.png',
        'src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_corner2.png',
        'src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_bar_border.png'
    ];
    percentage = 100;

    constructor() {
        super()
        this.loadImages(this.IMAGES_HEALTH);
        this.x = -20;
        this.y = 40;
        this.height = 12;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage === 100) {
            this.width = 200;
            return 3;
        } else if (this.percentage > 80) {
            this.width = 160;
            return 1;
        } else if (this.percentage > 60) {
            this.width = 120;
            return 1;
        } else if (this.percentage > 40) {
            this.width = 80;
            return 1;
        } else if (this.percentage > 20) {
            this.width = 40;
            return 1;
        } else {
            this.width = 200;
            return 3;
        }
    }

}