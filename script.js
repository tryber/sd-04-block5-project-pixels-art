let i;
const colBlack = document.getElementById('black');
const colRed = document.getElementById('red');
const colBlue = document.getElementById('blue');
const colGreen = document.getElementById('green');
const colGroup = document.getElementsByClassName('color');
const pixGroup = document.getElementsByClassName('pixel');
const butClean = document.getElementById('clear-board');

function colorization() {
  colBlack.style.backgroundColor = colBlack.id;
  colRed.style.backgroundColor = colRed.id;
  colBlue.style.backgroundColor = colBlue.id;
  colGreen.style.backgroundColor = colGreen.id;
}

function colSelected(e) {
  for (i = 0; i < colGroup.length; i += 1) {
    if (colGroup[i].className === 'color selected') {
      e.target.style.backgroundColor = colGroup[i].id;
    }
  }
}

function selPalette(e) {
  for (i = 0; i < colGroup.length; i += 1) {
    if (colGroup[i].className === 'color selected') {
      colGroup[i].className = 'color';
    }
  }

  e.target.className = 'color selected';
}

function cleanPainting() {
  for (i = 0; i < pixGroup.length; i += 1) {
    pixGroup[i].style.backgroundColor = 'white';
  }
}

for (i = 0; i < pixGroup.length; i += 1) {
  pixGroup[i].addEventListener('click', colSelected);
}

for (i = 0; i < colGroup.length; i += 1) {
  colGroup[i].addEventListener('click', selPalette);
}

butClean.addEventListener('click', cleanPainting);

window.onload = function () {
  colorization();
};

// console.log(pixGroup);
