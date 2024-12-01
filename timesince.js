const originalDate = new Date('2024-05-03T12:29:30Z');
const endOfYearDate = new Date('2025-01-01T00:00:00Z')
const targetSecondsMilestone = [13000000, 14000000, 15000000, 16000000];  // new

function findNewTarget(index){
    const newTargetM = targetSecondsMilestone[index] + 1000000;  //this doesnt work atm, fix?
    targetSecondsMilestone[index] = newTargetM;
    console.log(`Target ${index} updated to ${newTargetM}`);
}

function counterSeconds(){
    const now = new Date();
    const differenceSeconds = Math.floor((now - originalDate) / 1000);
    const counter = document.getElementById('counter');
    counter.textContent = `${differenceSeconds}`;

    const secondsLeft = Math.floor((endOfYearDate - now) / 1000);
    const countdowneoy = document.getElementById('countdowneoy');
    countdowneoy.textContent = `${secondsLeft}`;

    targetSecondsMilestone.forEach((targetSeconds, index) => {
        const remainingSeconds = targetSeconds - differenceSeconds;  // new
        const countdown = document.getElementById(`countdown-${index}`);  // new
        if (countdown) {
            countdown.textContent = remainingSeconds >= 0 ? `${remainingSeconds}` : "0";  // new
        }
        if (remainingSeconds <= 0) {
            findNewTarget(index);
        }
    });

    setTimeout(counterSeconds, 1000);
};

counterSeconds();