// Coletando os inputs da paleta
const black = document.getElementsByClassName('color')[0];
const colorOne = document.getElementsByClassName('color')[1];
const colorTwo = document.getElementsByClassName('color')[2];
const colorThree = document.getElementsByClassName('color')[3];
const clearButton = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
const creat = document.getElementById('generate-board');
const board = document.getElementById('pixel-board');
let n;

// Funçoes
function saveColor(color) {
  localStorage.removeItem('color');
  localStorage.setItem('color', color);
}

function clearBoard() {
  for (let k = 0; k < pixel.length; k += 1) {
    pixel[k].style.backgroundColor = 'white';
  }
}

function changeColor(j) {
  pixel[j].style.backgroundColor = localStorage.getItem('color');
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

black.style.backgroundColor = 'black';
colorOne.style.backgroundColor = randomColor();
colorTwo.style.backgroundColor = randomColor();
colorThree.style.backgroundColor = randomColor();

function createBoard(size) {
  for (let i = 0; i < size; i += 1) {
    const trPixel = document.createElement('tr');
    trPixel.className = 'line';
    for (let j = 0; j < size; j += 1) {
      const tdPixel = document.createElement('td');
      tdPixel.className = 'pixel';
      trPixel.appendChild(tdPixel);
    }
    board.appendChild(trPixel);
    for (let j = 0; j < pixel.length; j += 1) {
      pixel[j].addEventListener('click', function () {
        changeColor(j);
      });
    }
  }
}

window.onload = function () {
  saveColor('black', 'black');
  black.className = 'color black selected';
};

// Criando os event Listener
black.addEventListener('click', function () {
  saveColor(black.style.backgroundColor);
  black.className = 'color selected';
  colorOne.className = 'color';
  colorTwo.className = 'color';
  colorThree.className = 'color';
});
colorTwo.addEventListener('click', function () {
  saveColor(colorTwo.style.backgroundColor);
  colorTwo.className = 'color selected';
  black.className = 'color';
  colorOne.className = 'color';
  colorThree.className = 'color';
});
colorOne.addEventListener('click', function () {
  saveColor(colorOne.style.backgroundColor);
  colorOne.className = 'color selected';
  black.className = 'color ';
  colorTwo.className = 'color';
  colorThree.className = 'color';
});
colorThree.addEventListener('click', function () {
  saveColor(colorThree.style.backgroundColor);
  colorThree.className = ' color selected';
  black.className = 'color';
  colorOne.className = 'color';
  colorTwo.className = 'color';
});
clearButton.addEventListener('click', clearBoard);

for (let j = 0; j < pixel.length; j += 1) {
  pixel[j].addEventListener('click', function () {
    changeColor(j);
  });
}

creat.addEventListener('click', function () {
  board.innerHTML = '';
  n = document.getElementById('board-size').value;
  if (n < 5) n = 5;
  if (n > 50) n = 50;
  createBoard(n);
});
