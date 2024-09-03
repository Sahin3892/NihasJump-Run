class Statusbarhealth extends DrawableObject {

    IMAGE_HEALTH = ['src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_new_edit.png'];
    percentage = 100;

    constructor() {
        super()
        this.loadImages(this.IMAGE_HEALTH);
        this.x = 98;
        this.y = 27;
        this.height = 13;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage === 100) {
            this.width = 122;
            return 0;
        } else if (this.percentage >= 95) {
            this.width = 115.9;
            return 0;
        } else if (this.percentage >= 90) {
            this.width = 109;
            return 0;
        } else if (this.percentage >= 85) {
            this.width = 103.7;
            return 0;
        } else if (this.percentage >= 80) {
            this.width = 97.6;
            return 0;
        } else if (this.percentage >= 75) {
            this.width = 91.5;
            return 0;
        } else if (this.percentage >= 70) {
            this.width = 85.4;
            return 0;
        } else if (this.percentage >= 65) {
            this.width = 79.3;
            return 0;
        } else if (this.percentage >= 60) {
            this.width = 73.2;
            return 0;
        } else if (this.percentage >= 55) {
            this.width = 67.1;
            return 0;
        } else if (this.percentage >= 50) {
            this.width = 61;
            return 0;
        } else if (this.percentage >= 45) {
            this.width = 54.9;
            return 0;
        } else if (this.percentage >= 40) {
            this.width = 48.8;
            return 0;
        } else if (this.percentage >= 35) {
            this.width = 42.7;
            return 0;
        } else if (this.percentage >= 30) {
            this.width = 36.6;
            return 0;
        } else if (this.percentage >= 25) {
            this.width = 30.5;
            return 0;
        } else if (this.percentage >= 20) {
            this.width = 24.4;
            return 0;
        } else if (this.percentage >= 15) {
            this.width = 18.3;
            return 0;
        } else if (this.percentage >= 10) {
            this.width = 12.2;
            return 0;
        } else if (this.percentage >= 5) {
            this.width = 6.1;
            return 0;
        } else {
            this.width = 2
            return 0;
        }
    }

}