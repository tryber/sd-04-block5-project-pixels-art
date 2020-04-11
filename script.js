//cores
colorBlack = document.querySelector("#color-black");
colorRed = document.querySelector("#color-red");
colorBlue = document.querySelector("#color-blue");
colorGreen = document.querySelector("#color-green");

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
    console.log(selectedColor)
    if(selectedColor == null){
      event.target.style.backgroundColor = 'black';
    }
     event.target.style.backgroundColor = selectedColor;
    });

//BONUS 1
let botaoLimpa = document.querySelector('#clear-board');
botaoLimpa.addEventListener('click', function(){
 for (i=0; i < pixel.length; i++) {
   pixel = document.querySelectorAll(".pixel");
    pixel[i].style.backgroundColor = 'white';
 }})

 function sortColor(){
    // const corAleatoria1 = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    // const randoColorTwo = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    // const randoColorGreen = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    const colorBlack = document.querySelector("#color-black")
    const randoColorRed = Number.parseInt(Math.random() * 255, 10);
    const randoColorBlue = Number.parseInt(Math.random() * 255, 10);
    const randoColorGreen = Number.parseInt(Math.random() * 255, 10);
    colorBlack.style.backgroundColor = 'black';
    colorRed.style.backgroundColor = `rgb(${randoColorGreen},${randoColorRed},${randoColorBlue})`;
    colorBlue.style.backgroundColor = `rgb(${randoColorBlue},${randoColorRed},${randoColorGreen})`;
    colorGreen.style.backgroundColor = `rgb(${randoColorRed},${randoColorGreen},${randoColorRed})`;
 };

//BONUS 2
 for (i = 1; i < 3; i++){
    sortColor()
 };
 let btnGenerateBoard = document.querySelector('#generate-board'); //botao adiciona quadrado
 let inputBoard = document.querySelector('#board-size'); //caixa com valor

 function divSize(qtdQuadrados){
   let qtdQuadrad1 = qtdQuadrados * 40;
   let qtdQuadrad2 =  qtdQuadrados * 2;
   const ladoQuadrado = qtdQuadrad1 + qtdQuadrad2;

   pixelBoard.style.height = `${ladoQuadrado}px`;
   pixelBoard.style.width = `${ladoQuadrado}px`;
 }
 function limpaPixel(){
   for(i = 0; i < pixel.length; i++){
      pixelBoard.removeChild(pixel[i])
   }
 }
 function criaPixels (qtdQuadrados) {
   for(i=0;i < (qtdQuadrados*qtdQuadrados); i++){
      let pixel = document.createElement('div');
      pixel.setAttribute('class', 'pixel')
      pixelBoard.appendChild(pixel)
   }   
 }
 btnGenerateBoard.addEventListener('click', function(){
    pixel = document.querySelectorAll(".pixel");
      limpaPixel(); //Limpa Pixels anteriores
     let qtdQuadrados = inputBoard.value;

     //controle de quantidade de quadrados
     if (qtdQuadrados < 5) {
      qtdQuadrados = 5;
    } else if (qtdQuadrados > 50) {
      qtdQuadrados = 50;
    }

      divSize(qtdQuadrados); //Tamanho do DIV ao add Pixels
      criaPixels(qtdQuadrados) //Add Pixels
 })