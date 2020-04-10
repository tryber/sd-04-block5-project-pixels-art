window.onload = function () {
  // variaveis globais de cores
  let blackColor = document.querySelector(".selected");
  blackColor.style.backgroundColor = "black";

  let redColor = document.getElementById("color2");
  redColor.style.backgroundColor = "red";

  let blueColor = document.getElementById("color3");
  blueColor.style.backgroundColor = "blue";

  let greenColor = document.getElementById("color4");
  greenColor.style.backgroundColor = "green";


  blackColor.addEventListener("click", function () {
    document.querySelector(".selected").classList.remove("selected");
    blackColor.classList.add("selected");
    // console.log(document.querySelector('.selected').style.backgroundColor);
  });

  redColor.addEventListener("click", function () {
    document.querySelector(".selected").classList.remove("selected");
    redColor.classList.add("selected");
    // console.log(document.querySelector('.selected').style.backgroundColor);
  });

  blueColor.addEventListener("click", function () {
    document.querySelector('.selected').classList.remove("selected");
    blueColor.classList.add("selected");
    // console.log(document.querySelector('.selected').style.backgroundColor);
  });

  greenColor.addEventListener("click", function () {
    document.querySelector('.selected').classList.remove("selected");
    greenColor.classList.add("selected");
    // console.log(document.querySelector('.selected').style.backgroundColor);
  });

  //variavel guarda as divs com a classe pixel
  let squareSelect = document.querySelectorAll(".pixel");

  // função preenche os pixels com as cores
  function fillPixel(i) {
    squareSelect[i].addEventListener("click", function () {
      let colorSelected = document.querySelector('.selected');
      squareSelect[i].style.backgroundColor =
        colorSelected.style.backgroundColor;
    });
  }
  for (let i = 0; i < squareSelect.length; i++) {
    fillPixel(i);
  };

  // função para limpar os pixels preenchidos



};
