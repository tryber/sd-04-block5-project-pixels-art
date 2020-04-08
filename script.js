const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const pixelBoard = document.querySelector('.pixel-board');
const palette = document.querySelector('.color-palette');
var atual = color1;

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'blue';
color3.style.backgroundColor = 'red';
color4.style.backgroundColor = 'yellow';

function selected(div) {
  div.classList.add('selected');
}
selected(color1);

const cor = document.querySelector('.selected');

palette.addEventListener('click', function (e) {
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});

pixelBoard.addEventListener('click', function (e) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  console.log(document.querySelector('.selected').style.backgroundColor);
  e.target.style.backgroundColor = selectedColor;
  });