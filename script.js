let colors;
let colorSelected;
let pixelBoard;
window.onload = function () {
  colors = document.getElementsByClassName("color");
  pixelBoard = document.getElementById("pixel-board");
  selectColor(colors[0]);
  colorSelected.style.backgroundColor = "black";
  randomizePallet();
  addGrid(5, 5);

}

function eventSelectColor(event) {
  selectColor(event.target);
}

function selectColor(element) {
  if (colorSelected != element) {
    if (colorSelected) {
      colorSelected.className = colorSelected.className.replace(" selected", "");
    }
    element.className += " selected";
    colorSelected = element;
  }
}

function paintPixel(event){
  event.target.style.backgroundColor = colorSelected.style.backgroundColor;
}

function randomizePallet() {
  for (let i = 1; i < colors.length; i++) {
    colors[i].style.backgroundColor = randomColor();
  }
}

function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function addGrid(xsize, ysize) {
  for (let y = 0; y < ysize; y++) {
    for (let x = 0; x < xsize; x++) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.addEventListener("click", paintPixel);
      pixelBoard.appendChild(pixel);
    }
  }
  pixelBoard.style.width = ysize * 40 + "px";
}
