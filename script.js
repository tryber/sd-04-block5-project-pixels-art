window.onload = function () {
  if (typeof Storage !== "undefined") {
    // variaveis globais de cores
    var blackColor = document.getElementById("color1");
    blackColor.style.backgroundColor = "black";

    var redColor = document.getElementById("color2");
    redColor.style.backgroundColor = "red";

    var blueColor = document.getElementById("color3");
    blueColor.style.backgroundColor = "blue";

    var greenColor = document.getElementById("color4");
    greenColor.style.backgroundColor = "green";

    // variavel guarda a div com a classe selected
    var pixelColorful = document.querySelector('.selected');

    blackColor.addEventListener("click", function () {
      pixelColorful.classList.remove("selected");
      blackColor.classList.add("selected");
      console.log("black");
    });

    redColor.addEventListener("click", function () {
      pixelColorful.classList.remove("selected");
      redColor.classList.add("selected");
      console.log("red");
    });

    blueColor.addEventListener("click", function () {
      pixelColorful.classList.remove("selected");
      blueColor.classList.add("selected");
      console.log("Blue");
    });

    greenColor.addEventListener("click", function () {
      pixelColorful.classList.remove("selected");
      greenColor.classList.add("selected");
      console.log("green");
    });

    //variavel guarda as divs com a classe pixel
    let squareSelect = document.querySelectorAll(".pixel");

    function fillPixel(i) {
      squareSelect[i].addEventListener("click", function () {
        let colorSelected = pixelColorful;
        squareSelect[i].style.backgroundColor =
          colorSelected.style.backgroundColor;
      });
    }
    for (let i = 0; i < squareSelect.length; i++) {
      fillPixel(i);
    }
  } else {
    console.log("Sem suporte para Web Storage");
  }
};
