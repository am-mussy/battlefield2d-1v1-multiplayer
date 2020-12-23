// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(70, 90, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// for (let i=0;i<10;i++){

// }

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 10;
var y = 10;
var dx_left = - 10;
var dx_right = 10;
var dy_up = - 10;
var dy_down = 10;
draw()

function drawRect() {
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect();
}

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            x += dx_left
            break
        case 38:
            y += dy_up
            break
        case 39:
            x += dx_right
            break
        case 40:
            y += dy_down
            break
    }
    for (let i=0;i<10;i++){
        draw()
    }
    
});
