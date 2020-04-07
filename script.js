function randomColor() {
  const hexa = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
}

const blackPixel = document.getElementById('black');
blackPixel.style.backgroundColor = 'black';

const secondColor = document.getElementById('color2');
secondColor.style.backgroundColor = randomColor();

const thirdColor = document.getElementById('color3');
thirdColor.style.backgroundColor = randomColor();

const fourthColor = document.getElementById('color4');
fourthColor.style.backgroundColor = randomColor();

blackPixel.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  blackPixel.classList.add('selected');
});

secondColor.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  secondColor.classList.add('selected');
});

fourthColor.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  fourthColor.classList.add('selected');
});

thirdColor.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  thirdColor.classList.add('selected');
});

const pixelSelected = document.querySelectorAll('.pixel');
function paintPixel(index) {
  pixelSelected[index].addEventListener('click', function () {
    const selectedColor = document.querySelector('.selected');
    pixelSelected[index].style.backgroundColor =
      selectedColor.style.backgroundColor;
  });
}

for (let index = 0; index < pixelSelected.length; index += 1) {
  paintPixel(index);
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
});
