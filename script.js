const palette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const selectedColor = document.getElementsByClassName('selected');
const color = selectedColor.id;

palette.addEventListener('click', function(event) {
  for(c in colors) {
    colors[c].classList.remove('selected');
    event.target.classList.add('selected');
  }
})


