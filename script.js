window.onload = function () {
  let caixa1 = document.getElementsByClassName('color')[0];
  let caixa2 = document.getElementsByClassName('color')[1];
  let caixa3 = document.getElementsByClassName('color')[2];
  let caixa4 = document.getElementsByClassName('color')[3];
  let pixelBoard = document.getElementById('pixel-board');

  caixa1.className = 'selected';
  caixa1.style.backgroundColor = 'black';
  caixa2.style.backgroundColor = 'red';
  caixa3.style.backgroundColor = 'blue';
  caixa4.style.backgroundColor = 'green';

  function inserindoCor (event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }

  pixelBoard.addEventListener('click', inserindoCor);
}
