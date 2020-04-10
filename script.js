const colorPallete = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('.clear-board');


// Color selection
colorPallete.forEach((element) => {
  element.addEventListener('click', () => {
    colorPallete.forEach((color) => {
      color.classList.remove('selected');
    });
    element.classList.add('selected');
  });
});

// Pixels painting
pixels.forEach((pixel) => {
  pixel.addEventListener('click', (clickedPixel) => {
    clickedPixel.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  });
});

// Clear board
clearBoard.addEventListener('click', () => {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
});
