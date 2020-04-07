
window.onload = () => {
  // variables
  const colorPalette = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
  const clearBoard = document.getElementById('clear-board');

  colorPalette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

  pixelBoard.addEventListener('click', (event) => {
      event.target.style.backgroundColor = document.querySelector('.selected').id;
  });

  clearBoard.addEventListener('click', () => {
      var pixel = document.querySelectorAll('.pixel');
      for (const key in pixel) {
       pixel[key].style.backgroundColor = 'white';
       pixelBoard.style.backgroundColor = 'white';
    }
  });
};