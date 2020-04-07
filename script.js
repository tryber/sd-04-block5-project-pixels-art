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
});

let secondColor = document.getElementById("secondColor");
secondColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color";
  document.getElementById("thirdColor").className = "color";
  document.getElementById("fourthColor").className = "color";
  secondColor.className = "color selected";
});

let thirdColor = document.getElementById("thirdColor");
thirdColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color";
  document.getElementById("secondColor").className = "color";
  document.getElementById("fourthColor").className = "color";
  thirdColor.className = "color selected";
});

let fourthColor = document.getElementById("fourthColor");
fourthColor.addEventListener("click", function() {
  document.getElementById("firstColor").className = "color";
  document.getElementById("secondColor").className = "color";
  document.getElementById("thirdColor").className = "color";
  fourthColor.className = "color selected";
});
