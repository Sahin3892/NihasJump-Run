let canvas;
let ctx;
let character = new MovableObjectClass();

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    console.log('My Character is MovableObjectClass!', character);

}