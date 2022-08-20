const circle = document.getElementById("circle");
const bpm = location.search.split("bpm=")[1].split("&")[0];
var sound = location.search.split("s=")[1].split("&")[0];
const sounds = ["D. Set","Con. Sn.","Con. BD","Trgl.","Wd. Bl.","Clv.","Tamb."]

if (sound == "auto") {
    if (localStorage.sound==undefined) sound = 0;
    else sound = localStorage.sound;
} else {
    localStorage.setItem("sound",sound);
}

for(let i=0;i<sounds.length;i++){
    var a = document.createElement("a");
    a.innerText = sounds[i];
    a.href=`play.html?bpm=${bpm}&s=${i}`;
    document.getElementById("nav").append(a);
}



var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
if (isDarkTheme.matches) {
    document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#F1F1F1"/></svg>
    ${bpm}`;
} else {
    document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#1C1C1C"/></svg>
    ${bpm}`;
}
document.getElementById("clear").onclick = {

}
const playsound = () => {
    var a = document.createElement("audio");
    a.src="bit.mp3";
    a.currentTime = (sound * 750 * 2)/1000;
    document.body.append(a);
    a.play();
    setTimeout(()=>{
        a.pause();
        a.remove();
    },750*2)
}
clicks=-1;
var inv;
const playAll = () => {
    inv = setInterval(()=>{
        var a = document.createElement("div");
        a.classList.add("feedback");
        document.getElementById("circle").append(a);
        setTimeout(()=>{
            a.style.opacity = "0";
            setTimeout(()=>a.remove(),200);
        },200);
        playsound()
    },60/bpm*1000);
}
var toggled = true;
const toggleInv = () => {
    
    if(!toggled){
        clearInterval(inv);
        toggled=true;
    } else {
        playAll();
        toggled=false;
    }
}