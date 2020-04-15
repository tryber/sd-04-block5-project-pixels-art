function selecionar() {
  const preto = document.querySelector('.preto');
  preto.classList.add('selected');
}

let preto = document.querySelector('.preto');
let verde = document.querySelector('.verde');
let laranja = document.querySelector('.laranja');
let amarelo = document.querySelector('.amarelo');
let pixels = document.getElementsByClassName('pixel');

preto.addEventListener('click', function () {
  verde.classList.remove('selected');
  laranja.classList.remove('selected');
  amarelo.classList.remove('selected');
  preto.classList.add('selected');
  document.querySelector('.selected').style.backgroundColor = 'black';
});

verde.addEventListener('click', function () {
  preto.classList.remove('selected');
  laranja.classList.remove('selected');
  amarelo.classList.remove('selected');
  verde.classList.add('selected');
  document.querySelector('.selected').style.backgroundColor = 'green';
});

laranja.addEventListener('click', function () {
  preto.classList.remove('selected');
  verde.classList.remove('selected');
  amarelo.classList.remove('selected');
  laranja.classList.add('selected');
  document.querySelector('.selected').style.backgroundColor = 'orange';
});

amarelo.addEventListener('click', function () {
  preto.classList.remove('selected');
  verde.classList.remove('selected');
  laranja.classList.remove('selected');
  amarelo.classList.add('selected');
  document.querySelector('.selected').style.backgroundColor = 'yellow';
});

for (let i = 0; i < 25; i += 1) {
  let divi = document.createElement('div');
  let divis = document.querySelector('#pixel-board');
  divis.appendChild(divi);
  divi.classList.add('pixel')
  
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    pixels[i].classList.toggle('selected');
  });
}
