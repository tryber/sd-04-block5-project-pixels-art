let blackColor = document.getElementById("black");
let purpleColor = document.getElementById("purple");
let redColor = document.getElementById("red");
let greenColor = document.getElementById("green");
let clearBoard = document.getElementById("clear-board");
let pixelBoard = document.getElementsByClassName("pixel");

blackColor.style.background = "black";
purpleColor.style.background = "purple";
redColor.style.background = "red";
greenColor.style.background = "green";

clearBoard.addEventListener("click", function(){
  for (i = 0; i < pixelBoard.length; i += 1){
    pixelBoard[i].style.background = "white";
  }
});





