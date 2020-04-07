const preto = document.querySelector('#preto');
const vermelho = document.querySelector('#vermelho');
const azul = document.querySelector('#azul');
const amarelo = document.querySelector('#amarelo');

function selected (div) {
  div.className += " selected";
}
selected(preto);
console.log(selected);