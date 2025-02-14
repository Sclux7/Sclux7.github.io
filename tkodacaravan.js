var round = "0";
var playermoney = 10;

function pathSelection(pathSelection){
    if(round === "0"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "1f";
                console.log("2", round, roll, playermoney)
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "1f";
                console.log("3", round, roll, playermoney)
            }
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.75){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "1s";    
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "1s";
            }
            return;
        }
    }
    if(round === "1f"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2fu";
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2fu";
            }
            return;
        }
        if (pathSelection === 2){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2fd";
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2fd";
            }
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "1s"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2fd";
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2fd";
            }
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.75){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2s";    
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "2s";
            }
            return;
        }
    }
    if(round == "2s"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3bfd";
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3bfd";
            }
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.75){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3s";    
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3s";
            }
            return;
        }
    }
    if(round == "3s"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.25){
                playermoney = playermoney + (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.25 && roll <= 0.5){
                playermoney = playermoney + (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney - (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney - (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.75){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4s";    
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4s";
            }
            return;
        }
    }
    if(round == "4s"){
        if(pathSelection === 1){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.75){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "final";    
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "final";
            }
            return;
        }
    }
    if(round == "2fu"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3afu";
            }
            else{
                playermoney = playermoney*0.75;
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3afu";
            }
            return;
        }
        if (pathSelection === 2){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.25){
                playermoney = playermoney + (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.25 && roll <= 0.5){
                playermoney = playermoney + (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney - (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney - (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "2fd"){
        if (pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.25){
                playermoney = playermoney + (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.25 && roll <= 0.5){
                playermoney = playermoney + (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney - (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney - (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            return;
        }
        if(pathSelection === 2){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.6){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3bfd";
            }
            else{
                playermoney = playermoney*0.75
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "3bfd";
            }
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "3afu"){
        if(pathSelection === 1){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 2){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.25){
                playermoney = playermoney + (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.25 && roll <= 0.5){
                playermoney = playermoney + (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney - (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney - (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "3bfd"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.25){
                playermoney = playermoney + (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.25 && roll <= 0.5){
                playermoney = playermoney + (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney - (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney - (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "3afd" || round == "3bfu"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.50){
                playermoney = playermoney*2
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fu";
            }
            else{
                playermoney = playermoney*0
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fu";
            }
            return;
        }
        if (pathSelection === 2){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.50){
                playermoney = playermoney*2
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else{
                playermoney = playermoney*0
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "4fu"){
        if(pathSelection === 1){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 2){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.50){
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "final";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney*0.75
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "final";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney*0.5
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "final";
            }
            console.log("2", round, roll, playermoney)
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "4fd"){
        if(pathSelection === 1){
            const roll = Math.random(Math.floor());
            console.log("1", roll)
            if (roll <= 0.25){
                playermoney = playermoney + (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.25 && roll <= 0.5){
                playermoney = playermoney + (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.5 && roll <= 0.75){
                playermoney = playermoney - (playermoney*0.25)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            else if (roll > 0.75 && roll < 1.0){
                playermoney = playermoney - (playermoney*0.5)
                document.getElementById("pathOutput").innerText = "Remaining: " + playermoney;
                round = "4fd";
            }
            console.log("2", round, roll, playermoney)
            return;
        }
        if (pathSelection === 2){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
        if (pathSelection === 3){
            document.getElementById("pathOutput").innerText = "Not available!!";
            return;
        }
    }
    if(round == "final"){
        document.getElementById("pathOutputFinal").innerText = "Remaining: " + playermoney;
        return;
    }
}
