/////////////////////////////////////////////
// Author: Jessy Perreault
// Date: Feb-19-2019
// Course: CPNT-262
// Project: Workshop-Day-9-Final-Assignment
/////////////////////////////////////////////


var options = { year: 'numeric', month: 'long', day: 'numeric' };
var date = new Date().toLocaleDateString('en-US', options);

document.getElementById("date").innerHTML = date;


var menuButton = document.querySelector(".menuButtonBox");
var slideMenu = document.querySelector(".slideMenu");
var closeMenu = document.querySelector(".closeMenu");

menuButton.addEventListener("click", function(event) {
    slideMenu.style.transform = "translate(-300px, 0)";
});

closeMenu.addEventListener("click", function(event) {
    slideMenu.style.transform = "translate(300px, 0)";
});

