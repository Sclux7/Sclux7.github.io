var deck = ['7d', '8s', '6h', 'js', '9h', '3d', '8c', '10h', '5d', '4c', 'kh', '9s', '10c', 'ac', '5c', '7h', 'qc', '2c', 'jd', '4h', 'qs', '6s', '3c', '4d', 'ks', '2d', '7s', '3s', '9d', '8h', '10s', 'ad', '2h', 'kc', '6d', 'qh', 'jc', '5h', 'ah', '7c', '8d', 'kd', '3h', '6c', '5s', '10d', 'qc', '4s', 'jd', '9c', 'qd', 'as', '2s'];

function getDayOfYear() {
    var current = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = current - start;
    var oneDay = (24 * 60 * 60 * 1000);
    var dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
}

function cotd() {
    var cardOfDay = Math.floor(getDayOfYear()%deck.length);
    document.getElementsByClassName('cotdclass')[0].src="./assets/" + deck[cardOfDay] + ".jpg";
}