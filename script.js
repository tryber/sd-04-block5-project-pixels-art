const preto = document.querySelector('.preto');
const vermelho = document.querySelector('.vermelho');
const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');

preto.style.backgroundColor = 'black';
vermelho.style.backgroundColor = 'red';
azul.style.backgroundColor = 'blue';
amarelo.style.backgroundColor = 'yellow';

const colorSelected = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const pixelColor = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
let selectedColor = 'black';
sessionStorage.setItem('color', 'black');
const selecaoTabela = function (e) {
  selectedColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
  for (let i = 0; i < colorSelected.length; i += 1) {
    colorSelected[i].classList.remove('selected');
    e.target.classList.add('selected');
  }
};
function colorSelect(e) {
  e.target.style.backgroundColor = selectedColor;
  e.target.style.borderColor = selectedColor;
}
function clearBoard() {
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].style.backgroundColor = 'white';
    pixelColor[i].style = pixelColor;
  }
}
sessionStorage.setItem('color', 'black');
for (let i = 0; i < colorSelected.length; i += 1) {
  colorSelected[i].addEventListener('click', selecaoTabela);
}
clear.addEventListener('click', clearBoard);
pixelBoard.addEventListener('click', colorSelect);
