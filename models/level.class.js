class Level {
    enemies;
    mana;
    clouds;
    backgroundObject;
    level_end_x = 2250;

    constructor(enemies,mana, clouds, backgroundObject) {
        this.enemies = enemies;
        this.mana = mana;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}