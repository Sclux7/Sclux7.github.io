/*this is garbage that i mostly copied i will definitely fix this at some point i promise i would
 never ever ever ever ever ever ever ever ever ever ever ever leave a coding project half finished*/
dragableElement(document.getElementById("pubox"));
var currentElement;

function dragableElement(elemlent){
    var p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    currentElement = elemlent;
    if (document.getElementById(elemlent.id + "header")) {
        document.getElementById(elemlent.id + "header").onmousedown = dragablemdown;
    } else {
        elemlent.onmousedown = dragablemdown;
    }
}

function dragablemdown(z){
    z = z || window.Event;
    z.preventDefault();
    p3 = z.clientX;
    p4 = z.clientY;
    document.onmouseup = dragablestop;
    document.onmousemove = dragablemove;
}

function dragablemove(z){
    z = z || window.Event;
    z.preventDefault();
    p1 = p3 - z.clientX;
    p2 = p4 - z.clientY;
    p3 = z.clientX;
    p4 = z.clientY;
    currentElement.style.top = (currentElement.offsetTop - p2) + "px";
    currentElement.style.left = (currentElement.offsetLeft - p1) + "px";
}

function dragablestop(){
    document.onmouseup = null;
    document.onmousemove = null;
}

{/* <div id="pubox" align="center">
<div id="puboxheader"> Sorry if the website is FREAKED UP im working on soemthing :D</div>
<div id="puboxheader"> You can drag this box around by dragging the pink part....</div>
<img src="./assets/working.gif" alt="hi">
</div>
<script src="./popupbox.js"></script> */}