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
        this.x = 20;
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
            return 1;
        } else if (this.percentage >= 95) {
            this.width = 190;
            return 1;
        } else if (this.percentage >= 90) {
            this.width = 180;
            return 1;
        } else if (this.percentage >= 85) {
            this.width = 170;
            return 1;
        } else if (this.percentage >= 80) {
            this.width = 160;
            return 1;
        } else if (this.percentage >= 75) {
            this.width = 150;
            return 1;
        } else if (this.percentage >= 70) {
            this.width = 140;
            return 1;
        } else if (this.percentage >= 65) {
            this.width = 130;
            return 1;
        } else if (this.percentage >= 60) {
            this.width = 120;
            return 1;
        } else if (this.percentage >= 55) {
            this.width = 110;
            return 1;
        } else if (this.percentage >= 50) {
            this.width = 100;
            return 1;
        } else if (this.percentage >= 45) {
            this.width = 90;
            return 1;
        } else if (this.percentage >= 40) {
            this.width = 80;
            return 1;
        } else if (this.percentage >= 35) {
            this.width = 70;
            return 1;
        } else if (this.percentage >= 30) {
            this.width = 60;
            return 1;
        } else if (this.percentage >= 25) {
            this.width = 50;
            return 1;
        } else if (this.percentage >= 20) {
            this.width = 40;
            return 1;
        } else if (this.percentage >= 15) {
            this.width = 30;
            return 1;
        } else if (this.percentage >= 10) {
            this.width = 20;
            return 1;
        } else if (this.percentage >= 5) {
            this.width = 10;
            return 1;
        } else {
            this.width = 5
            return 1;
        }
    }

}