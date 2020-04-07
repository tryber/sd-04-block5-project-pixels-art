//coletando os inputs da paleta
let black = document.getElementsByClassName('black')[0];
let purple = document.getElementsByClassName('purple')[0];
let pink = document.getElementsByClassName('pink')[0];
let yellow = document.getElementsByClassName('yellow')[0];
let clearButton = document.getElementById('clear-board');

//criando os event Listener
black.addEventListener('click',changeColor('black'))
purple.addEventListener('click',changeColor('blueviolet'));
pink.addEventListener('click',changeColor('rgb(230, 47, 160)'));
yellow.addEventListener('click',changeColor('yellow'))
clearButton.addEventListener('click',clearBoard())

//Funçoes
function changeColor(n) {
  let color = n;
  sessionStorage.setItem('color', color);
}
localStorage.setItem('color',black)