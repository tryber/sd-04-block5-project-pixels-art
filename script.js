// criação da paleta de cores
const palletChilds = document.getElementsByClassName('color');
const colors = ['black', 'red', 'green', 'blue'];
// função de gerar uma cor aleatoria;
function randomColors() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// alterando colors para as cores aleatorias
for (let i = 1; i < colors.length; i += 1) {
  colors[i] = randomColors();
}
// colondo as cores na paleta de cores
for (let i = 0; i < palletChilds.length; i += 1) {
  palletChilds[i].style.backgroundColor = colors[i];
}
// remove os pixels da div pixelboard
function removeElemets() {
  const el = document.querySelectorAll('.pixel');
  for (let i = el.length - 1; i >= 0; i -= 1) {
    el[i].remove();
  }
}
// função para criar os pixels
const pixelBoard = document.getElementById('pixel-board');
function createPixels(n) {
  if (n < 5) n = 5;
  if (n > 50) n = 50;
  removeElemets();
  const boardWidth = 42 * n;
  pixelBoard.style.height = `${boardWidth}px`;
  pixelBoard.style.width = `${boardWidth}px`;
  for (let i = 0; i < (n * n); i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}
let numOfColums = 5;
createPixels(numOfColums); // chamada da função para a criação dos 25 pixels
// declaração de variavel e função para adicionar e remover elemento selecionado
const colorPalette = document.getElementById('color-palette');
function addRemove(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', function () {
  addRemove(event);
});
// função que muda as cores do pixels
function changeColor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}
// event listener para mudar as cores dos pixels
pixelBoard.addEventListener('click', function () {
  changeColor(event);
});
// declaraçao de varias e função para limpar os pixels
const clearButton = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
function clearPixels(pxs) {
  for (let i = 0; i < pxs.length; i += 1) {
    pxs[i].style.backgroundColor = 'white';
  }
}
// event listener para limpar os pixels
clearButton.addEventListener('click', function () {
  clearPixels(pixels);
});
const generateButton = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');
generateButton.addEventListener('click', function () {
  numOfColums = inputBoardSize.value;
  createPixels(numOfColums);
});
