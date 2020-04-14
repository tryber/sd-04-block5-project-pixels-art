const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
let selected = 'black';
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');

colorPalette.addEventListener('click', function (event) {
  selected = event.target.id;
  black.className = 'color';
  red.className = 'color';
  blue.className = 'color';
  yellow.className = 'color';
  event.target.className = 'color selected';
});

pixelBoard.addEventListener('click', function (event) {
  const targetElement = event.target;
  targetElement.style.backgroundColor = selected;
});
