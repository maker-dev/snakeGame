class Snake {
    constructor(gamewidth,gameheight,apple) {
        this.gamewidth = gamewidth;
        this.gameheight = gameheight;
        this.apple = apple
        this.tileCount = 20;
        this.tileSize = gamewidth / this.tileCount - 2;
        this.headX = 10;
        this.headY = 10;
        this.xVelocity = 0;
        this.yVelocity = 0;
    }

    draw(ctx) {
        
        ctx.fillStyle = "green";
        for (let i = 0; i < snakeParts.length; i++) {
            let part = snakeParts[i];
            ctx.fillRect(part.x * this.tileCount, part.y * this.tileCount, this.tileSize, this.tileSize);
        }
        
        snakeParts.push(new SnakeParts(this.headX,this.headY));
        if (snakeParts.length > tailLength) {
            snakeParts.shift();
        }
        ctx.fillStyle = "orange";
        ctx.fillRect(this.headX * this.tileCount , this.headY * this.tileCount, this.tileSize, this.tileSize);
    }

    update() {
        //moving the snake
        this.headX += this.xVelocity;
        this.headY += this.yVelocity;
        //check for collision
        if (this.headX === this.apple.appleX && this.headY === this.apple.appleY) {
            this.apple.appleX = Math.floor(Math.random() * this.tileCount);
            this.apple.appleY = Math.floor(Math.random() * this.tileCount);
            tailLength++;
            score++;
        }
    }
}