window.onload = function () {
  const colors = document.getElementsByClassName('color');
  const pixels = document.getElementsByClassName('pixel');
  let selectedColor = 'black';

  function checkColor() {
    [...colors].forEach((element) => {
      element.classList.remove('selected');
    });
    this.classList.add('selected');
    selectedColor = this.classList.item(1);
  }

  function checkPixel() {
    if (this.classList.length === 2) {
      this.classList.remove(this.classList.item(1));
    }
    this.classList.add(selectedColor);
  }

  [...colors].forEach((element) => {
    element.addEventListener('click', checkColor);
  });
  [...pixels].forEach((element) => {
    element.addEventListener('click', checkPixel);
  });
};
