
window.onload = () => {
  // variables
  const corPixel = document.getElementsByClassName('selected')[0].id;
  const color_palette = document.getElementById('color-palette');
  const pixel_board = document.getElementById('pixel-board');

  color_palette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
   
  });

  pixel_board.addEventListener('click', (event) => {
      event.target.style.backgroundColor = document.querySelector('.selected').id;
  });
 
};