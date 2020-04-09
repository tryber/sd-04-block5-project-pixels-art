const colBlack = document.getElementById('black');
const colRed = document.getElementById('red');
const colBlue = document.getElementById('blue');
const colGreen = document.getElementById('green');

window.onload = function () {
  this.selection();
};

function selection() {
  colBlack.style.backgroundColor = colBlack.id;
  colRed.style.backgroundColor = colRed.id;
  colBlue.style.backgroundColor = colBlue.id;
  colGreen.style.backgroundColor = colGreen.id;
}

// console.log(colBlack);
