// random colors
function randomizeColors() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//  atribuindo cores
const blackPx = document.getElementById('black'); blackPx.style.backgroundColor = 'black';
const olivePx = document.getElementById('olive'); olivePx.style.backgroundColor = randomizeColors();
const redPx = document.getElementById('red'); redPx.style.backgroundColor = randomizeColors();
const navyPx = document.getElementById('navy'); navyPx.style.backgroundColor = randomizeColors();


blackPx.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  blackPx.classList.add('selected');
});
olivePx.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  olivePx.classList.add('selected');
});

redPx.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  redPx.classList.add('selected');
});

navyPx.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  navyPx.classList.add('selected');
});

const selectedPx = document.querySelectorAll('.pixel');
function paintPx(i) {
  selectedPx[i].addEventListener('click', function () {
    const selectedColor = document.querySelector('.selected');
    selectedPx[i].style.backgroundColor =
selectedColor.style.backgroundColor;
  });
}

for (let i = 0; i < selectedPx.length; i += 1) {
  paintPx(i);
}

//  botão clear
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  for (let i = 0; i <= selectedPx.length; i += 1) {
    selectedPx[i].style.backgroundColor = 'white';
  }
});
