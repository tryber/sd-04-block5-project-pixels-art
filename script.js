/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable require-jsdoc */
let selectedColor = null;
const colorPalette = document.querySelectorAll('.color');
colorPalette.forEach((color) => {
  if (color.classList.contains('firstColor')) {
    color.classList.add('selected');
    selectedColor = color;
  } else {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  color.addEventListener('click', () => {
    if (selectedColor) {
      selectedColor.classList.remove('selected');
    }
    color.classList.add('selected');
    selectedColor = color;
  });
});

function createBoard(pixels) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let i = 0; i < pixels; i += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row flex center';
    for (let ia = 0; ia < pixels; ia += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
      });
      pixelRow.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelRow);
  }
}
// Create initial  board;
createBoard(5);

const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
});

const generateBtn = document.querySelector('#generate-board');
generateBtn.addEventListener('click', () => {
  const boardSize = document.querySelector('#board-size').value;
  if (boardSize > 50) {
    createBoard(50);
  } else if (boardSize < 5) {
    createBoard(5);
  } else {
    createBoard(boardSize);
  }
});
