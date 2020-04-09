

window.onload = function(){

    let pixels = document.querySelector(".pixel");

//VAIÁVEIS DAS CORES DA PALETA
    let colorOne = document.querySelector("#color1");
    let colorTwo = document.querySelector("#color2");
    let colorThree = document.querySelector("#color3");
    let colorFour = document.querySelector("#color4");
    
    let pixelBoard = document.querySelector(".pixel-board");

    pixels.addEventListener('change', function(){
        pixels.style.backgroundColor='white';
        console.log(pixels.style.backgroundColor);
    });

    let selectedColor = document.querySelector(".selected");

//ESCOLHENDO AS CORES DA PALETA    
    colorOne.style.backgroundColor = 'black';
    colorTwo.style.backgroundColor = 'red';
    colorThree.style.backgroundColor = 'yellow';
    colorFour.style.backgroundColor = 'green';


    //FUNÇÃO CLEAR
    clearBoard = this.document.querySelector("#clear-board");
     
    clearBoard.addEventListener('click', function(){
    var pixels = document.querySelectorAll(".pixel");
    for(let i=0; i<pixels.length ; i++){
        pixels[i].style.backgroundColor = 'white';
    }

});
    
pixelBoard.addEventListener('click', function(event){
    choicePixel = event.target;
    choicePixel.style.backgroundColor = colorOne.style.backgroundColor;
    
    });


//FUNÇÕES DE SELEÇÃO DE CORES CONFORME CLICK
    colorOne.addEventListener('click',function(event){
        var choiceOne = event.target.style.backgroundColor;
    
        console.log(choiceOne);
     
        pixelBoard.addEventListener('click', function(event){
        choicePixel = event.target;
        choicePixel.style.backgroundColor = colorOne.style.backgroundColor;
        
        });
    
    });

    colorTwo.addEventListener('click',function(event){
        var choiceOne = event.target.style.backgroundColor;
    
        console.log(choiceOne);
     
        pixelBoard.addEventListener('click', function(event){
        choicePixel = event.target;
        choicePixel.style.backgroundColor = colorTwo.style.backgroundColor;
        
        });
    
    });

    colorThree.addEventListener('click',function(event){
        var choiceOne = event.target.style.backgroundColor;
    
        console.log(choiceOne);
     
        pixelBoard.addEventListener('click', function(event){
        choicePixel = event.target;
        choicePixel.style.backgroundColor = colorThree.style.backgroundColor;
        
        });
    
    });

    colorFour.addEventListener('click',function(event){
        var choiceOne = event.target.style.backgroundColor;
    
        console.log(choiceOne);
     
        pixelBoard.addEventListener('click', function(event){
        choicePixel = event.target;
        choicePixel.style.backgroundColor = colorFour.style.backgroundColor;
        
        });
    
    });

    }
    
    