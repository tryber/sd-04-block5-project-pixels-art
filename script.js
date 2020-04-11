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
  for(let i = 0; i < 4; i += 1){
    let colorUnit = document.createElement("div");
    colorUnit.setAttribute("class", "color");
    colorPalette.appendChild(colorUnit);
  }

  let childs = colorPalette.childNodes;
  childs[1].style.backgroundColor = "black";
  childs[1].classList.add("selected");
  childs[2].style.backgroundColor = "blue";
  childs[3].style.backgroundColor = "yellow";
  childs[4].style.backgroundColor = "green";
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
    }
  }
  return painter;
}


createPalette();
addEvtPalette();
createPixelBoard();
let marquinhos = new createPainter();
marquinhos.selectedColor();
addEvtPixels(marquinhos);

