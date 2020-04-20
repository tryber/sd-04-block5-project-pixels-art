window.onload = function () {
  const preto = this.document.getElementById('preto');
  const dois = this.document.getElementById('dois');
  const tres = this.document.getElementById('tres');
  const quatro = this.document.getElementById('quatro');
  preto.className = 'selected color';
  tres.style.backgroundColor = `#${(Math.floor((Math.random() * (0, 16777215)) + 0)).toString(16)}`;
  dois.style.backgroundColor = `#${(Math.floor((Math.random() * (0, 16777215)) + 0)).toString(16)}`;
  quatro.style.backgroundColor = `#${(Math.floor((Math.random() * (0, 16777215)) + 0)).toString(16)}`;
  document.getElementById('preto').addEventListener('click', function () { preto.className = 'selected color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('dois').addEventListener('click', function () { preto.className = 'color'; dois.className = 'selected color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('tres').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'selected color'; quatro.className = 'color'; });
  document.getElementById('quatro').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'selected color'; });
  document.getElementById('pixel-board').addEventListener('click', function () { const selectedColor = document.querySelector('.selected'); event.target.style.backgroundColor = selectedColor.style.backgroundColor; });
  document.getElementById('generate-board').addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    if (document.getElementById('board-size').value < 5) document.getElementById('board-size').value = 5;
    if (document.getElementById('board-size').value > 50) document.getElementById('board-size').value = 50;
    for (let i = 0; i < pixels.length; i += 1) { document.getElementById('pixel-board').removeChild(pixels[i]); }
    document.getElementById('pixel-board').style.height = `${document.getElementById('board-size').value * 42}px`;
    document.getElementById('pixel-board').style.width = `${document.getElementById('board-size').value * 42}px`;
    for (let i = 0; i < (document.getElementById('board-size').value) * (document.getElementById('board-size').value); i += 1) { const pixel = document.createElement('div'); pixel.classList.add('pixel'); document.getElementById('pixel-board').appendChild(pixel); }
  });
  document.getElementById('clear-board').addEventListener('click', function () { const pixels = document.querySelectorAll('.pixel'); for (let i = 0; i < pixels.length; i += 1) { pixels[i].style.backgroundColor = 'white'; } });
};
