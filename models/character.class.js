class Character extends MovableObject {
  y = 100; //300 Standard
  height = 150;
  width = 150;
  speed = 3.5;
  IMAGES_WALKING = [
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk1.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk2.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk3.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk4.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk5.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Walk/walk6.png",
  ];
  IMAGES_JUMPING = [
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump1.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump2.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump3.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump4.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump5.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump6.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Jump/jump7.png",
  ];
  IMAGES_DEAD = [
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death1.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death2.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death3.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death4.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death5.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death6.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death7.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death8.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Death/death9.png",
  ];
  IMAGES_HURT = [
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt1.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt2.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt3.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Hurt/hurt4.png",
  ];
  IMAGES_CAST = [
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack1.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack2.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack3.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack4.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack5.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack6.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Attack/attack7.png",
  ];
  IMAGES_IDLE = [
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle1.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle2.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle3.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle4.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle5.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle6.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle7.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle8.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle9.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle10.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle11.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle12.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle13.png",
    "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/Idle/idle14.png",
  ];
  world;
  idleInterval;
  idleTimer;
  animationIntervals;
  deathAnimationComplete = false;
  walking_sound = new Audio("src/audio/step.mp3");
  jumping_sound = new Audio("src/audio/jump.mp3");
  idle_sound = new Audio("src/audio/idle.mp3");
  dead_sound = new Audio("src/audio/char_dead.mp3");
  offset = {
    top: 70,
    left: 50,
    right: 50,
    bottom: 15,
  };

  constructor() {
    super().loadImage(
      "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_CAST);
    this.loadImages(this.IMAGES_IDLE);
    this.applyGravity();
    this.animate();
    this.soundSettings();
    this.idleTimer = null;
    this.state = false;
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.resetIdleTimer();
        if (!this.isAboveGround()) {
          this.soundSettings();
          this.resetIdleTimer();
        }
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.resetIdleTimer();
        if (!this.isAboveGround()) {
          this.soundSettings();
          this.resetIdleTimer();
        }
      }
      if (
        (this.world.keyboard.SPACE && !this.isAboveGround()) ||
        (this.world.keyboard.UP && !this.isAboveGround())
      ) {
        this.jump();
        this.jumping_sound.play();
        this.resetIdleTimer();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    this.animationIntervals = setInterval(() => {
      if (this.isDead()) {
        if (
          this.deathAnimationComplete === false &&
          this.currentImage < this.IMAGES_DEAD.length
        ) {
          this.playAnimation(this.IMAGES_DEAD);
          this.dead_sound.play();

          if (this.isDead() && this.currentImage >= this.IMAGES_DEAD.length) {
            this.deathAnimationComplete = true;
            clearInterval(this.animationIntervals);
          }
        }
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.resetIdleTimer();
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
        this.resetIdleTimer();
      } else if (this.world.keyboard.F) {
        this.playAnimation(this.IMAGES_CAST);
        this.resetIdleTimer();
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        } else if (!this.state) {
          this.loadImage(
            "src/img/assassin-mage-viking-free-pixel-art-game-heroes/PNG/Mage/mage.png"
          );
        }
      }
    }, 50);
  }

  resetIdleTimer() {
    clearTimeout(this.idleTimer);
    clearInterval(this.idleInterval);
    this.idleTimer = setTimeout(() => {
      this.state = "idle";
      this.playIdleAnimation();
      console.log("idleTimer", this.idleTimer);
    }, 3000);
    this.state = false;
    this.idle_sound.pause();
    this.idle_sound.currentTime = 0;
  }

  playIdleAnimation() {
    clearInterval(this.idleInterval);
    this.idleInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
      this.idle_sound.play();
      this.idle_sound.volume = 0.35;
      console.log("idleAnimaton", this.idleInterval);
    }, 200);
  }

  soundSettings() {
    this.walking_sound.play();
    this.walking_sound.volume = 0.2;
  }
}
