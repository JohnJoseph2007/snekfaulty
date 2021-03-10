const canvas = document.getElementById("CanvasSnek");
const perm = canvas.getContext("2d");

let snake = [];
snake[0] = {x:256, y:256};
let snakex, snakey, newHead;
let di;

let food={
    x: Math.floor(Math.random()*17+1)*32,
    y:Math.floor(Math.random()*15+3)*32
}

document.addEventListener("keydown", arrow);

let groundImg, foodImg;
groundImg = new Image();
groundImg.src="ground.png";
foodImg = new Image();
foodImg.src="food.png";



setInterval(draw, 100);

function draw() {
    perm.drawImage(groundImg, 0, 0);
    perm.drawImage(foodImg, food.x, food.y);
    for(var i=0;i<snake.length;i++) {
        perm.fillStyle="Red";
        perm.fillRect(snake[0].x, snake[0].y, 32, 32);
    }
    
    snakex=snake[0].x;
    snakey=snake[0].y;

    if(di==="left"){
        snakex-=32;
    } 
    
    if(di==="right") {
        snakex+=32;
    } 
    
    if(di==="up"){
        snakey-=32;
    } 
    
    if(di==="down"){
        snakey+=32;
    }
    
    newHead={x:snakex, y:snakey};
    snake.push(newHead);

    if(snake[0].x===food.x&&snake[0].y===food.y) {
        food={
            x: Math.floor(Math.random()*17+1)*32,
            y:Math.floor(Math.random()*15+3)*32
        }
    } else {
        snake.pop();
    }
}

function arrow(keypress) {
    if(keypress.keyCode===37) {
        //snake[0].x=snake[0].x-32;
        di="left";
    } else if(keypress.keyCode===39) {
        //snake[0].x=snake[0].x+32;
        di="right";
    } else if(keypress.keyCode===38){
        //snake[0].y=snake[0].y-32;
        di="up";
    } else if(keypress.keyCode===40) {
        //snake[0].y=snake[0].y+32;
        di="down";
    }
}