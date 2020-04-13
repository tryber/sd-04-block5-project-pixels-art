const palette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear-board');

// Add and Remove the Class "Selected"
palette.addEventListener('click', function(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
});

// Color the Pixel Board
pixelBoard.addEventListener('click', function(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').id;
})

// Clear Board
clearBtn.addEventListener('click', function() {
  for (pixel in pixels) {
    pixels[pixel].style.backgroundColor = "white";
  }
})
