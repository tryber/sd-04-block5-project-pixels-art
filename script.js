const MATRIZ = document.getElementById('pixel-board');
const PALLET = document.getElementById('color-palette');
const PIXEL = document.getElementsByClassName('pixel');
const CLEARBORD = document.getElementById('clear-board');
const GENERATEBORD = document.getElementById('generate-board');
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

window.onload = function () {
  CreatePixel();

  PALLET.addEventListener('click', function (event) {
    document.getElementById('black').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
    document.getElementById('blue').classList.remove('selected');
    document.getElementById('green').classList.remove('selected');
    selectedColor = event.target.id;
    event.target.className += ' selected';
  });

  MATRIZ.addEventListener('click', function (event) {
    document.getElementById(event.target.id).classList = `pixel ${selectedColor}`;
    document.getElementById(event.target.id).style.backgroundColor = '';
  });

  CLEARBORD.addEventListener('click', function () {
    ClearBord();
  });

  GENERATEBORD.addEventListener('click', function () {
    GenerateBoard();
  });
};
