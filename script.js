//cores
colorBlack = document.querySelector("#color-black");
colorRed = document.querySelector("#color-red");
colorBlue = document.querySelector("#color-blue");
colorGreen = document.querySelector("#color-green");

colorGreen.style.backgroundColor = 'green';
colorRed.style.backgroundColor = 'red';
colorBlue.style.backgroundColor = 'blue';
colorBlack.style.backgroundColor = 'black';

pixelBoard = document.querySelector("#pixel-board")
pixel = document.querySelectorAll(".pixel");


function apagaClass(){
colorBlack.className = 'color';
colorRed.className = 'color'; 
colorBlue.className = 'color'; 
colorGreen.className = 'color'; 
};

colorBlack.addEventListener('click', function(){ 
    apagaClass();
    colorBlack.className = 'color selected';
});

colorRed.addEventListener('click', function(){
    apagaClass();
    colorRed.className = 'color selected';
});

colorBlue.addEventListener('click', function(){
    apagaClass();
    colorBlue.className = 'color selected';
});

colorGreen.addEventListener('click', function(){
    apagaClass();
    colorGreen.className = 'color selected';
});

    pixelBoard.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
     event.target.style.backgroundColor = selectedColor;
    });

//BONUS 1
let botaoLimpa = document.querySelector('#clear-board');

botaoLimpa.addEventListener('click', function(){
 for (i=0; i < pixel.length; i++) {
    pixel[i].style.backgroundColor = 'white';
 }})

