window.onload = function() {
  createPalette()
  createPixelBoard();
};

function createPixelBoard() {
  let pixelBoard = document.getElementById("pixel-board");
  let finish = 0;
  for(let i=0; i<5; i+=1){
  if(finish<4){
    for(let i=0; i<5; i+=1){
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");      
      pixelBoard.appendChild(pixel);
    }
      let br = document.createElement("br");
      pixelBoard.appendChild(br);
      finish += 1;
  } else {
    for(let i=0; i<5; i+=1){
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel")
      pixelBoard.appendChild(pixel);
      }
    }
  }
}


function createPalette() {
  let colorPalette = document.getElementById("color-palette");
  for(let i=0; i<4; i+=1){
    let colorUnit = document.createElement("div");
    colorUnit.setAttribute("class", "color");
    colorPalette.appendChild(colorUnit);
  }

  let childs = colorPalette.childNodes;
  childs[1].style.backgroundColor = "black";
  childs[2].style.backgroundColor = "blue";
  childs[3].style.backgroundColor = "yellow";
  childs[4].style.backgroundColor = "green";

}