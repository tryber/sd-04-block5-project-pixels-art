const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
let selectedColor = 'black';

function checkColor() {
  [...colors].forEach((element) => {
    element.classList.remove('selected');
  });
  this.classList.add('selected');
  selectedColor = this.style.backgroundColor;
}

function checkPixel() {
  this.style.backgroundColor = selectedColor;
}

[...colors].forEach((element) => {
  element.addEventListener('click', checkColor);
  element.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colors[0].style.backgroundColor = 'black';
});

[...pixels].forEach((element) => {
  element.addEventListener('click', checkPixel);
});
btnClear.addEventListener('click', () => {
  [...pixels].forEach((element) => {
    element.style.backgroundColor = 'white';
  });
});
