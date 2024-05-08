var deck = ['7d', '8s', '6h', 'js', '9h', '3d', '8c', '10h', '5d', '4c', 'kh', '9s', '10c', 'ac', '5c', '7h', 'qc', '2c', 'jd', '4h', 'qs', '6s', '3c', '4d', 'ks', '2d', '7s', '3s', '9d', '8h', '10s', 'ad', '2h', 'kc', '6d', 'qh', 'jc', '5h', 'ah', '7c', '8d', 'kd', '3h', '6c', '5s', '10d', 'qc', '4s', 'jd', '9c', 'qd', 'as', '2s'];
var deckfullname = ["7 of Clubs", " 8 of Spades", " 6 of Hearts", " Jack of Spades", " 9 of Hearts", " 3 of Diamonds", " 8 of Clubs", " 10 of Hearts", " 5 of Diamonds", " 4 of Clubs", " King of Hearts", " 9 of Spades", " 10 of Clubs", " Ace of Clubs", " 5 of Clubs", " 7 of Hearts", " Queen of Clubs", " 2 of Clubs", " Jack of Diamonds", " 4 of Hearts", " Queen of Spades", " 6 of Spades", " 3 of Clubs", " 4 of Diamonds", " King of Spades", " 2 of Diamonds", " 7 of Spades", " 3 of Spades", " 9 of Diamonds", " 8 of Hearts", " 10 of Spades", " Ace of Diamonds", " 2 of Hearts", " King of Clubs", " 6 of Diamonds", " Queen of Hearts", " Jack of Clubs", " 5 of Hearts", " Ace of Hearts", " 7 of Clubs", " 8 of Diamonds", " King of Diamonds", " 3 of Hearts", " 6 of Clubs", " 5 of Spades", " 10 of Diamonds", " Queen of Clubs", " 4 of Spades", " Jack of Diamonds", " 9 of Clubs", " Queen of Diamonds", " Ace of Spades", " 2 of Spades"];
var elementtt = $('#target3');


function getDayOfYear() {
    var current = new Date();
    var start = new Date(current.getFullYear(), 0, 0);
    var diff = current - start;
    var oneDay = 24 * 60 * 60 * 1000;
    var dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
}

function cotd() {
    var cardOfDay = Math.floor((getDayOfYear())%deck.length);
    document.getElementsByClassName('cotdclass2')[0].src="./assets/cards/" + deck[cardOfDay] + ".png";
    document.getElementById('cardfullname').innerHTML = deckfullname[cardOfDay];
}
cotd()