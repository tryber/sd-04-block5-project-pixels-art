// Query selectors
const colorPallete = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('.clear-board');
const boardSize = document.querySelector('.board-size');
const pixelBoard = document.querySelector('.pixel-board');
const generateBoard = document.querySelector('.generate-board');


// Color pallete
colorPallete.forEach((element) => {
  element.addEventListener('click', () => {
    colorPallete.forEach((color) => {
      color.classList.remove('selected');
    });
    element.classList.add('selected');
  });
});

// Click paint
function clickPaint(pixel) {
  pixel.addEventListener('click', (clickedPixel) => {
    clickedPixel.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  });
}

// Board painting
pixels.forEach((pixel) => {
  clickPaint(pixel);
});

// Clear board
clearBoard.addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
});

// Check input value
function checkInputValue() {
  let sizeInput;
  if (boardSize.value <= 5) sizeInput = 5;
  else if (boardSize.value >= 50) sizeInput = 50;

  return sizeInput;
}

// Create board
generateBoard.addEventListener('click', () => {
  const sizeInput = checkInputValue();

  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }

  for (let size = 0; size < sizeInput * sizeInput; size += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    clickPaint(pixel);
    pixelBoard.appendChild(pixel);
  }

  pixelBoard.style.gridTemplateColumns = `repeat(${sizeInput}, 40px)`;
  pixelBoard.style.gridTemplateRows = `repeat(${sizeInput}, 40px)`;
});
