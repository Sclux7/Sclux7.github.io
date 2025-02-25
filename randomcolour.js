function getColour() {
    const colourR = Math.floor(Math.random() * 256);
    const colourG = Math.floor(Math.random() * 256);
    const colourB = Math.floor(Math.random() * 256);
    const randomColour = `rgb(${colourR},${colourG},${colourB})`;
    document.getElementById("colourid").style.color = randomColour;
}

document.addEventListener('DOMContentLoaded', getColour);