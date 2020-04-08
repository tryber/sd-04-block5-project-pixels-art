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

function selected(c) {
  const colorsArray = ['black', 'purple', 'pink', 'yellow'];
  for (let i = 0; i < 4; i += 1) {
    if (c !== colorsArray[i]) {
      colorsArray[i].className = 'color ' + colorsArray[i] + ' selected';
    } else {
      colorsArray[i].className = 'color ' + colorsArray[i] + ' selected';
    }
  }
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
  saveColor('black');
  selected('black');
};

// Criando os event Listener
black.addEventListener('click', function () {
  saveColor('black');
  selected('black');
});
purple.addEventListener('click', function () {
  saveColor('blueviolet');
  selected('purple');
});
pink.addEventListener('click', function () {
  saveColor('rgb(230, 47, 160)');
  selected('pink');
});
yellow.addEventListener('click', function () {
  saveColor('yellow');
  selected('yellow');
});
clearButton.addEventListener('click', clearBoard);

for (let j = 0; j < 25; j += 1) {
  pixel[j].addEventListener('click', function () {
    changeColor(j);
  });
}
