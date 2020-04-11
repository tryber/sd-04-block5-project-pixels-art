let colors, corSelecionada, pixels, btnTrash, red, green, blue, rgb;

colors = document.getElementsByClassName("color");
pixels = document.getElementsByClassName("pixel");
btnTrash = document.querySelector("#clear-board");


colors[0].style.backgroundColor = "black";
colors[1].style.backgroundColor = randomColor();
colors[2].style.backgroundColor = randomColor();
colors[3].style.backgroundColor = randomColor();

// Cores RGB - Variavel que arredonde para baixo um valor aleatorio de 0 a 255.
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
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener("click", function () {
    pixels[i].style.backgroundColor = corSelecionada; //colore os pixels com a cor selecionada
  });
};
//Requisitos 11
for (let i = 0; i < pixels.length; i += 1) {
  btnTrash.addEventListener("click", function () {
    pixels[i].style.backgroundColor = ""; //desfaz os pixels pintados
  });
};
