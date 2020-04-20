const palette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.querySelectorAll('.pixel');
const clearBtn = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');

// Select Color
palette.addEventListener('click', function (event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
});

// Color the Pixel Board
pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = document.querySelector('.selected').id;
});

// Clear Board
clearBtn.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

// Define the Pixel Board Size
generateBoard.addEventListener('click', function () {
  for (let  i = 0; i < pixels.length; i += 1) {
    pixelBoard.removeChild(pixels[i]);
  }
  let size = document.getElementById('board-size').value;
  if (size < 5) size = 5;
  if (size > 50) size = 50;

  pixelBoard.style.height = size * 42 + 'px';
  pixelBoard.style.width = size * 42 + 'px';
  for (let i = 0; i < size * size; i += 1) {
    const newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    pixelBoard.appendChild(newPixel);
    document.getElementById('board-size').value = '';
  }
});