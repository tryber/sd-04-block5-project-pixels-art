const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const pixelBoard = document.getElementById("pixel-board");
const palette = document.querySelector("#color-palette");
var atual = color1;

function selected(div) {
  div.classList.add("selected");
}
selected(color1);

const cor = document.querySelector(".selected");

palette.addEventListener("click", function (e) {
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add("selected");
});

pixelBoard.addEventListener("click", function (event) {
  const selectedColor = document.querySelector(".selected");
  console.log(event.target);
  console.log(selectedColor);
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
});
