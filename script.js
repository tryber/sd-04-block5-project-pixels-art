const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const boardTable = document.getElementById('board');
const btnGenBoard = document.getElementById('generate-board');

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

function addBoard(n) {
  for (let i = 0; i < n; i += 1) {
    const newTr = document.createElement('tr');
    newTr.id = 'row';
    boardTable.appendChild(newTr);
  }
  const rows = document.querySelectorAll('#row');
  [...rows].forEach((element) => {
    for (let i = 0; i < n; i += 1) {
      const newTd = document.createElement('td');
      newTd.className = 'pixel';
      newTd.addEventListener('click', checkColor);
      element.appendChild(newTd);
    }
  });
}

function deleteBoard() {
  while (boardTable.hasChildNodes()) {
    boardTable.removeChild(boardTable.firstChild);
  }
}

btnGenBoard.addEventListener('click', () => {
  deleteBoard();
  addBoard(Number(boardSize.value));
});

[...colors].forEach((element) => {
  element.addEventListener('click', checkColor);
  element.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colors[0].style.backgroundColor = 'black';
});

[...pixels].forEach((element) => {
  element.addEventListener('click', checkPixel);
});

btnClear.addEventListener('click', () => {
  [...pixels].forEach((element) => {
    element.style.backgroundColor = 'white';
  });
});
