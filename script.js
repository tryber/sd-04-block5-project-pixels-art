const matriz = document.getElementById('pixel-board');
const pallet = document.getElementById('color-palette');
let selectedColor = 'black';

function CreatePixel() {
  let linha;
  let coluna;

  for (let i = 0; i < 5; i = i + 1) {
    linha = document.createElement('div');
    linha.id = `linha${i}`;
    matriz.appendChild(linha);
    for (let j = 0; j < 5; j = j + 1) {
      coluna = document.createElement('div');
      coluna.id = `coluna${i}${j}`;
      coluna.classList.add('pixel');
      document.getElementById(linha.id).appendChild(coluna);
    }
    let divClear = document.createElement('div');
    divClear.classList.add('clear');
    document.getElementById(linha.id).appendChild(divClear);
  }
}

window.onload = function () {
  CreatePixel();

  pallet.addEventListener('click', function (event) {
    document.getElementById('black').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
    document.getElementById('blue').classList.remove('selected');
    document.getElementById('green').classList.remove('selected');
    selectedColor = event.target.id;
    event.target.className += ' selected';
  });

  matriz.addEventListener('click', function (event) {
    document.getElementById(event.target.id).classList = `pixel ${selectedColor}`;
  })

}