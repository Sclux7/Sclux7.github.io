/*this is garbage that i mostly copied i will definitely fix this at some point i promise i would
 never ever ever ever ever ever ever ever ever ever ever ever leave a coding project half finished*/
dragable(document.getElementById("pubox"));

function dragable(elemlent){
    var p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    if (document.getElementById(elemlent.id + "header")) {
        document.getElementById(elemlent.id + "header").onmousedown = dragablemdown;
    } else {
        elemlent.onmousedown = dragablemdown;
    }
}

function dragablemdown(z){
    p3 = z.clientX;
    p4 = z.clientY;
    document.onmousemove = dragablemove;
}

function dragablemove(z){
    p1 = p3 - z.clientX;
    p2 = p4 - z.clientY;
    p3 = z.clientX;
    p4 = z.clientY;
    elemlent.style.top = (elemlent.offsetTop - p2) + "px";
    elemlent.style.left = (elemlent.offsetLeft - p1) + "px";
}

function dragablestop(){
    document.onmouseup = null;
    document.onmousemove = null;
}