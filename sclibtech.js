function randomImagePos(image) {
    const container = document.getElementById('fullsizecontainer');
    const containerW = container.clientWidth;
    const containerH = container.clientHeight;
    const imageW = image.offsetWidth;
    const imageH = image.offsetHeight;

    const randomX = Math.floor(Math.random() * (containerW-imageW));
    const randomY = Math.floor(Math.random() * (containerH-imageH));

    return {x: randomX, y: randomY};
}

function genImage() {
    const image = document.getElementById('sclibrandom');
    const {x, y} = randomImagePos(image);
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
}

window.onload = genImage;