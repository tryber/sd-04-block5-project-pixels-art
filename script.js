const pixelsPallete = document.querySelectorAll('.color');
let color = 'rgb(0, 0, 0)';
const pixels = document.querySelectorAll('.pixel');
const resetBtn = document.getElementById('clear-board');

function removeClass() {
  for (let i = 0; i < pixelsPallete.length; i += 1) {
    pixelsPallete[i].classList.remove('selected');
  }
}

for (let i = 0; i < pixelsPallete.length; i += 1) {
  pixelsPallete[i].addEventListener('click', () => {
    if (!pixelsPallete[i].classList.contains('selected')) {
      removeClass();
      color = window.getComputedStyle(pixelsPallete[i], null).getPropertyValue('background-color');
      pixelsPallete[i].classList.add('selected');
    }
  });
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    pixels[i].style.backgroundColor = color;
  });
}

resetBtn.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i+= 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
