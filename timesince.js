const originalDate = new Date('2024-05-03T12:29:30Z');
function counterSeconds(){
    const now = new Date();
    const differenceSeconds = Math.floor((now - originalDate) / 1000);
    const counter = document.getElementById('counter');
    counter.textContent = `Seconds since ${originalDate.toISOString()}: ${differenceSeconds}`
    setTimeout(updateC, 1000);
}

updateC();