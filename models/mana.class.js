class Mana extends DrawableObject {

    constructor() {
        super().loadImage('src/img/potion-icons-pixel-art/PNG/Transperent/1_0010_Bottle11.png');
        this.width = 50;
        this.height = 50;
        this.x = 300 + Math.random() * 1500;
        this.y = 200+ Math.random() * 150;
    }
}