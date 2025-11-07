let pen = document.getElementById("c").getContext("2d");
drawBackground()
let N = 13
let i = 0 
while (i< N) {
    drawSquare(10+i*30,10+i*30)
    drawSquare(10+i*30,10+12*30-i*30)
    ++i;
}

function drawBackground () {
    pen.fillStyle = "#4acc9aff"
    pen.fillRect(0,0, 400, 400 )
     
}

function drawSquare (x,y) {
    pen.fillStyle = "#047dffff"
    pen.fillRect(x,y,20,20)
}
let pen2 = document.getElementById("d").getContext("2d");
drawBackground2()
let i2 = 0
while (i2<N) {
    drawSquare2 (10+i2*30,10+i2*30)
    drawSquare2(10+30)
    ++i2;
}

function drawBackground2 () {
    pen2.fillStyle = "#ff0821ff"
    pen2.fillRect(0,0, 400,400 )
     
}

function drawSquare2 (x,y) {
    pen2.fillStyle = "#d504ffff"
    pen2.fillRect(x,y,20,20)
}