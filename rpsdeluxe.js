var options = ['rock','paper','scissors'];
var selected = 0;
var elementt = $('#target2');
var rps1 = "1rock";
var rps1 = "1paper";
var rps1 = "1scissors";

function rpsselection(){
    selected = Math.floor(Math.random() * (options.length));
    document.getElementById("rpsDisplay").innerHTML = options(choice);
    elementt.html(options[selected]);
    if(rps1 == true){
        if(choice == 0){
            document.getElementById("rpsresult").innerHTML = "draw";
        }
        if(choice == 1){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
        }
        if(choice == 2){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
        }
    }
    if(rps2 == true){
        if(choice == 1){
            document.getElementById("rpsresult").innerHTML = "draw";
        }
        if(choice == 2){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
        }
        if(choice == 0){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
        }
    }
    if(rps3 == true){
        if(choice == 2){
            document.getElementById("rpsresult").innerHTML = "draw";
        }
        if(choice == 0){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
        }
        if(choice == 1){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
        }
    }
}