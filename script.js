// Coletando os inputs da paleta
const black = document.getElementsByClassName('color black')[0];
const purple = document.getElementsByClassName('color')[1];
const pink = document.getElementsByClassName('color')[2];
const yellow = document.getElementsByClassName('color')[3];
const clearButton = document.getElementById('clear-board');
const pixel = [];
for (let i = 0; i < 25; i += 1) {
  pixel[i] = document.getElementsByClassName('pixel')[i];
}


// Funçoes
window.onload = function () {
  saveColor('black');
}

function saveColor(n) {
  const color = n;
  localStorage.removeItem('color');
  localStorage.setItem('color', color);
}

function clearBoard() {
  for (let k = 0; k < 25; k += 1) {
    pixel[k].style.backgroundColor = 'white';
  }
}

function changeColor(j) {
  pixel[j].style.backgroundColor = localStorage.getItem('color');
}

// Criando os event Listener
black.addEventListener('click', function () {
  saveColor('black');
  black.className = 'color black selected';
});
purple.addEventListener('click', function () {
  saveColor('blueviolet');
  purple.className = 'color purple selected';
});
pink.addEventListener('click', function () {
  saveColor('rgb(230, 47, 160)');
  pink.className = 'color pink selected';
});
yellow.addEventListener('click', function () {
  saveColor('yellow');
  yellow.className = ' color yellow selected';
});
clearButton.addEventListener('click', clearBoard);

for (let j = 0; j < 25; j += 1) {
  pixel[j].addEventListener('click', function () {
    changeColor(j);
  });
}
