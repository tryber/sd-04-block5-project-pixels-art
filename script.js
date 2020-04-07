window.onload = function () {
  const color1 = document.querySelector('#color1');
  const color2 = document.querySelector('#color2');
  const color3 = document.querySelector('#color3');
  const color4 = document.querySelector('#color4');
  const boardPixel = document.querySelectorAll('.pixel');
  let thatColor = 'black';
  color1.addEventListener ('click', function() {
    thatColor = color1.classList[1];
  });
  color2.addEventListener ('click', function() {
    thatColor = color2.classList[1];
  });
  color3.addEventListener ('click', function() {
    thatColor = color3.classList[1];
  });
  color4.addEventListener ('click', function() {
    thatColor = color4.classList[1];
  });
  //  pintar o board pixel
  for (let i = 0; i < boardPixel.length; i += 1) {
    const pixel = boardPixel[i];
    pixel.addEventListener ('click', function() {
    //  pixel.style.backgroundColor = "red";
      pixel.classList.add(thatColor);
    });
  }
};
