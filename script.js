window.onload = function () {
  const color1 = document.getElementsByClassName('color')[0];
  const color2 = document.getElementsByClassName('color')[1];
  const color3 = document.getElementsByClassName('color')[2];
  const color4 = document.getElementsByClassName('color')[3];
  const pixelBoard = document.getElementById('pixel-board');

  color1.style.backgroundColor = 'black';
  color2.style.backgroundColor = 'red';
  color3.style.backgroundColor = 'blue';
  color4.style.backgroundColor = 'green';
  color1.classList.add('selected');

  function selectColor(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
  function insertColor(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
  color1.addEventListener('click', selectColor);
  color2.addEventListener('click', selectColor);
  color3.addEventListener('click', selectColor);
  color4.addEventListener('click', selectColor);
  pixelBoard.addEventListener('click', insertColor);
}
