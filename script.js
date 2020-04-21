const MATRIZ = document.getElementById('pixel-board');
const PALLET = document.getElementById('color-palette');
let selectedColor = 'black';
const CLEARBORD = document.getElementById('clear-board');

function CreatePixel() {
  let linha;
  let coluna;

  for (let i = 0; i < 5; i += 1) {
    linha = document.createElement('div');
    linha.id = `linha${i}`;
    MATRIZ.appendChild(linha);
    for (let j = 0; j < 5; j += 1) {
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
  const PIXEL = document.getElementsByClassName('pixel');
  for (let i = 0; i < PIXEL.length; i += 1) {
    PIXEL[i].classList = 'pixel';
    PIXEL[i].style.backgroundColor = 'white';
  }
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
};
