let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
//let intervalIds = [];

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  ctx = canvas.getContext("2d");

  console.log("My Character is", world.character);
  console.log("My enemies", level1.enemies);
}

//function setStoppableInterval(fn, time) {
//    let id =setInterval(fn, time);
//    intervalIds.push(id);
//}

//function stopGame() {
//  for (let i = 0; i < intervalIds.length; i++) {
//      const id = intervalIds[i];
//      clearInterval(id);
//      console.log(id);
//  }

//  intervalIds.forEach(clearInterval);
// }

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 70) {
    keyboard.F = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 70) {
    keyboard.F = false;
  }
});
