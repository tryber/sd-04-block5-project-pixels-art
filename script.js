const palletChilds = document.getElementsByClassName('color');
const colors = ['black', 'red', 'green', 'blue'];
for (let i = 0; i < palletChilds.length; i += 1) {
  palletChilds[i].style.backgroundColor = colors[i];
}
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}
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
