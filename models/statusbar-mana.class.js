class StatusbarMana extends DrawableObject {

    IMAGE_MANA = ['src/img/fantasy-platformer-game-ui/PNG/16Inner_Interface/magic_full_bar_new_edit.png'];
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGE_MANA);
        this.x = 98;
        this.y = 46;
        this.height = 12;
        this.setPercentage(100);
    }

        setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_MANA[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage === 0) {
            this.width = 2;
        } else if (this.percentage > 0 && this.percentage <= 100) {
            this.width = (this.percentage * 96) / 100;
        } else {
            this.width = 0;  // Falls `this.percentage` außerhalb des Bereichs 0-100 liegt
        }
        return 0;
    }

}