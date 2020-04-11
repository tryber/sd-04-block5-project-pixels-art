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

 function sortColor(){
    // const corAleatoria1 = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    // const randoColorTwo = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    // const randoColorGreen = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    const randoColorRed = Number.parseInt(Math.random() * 255, 10);
    const randoColorBlue = Number.parseInt(Math.random() * 255, 10);
    const randoColorGreen = Number.parseInt(Math.random() * 255, 10);
    colorRed.style.backgroundColor = `rgb(${randoColorGreen},${randoColorRed},${randoColorBlue})`;
    colorBlue.style.backgroundColor = `rgb(${randoColorBlue},${randoColorRed},${randoColorGreen})`;
    colorGreen.style.backgroundColor = `rgb(${randoColorRed},${randoColorGreen},${randoColorRed})`;
 };

//BONUS 2
 let arrayCores = [var1, var2, var3, var4];
 for (i = 1; i < arrayCores.length; i++){
    sortColor()
 };

 let btnGenerateBoard = document.querySelector('#generate-board');
 let inputBoard = document.querySelector('#board-size');


 function deletePixel(){

 }

 function deletePixelGerado(divPixel){
    for(i = 0; i < divPixel.length; i++){
       pixelBoard.removeChild(divPixel[i])
    }
}

 btnGenerateBoard.addEventListener('click', function(){
    console.log(pixel)
    pixel = document.querySelectorAll(".pixel");
    for(i = 0; i < pixel.length; i++){
       pixelBoard.removeChild(pixel[i])
    }
     let qtdQuadrados = inputBoard.value;

     if (qtdQuadrados < 5) {
        qtdQuadrados = 5;
      } else if (qtdQuadrados > 50) {
        qtdQuadrados = 50;
      }
     
     let qtdQuadrad1 = qtdQuadrados * 40;
     let qtdQuadrad2 =  qtdQuadrados * 2;
    
     const ladoQuadrado = qtdQuadrad1 + qtdQuadrad2;
 

     pixelBoard.style.height = `${ladoQuadrado}px`;
     pixelBoard.style.width = `${ladoQuadrado}px`;

     for(i=0;i < (qtdQuadrados*qtdQuadrados); i++){
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel')
        pixelBoard.appendChild(pixel)
     }   

 })