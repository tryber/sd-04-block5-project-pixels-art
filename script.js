const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
const number = document.getElementById('board-size');
const table = document.getElementById('board');
const btnBoard = document.getElementById('generate-board');
let selectedColor = 'black';

function checkColor() {
  [...colors].forEach((element) => {
    element.classList.remove('selected');
  });
  this.classList.add('selected');
  selectedColor = this.style.backgroundColor;
}

function checkPixel() {
  this.style.backgroundColor = selectedColor;
}

[...colors].forEach((element) => {
  element.addEventListener('click', checkColor);
  element.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colors[0].style.backgroundColor = 'black';
});

btnClear.addEventListener('click', () => {
  [...pixels].forEach((element) => {
    element.style.backgroundColor = 'white';
  });
});

function generateBoard() {
  for (let i = 0; i < Number(number.value); i += 1) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
  }
  const tr = document.getElementsByTagName('tr');
  [...tr].forEach((element) => {
    for (let i = 0; i < Number(number.value); i += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      td.addEventListener('click', checkPixel);
      element.appendChild(td);
    }
  });
}


btnBoard.addEventListener('click', generateBoard);
