class DrawableObject {
    x = 30;
    y = 30;
    img;
    imageCache = {};
    currentImage = 0;
    height = 150;
    width = 150;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
       //  try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        // } catch (error) {
           // console.log(this);
        // }
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Goblin || this instanceof Endboss || this instanceof CastingSpell || this instanceof Mana) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, (this.x + this.width - this.offset.right) - (this.x + this.offset.left), (this.y + this.height - this.offset.bottom) - (this.y + this.offset.top));
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }


}