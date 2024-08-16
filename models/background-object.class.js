class BackgroundObject extends MovableObject {
    height = 480;
    width = 720;


    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 0;
        this.y = 480-this.height;
    }
}