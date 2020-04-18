window.onload = function () {
  makeColor();
  const color = document.querySelectorAll('.color');
  const pixel = document.querySelectorAll('.pixel');
  let theCSSprop;
  for (let i = 0; i < 25; i += 1) {
    pixel[i].addEventListener('click', function () {
      pixel[i].style.backgroundColor = black.style.backgroundColor;
    })
  }
  for (let c = 0; c < 4; c += 1) {
    for (let i = 0; i < 25; i += 1) {
      color[c].addEventListener('click', function () {
        theCSSprop = window.getComputedStyle(color[c], null).getPropertyValue('background-color');
        color[c].classList.add('selected');
        pixel[i].addEventListener('click', function (e) {
          this.style.backgroundColor = theCSSprop;
          console.log(theCSSprop);
        });
      });
    }
  }
};

function makeColor() {
  const black = document.querySelector('#black');
  black.style.backgroundColor = 'rgb(0, 0, 0)';
  const red = document.querySelector('#red');
  red.style.backgroundColor = 'rgb(255, 0, 0)';
  const green = document.querySelector('#green');
  green.style.backgroundColor = 'rgb(0, 255, 0)';
  const blue = document.querySelector('#blue');
  blue.style.backgroundColor = 'rgb(0, 0, 255)';
}
