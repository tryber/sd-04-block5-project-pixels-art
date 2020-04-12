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

window.onload = function () {
  saveColor('black', 'black');
  black.className = 'color black selected';
};

// Criando os event Listener
black.addEventListener('click', function () {
  saveColor('black');
  black.className = 'color black selected';
  purple.className = 'color purple';
  pink.className = 'color pink';
  yellow.className = 'color yellow';
});
purple.addEventListener('click', function () {
  saveColor('blueviolet');
  purple.className = 'color purple selected';
  black.className = 'color black';
  pink.className = 'color pink';
  yellow.className = 'color yellow';
});
pink.addEventListener('click', function () {
  saveColor('rgb(230, 47, 160)');
  pink.className = 'color pink selected';
  black.className = 'color black';
  purple.className = 'color purple';
  yellow.className = 'color yellow';
});
yellow.addEventListener('click', function () {
  saveColor('yellow');
  yellow.className = ' color yellow selected';
  black.className = 'color black';
  pink.className = 'color pink';
  purple.className = 'color purple';
});
clearButton.addEventListener('click', clearBoard);

for (let j = 0; j < 25; j += 1) {
  pixel[j].addEventListener('click', function () {
    changeColor(j);
  });
}
