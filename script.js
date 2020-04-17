window.onload = function () {
  const preto = this.document.getElementById('preto');
  const vermelho = this.document.getElementById('vermelho');
  const verde = this.document.getElementById('verde');
  const azul = this.document.getElementById('azul');
  preto.style.backgroundColor = 'black';
  vermelho.style.backgroundColor = 'red';
  verde.style.backgroundColor = 'green';
  azul.style.backgroundColor = 'blue';
  preto.className = 'selected color';
  document.getElementById('preto').addEventListener('click', function () { preto.className = 'selected color'; vermelho.className = 'color'; verde.className = 'color'; azul.className = 'color'; });
  document.getElementById('vermelho').addEventListener('click', function () { preto.className = 'color'; vermelho.className = 'selected color'; verde.className = 'color'; azul.className = 'color'; });
  document.getElementById('verde').addEventListener('click', function () { preto.className = 'color'; vermelho.className = 'color'; verde.className = 'selected color'; azul.className = 'color'; });
  document.getElementById('azul').addEventListener('click', function () { preto.className = 'color'; vermelho.className = 'color'; verde.className = 'color'; azul.className = 'selected color'; });
  document.getElementById('pixel-board').addEventListener('click', function () { const selectedColor = document.querySelector('.selected'); event.target.style.backgroundColor = selectedColor.style.backgroundColor; });
};
