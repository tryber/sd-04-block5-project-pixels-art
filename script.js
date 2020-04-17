window.onload = function () {
  //declaracao de variaveis para alterar cor da paleta
  const preto = this.document.getElementById('preto');
  const vermelho = this.document.getElementById('vermelho');
  const verde = this.document.getElementById('verde');
  const azul = this.document.getElementById('azul');
  //adiciona cores a paleta
  preto.style.backgroundColor= 'black';
  vermelho.style.backgroundColor= 'red';
  verde.style.backgroundColor= 'green';
  azul.style.backgroundColor= 'blue';
  // altera a classe da cor 1 para selecionada
  preto.className = 'selected color';
};
