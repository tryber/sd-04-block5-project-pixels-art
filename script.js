window.onload = () => {
  // random colors
  const arrayColors = ['black'];
  function randomColors() {
    for (let i = 1; i < 4; i += 1) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      arrayColors[i] = '#' + randomColor;
    }
  }
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
    for (let pixel of pixels) {
      pixel = pixel;
      pixel.style.backgroundColor = 'white';
    }
  })
};
