// Coletando os inputs da paleta
const black = document.getElementsByClassName('color black')[0];
const purple = document.getElementsByClassName('color')[1];
const pink = document.getElementsByClassName('color')[2];
const yellow = document.getElementsByClassName('color')[3];
const clearButton = document.getElementById('clear-board');
const pixel = [];
for (let i=0; i < 25; i+=1){
  pixel[i] = document.getElementsByClassName('pixel')[i];
}

// Funçoes
localStorage.setItem('color', 'black');

function saveColor(n) {
  let color = n;
  console.log(color);
  localStorage.removeItem("color")
  localStorage.setItem("color", color);
}

function clearBoard() {
  localStorage.clear();
}

function changeColor(j) {
  pixel[j].style.backgoundColor = localStorage.getItem("color");
}

window.onload = function() {
// Criando os event Listener
black.addEventListener('click', saveColor('black'));
purple.addEventListener('click', saveColor('blueviolet'));
pink.addEventListener('click', saveColor('rgb(230, 47, 160)'));
yellow.addEventListener('click', saveColor('yellow'));
clearButton.addEventListener('click', clearBoard());
for (let j=0; j<25; j+=1){
  pixel[j].addEventListener('click', changeColor(j));
}
}