let colorPalette;
let pixelBoard;

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function randomBackgroundColor() {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return bgColor;
}

function randomColorPalette() {
  for (let i = 1; i < colorPalette.children.length; i += 1) {
    colorPalette.children[i].style.backgroundColor = randomBackgroundColor();
  }
}

function createPixelBoard(size) {
  pixelBoard.style.width = `${size * 42}px`;
  for (let line = 0; line < size * size; line += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    pixelBoard.appendChild(newPixel);
  }
}

window.onload = function () {
  colorPalette = document.querySelector('#color-palette');
  pixelBoard = document.querySelector('#pixel-board');

  randomColorPalette();

  createPixelBoard(5);

  let selectedColor = document.getElementsByClassName('color');
  selectedColor[0].classList.add('selected');

  console.log(colorPalette);
  console.log(pixelBoard);

  console.log(colorPalette.children);
  console.log(pixelBoard.children);

};
