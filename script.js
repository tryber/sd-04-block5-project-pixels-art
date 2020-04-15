function selecionar() {
  const preto = document.querySelector('.preto');
  preto.classList.add('selected');
}

const cor = document.querySelector('.selected');

const pixels = document.getElementsByClassName('pixel');

for (let i = 0; i < pixels.length; i+= 1) {
  pixels[i].addEventListener('click', function () {
    pixels[i].classList.add('selected');
  });
}
