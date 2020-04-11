const preto = document.querySelector('.preto');
const vermelho = document.querySelector('.vermelho');
const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
preto.style.backgroundColor = 'black';
vermelho.style.backgroundColor = getRandomColor();
azul.style.backgroundColor = getRandomColor();
amarelo.style.backgroundColor = getRandomColor();

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
}
function clearBoard() {
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].style.backgroundColor = 'white';
  }
}
sessionStorage.setItem('color', 'black');
for (let i = 0; i < colorSelected.length; i += 1) {
  colorSelected[i].addEventListener('click', selecaoTabela);
}
clear.addEventListener('click', clearBoard);
pixelBoard.addEventListener('click', colorSelect);

const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const tabela = document.getElementsByTagName('table');

generateBoard.addEventListener('click', function () {
  tabela[0].innerHTML = '';
  let size = boardSize.value;
  if (size > 50) 
    size = 50;
   else if (size < 5) 
    size = 5;
  
  console.log(size)
  for (let i = 0; i < size; i += 1) {
    const tr = document.createElement('tr');
    tabela[0].appendChild(tr);
    for (let j = 0; j < size; j += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
});
