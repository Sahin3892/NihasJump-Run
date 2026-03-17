class BossFireBall extends MovableObject {
  IMAGES_BOSS_FIRE = [
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire1.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire2.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire3.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire4.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire5.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire6.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire7.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire9.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire10.png",
  ];
  castPoint;
  targetX;
  targetY;
  offset = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  };

  constructor(x, y, targetX, targetY) {
    super();
    this.loadImage(
      "src/img/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire1.png",
    );
    this.loadImages(this.IMAGES_BOSS_FIRE);
    this.x = x;
    this.y = y;
    this.targetX = this.targetX;
    this.targetY = this.targetY;
    this.height = 128;
    this.width = 128;
  }
}
