const iconMenu = document.querySelector("#iconMenu");
const menu = document.querySelector("#menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
});