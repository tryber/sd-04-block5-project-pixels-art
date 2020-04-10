window.onload = function () {
  if (typeof Storage !== "undefined") {

    let blackColor = document.getElementById("color1");
    let redColor = document.getElementById("color2");
    let bluekColor = document.getElementById("color3");
    let greenColor = document.getElementById("color4");
    let pixel = document.getElementsByClassName("pixel");

    function mudacor() {
        pixel.color = "black";
    }
    blackColor.addEventListener("click", mudacor);
    
  } else {
    console.log("Sem suporte para Web Storage");
  }
};
