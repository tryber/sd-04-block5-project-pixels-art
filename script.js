let colors;
let pixelBoard;
window.onload = function(){
  colors = document.getElementsByClassName("color");
  pixelBoard = document.getElementById("pixel-board");
  this.addGrid(5 , 5);
}

function addGrid(xsize , ysize){
  for (let y = 0; y < ysize; y++) {
    for (let x = 0; x < xsize; x++) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      pixelBoard.appendChild(pixel);
    }
  }
}
