//cores
colorBlack = document.querySelector("#color-black");
colorRed = document.querySelector("#color-red");
colorBlue = document.querySelector("#color-blue");
colorGreen = document.querySelector("#color-green");

let var1 = colorGreen.style.backgroundColor = 'green';
let var2 = colorRed.style.backgroundColor = 'red';
let var3 = colorBlue.style.backgroundColor = 'blue';
let var4 = colorBlack.style.backgroundColor = 'black';

pixelBoard = document.querySelector("#pixel-board")
pixel = document.querySelectorAll(".pixel");

let arrayCores = [var1, var2, var3, var4];

for (i=1; i < arrayCores.length; i++){
    const corAleatoria1 = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    const corAleatoria2 = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    const corAleatoria3 = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    cor1 = document.querySelector("#color-red");
    cor2 = document.querySelector("#color-blue");
    cor3 = document.querySelector("#color-green");
    cor1.style.backgroundColor = corAleatoria1;
    cor2.style.backgroundColor = corAleatoria2;
    cor3.style.backgroundColor = corAleatoria3;
}
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

