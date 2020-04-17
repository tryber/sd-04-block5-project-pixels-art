window.onload = function () {
  //  declaracao de variaveis para alterar cor da paleta
  const preto = this.document.getElementById('preto');
  const vermelho = this.document.getElementById('vermelho');
  const verde = this.document.getElementById('verde');
  const azul = this.document.getElementById('azul');
  //  adiciona cores a paleta
  preto.style.backgroundColor = 'black';
  vermelho.style.backgroundColor = 'red';
  verde.style.backgroundColor = 'green';
  azul.style.backgroundColor = 'blue';
  // adiciona a classe selecionada para o elemento 1
  preto.className = 'selected color';
  //  event listeners para saber qual cor foi selecionada
  document.getElementById('preto').addEventListener("click", function () {
    preto.className = 'selected color';
    vermelho.className = 'color';
    verde.className = 'color';
    azul.className = 'color';
  });
  document.getElementById('vermelho').addEventListener("click", function () {
    preto.className = 'color';
    vermelho.className = 'selected color';
    verde.className = 'color';
    azul.className = 'color';
  });
  document.getElementById('verde').addEventListener("click", function () {
    preto.className = 'color';
    vermelho.className = 'color';
    verde.className = 'selected color';
    azul.className = 'color';
  });
  document.getElementById('azul').addEventListener("click", function () {
    preto.className = 'color';
    vermelho.className = 'color';
    verde.className = 'color';
    azul.className = 'selected color';
  });
  //  requisitos bonus 
  //  Ao clicar em uma das cores da paleta, a cor selecionada na paleta é que vai ser usada para preencher os pixels
  //  Ao clicar em um pixel com uma cor selecionada, o pixel deve ser preenchido com esta cor
  //  event listener que pinta da cor do elemento selecionado
  document.getElementById('pixel-board').addEventListener('click', function () {
    //  cor selecionada por último
    const selectedColor = document.querySelector('.selected');
    //  altera a cor do pixel para a cor selecionada
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  });
};
