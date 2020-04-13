//ao carregar a página seleciona a cor preto 
window.onload =function (){  
    capturaGrid(preto); 
}

//Obtêm as cores da paleta
let vermelho = document.querySelector("#color-red");
let verde = document.querySelector("#color-green"); 
let amarelo = document.querySelector("#color-yellow");
let preto = document.querySelector("#color-black");


function capturaGrid(paleta){  
  //Obtêm a cor selecionada na paleta de cores 
  let cor =  window.getComputedStyle(paleta, null).getPropertyValue("background-color");
  //Obtêm o grid
  let grid = document.querySelectorAll("div#pixel");
  for(var i =0; i<grid.length; i++)
  {
    //Adiciona a cor selecionada no grid
    grid[i].addEventListener("click", function(e){          
     e.target.style.backgroundColor=cor;      
    });
  }
}

preto.addEventListener("click", function(e){
  capturaGrid(preto);
});

vermelho.addEventListener("click", function(e){
          capturaGrid(vermelho);
});

verde.addEventListener("click", function(e){
  capturaGrid(verde);
});

amarelo.addEventListener("click", function(e){
  capturaGrid(amarelo);
});

//limpa grid
let btlimpa = document.querySelector("#clear-board");
console.log(btlimpa);
btlimpa.addEventListener("click", function(){

  let cor =  window.getComputedStyle(btlimpa, null).getPropertyValue("background-color");
  let grid = document.querySelectorAll("div#pixel");
  for(var i =0; i<grid.length; i++)
  {    
    grid[i].style.backgroundColor=cor;   
  }
});