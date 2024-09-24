const originalDate = new Date('2024-05-03T12:29:30Z');
const targetSecondsMilestone = [12422400, 13000000, 14000000, 15000000];  // new

function findNewTarget(index){
    const newTargetM = targetSecondsMilestone[index] + 1000000;
    targetSecondsMilestone[index] = newTargetM;
    console.log(`Target ${index} updated to ${newTargetM}`);
}

function counterSeconds(){
    const now = new Date();
    const differenceSeconds = Math.floor((now - originalDate) / 1000);
    const counter = document.getElementById('counter');
    counter.textContent = `${differenceSeconds}` ;

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