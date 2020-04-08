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

function newTable(e) {
  e.preventDefault();
  const size = document.getElementById('board-size').value;
  deleteTable();
  createTable(size, size);
}

generateBoard.addEventListener('submit', newTable);

clear.addEventListener('click', function() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor='';
  }
});

createTable();
eventToPalete();
addRandomColors();
