// let pageTitle = document.getElementById("title");
// pageTitle.innerHTML = "Testando mudança de título";

let sectionPalette = document.getElementById("color-palette");
let sectionBoard = document.getElementById("pixel-board");
let selectedColor = document.querySelector('.selected');

function checkColor(e) {
  selectedColor.innerHTML = e.target.className;
}
sectionPalette.addEventListener('click', checkColor);

function changeColor(e) {
    console.log(selectedColor.innerHTML);
  e.target.className = selectedColor.innerHTML;
}
sectionBoard.addEventListener('click', changeColor);
