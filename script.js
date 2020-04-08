const palletChilds = document.getElementsByClassName('color');
const colors = ['black', 'red', 'green', 'blue'];
for (let i = 0; i < palletChilds.length; i += 1) {
  palletChilds[i].style.backgroundColor = colors[i];
}
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
function removeElemets(){
  let el = document.querySelectorAll('.pixel')
  for (let i = pixelBoard.childNodes.length -1; i >= 0; i -= 1) {
    el[i].remove();
  }
}
let n = 5;
createPixels(n);
n = 7;
createPixels(n);
const colorPalette = document.getElementById('color-palette');
function addRemove(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', function () {
  addRemove(event);
});
function changeColor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}
pixelBoard.addEventListener('click', function () {
  changeColor(event);
});
const clearButton = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
function clearPixels(pxs) {
  for (let i = 0; i < pxs.length; i += 1) {
    pxs[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', function () {
  clearPixels(pixels);
});
