/////////////////////////////////////////////
// Author: Jessy Perreault
// Date: Feb-19-2019
// Course: CPNT-262
// Project: Workshop-Day-9-Final-Assignment
/////////////////////////////////////////////


const options = { year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString('en-US', options);

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



// Animation



var body = document.getElementById("vpBody");

var jet = document.getElementById("jet");
var walkForward = true;

function jetWalk() {
    if (jet.offsetLeft >= document.body.offsetWidth - jet.offsetWidth) {
        walkForward = false;
    }

    if (jet.offsetLeft <= 0) {
        jet.style.transform = "scale(-1,1)";
        walkForward = true;
    }

    if (walkForward) {
        jet.style.left = jet.offsetLeft + 1 + "px";
        

    } else {
        jet.style.transform = "scaleX(1)";
        jet.style.left = jet.offsetLeft - 1 + "px";
        
    }

    
}
var jetTimer = setInterval(jetWalk, 5);

///////////////////
// Image Changer
///////////////////
const image1 = document.getElementById("mainImg1");
const image2 = document.getElementById("mainImg2");
const image3 = document.getElementById("mainImg3");
//Image1 mouseover change

image1.addEventListener("mouseover", function(){
    image1.src = "https://images8.alphacoders.com/642/thumb-1920-642527.jpg"  
  }); //selects mainImg1 to be changed when mouse hovers overtop.

  image1.addEventListener("mouseout", function(){
    image1.src="./Images/PantlessBaseball.png"
  }); //selects mainImg1 to be changed when mouse leaves hover zone.


  //Image2 mouseover change
  image2.addEventListener("mouseover", function(){
    image2.src = "https://images8.alphacoders.com/642/thumb-1920-642527.jpg"  
  }); //selects mainImg1 to be changed when mouse hovers overtop.

  image2.addEventListener("mouseout", function(){
    image2.src="./Images/apocalypse.jpg"
  }); //selects mainImg1 to be changed when mouse leaves hover zone.

  //Image3 mouseover change
  image3.addEventListener("mouseover", function(){
    image3.src = "https://images8.alphacoders.com/642/thumb-1920-642527.jpg"  
  }); //selects mainImg1 to be changed when mouse hovers overtop.

  image3.addEventListener("mouseout", function(){
    image3.src="./Images/dog-dimension.jpg"
  }); //selects mainImg1 to be changed when mouse leaves hover zone.
  