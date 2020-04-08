const pixelsPallete = document.querySelectorAll('.color');
let color = 'rgb(0, 0, 0)';
const pixels = document.querySelectorAll('.pixel');
const resetBtn = document.getElementById('clear-board');
const arrayColors = ['black', 'red', 'blue', 'green'];
let randomic = 0;
let arrayRandom = [0];
let countEqual = 0;
let newRandom = true;

for (let i = 1; i <= 3; i += 1) {
  while (newRandom === true) {
      randomic = Math.floor(Math.random() * 3) + 1;
      countEqual = 0;
      for (let j = 1; j <= arrayRandom.length; j += 1) {
          if (randomic === arrayRandom[j]) {
              countEqual += 1;
          }
      }
      if (countEqual === 0) {
            newRandom = false;
      }
  }
  arrayRandom[i] = randomic;
  newRandom = true;
}

console.log(arrayRandom);
for (let i = 0; i < arrayColors.length; i += 1) {
  console.log(arrayColors[arrayRandom[i]]);
  pixelsPallete[i].style.backgroundColor = arrayColors[arrayRandom[i]];
}

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
  for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
  }
});
