let pen = document.getElementById("game").getContext("2d")
let x = 200
let y = 100
let dx = 10
let dy = 5
let g = 2
let is_left = false
let is_right = false
let JUMP_POWER = -20
let Limit= 3
let jump_times = Limit
document.addEventListener("keydown",onkeydown)
document.addEventListener("keyup",onkeyup)
drawBackground()
function onkeydown(event_object){
    if(event_object.key === "a"){
        is_left = true
    } else if (event_object.key === "d") {
       is_right = true
    } else if (event_object.key === "Enter") {
        setInterval(drawFrame,50)
    } else if (event_object.key === " "){
        if (jump_times >0){
            dy = JUMP_POWER
            jump_times -=1
        }
        
    }
}

function onkeyup(event_object){
     if(event_object.key === "a"){
        is_left = false
    } else if (event_object.key === "d") {
       is_right = false
    }
}
function drawFrame() {
    dy = dy + g
    y = y + dy
    if(y+20 > 400) {
        y = 400-20
        dy = 0
        jump_times = Limit
    }
    if(is_left){
        x = x -dx
        if(x+20 < 0){
            x = 400
        }
    }
    if(is_right){
        x = x + dx
        if(x > 400){
           x = - 20
        }
    }
    drawBackground()
    drawPlayer(x,y)
}

function drawBackground() {
    pen.fillStyle = "#5100ffff"
    pen.fillRect(0,0,400,400)
}

function drawPlayer(x,y) {
    pen.fillStyle = "#00eeffff"
    pen.fillRect(x,y,20,20)
}