let black = document.getElementById("black");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let orange = document.getElementById("orange");
let white = document.getElementById("white");
let selected = ""
let pixelBoard = document.getElementById("pixel-board");
let colorPalette = document.getElementById("color-palette");

black.style.backgroundColor = "black";
red.style.backgroundColor = "red";
blue.style.backgroundColor = "blue";
yellow.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";
orange.style.backgroundColor = "orange";
white.style.backgroundColor = "white";

colorPalette.addEventListener("click",function(event){
    selected = event.target.id;
    console.log(selected);
});

pixelBoard.addEventListener("click", function(event){
    var targetElement = event.target;
    targetElement.style.backgroundColor = selected;
    console.log(targetElement);
})

