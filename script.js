const MATRIZ = document.getElementById('pixel-board');
const PALLET = document.getElementById('color-palette');
const PIXEL = document.getElementsByClassName('pixel');
const CLEARBORD = document.getElementById('clear-board');
const GENERATEBORD = document.getElementById('generate-board');
const COLOR = document.getElementsByClassName('color');
let selectedColor = 'black';
let sizePixel = 5;

function CreatePixel() {
  let linha;
  let coluna;

  for (let i = 1; i <= sizePixel; i += 1) {
    linha = document.createElement('div');
    linha.id = `linha${i}`;
    MATRIZ.appendChild(linha);
    for (let j = 0; j < sizePixel; j += 1) {
      coluna = document.createElement('div');
      coluna.id = `coluna${i}${j}`;
      coluna.classList.add('pixel');
      document.getElementById(linha.id).appendChild(coluna);
    }
    const DIVCLEAR = document.createElement('div');
    DIVCLEAR.classList.add('clear');
    document.getElementById(linha.id).appendChild(DIVCLEAR);
  }
}

function ClearBord() {
  for (let i = 0; i < PIXEL.length; i += 1) {
    PIXEL[i].classList = 'pixel';
    PIXEL[i].style.backgroundColor = 'white';
  }
}

function GenerateBoard() {
  sizePixel = document.getElementById('board-size').value;
  sizePixel = (sizePixel < 5 ? 5 : sizePixel);
  sizePixel = (sizePixel > 50 ? 50 : sizePixel);
  MATRIZ.innerHTML = '';

  CreatePixel();
}

function LoadRandomColor() {
  COLOR[0].style.backgroundColor = 'rgb(0, 0, 0)';
  for (let i = 1; i < 4; i += 1) {
    const RED = Math.floor(Math.random() * 256);
    const GREEN = Math.floor(Math.random() * 256);
    const BLUE = Math.floor(Math.random() * 256);
    COLOR[i].style.backgroundColor = `rgb(${RED}, ${GREEN}, ${BLUE})`;
  }
}

window.onload = function () {
  LoadRandomColor();
  CreatePixel();

  PALLET.addEventListener('click', function (event) {
    document.getElementById('black').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
    document.getElementById('blue').classList.remove('selected');
    document.getElementById('green').classList.remove('selected');
    selectedColor = event.target.style.backgroundColor;
    event.target.className += ' selected';
  });

  MATRIZ.addEventListener('click', function (event) {
    document.getElementById(event.target.id).style.backgroundColor = selectedColor;
  });

  CLEARBORD.addEventListener('click', function () {
    ClearBord();
  });

  GENERATEBORD.addEventListener('click', function () {
    GenerateBoard();
  });
};
