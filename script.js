// Variables
let palette = document.querySelectorAll(".color")
let box1 = document.querySelectorAll(".color")[0];
let box2 = document.querySelectorAll(".color")[1];
let box3 = document.querySelectorAll(".color")[2];
let box4 = document.querySelectorAll(".color")[3];
let pixelBoard = document.getElementById("pixel-board");
let buttonClear = document.getElementById("clear-board");
let inputBoardSize = document.getElementById("board-size");
let buttonGenerateBoard = document.getElementById("generate-board");

// Creating palette box
box1.style.backgroundColor = "black";
box2.style.backgroundColor = "lightblue";
box3.style.backgroundColor = "pink";
box4.style.backgroundColor = "orange";

// Select black when the page load
window.addEventListener("load", function() {
  box1.classList.add("selected");
});
// Selecting box1
function box1Selected() {
    let item = document.querySelector(".selected");
    if (item) {
      item.classList.remove("selected");
      box1.classList.add("selected");
    }
};
// Selecting box2
function box2Selected() {
  let item = document.querySelector(".selected");
    if (item) {
      item.classList.remove("selected");
      box2.classList.add("selected");
    } 
};
// Selecting box3
function box3Selected() {
  let item = document.querySelector(".selected");
    if (item) {
      item.classList.remove("selected");
      box3.classList.add("selected");
    } 
};
// Selecting box4
function box4Selected() {
  let item = document.querySelector(".selected");
    if (item) {
      item.classList.remove("selected");
      box4.classList.add("selected");
    } 
};
// Painting pixel
pixelBoard.addEventListener("click", function(event) {
  event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
});
// Clear button
buttonClear.addEventListener("click", function() {
  let allPixels = document.querySelectorAll(".pixel")
  for( let i = 0; i < allPixels.length; i+=1) {
    allPixels[i].style.backgroundColor = "white";
  }
})
// Generate board
buttonGenerateBoard.addEventListener("click", function() {
  let value = inputBoardSize.value;
  if(value < 5) value = 5;
  if(value > 50) value = 50;
  let totalOfPixels = value * value;
  let board = document.querySelector(".pixel-board");
  board.style.width = value*40 + value*2 + "px"
  board.style.height = value*40 + value*2 +"px"
  pixelBoard.innerHTML = "";
  
  for(i=0; i < totalOfPixels; i+=1) {
    const board = document.createElement("div");
    board.className = "pixel";
    pixelBoard.appendChild(board);
  }
})
