window.onload = function () {
  const color1 = document.querySelector('#color1');
  const color2 = document.querySelector('#color2');
  const color3 = document.querySelector('#color3');
  const color4 = document.querySelector('#color4');
  const boardPixel = document.querySelectorAll('.pixel');
  let thatColor = 'black';
  let selected;
  color1.addEventListener ('click', function() {
    thatColor = color1.classList[1];
    selected = color1.classList.add('selected');
    selected = color2.classList.remove('selected');
    selected = color3.classList.remove('selected');
    selected = color4.classList.remove('selected');
  });
  color2.addEventListener ('click', function() {
    thatColor = color2.classList[1];
    selected = color2.classList.add('selected');
    selected = color1.classList.remove('selected');
    selected = color3.classList.remove('selected');
    selected = color4.classList.remove('selected');
  });
  color3.addEventListener ('click', function() {
    thatColor = color3.classList[1];
    selected = color3.classList.add('selected');
    selected = color2.classList.remove('selected');
    selected = color1.classList.remove('selected');
    selected = color4.classList.remove('selected');
  });
  color4.addEventListener ('click', function() {
    thatColor = color4.classList[1];
    selected = color4.classList.add('selected');
    selected = color2.classList.remove('selected');
    selected = color3.classList.remove('selected');
    selected = color1.classList.remove('selected');
  });
  //  pintar o board pixel
  for (let i = 0; i < boardPixel.length; i += 1) {
    const pixel = boardPixel[i];
    pixel.addEventListener ('click', function() {
    pixel.style.backgroundColor = thatColor;
    // pixel.classList.add(thatColor);
    });
  }
};
