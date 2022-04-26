const navBar = document.getElementById("nav-main");
const title = document.getElementById("title-h1");
const splash = document.getElementById("splash-screen");

console.log((screen.width * 10) / 100);

window.addEventListener("scroll", function() {
    if (window.scrollY < 120 && isPost != true){
        navBar.classList.remove("scrolled");
        title.classList.add("hidden");
    } else {
        navBar.classList.add("scrolled");
        title.classList.remove("hidden");
    } 
    console.log(window.scrollY);
});

window.addEventListener("load", function(event) {
    this.setTimeout(function() {
        splash.classList.add("hidden");
    }, 805);

    if (isPost == true) {
        navBar.classList.add("scrolled");
    }
});

window.switchPage = function(href) {
    splash.classList.remove("hidden");
    setTimeout(function() {
      window.location.href = href;
    }, 805);
}
