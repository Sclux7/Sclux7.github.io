function randomImagePos(image) {
    const pageW = document.documentElement.scrollWidth;
    const pageH = document.documentElement.scrollHeight;

    const maxW = 895;
    const maxH = 7500;

    const imageW = image.offsetWidth;
    const imageH = image.offsetHeight;

    const restrictW = Math.min(pageW, maxW) - imageW;
    const restrictH = Math.min(pageH, maxH) - imageH;

    const randomX = Math.floor(Math.random() * restrictW);
    const randomY = Math.floor(Math.random() * restrictH);

    return {x: randomX, y: randomY};
}

function genImage() {
    const image = document.getElementById('sclibrandom');
    const {x, y} = randomImagePos(image);
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    image.addEventListener('click',function() {
        image.style.display = 'none';
    });
}

window.onload = genImage;