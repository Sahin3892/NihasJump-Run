// In World Class
/* setEnemyPosition(){
        this.level.enemies.forEach(function (singleEnemy, index) {
            singleEnemy.calcGoblinXPosition(singleEnemy, index); // 1. Enemy, 2. Enemy, 3. Enemy
            })
        } */

/* 
    calcGoblinXPosition(singleEnemy, enemyIndex){ // 250
        let newPosition = 300 + Math.random() * 500; // 800
        for(let i = 0; i < world.level.enemies.length; i++){
            const enemyInLevel = world.level.enemies[i];
            if (enemyIndex == i){
                continue
            }
             let diff = enemyInLevel.x - newPosition;
              if (diff > 250 || diff < -250 && diff < 0){
                  singleEnemy.x = newPosition;
                  break;
              }else{
                  
                  this.calcGoblinXPosition(singleEnemy, enemyIndex);
                  break;
              }
        
        }
    }

    Alternativ

    calcGoblinXPosition(singleEnemy, enemyIndex){ // 250
        let newPosition = 300 + Math.random() * 500; // 800
        for(let i = 0; i < world.level.enemies.length; i++){
            const enemyInLevel = world.level.enemies[i];
            if (enemyIndex == i){
                continue
            }
             let diff = enemyInLevel.x - newPosition;
              if (diff > 100 || diff < -100 && diff < 0){
                  continue;
              }else{
                  
                  this.calcGoblinXPosition(singleEnemy, enemyIndex);
                  break;
              }
        
        }
        singleEnemy.x = newPosition;
    }
*/

// In game.js
/* 
function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    ctx = canvas.getContext("2d");
    world.setEnemyPosition();

    console.log('My Character is', world.character);
    console.log('My enemies', level1.enemies);

}
*/
