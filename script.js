window.onload = () => {
  const arrayColors = ['black', 'red', 'green', 'blue'];
  const elementsColor = document.getElementsByClassName('color');
  const palette = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
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
};
