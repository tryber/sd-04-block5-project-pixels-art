const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

pixels[1].style["background-color"] = "red";

//Clear button
const clearButton = document.getElementsByClassName('clear-btn');
clearButton[0].addEventListener('click', function() {
  for (pixel in pixels){
  pixels[pixel].style.backgroundColor = "white";
  }
})