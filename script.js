
window.onload = () => {
  // variables
  const color_palette = document.getElementById('color-palette');
  const pixel_board = document.getElementById('pixel-board');
  const clear_board = document.getElementById('clear-board');

  color_palette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
   
  });

  pixel_board.addEventListener('click', (event) => {
      event.target.style.backgroundColor = document.querySelector('.selected').id;
  });

  clear_board.addEventListener('click', () => { 
      var pixel = document.querySelectorAll('.pixel');
      
      for (const key in pixel) {
              pixel[key].style.backgroundColor = 'white';
      }
      
      pixel_board.style.backgroundColor = 'white';
  });
 
};