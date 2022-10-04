class Input {
    constructor(snake) {
        this.snake = snake;
        document.body.addEventListener("keydown",(event) => {
            switch (event.keyCode) {
                //up
                case 38:
                    if (snake.yVelocity == 1) return;
                    this.snake.yVelocity = -1;
                    this.snake.xVelocity = 0;
                    break;
                //down
                case 40:
                    if (this.snake.yVelocity == -1) return;
                    this.snake.yVelocity = 1;
                    this.snake.xVelocity = 0;
                    break;
                //left
                case 37:
                    if (this.snake.xVelocity == 1) return;
                    this.snake.yVelocity = 0;
                    this.snake.xVelocity = -1;
                    break;
                //right
                case 39:
                    if (this.snake.xVelocity == -1) return;
                    this.snake.yVelocity = 0;
                    this.snake.xVelocity = 1;
                    break;
            }
        })
    }
}