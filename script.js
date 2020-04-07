window.onload = function(){

let selected = document.getElementsByClassName('selected')
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let boardPixel = document.querySelectorAll('.pixel');
let thatColor = "black";


  color1.addEventListener('click', function(event){
    console.log(event);
    thatColor = color1.classList[1];  
    console.log(thatColor);
  });

  color2.addEventListener('click', function(event){
    console.log(event);
    thatColor = color2.classList[1];  
    console.log(thatColor);
  });

  color3.addEventListener('click', function(event){
    console.log(event);
    thatColor = color3.classList[1];  
    console.log(thatColor);
  });

  color4.addEventListener('click', function(event){
    console.log(event);
    thatColor = color4.classList[1];  
    console.log(thatColor);
  });

    //pintar o board pixel
    for(let i=0; i<boardPixel.length; i+=1){
      let pixel = boardPixel[i];
      console.log(pixel);
      pixel.addEventListener('click', function(){
        //pixel.style.backgroundColor = "red";
        pixel.classList.add(thatColor);
      });
    };
 

 
};



