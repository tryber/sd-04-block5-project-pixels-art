let colorPalette;
let pixelBoard;
let selectedColor;

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

function chooseColor(event) {
  for (let i = 0; i < selectedColor.length; i += 1) {
    selectedColor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
  colorPalette.classList.remove('selected');
}

function paint(event) {
  const color = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = color.style.backgroundColor;
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
  selectedColor = document.getElementsByClassName('color');
  selectedColor[0].classList.add('selected');

  randomColorPalette();
  createPixelBoard(5);
  colorPalette.addEventListener('click', chooseColor);
  pixelBoard.addEventListener('click', paint);
};
