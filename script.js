window.onload = () => {
  // variables
  const colorPalette = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
  let pixel = document.querySelectorAll('.pixel');

  colorPalette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

  pixelBoard.addEventListener('click', (event) => {
    event.target.style.backgroundColor = document.querySelector('.selected').id;
  });

  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', () => {
    pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
};
