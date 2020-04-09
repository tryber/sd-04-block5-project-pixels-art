let palette = document.querySelectorAll('.color');
let firstColor = document.querySelectorAll('.color')[0];
let secondColor = document.querySelectorAll('.color')[1];
let thirdColor = document.querySelectorAll('.color')[2];
let fourthColor = document.querySelectorAll('.color')[3];

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'blue';
thirdColor.style.backgroundColor = 'yellow';
fourthColor.style.backgroundColor = 'red';

window.addEventListener("load", function() {
  firstColor.classList.add('colorSelected');
})

const color = document.querySelector('.colorSelected');

function firstColorSelected() {
  if (color) {
    color.classList.remove('colorSelected');
    firstColor.classList.add('colorSelected');
  }
}

function secondColorSelected() {
  if (color) {
    color.classList.remove('colorSelected');
    secondColor.classList.add('colorSelected');
  }
}

function thirdColorSelected() {
  if (color) {
    color.classList.remove('colorSelected');
    thirdColor.classList.add('colorSelected');
  }
}

function fourthColorSelected() {
  if (color) {
    color.classList.remove('colorSelected');
    fourthColor.classList.add("colorSelected");
  }
}

const pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function(changeColor) {
  changeColor.target.style.backgroundColor = document.querySelector('.colorSelected').style.backgroundColor;
})
