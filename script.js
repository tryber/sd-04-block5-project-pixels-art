
window.onload = () => {
  // variables
  const corPixel = document.getElementsByClassName('selected')[0].id;
  const palette = document.getElementById('color-palette');

  palette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
 
};