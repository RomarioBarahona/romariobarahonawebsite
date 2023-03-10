//add and remove the show class from the navigation bar on click
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector("nav");

navIcon.onclick = function () {
    nav.classList.toggle('show');
}

//Detects Dark or Light mode
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(matched);

let body = document.querySelector("body");
let content = document.getElementById("content");

if (dark) {
	body.style.backgroundColor = "#1a1a1a";
	content.setAttribute("class", "dark");
} else {
	body.style.backgroundColor = "#f5f5f5";
	content.setAttribute("class", "light");
}
