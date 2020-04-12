const cor = document.querySelector('.selected');

const pixels = document.getElementsByClassName('pixel');

for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', function () {
    pixels[i].classList.add('selected');
    });
}
