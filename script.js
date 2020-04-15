function selecionar() {
  const preto = document.querySelector('.preto');
  preto.classList.add('selected');
}

const preto = document.querySelector('.preto');
const verde = document.querySelector('.verde');
const laranja = document.querySelector('.laranja');
const amarelo = document.querySelector('.amarelo');
const pixels = document.querySelector('#pixel-board');

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
  const divi = document.createElement('div');
  const divis = document.querySelector('#pixel-board');
  divis.appendChild(divi);
  divi.classList.add('pixel');
}

pixels.addEventListener('click', function () {
  const selec = document.querySelector('.selected');
  event.target.style.backgroundColor = selec.style.backgroundColor;
});
