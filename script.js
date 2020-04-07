// Coletando os inputs da paleta
const black = document.getElementsByClassName('color black')[0];
const purple = document.getElementsByClassName('color')[1];
const pink = document.getElementsByClassName('color')[2];
const yellow = document.getElementsByClassName('color')[3];
const clearButton = document.getElementById('clear-board');

// Funçoes
localStorage.setItem('color','black');

function changeColor(n) {
  var color = n;
  console.log(color);
  sessionStorage.setItem('color', color);
}

function clearBoard(){
  sessionStorage.clear()
}

// Criando os event Listener
black.addEventListener('click', changeColor('black'));
purple.addEventListener('click', changeColor('blueviolet'));
pink.addEventListener('click', changeColor('rgb(230, 47, 160)'));
yellow.addEventListener('click', changeColor('yellow'));
clearButton.addEventListener('click', clearBoard());
