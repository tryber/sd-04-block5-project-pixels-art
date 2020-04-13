const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
let selected = 'black';
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');


black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
blue.style.backgroundColor = 'blue';
yellow.style.backgroundColor = 'yellow';

colorPalette.addEventListener('click', function (event) {
  selected = event.target.id;
});

pixelBoard.addEventListener('click', function (event) {
  const targetElement = event.target;
  targetElement.style.backgroundColor = selected;
});
