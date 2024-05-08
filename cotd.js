var deck = ['7d', '8s', '6h', 'js', '9h', '3d', '8c', '10h', '5d', '4c', 'kh', '9s', '10c', 'ac', '5c', '7h', 'qc', '2c', 'jd', '4h', 'qs', '6s', '3c', '4d', 'ks', '2d', '7s', '3s', '9d', '8h', '10s', 'ad', '2h', 'kc', '6d', 'qh', 'jc', '5h', 'ah', '7c', '8d', 'kd', '3h', '6c', '5s', '10d', 'qc', '4s', 'jd', '9c', 'qd', 'as', '2s']
var today = new Date();
var start = new Date(today.getFullYear(), 0, 0);
var difference = today - start + ((start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
var wholeDay = 1000 * 60 * 60 * 24;
var day = Math.floor(difference / wholeDay);

var cardToday = 365 % 52;
var currentDay = 0;

function cotd(deck) {
    var cardOfDay = Math.floor(Math.random() * deck.length);
    deck[cardOfDay];
}

function newDay() {
    const selectedDays = JSON.parse(localStorage.getItem('selectedDays')) || {};
    if (selectedDays.day !== day) {
        const selectedDay = cotd();
        selectedDays.day = day;
        selectedDays.selectedDay = selectedDay;
        localStorage.setItem('selectedDays', JSON.stringify(selectedDays));
        document.getElementById("cotdlocation").innerHTML = deck[selectedDay];
        /* fix this and other comment its too late for this shit*/
    } else {
        /* appropriate result */
    }
}

/* 
value obtained from %ing is index for array
name of picture - > src of page*/