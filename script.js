document.getElementById("video").controls = false;


window.addEventListener("load",() => {
    document.getElementById("img").style.display="none";
})

let flag= "right";
document.getElementById("con").addEventListener("click",() => {
    if(flag == "left"){
        document.getElementById("video").play();
        document.getElementById("choose").classList.remove("right");
        document.getElementById("choose").classList.add("left");
        flag= "right";
    }
    else{
        document.getElementById("video").pause();
        document.getElementById("choose").classList.remove("left");
        document.getElementById("choose").classList.add("right");
        flag = "left";
    }
})