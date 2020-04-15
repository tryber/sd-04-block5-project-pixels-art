let paletteColor = document.getElementsByClassName("color");
let pixel = document.getElementsByClassName("pixel");

function getColor(evento) {
  sessionStorage.color = evento.target.style.backgroundColor;
}

function paletaColor() {
  for (let i = 0; i < paletteColor.length; i++) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    paletteColor[0].style.backgroundColor = "black";
    paletteColor[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    paletteColor[i].addEventListener("click", getColor);
  }
}

function corPixels() {
  var colorSelected = sessionStorage.getItem("color");
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener("click", function (e) {
      e.target.style.backgroundColor = sessionStorage.color;
    });
  }
}

paletaColor();
corPixels();
