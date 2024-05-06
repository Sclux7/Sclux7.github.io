function changebg(e){
    document.getElementsByTagName('body')[0].style["background-image"]=`url(${e.src})`;
    document.getElementsByTagName('body')[0].style["background-size"]="150px";
    document.getElementsByTagName('body')[0].style["background-repeat"]="repeat";
    console.log(e);
}