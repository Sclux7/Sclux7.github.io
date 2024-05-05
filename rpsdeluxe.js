var options = ['rock','paper','scissors'];
var selected = 0;
var elementt = $('#target2');
var rps1 = "1rock";
var rps2 = "1paper";
var rps3 = "1scissors";

function rpsselection(playerSelection){
    selected = Math.floor(Math.random() * (options.length));
    document.getElementById("rpsDisplay").innerHTML = options[selected];
    // elementt.html(options[selected]);
    if (playerSelection === 1){
        if(selected == 0){
            document.getElementById("rpsresult").innerHTML = "draw";
        }
        if(selected == 1){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
        }
        if(selected == 2){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
        }
    }
    else if (playerSelection === 2){
        if(selected == 1){
            document.getElementById("rpsresult").innerHTML = "draw";
        }
        if(selected == 2){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
        }
        if(selected == 0){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
        }
    }
    else if (playerSelection === 3){
        if(selected == 2){
            document.getElementById("rpsresult").innerHTML = "draw";
        }
        if(selected == 0){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
        }
        if(selected == 1){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
        }
    }
}