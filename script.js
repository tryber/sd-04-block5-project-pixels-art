let colBlack = document.getElementById("black");
let colRed = document.getElementById("red");
let colBlue = document.getElementById("blue");
let colGreen = document.getElementById("green");

window.onload = function () {
  selection();
};

function selection() {
  colBlack.style.backgroundColor = colBlack.id;
  colRed.style.backgroundColor = colRed.id;
  colBlue.style.backgroundColor = colBlue.id;
  colGreen.style.backgroundColor = colGreen.id;
};

//console.log(colBlack);
