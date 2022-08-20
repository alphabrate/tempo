const circle = document.getElementById("circle");
var clicks = 0;
var avgTime = 0;
var timeforonemu = 60*1000;
var sumTime = 0;
var firstClick = true;
var lasttimestamp = 0;
var cs = 0;
var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
if (isDarkTheme.matches) {
    document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#F1F1F1"/></svg>
    0`;
} else {
    document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#1C1C1C"/></svg>
    0`;
}
var to = setTimeout;
document.getElementById("clear").onclick=()=>{
    isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (isDarkTheme.matches) {
        document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#F1F1F1"/></svg>
        0`;
    } else {
        document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#1C1C1C"/></svg>
        0`;
    }
    avgTime = 0;
    sumTime = 0;
    firstClick = true;
    lasttimestamp = 0;
    cs = 0;
};
document.getElementById("top").onclick=()=>{
    
};
circle.addEventListener("mousedown",()=>{
    clearTimeout(to);
    circle.innerHTML+=`<div class="feedback" id="fb${clicks}"></div>`;
    clicks++;
    if (firstClick) {
        firstClick = false;
        lasttimestamp = Date.now();
        isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (isDarkTheme.matches) {
            document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#F1F1F1"/></svg>
            80`;
        } else {
            document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#1C1C1C"/></svg>
            80`;
        }
    } else {
        sumTime += (Date.now()-lasttimestamp);
        lasttimestamp = Date.now();
        cs++;
        avgTime = sumTime/cs;
        isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (isDarkTheme.matches) {
            document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#F1F1F1"/></svg>
            ${Math.ceil(timeforonemu/avgTime)}`;
        } else {
            document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#1C1C1C"/></svg>
            ${Math.ceil(timeforonemu/avgTime)}`;
        }
    }
    document.getElementById("PPing").href="play.html?bpm="+Math.ceil(timeforonemu/avgTime)+"&s=auto";
    document.getElementById("play").innerText = `Play in : ${Math.ceil(timeforonemu/avgTime)} BPM`
    to = setTimeout(()=>{
        isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (isDarkTheme.matches) {
            document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#F1F1F1"/></svg>
            0`;
        } else {
            document.getElementById("tempo").innerHTML = `<svg width="139" height="82" viewBox="0 0 139 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.807 56.5433C27.5568 54.8151 24.7891 53.9063 21.9576 53.9656C9.77832 53.9656 0 62.9874 0 72.6587C0 78.4533 4.64802 82 10.7325 82C20.5211 82 32.7004 72.6587 32.7004 63.3173V0H29.8172L29.807 56.5433ZM139 41.8919H71.1776V29.9626H139V41.8919ZM139 72.0091H71.1776V60.2551H139V72.0091Z" fill="#1C1C1C"/></svg>
            0`;
        }
        avgTime = 0;
        sumTime = 0;
        firstClick = true;
        lasttimestamp = 0;
        cs = 0;
    }, 30000);
});

circle.addEventListener("mouseup", ()=>{
    document.getElementById(`fb${clicks-1}`).style.opacity = "0";
    setTimeout(()=>{
        document.getElementById(`fb${clicks-1}`).remove();
        clicks--;
    }, 200);
});