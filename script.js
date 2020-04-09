let palette = document.getElementById("color-palette");

palette.addEventListener("click", function (event) {
  document.querySelector(".selected").classList.remove("selected");
  event.target.classList.add("selected");
});

let paintPixel = document.getElementById("pixel-board");
document.getElementById('color1').style.backgroundColor = "black";
document.getElementById('color2').style.backgroundColor = "rgba(131, 58, 180, 1)";
document.getElementById('color3').style.backgroundColor = "rgba(253, 29, 29, 1)";
document.getElementById('color4').style.backgroundColor = "rgba(252, 176, 69, 1)";

paintPixel.addEventListener("click", (e) => {
  e.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
});
