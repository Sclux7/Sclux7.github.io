const tkodaenemies = [
    "Goblin",
    "Half goblin",
    "Quarter goblin",
    "Double goblin",
    "Triple goblin",
    "Orc",
    "Half orc",
    "Two orcs",
    "Hydra",
    "Dragon",
    "Human man",
    "Freaky H Joy 1 (one)",
    "Slime",
    "Larger slime",
    "Even larger slime",
    "All encompassing slime",
    "Spiky slime",
    "Slimy slime",
    "The world itself",
    "God(not the main one)",
    "Roll the god table",
    "Wolf",
    "Large wolf",
    "Forest guardian",
    "Forest of guardians (at least three of them)",
    "Forest",
    "Evil dice",
    "Beastmaster with beast",
    "Beastmaster without beast",
    "Beast without beastmaster",
    "Neither beast nor beastmaster",
    "Your partner (loved or otherwise)",
    "Large worm out of ground",
    "spider",
    "large spider",
    "scorpion",
    "large scorpion",
    "Pirate",
    "Pirate Captain",
    "Pirate Crewmate",
    "Giant",
    "City mobster",
    "pack o mobsters",
    "pack of mobsters",
    "bear",
    "frog",
    "giant frog",
    "ancient dragon",
    "elder slime",
    "cloud giant",
    "woods lurker",
    "fire elemental",
    "spider queen",
    "assassin"
];
const tkodaminijames = [
    "Geoguessr",
    "timestamp",
    "todays wordle",
    "Random wordle",
    "Pick a number",
    "Battleships",
    "Roll a dice",
    "Tell a joke",
    "name of the game",
    "Answer the phone",
    "Debate topic",
    "Roll a dice until failure",
    "The game where you throw up the pieces",
    "Spell attic",
    "Quick maths!",
    "Bizarre rules in battle for north africa",
    "Deal or no deal",
    "Sell this invention",
    "new rule",
    "Come up with an argument",
    "better name",
    "Fishing contest!",
    "Ranching contest!",
    "Farming contest!",
    "Gambling contest!",
    "Lets go bowling",
    "sentence right now",
    "Spot the difference",
    "What sound",
    "How long",
    "how many turns",
    "Jeopardy",
    "dice rolled?",
    "Whats next?",
    "Song lyrics",
    "Boar on the floor!",
    "Spelling bee",
    "Dont let me leave murph timestamp",
    "Quick!",
    "Worst videogame ost",
    "Worst song",
    "Blind audition",
    "Questions"
];

const tkodagoodkarm = [
    "Monster bash",
    "new rule",
    "Gain 1/4 money",
    "Gain 1/4 power",
    "Lose addiction",
    "Move again",
    "Visit closest shop",
    "Benefit to job",
    "Potion of luck",
    "Roll again",
    "shmungus",
    "ski mask",
    "insult",
    "go to hell!!!!!",
    "Remove a debuff",
    "Leave hell",
    "one day blinding soup"
];

const tkodabadkarm = [
    "The snail",
    "Lose 1/4 money",
    "Lose 1/4 power",
    "Move back",
    "Gain addiction",
    "Lose something job related",
    "Roll again",
    "Transported to different location",
    "Sent to forest",
    "lose item",
    "evil shmungus",
    "Gain 3 bintelligence",
    "Phonetic phready",
    "Letterboxd larry",
    "Snail moves again",
    "Go to hell",
    "Become slimed",
    "blind"
]

const tkodajob = [
    "normal thing",
    "good thing",
    "bad thing",
    "worse thing",
    "no change",
    "nothing but they feel had for you",
    "plus one point",
    "minus one point",
    "shocking harvest!",
    "shocking plague!"
]

const slimemine = [
    "10 slime",
    "20 slime",
    "25 slime",
    "50 slime",
    "100 slime"
]

const slimerise = [
    "0 layers",
    "1 layer",
    "2 layers",
    "3 layers"
]

const bug = [
    "head",
    "body",
    "end",
    "left",
    "right"
]

const btqs = [
    "do you enjoy your job",
    "what did you do for work today",
    "what programs did you use today",
    "did you enjoy your lunch break",
    "do you find the other employees likeable",
    "is there anyone in the office you suspect of slacking",
    "what position do you see yourself working in 5 years into the future at this company",
    "whats one thing you like about the boss"
]

const btsc = [
    "see someone elses answer",
    "sabotage answer",
    "jumble",
    "make your answer same as someone elses",
    "bug conversation",
    "know the question",
    "know someone elses answer",
    "sabotage question"
]

const btrw = [
    "5 brawn","10 brawn","15 brawn","20 brawn","25 brawn","30 brawn","40 brawn","50 brawn",
"5 barter","10 barter","15 barter","20 barter","25 barter","30 barter","40 barter","50 barter"
]

const MKOCarmy = [
    "largest",
    "big",
    "small",
    "smallest",
    "one big troop",
    "tiny"
]
const MKOCexport = [
    "grain",
    "stone",
    "livestock",
    "wood",
    "iron",
    "minerals"
]
const MKOCmagic = [
    "plague",
    "neutral bubble",
    "chaos",
    "transmute",
    "strength potion" //your army becomes one tier higher (Biggest -> Big -> Small -> Smallest -> Tiny. One big does not change into anything)
]
function tselect(tselect){
    const randomenemy = Math.floor(Math.random() * tkodaenemies.length);
    const randominijame = Math.floor(Math.random() * tkodaminijames.length);
    const randomgood = Math.floor(Math.random() * tkodagoodkarm.length);
    const randombad = Math.floor(Math.random() * tkodabadkarm.length);
    const randombug = Math.floor(Math.random() * bug.length);
    const randombug2 = Math.floor(Math.random() * bug.length);
    if(randombug2 == randombug){
        randombug2 = Math.floor(Math.random() * bug.length);
    }
    const randombug3 = Math.floor(Math.random() * bug.length);
    if(randombug3 == randombug2 || randombug3 == randombug || randombug2 == randombug){
        randombug3 = Math.floor(Math.random() * bug.length);
    }
    const randombug4 = Math.floor(Math.random() * bug.length);
    if(randombug4 == randombug3 || randombug4 == randombug2 || randombug4 == randombug || randombug3 == randombug2 || randombug3 == randombug || randombug2 == randombug){
        randombug4 = Math.floor(Math.random() * bug.length);
    }
    const randomq = Math.floor(Math.random() * btqs.length);
    const randomslack = Math.floor(Math.random() * btsc.length);
    const randomsrw = Math.floor(Math.random() * btrw.length);
    const randomMKOC1 = Math.floor(Math.random() * MKOCarmy.length);
    const randomMKOC2 = Math.floor(Math.random() * MKOCexport.length);
    const randomMKOC3 = Math.floor(Math.random() * MKOCmagic.length);


    if(tselect === 4){
        console.log("hi")
        document.getElementById("picked").innerHTML = tkodaenemies[randomenemy];
    }
    if(tselect === 5){
        console.log("hi2")
        document.getElementById("picked").innerHTML = tkodaminijames[randominijame];
    }
    if(tselect === 6){
        console.log("hi3")
        document.getElementById("picked").innerHTML = tkodagoodkarm[randomgood];
    }
    if(tselect === 7){
        console.log("hi4")
        document.getElementById("picked").innerHTML = tkodabadkarm[randombad];
    }
    if(tselect === 8){
        const roll = Math.random(Math.floor());
        if(roll <= 0.3){
            document.getElementById("picked").innerText = tkodajob[0];
        }
        else if  (roll > 0.3 && roll <= 0.4){
            document.getElementById("picked").innerText = tkodajob[1];
        }
        else if  (roll > 0.4 && roll <= 0.55){
            document.getElementById("picked").innerText = tkodajob[2];
        }
        else if  (roll > 0.55 && roll <= 0.65){
            document.getElementById("picked").innerText = tkodajob[3];
        }
        else if  (roll > 0.65 && roll <= 0.75){
            document.getElementById("picked").innerText = tkodajob[4];
        }
        else if  (roll > 0.75 && roll <= 0.85){
            document.getElementById("picked").innerText = tkodajob[5];
        }
        else if  (roll > 0.85 && roll <= 0.87){
            document.getElementById("picked").innerText = tkodajob[6];
        }
        else if  (roll > 0.87 && roll <= 0.90){
            document.getElementById("picked").innerText = tkodajob[7];
        }
        else if  (roll > 0.90 && roll <= 0.95){
            document.getElementById("picked").innerText = tkodajob[8];
        }
        else if  (roll > 0.95 && roll <= 1.0){
            document.getElementById("picked").innerText = tkodajob[9];
        }
    }
    if(tselect === 9){
        const roll = Math.random(Math.floor());
        if(roll <= 0.35){
            document.getElementById("picked").innerText = slimemine[0];
        }
        else if  (roll > 0.35 && roll <= 0.6){
            document.getElementById("picked").innerText = slimemine[1];
        }
        else if  (roll > 0.6 && roll <= 0.8){
            document.getElementById("picked").innerText = slimemine[2];
        }
        else if  (roll > 0.8 && roll <= 0.95){
            document.getElementById("picked").innerText = slimemine[3];
        }
        else if  (roll > 0.95 && roll <= 1.0){
            document.getElementById("picked").innerText = slimemine[4];
        }
    }
    if(tselect === 10){
        const roll = Math.random(Math.floor());
        if(roll <= 0.5){
            document.getElementById("picked").innerText = slimerise[0];
        }
        else if  (roll > 0.5 && roll <= 0.8){
            document.getElementById("picked").innerText = slimerise[1];
        }
        else if  (roll > 0.8 && roll <= 0.95){
            document.getElementById("picked").innerText = slimerise[2];
        }
        else if  (roll > 0.95 && roll <= 1.0){
            document.getElementById("picked").innerText = slimerise[3];
        }
    }
    if(tselect === 11){ // bug 1
        document.getElementById("picked").innerHTML = bug[randombug];
    }
    if(tselect === 12){ // bug 2
        document.getElementById("picked").innerHTML = bug[randombug] + ", " + bug[randombug2];
    }
    if(tselect === 13){ // bug 3
        document.getElementById("picked").innerHTML = bug[randombug] + ", " + bug[randombug2] + ", " + bug[randombug3];
    }
    if(tselect === 14){ // bug 4
        document.getElementById("picked").innerHTML = bug[randombug] + ", " + bug[randombug2] + ", " + bug[randombug3] + ", " + bug[randombug4];
    }
    if(tselect === 15){
        document.getElementById("picked").innerHTML = btqs[randomq];
    }
    if(tselect === 16){
        document.getElementById("picked").innerHTML = btsc[randomslack];
    }
    if(tselect === 17){
        document.getElementById("picked").innerHTML = btrw[randomsrw];
    }
    if(tselect === 18){
        document.getElementById("picked").innerHTML = MKOCarmy[randomMKOC1], MKOCarmy[randomMKOC2], MKOCarmy[randomMKOC3];
    }
}