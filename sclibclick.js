function sclibcomplete(){
    if (document.getElementById("imgchange").src == "./assets/sclib.png"){
        document.getElementById("imgchange").src = "./assets/sclib.png";
    }
    else {
        document.getElementById("imgchange").src = "./assets/sclibwin.png"
        sclibballfound = "You found it! Wow! Wow! Thanks!"
        document.getElementById("sclibwin").innerHTML = sclibballfound;
    }
}