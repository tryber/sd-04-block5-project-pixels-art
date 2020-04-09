/* ### 8 - Ao clicar em uma das cores da paleta, a cor selecionada na paleta é que vai ser usada para preencher os pixels

A **classe** `selected` deve ser adicionada à cor selecionada, ao mesmo tempo em que é removida da cor anteriormente selecionada.

**Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no requisito 2.**

### 9 - Ao clicar em um pixel com uma cor selecionada, o pixel deve ser preenchido com esta cor

### 10 - Ao clicar em um pixel com uma cor selecionada, somente esse pixel deverá ser preenchido, sem influenciar na cor dos demais pixels*/



const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'blue';
thirdColor.style.backgroundColor = 'yellow';
fourthColor.style.backgroundColor = 'red';

window.addEventListener('load', function() {
  firstColor.classList.add('selected');
});

function firstColorSelected() {
  const color = document.querySelector('.selected');
  if (color) {
    color.classList.remove('selected');
    firstColor.classList.add('selected');
  }
}

function secondColorSelected() {
  const color = document.querySelector('.selected');
  if (color) {
    color.classList.remove('selected');
    secondColor.classList.add('selected');
  }
}

function thirdColorSelected() {
  const color = document.querySelector('.selected');
  if (color) {
    color.classList.remove('selected');
    thirdColor.classList.add('selected');
  }
}

function fourthColorSelected() {
  const color = document.querySelector('.selected');
  if (color) {
    color.classList.remove('selected');
    fourthColor.classList.add('selected');
  }
}

const pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function (changeColor) {
  changeColor.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});
