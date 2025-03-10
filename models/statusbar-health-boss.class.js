class StatusbarhealthBoss extends DrawableObject {

    IMAGE_HEALTH = ['src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_new_edit.png'];
    percentage = 100;

    constructor() {
        super()
        this.loadImages(this.IMAGE_HEALTH);
        this.x = 2700;
        this.y = 27;
        this.height = 13;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        const actualPercentage = Math.max(this.percentage - 20, percentage); // Ensure reduction does not exceed 20 points
        this.percentage = actualPercentage;
        let path = this.IMAGE_HEALTH[this.resolveImageIndex()]; // Hier wird resolveImageIndex aufgerufen
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage === 0) {
            this.width = 2;
        } else if (this.percentage > 0 && this.percentage <= 100) {
            this.width = (this.percentage * 122) / 100;
        } else {
            this.width = 0;  // Falls `this.percentage` außerhalb des Bereichs 0-100 liegt
        }
        return 0;
    }

}