const sectionPalette = document.getElementById('color-palette');
const sectionBoard = document.getElementById('pixel-board');
const selectedColor = document.querySelector('.selected');
selectedColor.innerHTML = 'black';

function checkColor(e) {
  selectedColor.innerHTML = e.target.className;
}
sectionPalette.addEventListener('click', checkColor);

function changeColor(e) {
  e.target.className = selectedColor.innerHTML;
}
sectionBoard.addEventListener('click', changeColor);
