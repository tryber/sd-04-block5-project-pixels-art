window.onload = function () {
  const corSelecionada = document.getElementById('color-palette');
  corSelecionada.addEventListener('click', function (event) {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  document.getElementById('preto').style.backgroundColor = 'black';
  document.getElementById('verde').style.backgroundColor = 'green';
  document.getElementById('azul').style.backgroundColor = 'blue';
  document.getElementById('vermelho').style.backgroundColor = 'red';
  const pixelPitado = document.getElementById('pixel-board');
  pixelPitado.addEventListener('click', (e) => {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
};

