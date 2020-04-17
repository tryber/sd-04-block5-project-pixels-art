// Initialize vars
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const rows = document.getElementsByClassName('row');
const btnClear = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const boardTable = document.getElementById('board');
const btnGenBoard = document.getElementById('generate-board');
let selectedColor = 'black';
// func: Check which color is selected from palette
function checkColor() {
  [...colors].forEach((element) => {
    element.classList.remove('selected');
  });
  this.classList.add('selected');
  selectedColor = this.style.backgroundColor;
}
// func: Apply selected color from palette to pixel
function checkPixel() {
  this.style.backgroundColor = selectedColor;
}
// func: Delete all rows from board
function deleteRows(n) {
  for (let i = 0; i < n; i += 1) {
    boardTable.deleteRow(0);
  }
}
// func: Add new rows to board
function addRows(n) {
  for (let i = 0; i < n; i += 1) {
    const newTr = boardTable.insertRow();
    newTr.className = 'row';
  }
}
// func: Add new cells (with eventlisteners) to board
function addCells(n) {
  [...rows].forEach((element) => {
    for (let i = 0; i < n; i += 1) {
      const newTd = element.insertCell();
      newTd.className = 'pixel';
      newTd.backgroundColor = 'white';
      newTd.addEventListener('click', checkPixel);
    }
  });
}
// Initialize SPA
window.onload = () => {
  btnGenBoard.addEventListener('click', () => {
    deleteRows(rows.length);
    addRows(Number(boardSize.value));
    addCells(Number(boardSize.value));
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
};
