let color = 'black';

const buttonsArray = document.getElementsByClassName('color');
for (let i = 0; i < buttonsArray.length; i = i + 1) {
  const btn = buttonsArray[i];
  btn.addEventListener('click', () => {
    color = btn.classList[1];
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    btn.classList.add('selected');
  });
}
const pixelBoard = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelBoard.length; i = i + 1) {
  const pixel = pixelBoard[i];
  pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = color;
  });
}
