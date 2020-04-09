const palette = document.querySelectorAll('.color');
const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'blue';
thirdColor.style.backgroundColor = 'yellow';
fourthColor.style.backgroundColor = 'red';

window.addEventListener('load', function() {
  firstColor.classList.add('colorSelected');
});

function firstColorSelected() {
  const color = document.querySelector('.colorSelected');
  if (color) {
    color.classList.remove('colorSelected');
    firstColor.classList.add('colorSelected');
  }
}

function secondColorSelected() {
  const color = document.querySelector('.colorSelected');
  if (color) {
    color.classList.remove('colorSelected');
    secondColor.classList.add('colorSelected');
  }
}

function thirdColorSelected() {
  const color = document.querySelector('.colorSelected');
  if (color) {
    color.classList.remove('colorSelected');
    thirdColor.classList.add('colorSelected');
  }
}

function fourthColorSelected() {
  const color = document.querySelector('.colorSelected');
  if (color) {
    color.classList.remove('colorSelected');
    fourthColor.classList.add('colorSelected');
  }
}

const pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function (changeColor) {
  changeColor.target.style.backgroundColor = document.querySelector('.colorSelected').style.backgroundColor;
});
