let colors, corSelecionada, pixels;

colors = document.getElementsByClassName("color");

colors[0].style.backgroundColor = "black";
colors[1].style.backgroundColor = "red";
colors[2].style.backgroundColor = "yellow";
colors[3].style.backgroundColor = "blue";

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener("click", function () {
    corSelecionada = colors[i].style.backgroundColor;
  });
};
