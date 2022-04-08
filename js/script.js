const navBar = document.getElementById("nav-main");
const title = document.getElementById("title-h1");

function scroll() {
    if (window.scrollY < 120){
        navBar.classList.remove("scrolled");
        title.classList.add("hidden");
    } else {
        navBar.classList.add("scrolled");
        title.classList.remove("hidden");
    } 
}

window.addEventListener("scroll", scroll());