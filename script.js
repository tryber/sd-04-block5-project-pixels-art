const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');

console.log(color1.style.backgroundColor);

var atual = color1;
let p11 = document.querySelector('.p11');

function selected(div) { 
  div.classList.add('selected');
};    
selected(color1);

const cor = document.querySelector('.selected');

color1.addEventListener ('click' , function(e) {
  e.target.classList.add('selected');
  if (atual !== color1) {
    atual.classList.remove('selected');
    atual = color1;
  };
});
color2.addEventListener ('click' , function(e) {
  e.target.classList.add('selected');
  if (atual !== color2) {
    atual.classList.remove('selected');
    atual = color2;
  };
});
color3.addEventListener ('click' , function(e) {
  e.target.classList.add('selected');
  if (atual !== color3) {
    atual.classList.remove('selected');
    atual = color3;
  };
});
color4.addEventListener ('click' , function(e) {
  e.target.classList.add('selected');
   if (atual !== color4) {
    atual.classList.remove('selected');
    atual = color4;
  };
});

p11.addEventListener('click', function(e) {
  console.log(atual.style.backgroundColor);
});
