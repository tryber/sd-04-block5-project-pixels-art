window.onload = function () {
  const preto = this.document.getElementById('preto');
  const dois = this.document.getElementById('dois');
  const tres = this.document.getElementById('tres');
  const quatro = this.document.getElementById('quatro');
  const generate = document.getElementById('generate-board');
  const clear = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');
  const board = document.getElementById('pixel-board');
  preto.className = 'selected color'; //  teste
  tres.style.backgroundColor = `#${(Math.floor((Math.random() * (0, 16777215)) + 0)).toString(16)}`;
  dois.style.backgroundColor = `#${(Math.floor((Math.random() * (0, 16777215)) + 0)).toString(16)}`;
  quatro.style.backgroundColor = `#${(Math.floor((Math.random() * (0, 16777215)) + 0)).toString(16)}`;
  document.getElementById('preto').addEventListener('click', function () { preto.className = 'selected color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('dois').addEventListener('click', function () { preto.className = 'color'; dois.className = 'selected color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('tres').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'selected color'; quatro.className = 'color'; });
  document.getElementById('quatro').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'selected color'; });
  document.getElementById('pixel-board').addEventListener('click', function () { const selectedColor = document.querySelector('.selected'); event.target.style.backgroundColor = selectedColor.style.backgroundColor; });
  generate.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i += 1) { board.removeChild(pixels[i]); }
    const size = document.getElementById('board-size').value;
    board.style.height = `${size * 42}px`;
    board.style.width = `${size * 42}px`;
    for (let i = 0; i < size * size; i += 1) { const pixel = document.createElement('div'); pixel.classList.add('pixel'); board.appendChild(pixel); }
  });
  clear.addEventListener('click', function () { for (let i = 0; i < pixels.length; i += 1) { pixels[i].style.backgroundColor = 'white'; } });
};
