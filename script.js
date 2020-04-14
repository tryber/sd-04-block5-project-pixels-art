const palette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.querySelectorAll('.pixel');
const clearBtn = document.getElementById('clear-board');

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
