var facts = [1, 2, 3, 4, 6]

function nextfactpleaseawesome() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById("factsDisplay").innerHTML = facts(randomNumber)
}