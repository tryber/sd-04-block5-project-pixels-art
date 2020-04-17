window.onload = function () {
  const preto = this.document.getElementById('preto');
  const dois = this.document.getElementById('dois');
  const tres = this.document.getElementById('tres');
  const quatro = this.document.getElementById('quatro');
  preto.className = 'selected color';
  function randomColor() {
    const min = 0;
    const max = 16777215;
    const cor = (Math.floor((Math.random() * (max - min)) + min)).toString(16);
    return (`#${cor}`);
  }
  const rgb2 = randomColor();
  const rgb3 = randomColor();
  const rgb4 = randomColor();
  dois.style.backgroundColor = rgb2;
  tres.style.backgroundColor = rgb3;
  quatro.style.backgroundColor = rgb4;
  preto.style.backgroundColor = 'black';
  document.getElementById('preto').addEventListener('click', function () { preto.className = 'selected color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('dois').addEventListener('click', function () { preto.className = 'color'; dois.className = 'selected color'; tres.className = 'color'; quatro.className = 'color'; });
  document.getElementById('tres').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'selected color'; quatro.className = 'color'; });
  document.getElementById('quatro').addEventListener('click', function () { preto.className = 'color'; dois.className = 'color'; tres.className = 'color'; quatro.className = 'selected color'; });
  document.getElementById('pixel-board').addEventListener('click', function () { const selectedColor = document.querySelector('.selected'); event.target.style.backgroundColor = selectedColor.style.backgroundColor; });
};
