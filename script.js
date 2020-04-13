const blackColor = document.getElementById('black');
const purpleColor = document.getElementById('purple');
const redColor = document.getElementById('red');
const greenColor = document.getElementById('green');
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.getElementsByClassName('pixel');

blackColor.style.background = 'black';
purpleColor.style.background = 'purple';
redColor.style.background = 'red';
greenColor.style.background = 'green';



clearBoard.addEventListener('click', function () {
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.background = 'white';
  }
});

function saveColor(n) {
  const color = n;
  localStorage.removeItem('color');
  localStorage.setItem('color', color);
}

window.onload = function () {
  saveColor('black');
  blackColor.className = 'color selected';
};

const colors = document.getElementsByClassName('color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    for (let j = 0; j < colors.length; j += 1) {
      colors[j].classList.remove('selected');
    }
    colors[i].classList.add('selected');
  });
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    const selectedColor = document.querySelector('.selected');
    const colorsSelected = selectedColor.style.backgroundColor;
    pixels[i].style.backgroundColor = colorsSelected;
  });
}

const generateBoard = document.getElementById ('generate-board');

generateBoard.addEventListener ('click', function(){
  n = document.getElementById('board-size').value;
  if (n < 5) n = 5;
  if (n > 50) n = 50;
  
  document.getElementById ('pixel-board').innerHTML = "";
  for (let i = 0; i < n; i += 1){
    var trPixel = document.createElement('tr');
    trPixel.classList.add('linha');
      for (let j = 0; j < n; j += 1){
        var tdPixel = document.createElement('td');
        tdPixel.classList.add('pixel');
        trPixel.appendChild(tdPixel);
      }
    
      document.getElementById ('pixel-board').appendChild (trPixel);
  }
  
})
