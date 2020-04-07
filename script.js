window.onload = function () {

let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let color3 = document.querySelector('#color3');
let color4 = document.querySelector('#color4');
let boardPixel = document.querySelectorAll('.pixel');
let thatColor = "black";


  color1.addEventListener('click', function(){
    thatColor = color1.classList[1];
  });

  color2.addEventListener('click', function(){
    thatColor = color2.classList[1];    
  });

  color3.addEventListener('click', function(){
    thatColor = color3.classList[1];
  });

  color4.addEventListener('click', function(){
    thatColor = color4.classList[1];
  });
    //pintar o board pixel
    for (let i=0; i<boardPixel.length; i+=1){
      let pixel = boardPixel[i];
      pixel.addEventListener('click', function(){
      //pixel.style.backgroundColor = "red";
      pixel.classList.add(thatColor);
      });
    }; 
};
