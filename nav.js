const nav = document.getElementById("nav");
const topArea = document.getElementById("top");

nav.onclick = () => {
    setTimeout(()=>{
        nav.style.height = 0;
        nav.style.paddingBottom = 0;
        nav.style.paddingTop = 0;
    },20)
}

topArea.onclick = () => {
    nav.style.height = "calc(100% - 100px)";
    nav.style.paddingBottom = "50px";
    nav.style.paddingTop = "50px";
}