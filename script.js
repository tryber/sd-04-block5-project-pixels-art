window.onload = function () {
  let paletaDeCores = document.getElementById('color-palette');
  let quadroDePixels = document.getElementById('pixel-board');

  function alteraClasse (event) {
  //console.log(event.target.className);
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  }
  paletaDeCores.addEventListener('click', alteraClasse);

  function colorePixel (event)  {
  //console.log(event.target);
  let corSelecionada = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = corSelecionada;
  }
  quadroDePixels.addEventListener('click', colorePixel);


}
