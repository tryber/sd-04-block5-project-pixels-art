window.onload = blackColor;
function blackColor () {
  document.getElementById("firstColor").className = "color selected";
}

let firstColor = document.getElementById("firstColor");
firstColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color selected";
  document.getElementById("secondColor").className = "color";
  document.getElementById("thirdColor").className = "color";
  document.getElementById("fourthColor").className = "color";
  document.querySelector(".selected").style.backgroundColor = "black";
  console.log(document.querySelector(".selected").style.backgroundColor);
});

let secondColor = document.getElementById("secondColor");
secondColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color";
  document.getElementById("thirdColor").className = "color";
  document.getElementById("fourthColor").className = "color";
  secondColor.className = "color selected";
  document.querySelector(".selected").style.backgroundColor = "green";
});

let thirdColor = document.getElementById("thirdColor");
thirdColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color";
  document.getElementById("secondColor").className = "color";
  document.getElementById("fourthColor").className = "color";
  thirdColor.className = "color selected";
  document.querySelector(".selected").style.backgroundColor = "blue";
});

let fourthColor = document.getElementById("fourthColor");
fourthColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color";
  document.getElementById("secondColor").className = "color";
  document.getElementById("thirdColor").className = "color";
  fourthColor.className = "color selected";
  document.querySelector(".selected").style.backgroundColor = "red";
});

document.getElementById("firstColor").style.backgroundColor = "black";
document.getElementById("secondColor").style.backgroundColor = "green";
document.getElementById("thirdColor").style.backgroundColor = "blue";
document.getElementById("fourthColor").style.backgroundColor = "red";


let pixelBoard = document.querySelector("#pixel-board");
pixelBoard.addEventListener("click", function(event){
  let selectedColor = document.querySelector(".selected").style.backgroundColor;
  console.log(document.querySelector(".selected").style.backgroundColor);
  event.target.style.backgroundColor = selectedColor;
  });   