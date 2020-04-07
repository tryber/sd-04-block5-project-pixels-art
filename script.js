// random colors
const arrayColors = ['black'];
function randomColors() {
  for (let i = 1; i < 4; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    arrayColors[i] = `#${randomColor}`;
  }
}
window.onload = () => {
  randomColors();
  // variables
  const elementsColor = document.getElementsByClassName('color');
  const palette = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
  const clearBoard = document.getElementById('clear-board');
  // paint the elements background
  for (let i = 0; i < elementsColor.length; i += 1) {
    elementsColor[i].style.backgroundColor = arrayColors[i];
  }
  // remove and add class selected
  palette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
  // paint the pixel board with the color that have the selected class
  pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  });
  // clear the board
  clearBoard.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
  // Generate board
  const generateBoard = document.getElementById('generate-board')
  generateBoard.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    const pixelBoard = document.getElementById('pixel-board');
    for (let i = 0; i < pixels.length; i += 1) {
      pixelBoard.removeChild(pixels[i]);
    }
    let size = document.getElementById('board-size').value;
    if (size < 5)
      size = 5;
    if (size > 50)
      size = 50;
    pixelBoard.style.height = size * 42 + 'px';
    pixelBoard.style.width = size * 42 + 'px';
    for (let i = 0; i < size * size; i += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      pixelBoard.appendChild(newPixel);
    }
  })
};