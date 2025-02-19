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
    "Quick!"
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
    "Leave hell"
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
    "Go to hell"
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

function tselect(tselect){
    const randomenemy = Math.floor(Math.random() * tkodaenemies.length);
    const randominijame = Math.floor(Math.random() * tkodaminijames.length);
    const randomgood = Math.floor(Math.random() * tkodagoodkarm.length);
    const randombad = Math.floor(Math.random() * tkodabadkarm.length);

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
}