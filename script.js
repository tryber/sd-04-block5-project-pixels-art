let firstColor = document.getElementById("firstColor");
let secondColor = document.getElementById("secondColor");
let thirdColor = document.getElementById("thirdColor");
let fourthColor = document.getElementById("fourthColor");

firstColor.style.backgroundColor = "black";
secondColor.style.backgroundColor = "blue";
thirdColor.style.backgroundColor = "yellow";
fourthColor.style.backgroundColor = "red";

window.addEventListener("load", function() {
  firstColor.classList.add("colorSelected");
});

function firstColorSelected() {
  let color = document.querySelector(".colorSelected");
    if (color) {
      color.classList.remove("colorSelected");
      firstColor.classList.add("colorSelected");
    }
};

function secondColorSelected() {
  let color = document.querySelector(".colorSelected");
    if (color) {
      color.classList.remove("colorSelected");
      secondColor.classList.add("colorSelected");
    } 
};

function thirdColorSelected() {
  let color = document.querySelector(".colorSelected");
    if (color) {
      color.classList.remove("colorSelected");
      thirdColor.classList.add("colorSelected");
    } 
};

function fourthColorSelected() {
  let color = document.querySelector(".colorSelected");
    if (color) {
      color.classList.remove("colorSelected");
      fourthColor.classList.add("colorSelected");
    } 
};

let pixelBoard = document.getElementById("pixel-board");

pixelBoard.addEventListener("click", function(changeColor) {
  changeColor.target.style.backgroundColor = document.querySelector(".colorSelected").style.backgroundColor;
});
