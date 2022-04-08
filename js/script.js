const navBar = document.getElementById("nav-main");
const title = document.getElementById("title-h1");

window.addEventListener("scroll", function(){
    if (window.scrollY < 120){
      navBar.classList.remove("scrolled");
      title.classList.add("hidden");
    } else {
      navBar.classList.add("scrolled");
      title.classList.remove("hidden");
    }

    console.log(window.scrollY);
});