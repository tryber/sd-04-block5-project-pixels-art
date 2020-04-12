window.onload = function () {
  const buttonCor1 = document.getElementById('black-color');
  const buttonCor2 = document.getElementById('color-block1');
  const buttonCor3 = document.getElementById('color-block2');
  const buttonCor4 = document.getElementById('color-block3');
  const painel = document.getElementById('pixel-board');
  const zerar = document.getElementById('clear-board');
  const newPainel = document.getElementById('board-size');
  const buttonPainel = document.getElementById('generate-board');
  let corAtual = 0;
  let coLinAtual = 5;
  let coLinFutura = 0;

  IniciaPaleta();
  IniciaPainel(coLinAtual, coLinAtual);

  buttonCor1.addEventListener('click', function () {
      TrocaCor(event, 0);
  });
  buttonCor2.addEventListener('click', function () {
      TrocaCor(event, 1);
  });
  buttonCor3.addEventListener('click', function () {
      TrocaCor(event, 2);
  });
  buttonCor4.addEventListener('click', function () {
      TrocaCor(event, 3);
  });
  zerar.addEventListener('click', function () {
      LimpaTudo();
  });
  buttonPainel.addEventListener('click', function () {
      console.log("oq aconteceu");
      TiraPainel(parseInt(newPainel.value));
  });

  function IniciaPaleta() {
      buttonCor1.style.backgroundColor = 'black';
      buttonCor2.style.backgroundColor = SorteiaCor(0, 255);
      buttonCor3.style.backgroundColor = SorteiaCor(0, 255);
      buttonCor4.style.backgroundColor = SorteiaCor(0, 255);
  }

  function IniciaPainel(linha, coluna) {
      painel.style.maxWidth = (44 * coluna) + 'px';
      for (let i = 0; i < linha; i++) {
          for (let y = 0; y < coluna; y++) {
              let elemento = document.createElement('div');
              elemento.setAttribute('class', 'pixel');
              elemento.style.backgroundColor = 'white';
              elemento.addEventListener('click', function (event) {
                  Pintar(event);
              });
              painel.appendChild(elemento);
          }
      }
  }

  function TrocaCor(event, corFutura) {
      if (corAtual === 0) {
          buttonCor1.classList.remove('selected');
          corAtual = corFutura;
      }
      else if (corAtual === 1) {
          buttonCor2.classList.remove('selected');
          corAtual = corFutura;
      }
      else if (corAtual === 2) {
          buttonCor3.classList.remove('selected');
          corAtual = corFutura;
      }
      else if (corAtual === 3) {
          buttonCor4.classList.remove('selected');
          corAtual = corFutura;
      }

      if (corFutura === 0) {
          buttonCor1.className = 'color selected';
      }
      else if (corFutura === 1) {
          buttonCor2.className = 'color selected';
      }
      else if (corFutura === 2) {
          buttonCor3.className = 'color selected';
      }
      else if (corFutura === 3) {
          buttonCor4.className = 'color selected';
      }
  }

  function Pintar(event) {
      let cor;
      if (corAtual === 0) {
          cor = buttonCor1.style.backgroundColor;
      }
      else if (corAtual === 1) {
          cor = buttonCor2.style.backgroundColor;
      }
      else if (corAtual === 2) {
          cor = buttonCor3.style.backgroundColor;
      }
      else if (corAtual === 3) {
          cor = buttonCor4.style.backgroundColor;
      }
      event.target.style.backgroundColor = cor;
  }

  function LimpaTudo() {
      for (let i = 0; i < (coLinAtual * coLinAtual); i++) {
          painel.childNodes[i].style.backgroundColor = 'white';
      }
  }

  function SorteiaCor(min, max) {
      let cor = 'rgb(';
      for (let i = 0; i < 3; i++) {
          if (i != 2) {
              cor += (Math.floor(Math.random() * (max - min)) + min) + ',';
          }
          else {
              cor += (Math.floor(Math.random() * (max - min)) + min) + ')';
          }
      }
      return cor;
  }

  function TiraPainel(elemento) {
      if (elemento >= 0) {
          for (let i = 0; i < coLinAtual; i++) {
              for (let y = 0; y < coLinAtual; y++) {
                  painel.removeChild(painel.firstChild);
              }
          }
          if (elemento < 5) {
              coLinFutura = 5;
          }
          else if (elemento > 50) {
              coLinFutura = 50;
          }
          else {
              coLinFutura = elemento;
          }
          IniciaPainel(coLinFutura, coLinFutura);
          coLinAtual = coLinFutura;
      }
  }
};
