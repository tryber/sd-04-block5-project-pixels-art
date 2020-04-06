let color = 'black';

const buttonsArray = document.getElementsByClassName('color');
for (let i = 0; i < buttonsArray.length; i += 1) {
  const btn = buttonsArray[i];
  var a = btn.addEventListener('click', () => {
    color = btn.classList[1];
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    btn.classList.add('selected');
  });
  a();
}
const pixelBoard = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelBoard.length; i += 1) {
  const pixel = pixelBoard[i];
  var b = pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = color;
  });
  b();
}
