const colorSelector = document.getElementsByClassName('color');

const pixelBoard = document.getElementById('pixel-board');

let selecaoCores = 'black';
// Seletor da cor
const selecaoTabela = function (e) {
  selecaoCores = window.getComputedStyle(e.target).getPropertyValue('background-color');
    // Selecao da classe
  for (let i = 0; i < colorSelector.length; i += 1) {
    colorSelector[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
};

// Pintar o quadro
function pintaPixel(e) {
  e.target.style.backgroundColor = selecaoCores;
  e.target.style.borderColor = selecaoCores;
}

sessionStorage.setItem('color', 'black');

for (let i = 0; i < colorSelector.length; i += 1) {
  colorSelector[i].addEventListener('click', selecaoTabela);
}

pixelBoard.addEventListener('click', pintaPixel);
