const colorSelected = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const pixelColor = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
// Let pois vai mudar no evento e.target
let selectedColor = 'black';
sessionStorage.setItem('color', 'black');
// Seletor da cor
const selecaoTabela = function (e) {
  selectedColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
  // Selecao da classe
  for (let i = 0; i < colorSelected.length; i += 1) {
    colorSelected[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
};

// Pintar o quadro
function colorSelect(e) {
  e.target.style.backgroundColor = selectedColor;
  e.target.style.borderColor = selectedColor;
}
// for para cada quadradinho
for (let i = 0; i < colorSelected.length; i += 1) {
  colorSelected[i].addEventListener('click', selecaoTabela);
}
// chamando a funcao pelo click
pixelBoard.addEventListener('click', colorSelect);

function clearBoard() {
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].style.backgroundColor = 'white';
    pixelColor[i].style.borderColor = 'black'
  }
}
clear.addEventListener('click', clearBoard);