// Query selectors
const colorPallete = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('.clear-board');
const boardSize = document.querySelector('.board-size');
const pixelBoard = document.querySelector('.pixel-board');
const generateBoard = document.querySelector('.generate-board');
const pallete = document.querySelector('.color-pallete');

// Color pallete
colorPallete.forEach((element) => {
  for (let i = 0; i < 5; i += 1) {
    element.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  pallete.firstElementChild.style.backgroundColor = 'black';

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

// Create board
generateBoard.addEventListener('click', () => {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
  // for (let i = 0; i < pixels.length; i += 1) {
  //   pixelBoard.removeChild(pixels[i]);
  // }
  let size = boardSize.value;
  if (size < 5) size = 5;
  if (size > 50) size = 50;

  pixelBoard.style.height = `${(size * 40)}px`;
  pixelBoard.style.width = `${(size * 40)}px`;
  pixelBoard.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  pixelBoard.style.gridTemplateRows = `repeat(${size}, 40px)`;

  for (let i = 0; i < size * size; i += 1) {
    const newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    pixelBoard.appendChild(newPixel);
  }
});
