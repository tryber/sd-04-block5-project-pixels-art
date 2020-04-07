const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const pixelBoard = document.getElementById("pixel-board");
var atual = color1;

function selected(div) {
  div.classList.add("selected");
}
selected(color1);

const cor = document.querySelector(".selected");

color1.addEventListener("click", function (e) {
  e.target.classList.add("selected");
  atual.classList.remove("selected");
  if (atual !== color1) {
    atual = color1;
  }
});
color2.addEventListener("click", function (e) {
  e.target.classList.add("selected");
  atual.classList.remove("selected");
  if (atual !== color2) {
    atual = color2;
  }
});
color3.addEventListener("click", function (e) {
  e.target.classList.add("selected");
  atual.classList.remove("selected");
  if (atual !== color3) {
    atual = color3;
  }
});
color4.addEventListener("click", function (e) {
  e.target.classList.add("selected");
  atual.classList.remove("selected");
  if (atual !== color4) {
    atual = color4;
  }
});

pixelBoard.addEventListener("click", function (event) {
  const selectedColor = document.querySelector(".selected");
  console.log(event.target);
  console.log(selectedColor);
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
});
