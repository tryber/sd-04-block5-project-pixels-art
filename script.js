let colors;
let colorSelected;
let pixelBoard;
let boardSizeInput;

function clearBoard() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function selectColor(element) {
  if (colorSelected !== element) {
    if (colorSelected) {
      colorSelected.className = colorSelected.className.replace(' selected', '');
    }
    element.className += ' selected';
    colorSelected = element;
  }
}

function eventSelectColor(event) {
  selectColor(event.target);
}

function paintPixel(event) {
  event.target.style.backgroundColor = colorSelected.style.backgroundColor;
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomizePallet() {
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColor();
  }
}

function generateGrid(size) {
  for (let y = 0; y < (size * size); y += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.addEventListener('click', paintPixel);
    pixelBoard.appendChild(pixel);
  }
  pixelBoard.style.width = `${size * 40}px`;
}

function generateBoard() {
  const pixelCount = document.getElementsByClassName('pixel').length;
  for (let i = 0; i < pixelCount; i += 1) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
  let size = boardSizeInput.value;
  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  generateGrid(size);
}

window.onload = function () {
  colors = document.getElementsByClassName('color');
  pixelBoard = document.getElementById('pixel-board');
  boardSizeInput = document.getElementById('board-size');
  generateGrid(5);
  selectColor(colors[0]);
  colorSelected.style.backgroundColor = 'black';
  randomizePallet();
};
