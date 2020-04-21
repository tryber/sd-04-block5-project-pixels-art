window.onload = function () {
  const paletaDeCores = document.getElementById('color-palette');
  const quadroDePixels = document.getElementById('pixel-board');
  const botaoLimpar = document.getElementById('clear-board');
  function alteraClasse(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
  paletaDeCores.addEventListener('click', alteraClasse);
  function colorePixel(event) {
    const corSelecionada = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = corSelecionada;
  }
  quadroDePixels.addEventListener('click', colorePixel);
  function limparQuadro() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = '';
    }
  }
  botaoLimpar.addEventListener('click', limparQuadro);
};
