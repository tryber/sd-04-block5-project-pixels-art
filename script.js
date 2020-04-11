let colors, corSelecionada, pixels, btnTrash, tabela, tamanho,
  mudarTamanho, tbody, tr, td, criarTbody, criarTr;


colors = document.getElementsByClassName("color");
pixels = document.getElementsByClassName("pixel");
btnTrash = document.querySelector("#clear-board");
colors[0].style.backgroundColor = "black";
colors[1].style.backgroundColor = randomColor();
colors[2].style.backgroundColor = randomColor();
colors[3].style.backgroundColor = randomColor();
mudarTamanho = document.getElementById("generate-board");
tamanho = document.getElementById("board-size");
tabela = document.getElementById("pixel-board");
tbody = document.createElement('tbody');
tr = document.createElement('tr');
td = document.createElement('td');

// Cores RGB - gerar cores aleatorias ao carregar a pagina para pintar os pixels
function randomColor() {
  const hexa = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
}
//Requisitos 7 e 8
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener("click", function () {
    document.querySelector(".selected").classList.remove("selected"); //remove o .select da cor selecionada
    colors[i].classList.add("selected"); // adiciona .selected na nova cor selecionada
    corSelecionada = colors[i].style.backgroundColor; //ao selecionar a cor essa passa seu valor para corSelecionada
  });
};
//Requisitos 9 e 10
function colorir() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener("click", function () {
      pixels[i].style.backgroundColor = corSelecionada; //colore os pixels com a cor selecionada
    });
  };
};

//Requisitos 11
for (let i = 0; i < pixels.length; i += 1) {
  btnTrash.addEventListener("click", function () {
    pixels[i].style.backgroundColor = ""; //desfaz os pixels pintados
  });
};

//Quadro de pixels ter seu tamanho definido pelo usuário
function criarTabela() {
  tabela.children[0].remove();//remove os filhos da table
  tabela.appendChild(tbody);//cria o elemento tbody como filho da table
  for (let i = 0; i < tamanho.value; i += 1) {
    tabela.children[0].appendChild(tr); //adiciona um novo tr como filho do tbody
    for (let j = 0; j < tamanho.value; j += 1) {
    document.getElementsByTagName("tbody")[0].children[i].appendChild(td);
      td.className = 'pixel';
    }
  }
  return colorir();
};

//Caso o usuario colocque um valor abaixo de 5 ou maior que 50
mudarTamanho.addEventListener("click", function () {
  if (tamanho.value < 5) {
    tamanho.value = 5;
  } else if (tamanho.value > 50) {
    tamanho.value = 50;
  } else {
    criarTabela();
  }
});
