const blackPixel = document.getElementById('black');
blackPixel.style.backgroundColor = 'black';

const bluePixel = document.getElementById('blue');
bluePixel.style.backgroundColor = 'blue';

const indigoPixel = document.getElementById('indigo');
indigoPixel.style.backgroundColor = 'indigo';

const greenPixel = document.getElementById('green');
greenPixel.style.backgroundColor = 'green';

let selectedColor = 'black';

blackPixel.addEventListener('click', function(){
  colorSelect(blackPixel);
  blackPixel.className = 'selected';
  bluePixel.className = 'color';
  greenPixel.className = 'color';
  indigoPixel.className = 'color';
})

bluePixel.addEventListener('click', function(){
  colorSelect(bluePixel);
  blackPixel.className = 'color';
  bluePixel.className = 'selected';
  greenPixel.className = 'color';
  indigoPixel.className = 'color';
})

greenPixel.addEventListener('click', function(){
  colorSelect(greenPixel);
  blackPixel.className = 'color';
  bluePixel.className = 'color';
  greenPixel.className = 'selected';
  indigoPixel.className = 'color';
})

indigoPixel.addEventListener('click', function(){
  colorSelect(indigoPixel);
  blackPixel.className = 'color';
  bluePixel.className = 'color';
  greenPixel.className = 'color';
  indigoPixel.className = 'selected';
})

function colorSelect(colorPixel) {
  selectedColor = colorPixel.style.backgroundColor;
}

// blackPixel.addEventListener('click', function(){
//   selectedColor = document.getElementById('black').style.backgroundColor;
//   blackPixel.className = 'selected';
// })

// bluePixel.addEventListener('click', function(){
//   selectedColor = document.getElementById('blue').style.backgroundColor;
//   bluePixel.className = 'selected';
// })

// greenPixel.addEventListener('click', function(){
//   selectedColor = document.getElementById('green').style.backgroundColor;
//   greenPixel.className = 'selected';
// })

// indigoPixel.addEventListener('click', function(){
//   selectedColor = document.getElementById('indigo').style.backgroundColor;
//   indigoPixel.className = 'selected';
// })