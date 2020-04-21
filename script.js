
var firstColor = document.getElementsByClassName("color")[0];
firstColor.style.backgroundColor = "black"

var secondColor = document.getElementsByClassName("color")[1];
secondColor.style.backgroundColor = "red"

var thirdColor = document.getElementsByClassName("color")[2];
thirdColor.style.backgroundColor = "gold"

var fourthColor = document.getElementsByClassName("color")[3];
fourthColor.style.backgroundColor = "blue"

var colors = document.getElementsByClassName("color");
var pixel = document.getElementsByClassName("pixel");

var selectedColor = colors[0].style.backgroundColor;


var selectedClass = document.getElementsByClassName("color")[0]; //elemento
selectedClass.classList.add("selected")


// trigger seleção de cores
for (let i = 0; i < colors.length; i++) {
     var clickedColor = colors[i]
     clickedColor.addEventListener("click", function () {
        selectedColor = colors[i].style.backgroundColor;
        selectedClass.classList.remove("selected")
        selectedClass = this; 
        selectedClass.classList.add("selected")
    })
}

// trigger seleção pixel e inserção de cor
for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener("click", function () {
        pixel[i].style.backgroundColor = selectedColor;
    })
}



