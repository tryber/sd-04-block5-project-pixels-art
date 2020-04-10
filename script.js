window.onload = function() {
  createPalette()
  createPixelBoard();
};

function createPixelBoard() {
  let pixelBoard = document.getElementById("pixel-board");
  for(let i=0; i<4; i+=1){
    pixelBoard.appendChild(createPixelBoardRow());
  }
  pixelBoard.appendChild(createLastPixelRow());
}

function createPixelBoardRow() {
  let a = document.createElement("div");
  a.setAttribute("class", "row")
  for(let i=0; i<5; i+=1){
    let colorDiv = document.createElement("div");
    colorDiv.setAttribute("class", "pixel")
    a.appendChild(colorDiv);
  }
    a.setAttribute("class", "row");
  return a;
}

function createLastPixelRow() {
  let a = document.createElement("div");
  a.setAttribute("class", "lastRow")
  for(let i=0; i<5; i+=1){
    let colorDiv = document.createElement("div");
    colorDiv.setAttribute("class", "pixel");
    a.appendChild(colorDiv);
  }
  return a; 
}

function createPalette() {
  let colorPalette = document.getElementById("color-palette");
  for(let i=0; i<4; i+=1){
    let colorUnit = document.createElement("div");
    colorUnit.setAttribute("class", "color");
    console.log(colorUnit);
    colorPalette.appendChild(colorUnit);
  }

  let childs = colorPalette.childNodes;
  childs[1].style.backgroundColor = "black";
  childs[2].style.backgroundColor = "blue";
  childs[3].style.backgroundColor = "yellow";
  childs[4].style.backgroundColor = "green";

}