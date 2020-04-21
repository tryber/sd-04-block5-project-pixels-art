let pixelBoard = document.getElementById("pixel-board");
function createPixelBoard(n) {
  var qtd = 0
  if(n<5){
    qtd = 5;
  } else if(n>50){
    qtd = 50;
  } else {qtd = n;}
  let finish = 0;
  for(let i=0; i<qtd; i+=1){
    let limite = qtd-1
    if(finish<limite){
    for(let i=0; i<qtd; i+=1){
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      pixelBoard.appendChild(pixel);
    }
      let br = document.createElement("br");
      pixelBoard.appendChild(br);
      finish += 1;
  } else {
    for(let i=0; i<qtd; i+=1){
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel")
      pixelBoard.appendChild(pixel);
      }
    }
  }
}

function createPalette() {
  let colorPalette = document.getElementById("color-palette");
  for(let i = 0; i < 4; i += 1){
    let colorUnit = document.createElement("div");
    colorUnit.setAttribute("class", "color");
    colorPalette.appendChild(colorUnit);
  }

  let childs = colorPalette.childNodes;
  childs[1].style.backgroundColor = "black";
  childs[1].classList.add("selected");
  let color2 = Math.floor(Math.random()*16777215).toString(16);
  let color3 = Math.floor(Math.random()*16777215).toString(16);
  let color4 = Math.floor(Math.random()*16777215).toString(16);
  childs[2].style.backgroundColor = "#" + color2;
  childs[3].style.backgroundColor = "#" + color3;
  childs[4].style.backgroundColor = "#" + color4;
}

function addEvtPixels(painter){
  var painter = painter;
  let pixelCollection = document.getElementsByClassName("pixel");
  for(let i = 0; i < pixelCollection.length; i+=1){
    pixelCollection[i].addEventListener("click", function(evt){ painter.paint(evt); });
  }
}

function addEvtPalette(){
  let paletteCollection = document.getElementsByClassName("color");
  for(let i = 0; i < paletteCollection.length; i+=1){
    paletteCollection[i].addEventListener("click", function(evt){ select(evt, paletteCollection); });
  }
}

function select(evt, paletteCollection){
  for(let i = 0; i < paletteCollection.length; i += 1){
  paletteCollection[i].classList.remove("selected");
  }
  evt.target.classList.add("selected");
}

function addEvtClearAllPixels(painter){
  let clearButton = document.getElementById("clear-board");
  var painter = painter;
  clearButton.addEventListener("click", function(){ painter.clearAllPixels()});
}

function addEvtBoardSize(){
  let generateBoard = document.getElementById("generate-board");
  generateBoard.addEventListener("click", reBoard);
}

function reBoard(){
  let boardSize = document.getElementById("board-size");
    while (pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.firstChild);
  }
    createPixelBoard(boardSize.value);
    addEvtPixels(marquinhos);
}

function createPainter(){
  let painter = {
    color: null,
    selectedColor(){
      this.color = document.getElementsByClassName("selected");    
    },
    peekColor(){
      console.log(this.color[0].style.backgroundColor);
    },
    paint(evt){
      evt.target.style.backgroundColor = this.color[0].style.backgroundColor;
    },
    clearAllPixels(){
      let pixelCollection = document.getElementsByClassName("pixel");
      for(let i = 0; i < pixelCollection.length; i += 1)
      pixelCollection[i].style.backgroundColor = "white";
    }
  }
  return painter;
}



createPalette();
addEvtPalette();
createPixelBoard(5);
let marquinhos = new createPainter();
marquinhos.selectedColor();
addEvtPixels(marquinhos);
addEvtClearAllPixels(marquinhos);
addEvtBoardSize();
