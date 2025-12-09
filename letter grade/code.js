document.getElementById("btn").addEventListener("click",onclick)
function onclick () {
    score= document.getElementById("n1").valueAsNumber;
    grade = ""
if(score >= 97){
        grade = "A+"
} else if ( score >= 96) {
        grade = "A"
}else if(score >= 92 ){
        grade = "A-"
} else if(score >= 89){
    grade = "B+"
}else if(score >= 86){
    grade = "B"
}else if(score >= 82){
    grade = "B-"
}else if(score >= 79){
    grade = "C+"
}else if(score >= 76){
    grade = "C"
}else if(score >= 72){
    grade = "C-"
}else if (score >= 69){
    grade = "D+"
}else if(score >= 66){
    grade = "D"
}else if(score >= 62){
    grade = "D-"
}else {
    grade = "F"
}
    document.getElementById("result").innerHTML = "letter grade "  + grade;
} ;

