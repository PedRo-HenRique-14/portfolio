var buttonMenu = document.querySelector(".button-menu");
var navMenu = document.querySelector(".header-nav");
var arrow = document.querySelector(".fa-chevron-left")
var showing = false;

buttonMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    arrow.classList.toggle("active");
});