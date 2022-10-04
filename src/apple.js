class Apple {
    constructor(gamewidth,gameheight) {
        this.gamewidth = gamewidth;
        this.gameheight = gameheight;
        this.appleX = 5;
        this.appleY = 5;
        this.tileCount = 20;
        this.tileSize = gamewidth / this.tileCount - 2;
    }

    draw(ctx) {
        ctx.fillStyle = "#f00";
        ctx.fillRect(this.appleX * this.tileCount, this.appleY * this.tileCount, this.tileSize, this.tileSize)
    }
}