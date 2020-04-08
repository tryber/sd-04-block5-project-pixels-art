/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable require-jsdoc */
function setColotPalette() {
  const colorPalette = document.querySelectorAll('.color');
  colorPalette.forEach((color) => {
    if (color.classList.contains('firstColor')) {
      color.classList.add('selected');
    } else {
      const red = Math.round(Math.random() * 255);
      const green = Math.round(Math.random() * 255);
      const blue = Math.round(Math.random() * 255);
      color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    color.addEventListener('click', (e) => {
      document.querySelector('.selected').classList.remove('selected');
      e.target.classList.add('selected');
    });
  });
}
setColotPalette();

function createBoard(pixels) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let i = 0; i < pixels; i += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row flex center';
    for (let ia = 0; ia < pixels; ia += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.addEventListener('click', (e) => {
        const selectedColor = document.querySelector('.selected');
        e.target.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
      });
      newPixel.addEventListener('dblclick', (e) => {
        e.target.style.backgroundColor = 'white';
      });
      pixelRow.appendChild(newPixel);
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
    pixel.style.backgroundColor = 'white';
    if (getComputedStyle(pixel).visibility === 'hidden') {
      pixel.style.visibility = 'visible';
    }
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

const hideBtn = document.querySelector('#hide-board');
hideBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    if (getComputedStyle(pixel).backgroundColor === 'rgb(255, 255, 255)') {
      if (getComputedStyle(pixel).visibility === 'hidden') {
        pixel.style.visibility = 'visible';
        hideBtn.innerHTML = 'Ocultar Board';
      } else {
        pixel.style.visibility = 'hidden';
        hideBtn.innerHTML = 'Exibir Board';
      }
    }
  });
});

const generatePaletteBtn = document.querySelector('#generate-palette');
generatePaletteBtn.addEventListener('click', () => {
  let numberOfColors = document.querySelector('#palette-size').value;
  if (numberOfColors > 10) {
    numberOfColors = 10;
  } else if (numberOfColors <= 0) {
    numberOfColors = 5;
  }
  // Clean the actual color palette
  document.querySelector('#color-palette').innerHTML = '';
  // Generate new color palette
  for (let i = 0; i < numberOfColors; i += 1) {
    const colorElement = document.createElement('div');
    const lastColor = numberOfColors - 1;
    switch (true) {
      case i === 0:
        colorElement.className = 'color firstColor';
        break;
      case i === lastColor:
        colorElement.className = 'color lastColor';
        break;
      default:
        colorElement.className = 'color';
        break;
    }
    document.querySelector('#color-palette').appendChild(colorElement);
  }
  setColotPalette();
});
