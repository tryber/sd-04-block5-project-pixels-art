window.onload = () => {

  let arrayColors = ["black", "red", "green", "blue"];
  let elementsColor = document.getElementsByClassName("color");

  // paint the elements background
  for (let i = 0; i < elementsColor.length; i += 1) {
    elementsColor[i].style.backgroundColor = arrayColors[i]
  }

}