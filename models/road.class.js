class Road extends MovableObject {
    height = 50;
    width = 50;

    constructor(imagePath) {
        super();
        super.loadImage(imagePath);
        this.x = 0;
        this.y = 430;
    }
}