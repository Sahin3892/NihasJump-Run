class BackgroundObject extends MovableObject {
  height = 480;
  width = 720;

  constructor(imagePath, posX) {
    super().loadImage(imagePath);
    this.x = posX;
    this.y = 480 - this.height;
  }
}
