window.onload = function () {
  const colors = document.getElementsByClassName('color');
  const pixels = document.getElementsByClassName('pixel');
  let selectedColor = 'black';

  function checkColor() {
    for (let i = 0; i < 4; i += 1) {
      colors[i].classList.remove('selected');
    }
    this.classList.add('selected');
    selectedColor = this.classList.item(1);
  }

  function checkPixel() {
    if (this.classList.length === 2) {
      this.classList.remove(this.classList.item(1));
      this.classList.add(selectedColor);
    } else {
      this.classList.add(selectedColor);
    }
  }

  for (let i = 0; i < 4; i += 1) {
    colors[i].addEventListener('click', checkColor);
  }
  for (let i = 0; i < 25; i += 1) {
    pixels[i].addEventListener('click', checkPixel);
  }
};
