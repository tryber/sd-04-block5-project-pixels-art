const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const btnTrash = document.querySelector('#clear-board');
let corSelecionada = '';
const mudarTamanho = document.getElementById('generate-board');
const tamanho = document.getElementById('board-size');

// Cores RGB - gerar cores aleatorias ao carregar a pagina para pintar os pixels
function randomColor() {
  const hexa = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
}
colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = randomColor();
colors[2].style.backgroundColor = randomColor();
colors[3].style.backgroundColor = randomColor();
// Requisitos 7 e 8
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');// remove o .select da cor selecionada
    colors[i].classList.add('selected');// adiciona .selected na nova cor selecionada
    corSelecionada = colors[i].style.backgroundColor;
    // ao selecionar a cor essa passa seu valor para corSelecionada
  });
}
// Requisitos 9 e 10
function colorir() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = corSelecionada;// colore os pixels com a cor selecionada
    });
  }
}
colorir();// chamando a função colorir para funcionar sempre ao inicializar
// Requisitos 11
btnTrash.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '';// desfaz os pixels pintados
  }
});
// Quadro de pixels ter seu tamanho definido pelo usuário
function criarTabela() {
  const tabela = document.getElementById('pixel-board');
  tabela.children[0].remove();// remover tabela existente
  const criarTbody = document.createElement('tbody');
  tabela.appendChild(criarTbody);// criar tbody e os torna filho da table
  const newTbody = document.getElementsByTagName('tbody')[0];
  for (let i = 0; i < tamanho.value; i += 1) {
    const criarTr = document.createElement('tr');// cria trs conforme a escolha do usuario;
    newTbody.appendChild(criarTr);// cria trs e os torna filho do tbody
    const newTr = document.getElementsByTagName('tr')[i];
    for (let x = 0; x < tamanho.value; x += 1) {
      const criarTd = document.createElement('td');
      criarTd.className = 'pixel';
      newTr.appendChild(criarTd);// cria tds e os torna filhos de tr
    }
  } return colorir();
}
// Requisito 12
mudarTamanho.addEventListener('click', function () {
  if (tamanho.value < 5) { // Caso o usuario colocque um valor abaixo de 5 ou maior que 50
    tamanho.value = 5;
    criarTabela();// chama a função criarTabela()
  } else if (tamanho.value > 50) {
    tamanho.value = 50;
    criarTabela();
  } else {
    criarTabela();
  }
});
