// Initialize vars
const colors = document.querySelectorAll(".color");
const pixels = document.querySelectorAll(".pixel");
const board = document.querySelector("#pixel-board");
const btnClear = document.getElementById("clear-board");
const boardSize = document.getElementById("board-size");
const btnGenBoard = document.getElementById("generate-board");
let selectedColor = "black";
let currentBoard = Number(boardSize.value);
// func: Check which color is selected from palette
function checkColor() {
  [...colors].forEach((element) => {
    element.classList.remove("selected");
  });
  this.classList.add("selected");
  selectedColor = this.style.backgroundColor;
}
// func: Apply selected color from palette to pixel
function checkPixel() {
  this.style.backgroundColor = selectedColor;
}
// func: Delete all rows from board
function deleteCells(n) {
  for (let i = 0; i < n; i += 1) {
    board.removeChild(board.lastChild);
  }
}
// func: Add new cells (with eventlisteners) to board
function addCells(n) {
  for (let i = 0; i < n; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.className = "pixel";
    newDiv.backgroundColor = "white";
    newDiv.addEventListener("click", checkPixel);
    board.appendChild(newDiv);
  }
}

// Initialize SPA
window.onload = () => {
  btnGenBoard.addEventListener("click", () => {
    const numCells = Math.abs((currentBoard ** 2) - (Number(boardSize.value ** 2)));
    board.style.width = `${Number(boardSize.value) * 42}px`;
    board.style.height = `${Number(boardSize.value) * 42}px`;
    if (currentBoard < Number(boardSize.value)) {
      addCells(numCells);
    } else {
      deleteCells(numCells);
    }
    currentBoard = Number(boardSize.value);
  });

  [...colors].forEach((element) => {
    element.addEventListener("click", checkColor);
    element.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colors[0].style.backgroundColor = "black";
  });

  [...pixels].forEach((element) => {
    element.addEventListener("click", checkPixel);
  });

  btnClear.addEventListener("click", () => {
    [...pixels].forEach((element) => {
      element.style.backgroundColor = "white";
    });
  });
};
