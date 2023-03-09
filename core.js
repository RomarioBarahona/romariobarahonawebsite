//add and remove the show class from the navigation bar on click
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector("nav");

navIcon.onclick = function () {
    nav.classList.toggle('show');
}