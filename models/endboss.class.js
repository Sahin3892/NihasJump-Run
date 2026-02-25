class Endboss extends MovableObject {
  height = 600;
  width = 600;
  y = -15;
  health = 100; // Add a health property
  percentage = 100; // Add a percentage property
  isDead = false;
  deathAnimationComplete = false; // Ist die Tod-Animation fertig?

  IMAGES_HURT = [
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Hurt1.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Hurt2.png",
  ];

  IMAGES_DEAD_BOSS = [
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death0.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death1.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death2.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death3.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Death4.png",
  ];

  IMAGES_BOSS_IDLE = [
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Idle1.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Idle2.png",
    "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Idle3.png",
  ];
  damage_sound_boss = new Audio("src/audio/boss_hit_sound.mp3");
  dead_sound_boss = new Audio("src/audio/boss_dead_sound.mp3");
  hurtInterval;
  dieInterval;
  walkInterval = null;
  animationInterval;

  // Define the offset for collision detection

  offset = {
    top: 170,
    left: 215,
    right: 215,
    bottom: 140,
  };

  constructor() {
    super().loadImage(
      "src/img/bosses-pixel-art-game-assets-pack/PNG/Boss3/Anger1.png", // Überprüfe ob Idle notwendig ist
    );
    this.loadImages(this.IMAGES_HURT); // Lade die Bilder mehrfach
    this.loadImages(this.IMAGES_DEAD_BOSS);
    this.loadImages(this.IMAGES_BOSS_IDLE);
    this.x = 2350;
    this.animate();
  }

  getHit(damage) {
    console.log("getHit wurde aufgerufen um", new Date().getTime());
    const actualDamage = Math.min(damage, 20); // Ensure damage does not exceed 20
    this.health -= actualDamage; // Decrease health by actual damage
    this.percentage = this.health; // Update percentage for health bar
    this.isHurt = true; // Set isHurt flag to true
    console.log("Hurt Animation wird Abgespielt"); // Play hurt animation
    if (this.health <= 0) {
      this.health = 0;
      this.percentage = 0;
      this.bossDie();
    } else {
      setTimeout(() => {
        this.isHurt = false; // Reset isHurt flag after animation
      }, 500); // Adjust the timeout duration as needed
    }
  }

  animate() {
    clearInterval(this.animationInterval);
    console.log("Neues Interval gestartet");
    this.animationInterval = setInterval(() => {
      if (this.isDead === true) {
        this.bossDieAnimation();
      } else if (this.isHurt == true) {
        console.log("Boss is Hurt");
        this.playAnimation(this.IMAGES_HURT);
        this.damage_sound_boss.play();
      } else this.playAnimation(this.IMAGES_BOSS_IDLE);
      console.log("animateInterval", this.animationInterval);
    }, 200);
  }

  bossDie() {
    this.isDead = true;
    this.currentImage = 0;
    console.log("Boss is dead");
  }

  bossDieAnimation() {
    if (this.deathAnimationComplete === false) {
      this.playAnimation(this.IMAGES_DEAD_BOSS); // Spiele Animation
      // Prüfe ob jetzt beim letzten Bild ist
      this.dead_sound_boss.play();
      if (this.currentImage >= this.IMAGES_DEAD_BOSS.length) {
        this.deathAnimationComplete = true;
      }
    }
  }
}
