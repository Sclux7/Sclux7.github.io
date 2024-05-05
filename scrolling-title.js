let title = document.title;
let speed = 100;
let i = 0;

setInterval(function(){
    i = (i+1) % title.length;
    document.title = title.substring(i) + title.substring(0, i);
}, speed);