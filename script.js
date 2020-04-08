let blackColor = document.getElementById("black");
let purpleColor = document.getElementById("purple");
let redColor = document.getElementById("red");
let greenColor = document.getElementById("green");
let clearBoard = document.getElementById("clear-board");
let pixelBoard = document.getElementsByClassName("pixel");

blackColor.style.background = "black";
purpleColor.style.background = "purple";
redColor.style.background = "red";
greenColor.style.background = "green";

clearBoard.addEventListener("click", function () {
  for (i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.background = "white";
  }
});

function saveColor(n) {
  let color = n;
  localStorage.removeItem('color');
  localStorage.setItem('color', color);
}

window.onload = function () {
  saveColor("black");
  black.className = "color selected";
};

let colors = document.getElementsByClassName("color");
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function (event) {
    let colorsValue = event.target.style.backgroundColor;
    let colorsClassValue = colors[i].className;
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove("selected");           
    }
    colors[i].classList.add("selected");                       
  })
}

let pixels = document.querySelectorAll(".pixel");
for (let i = 0; i < pixels.length; i += 1) {                     
  pixels[i].addEventListener('click', function (event) {
    let selectedColor = document.querySelector(".selected");
    let colorsSelected = selectedColor.style.backgroundColor;
    pixels[i].style.backgroundColor = colorsSelected;
  })
}
