let selectedColor = null;
const colorPalette = document.querySelectorAll('.color');
colorPalette.forEach((color) => {
  if (color.classList.contains('black')) {
    color.classList.add('selected');
    selectedColor = color;
  } 
  color.addEventListener('click', function(e) {
    if (selectedColor) {
      selectedColor.classList.remove('selected'); 
    }
    color.classList.add('selected');
    selectedColor = color;
  });
});

createBoard(5);
function createBoard(pixels) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < pixels  ; i++) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row flex';
    for (let i = 0; i < pixels; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', function(e) {
        pixel.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
      });
      pixelRow.appendChild(pixel);
      
    }
    pixelBoard.appendChild(pixelRow);
  }
}

const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener('click', function(e) {
  pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
});