class Level {
    enemies;
    boss;
    mana;
    clouds;
    backgroundObject;
    level_end_x = 2250;

    constructor(enemies,boss, mana, clouds, backgroundObject) {
        this.enemies = enemies;
        this.boss = boss;
        this.mana = mana;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}