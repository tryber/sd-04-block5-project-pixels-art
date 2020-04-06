let color = 'black';
const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'brown', 'purple'];
const buttonsArray = document.getElementsByClassName('color');
let pixelBoard = document.querySelectorAll('.pixel');

window.onload = function () {
  let a = 0;
  let b = 0;
  let c = 0;
  while (a === b || a === c || b === c) {
    a = Math.floor(Math.random() * 7);
    b = Math.floor(Math.random() * 7);
    c = Math.floor(Math.random() * 7);
  }
  buttonsArray[1].classList.add(colors[a]);
  buttonsArray[2].classList.add(colors[b]);
  buttonsArray[3].classList.add(colors[c]);
};

function updateBoard() {
  pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    const pixel = pixelBoard[i];
    let pixelHandler = function () {
      pixel.style.backgroundColor = color;
    }
    pixel.addEventListener('click', pixelHandler);
  }
}

function pixelHandler() {

}

const inputSize = document.getElementById('board-size');
const buttonSize = document.getElementById('generate-board');

buttonSize.addEventListener('click', () => {
  const board = document.getElementById('pixel-board');
  board.innerHTML = '';
  let N = inputSize.value;
  if (N < 5) N = 5;
  if (N > 50) N = 50;
  for (let i = 0; i < N * N; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    board.appendChild(div);
  }
  let string = '';
  for (let i = 0; i < N; i += 1) {
    if (i === N - 1) string += '40px';
    else string += '40px ';
  }
  board.style.gridTemplateColumns = string;

  updateBoard();
});

updateBoard();

for (let i = 0; i < buttonsArray.length; i += 1) {
  const btn = buttonsArray[i];
  let btnHandler = function () {
    color = btn.classList[1];
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    btn.classList.add('selected');
  }
  btn.addEventListener('click', btnHandler);
}

const cleatBtn = document.getElementById('clear-board');
cleatBtn.addEventListener('click', () => {
  pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.backgroundColor = 'white';
  }
});
