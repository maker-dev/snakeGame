let score = 0;
function drawScore(ctx) {
    ctx.fillStyle = "#fff";
    ctx.font = "15px verdana";
    ctx.textAlign = "end";
    ctx.fillText(`SCORE: ${score}`, width , 15)
}