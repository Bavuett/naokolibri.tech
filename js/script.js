const navBar = document.getElementById("nav-main");
const title = document.getElementById("title-h1");
const splash = document.getElementById("splash-screen");

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

window.addEventListener("load", function(event) {
    this.setTimeout(function() {
        splash.classList.add("hidden");
    }, 805);
});

window.switchPage = function(href) {
    splash.classList.remove("hidden");
    setTimeout(function() {
      window.location.href = href;
    }, 805);
}