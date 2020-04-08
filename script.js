const clear = document.getElementById('clear-board');
const board = document.getElementById('pixel-board');
const palete = document.getElementsByClassName('color');
const generateBoard = document.getElementById('size-form');

function printPixel(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const color = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = color;
}

function removeSelected() {
  for (let i = 0; i < palete.length; i += 1) {
    palete[i].classList.remove('selected');
  }
}

function getColor(event) {
  removeSelected();
  event.target.classList.add('selected');
}

function randomColor() {
  const rgbValue = Math.floor(Math.random() * 256);
  return rgbValue;
}

function colorPallete(e) {
  if (e.target.className === 'color' || e.target.className === 'color black') {
    getColor(e);
  } else if (e.target.className === 'pixel') {
    printPixel(e);
  }
}

function eventToPalete() {
  for (let i = 0; i < palete.length; i += 1) {
    palete[i].addEventListener('click', colorPallete);
  }
}

function deleteTable() {
  board.innerHTML = '';
}

function createTable(i = 5, j = 5) {
  for (let m = 0; m < i; m += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    board.appendChild(row);
    const lastRow = document.querySelector('.row:last-child');
    for (let n = 0; n < j; n += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      pixel.addEventListener('click', colorPallete);
      lastRow.appendChild(pixel);
    }
  }
}

function addRandomColors() {
  for (let i = 1; i < palete.length; i += 1) {
    palete[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  }
}

function resize (size) {
  if (size < 5){
    size = 5;
  } else if (size > 50){
    size = 50;
  }
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.width = size+'px';
    pixels[i].style.height = size+'px';
  }
}

function newTable(e) {
  e.preventDefault();
  const size = document.getElementById('board-size').value;
  //deleteTable();
  resize(size);
}

generateBoard.addEventListener('submit', newTable);

clear.addEventListener('click', function () {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

createTable();
eventToPalete();
addRandomColors();
