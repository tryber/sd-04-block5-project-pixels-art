let black = document.querySelector(".black");
let blue = document.querySelector(".blue");
let pink = document.querySelector(".pink");
let gray = document.querySelector(".gray");
// Select black when the page load
window.addEventListener("load", function() {
  black.classList.add("selected");
});
let palette = document.querySelectorAll(".color")


function blackSelected() {
    let item = document.querySelector(".color.selected");
    if (item) {
      item.classList.remove("selected");
      black.classList.add("selected");
    }
  console.log(palette);
};

function blueSelected() {
  let item = document.querySelector(".color.selected");
    if (item) {
      item.classList.remove("selected");
      blue.classList.add("selected");
    } 
  console.log(palette);
};
function pinkSelected() {
  let item = document.querySelector(".color.selected");
    if (item) {
      item.classList.remove("selected");
      pink.classList.add("selected");
    } 
  console.log(palette);
};
function graySelected() {
  let item = document.querySelector(".color.selected");
    if (item) {
      item.classList.remove("selected");
      gray.classList.add("selected");
    } 
  console.log(palette);
};




