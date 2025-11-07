document.getElementById("btn").addEventListener("click",onclick)
function onclick () {
let firstNumber = document.getElementById("n1").valueAsNumber;
let secondNumber = document.getElementById("n2").valueAsNumber;
let thirdNumber = document.getElementById("n3").valueAsNumber;
let max; 
if(firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    max=  firstNumber;
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    max = secondNumber;
} else {
    max = thirdNumber; 
} 
document.getElementById("result").innerHTML = "maximum  " + max;
}