const colorSelect = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
//Let pois vai mudar no evento e.target
let selecaoCores = 'black';
sessionStorage.setItem('color', 'black');
// Seletor da cor
const selecaoTabela = function (e) {
  selecaoCores = window.getComputedStyle(e.target).getPropertyValue('background-color');
    // Selecao da classe
  for (let i = 0; i < colorSelect.length; i += 1) {
    colorSelect[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
};

// Pintar o quadro
function pintaPixel(e) {
  e.target.style.backgroundColor = selecaoCores;
  e.target.style.borderColor = selecaoCores;
}
//for para cada quadradinho
for (let i = 0; i < colorSelect.length; i += 1) {
  colorSelect[i].addEventListener('click', selecaoTabela);
}
//chamando a funcao pelo click
pixelBoard.addEventListener('click', pintaPixel);
