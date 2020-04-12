  const preto = document.querySelector('.preto');
  const verde = document.querySelector('.verde');
  const laranja = document.querySelector('.laranja');
  const amarelo = document.querySelector('.amarelo');

  const cor = document.querySelector('.selected');

  preto.addEventListener('click', function () {
    preto.classList.add('selected');
    cor.style.backgroundColor = 'black';
  });

  verde.addEventListener('click', function () {
    verde.classList.add('selected');
    cor.style.backgroundColor = 'green';
  });

  laranja.addEventListener('click', function () {
    laranja.classList.add('selected');
    cor.style.backgroundColor = 'orange';
  });

  amarelo.addEventListener('click', function () {
    amarelo.classList.add('selected');
    cor.style.backgroundColor = 'yellow';
  });

  const pixels = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixels.length; i+=) {
    pixels[i].addEventListener('click', function () {
      pixels[i].classList.add('selected');
      });
  }
