let i;
let j;
const colBlack = document.getElementById('black');
// const colRed = document.getElementById('red');
// const colBlue = document.getElementById('blue');
// const colGreen = document.getElementById('green');
const colGroup = document.getElementsByClassName('color');
const pixGroup = document.getElementsByClassName('pixel');
const butClean = document.getElementById('clear-board');
const tabCustom = document.getElementById('pixel-board');
const butCustom = document.getElementById('generate-board');

function colorization() {
  colBlack.style.backgroundColor = colBlack.id;
  colGroup[1].style.backgroundColor = 'rgb(' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ')';
  colGroup[2].style.backgroundColor = 'rgb(' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ')';
  colGroup[3].style.backgroundColor = 'rgb(' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ')';
}

function insertPixels(v) {
  for (i = 1; i <= v; i += 1) {
    const elmTr = document.createElement('tr');
    for (j = 1; j <= v; j += 1) {
      const elmTd = document.createElement('td');
      elmTd.className = 'pixel';
      elmTr.appendChild(elmTd);
      tabCustom.appendChild(elmTr);
    }
  }
}

// function randomizeColors() {
//   for (i = 1; i <= 3; i += 1) {
//     colGroup[i].id = 'rgb(' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ' , ' + Math.floor(Math.random()*256) + ')';
//   }
// }

// ------------------
// Funções de eventos

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

// ---------------------------
// Função de adição de eventos

function addEventInPixCustom() {
  const pixGroupCustom = document.getElementsByClassName('pixel');

  for (i = 0; i < pixGroupCustom.length; i += 1) {
    pixGroupCustom[i].addEventListener('click', colSelected);
  }
}

// --------------------------
// Função de eventos + adição

function createPixels() {
  let inpValue = document.getElementById('board-size').value;

  while (tabCustom.firstChild) {
    tabCustom.removeChild(tabCustom.firstChild);
  }

  if (inpValue < 5) { inpValue = 5; }
  if (inpValue > 50) { inpValue = 50; }

  insertPixels(inpValue);
  addEventInPixCustom();
}

// -----------------
// Adição de eventos

for (i = 0; i < pixGroup.length; i += 1) {
  pixGroup[i].addEventListener('click', colSelected);
}

for (i = 0; i < colGroup.length; i += 1) {
  colGroup[i].addEventListener('click', selPalette);
}

butClean.addEventListener('click', cleanPainting);

butCustom.addEventListener('click', createPixels);

window.onload = function () {
  colorization();
  randomizeColors();
};
