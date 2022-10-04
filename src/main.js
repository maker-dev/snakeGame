const canvas = document.getElementById("gameScreen"),
        theContext = canvas.getContext("2d"),
        width = canvas.width,
        height = canvas.height;
//game variables
let fps = 7;
const snakeParts = [];
let tailLength = 2;
let start = false;
//game Obj
let apple = new Apple(width,height);
let snake = new Snake(width,height,apple);
new Input(snake);
//draw background
let drawBackground = (ctx) => {
    theContext.clearRect(0,0,width,height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,width,height);
}
//gameOver function
function isGameOver() {
    let gameOver = false;

    if (snake.xVelocity === 0 && snake.yVelocity === 0) {
        return false;
    } else {
        window.setTimeout(() => start = true,10);
    }
    //walls
    if (snake.headX < 0 || snake.headX >= snake.tileCount) {
        gameOver = true;
    } else if (snake.headY < 0 || snake.headY >= snake.tileCount) {
        gameOver = true;
    }

    if (start) {
        for (let i = 0; i < snakeParts.length; i++) {
            let part = snakeParts[i];
            if (part.x === snake.headX && part.y === snake.headY) {
                gameOver = true;
                break;
            }
        }
    }
    if (gameOver) {
        theContext.font = "50px verdana";
        let gradient = theContext.createLinearGradient(0,0, width, 0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        theContext.fillStyle = gradient;
        theContext.textAlign = "center";
        theContext.fillText("GAME OVER",width / 2,height / 2);
    }

    return gameOver;
}

function gameLoop() {
    //check for gameover
    let result = isGameOver();
    if (result) {
        return;
    }
    //draw functions
    drawBackground(theContext); 
    snake.draw(theContext);
    apple.draw(theContext);
    drawScore(theContext);
    //update functions
    snake.update();
    if (score === 2) {
        fps = 10;
    } else if (score === 10) {
        fps = 15;
    } else if (score === 20) {
        fps = 20;
    }
    
    window.setTimeout(gameLoop, 1000 / fps)
}

gameLoop();