var options = ['rock','paper','scissors'];
var selected = 0;
var elementt = $('#target2');
var rps1 = "1rock";
var rps2 = "1paper";
var rps3 = "1scissors";

function rpsselection(){
    selected = Math.floor(Math.random() * (options.length));
    document.getElementById("rpsDisplay").innerHTML = options(selected);
    // elementt.html(options[selected]);
}
function rps1(){
    if(options = 0){
        document.getElementById("rpsresult").innerHTML = "draw";
    }
    if(options = 1){
        document.getElementById("rpsresult").innerHTML = "You Lose :(";
    }
    if(options = 2){
        document.getElementById("rpsresult").innerHTML = "You Win :D";
    }
}
function rps2(){
    if(options == 1){
        document.getElementById("rpsresult").innerHTML = "draw";
    }
    if(options == 2){
        document.getElementById("rpsresult").innerHTML = "You Lose :(";
    }
    if(options == 0){
        document.getElementById("rpsresult").innerHTML = "You Win :D";
    }
}
function rps3(){
    if(options == 2){
        document.getElementById("rpsresult").innerHTML = "draw";
    }
    if(options == 0){
        document.getElementById("rpsresult").innerHTML = "You Lose :(";
    }
    if(options == 1){
        document.getElementById("rpsresult").innerHTML = "You Win :D";
    }
}
