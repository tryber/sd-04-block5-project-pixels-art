window.onload = function () {
  const preto = this.document.getElementById('preto');
  const dois = this.document.getElementById('dois');
  const tres = this.document.getElementById('tres');
  const quatro = this.document.getElementById('quatro');
  preto.className = 'selected color';
  function randomColor(min, max) {
    return ((Math.random() * (max - min)) + min);
  }
  dois.style.backgroundColor = 'rgb(' + randomColor(0, 255) + ',' + randomColor(0, 255) + ',' + randomColor(0, 255) + ')';
  tres.style.backgroundColor = 'rgb(' + randomColor(0, 255) + ',' + randomColor(0, 255) + ',' + randomColor(0, 255) + ')';
  quatro.style.backgroundColor = 'rgb(' + randomColor(0, 255) + ',' + randomColor(0, 255) + ',' + randomColor(0, 255) + ')';
  preto.style.backgroundColor = 'black';
  document.getElementById('preto').addEventListener('click', function () { preto.className = 'selected color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('dois').addEventListener('click', function () { preto.className = 'color'; dois.className = 'selected color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('tres').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'selected color'; quatro.className = 'color'; });
  document.getElementById('quatro').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'selected color'; });
  document.getElementById('pixel-board').addEventListener('click', function () { const selectedColor = document.querySelector('.selected'); event.target.style.backgroundColor = selectedColor.style.backgroundColor; });
};
