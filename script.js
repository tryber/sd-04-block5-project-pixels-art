window.onload = function () {
  const colors = document.getElementsByClassName('color');
  function checkColor() {
    for (let i = 0; i < 4; i += 1) {
      colors[i].classList.remove('selected');
    }
    this.classList.add('selected');
  }
  for (let i = 0; i < 4; i += 1) {
    colors[i].addEventListener('click', checkColor);
  }
};
