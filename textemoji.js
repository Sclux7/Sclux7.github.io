// I LOVE SCLUXWARE !!!!!!!!!!!!!!!!!!!
// make a little banner thing for my website because why not !!

//  there are six "/ - \" (v) on each side, each v separated by a |, middle has a smiley or something
const eyes = ["◑", "ﾟ", "¯͒˵", "ˇ", "ˋ̠", "●", "✪", "꒦", "⟡", "0", "o", '"', "◐", "-", "◦", "☀", "◕", "⌐■", "■", "ᕙ", "⇀", "↼", "‶", "ᕗ", "೭", "੧", "❛", "〜", "✿", "੭", "೨", "ω","Φ", "⁀","⁕", "⟲", "⟳", "⟴"];
const mouths = ["෴","˖","_","W","~","•","‿","‸", "●", "✪", "꒦", "⟡", "0", "o", "-", "◦", "☀", "◕", "ᕙ", "⇀", "↼", "ᕗ", "೭", "〜", "✿", "ω","Φ","⁔", "←", "↑", "→", "↓", "↔", "↕", "↖", "↗", "↘", "↙", "↚", "↛", "↜", "↝"];
const randomspace = ["", " "]; // this is for between the eyes, mouth, etc


function runstuff(){

    const randomeye1 = Math.floor(Math.random() *  eyes.length);
    const randommouth1 = Math.floor(Math.random() *  mouths.length);
    const randomeye2 = Math.floor(Math.random() *  eyes.length);
    const randomspace1 = Math.floor(Math.random() *  randomspace.length); // between eye 1 and mouth
    const randomspace2 = Math.floor(Math.random() *  randomspace.length); // between mouth and eye 2
    const randomspace3 = Math.floor(Math.random() *  randomspace.length); // between beginning bracket and eye1, eye2 and ending bracket
    const randomspace4 = Math.floor(Math.random() *  randomspace.length);

    // print the guy!!!
    // print("(" + randomspace3 + randomeye1 + randomspace1 + randommouth1 + randomspace2 + randomeye2 + randomspace3 + ")"); // since this develops a lot of interesting critters, we can also have matching eye sets option
    // print("(" + randomspace3 + randomeye1 + randomspace1 + randommouth1 + randomspace2 + randomeye1 + randomspace3 + ")") // this line has both eyes the same as the first
    const randomtextemoji = "(" + randomspace[randomspace3] + eyes[randomeye1] + randomspace[randomspace1] + mouths[randommouth1] + randomspace[randomspace2] + eyes[randomeye2] + randomspace[randomspace4] + ")" ;
    document.getElementById("randomemoji").innerHTML = randomtextemoji;

};
