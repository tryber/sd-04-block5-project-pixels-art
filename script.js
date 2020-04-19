const black = document.querySelector('#black');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const btnClr = document.querySelector('#clear-board');
const pxlBoard = document.querySelector('#pixel-board');
const tblSize = document.querySelector('#board-size');
const btnCreate = document.querySelector('#generate-board');

function makeColor() {
  let random1 = Math.round((Math.random() * (254 - 1) + 1));
  let random2 = Math.round((Math.random() * (254 - 1) + 1));

  black.style.backgroundColor = 'rgb(0, 0, 0)';
  red.style.backgroundColor = `rgb(255, ${random1}, ${random2} )`;
  green.style.backgroundColor = `rgb( ${random2}, 255, ${random1} )`;
  blue.style.backgroundColor = `rgb( ${random2}, ${random1}, 255 )`;
}

function mudaCor(cor) {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < 25; i += 1) {
    pixel[i].style.backgroundColor = cor;
  }
}

function selectColor() {
  let theCSSprop;
  for (let c = 0; c < 4; c += 1) {
    for (let i = 0; i < 25; i += 1) {
      color[c].addEventListener('click', function () {
        if (color[c].id ==='red') {
          red.classList.add('selected');
          black.classList.remove('selected');
          green.classList.remove('selected');
          blue.classList.remove('selected');
          theCSSprop = window.getComputedStyle(color[c], null).getPropertyValue('background-color');
          pixel[i].addEventListener('click', function () {
            this.style.backgroundColor = theCSSprop;
          });
        } else if (color[c].id === 'black') {
          red.classList.remove('selected');
          black.classList.add('selected');
          green.classList.remove('selected');
          blue.classList.remove('selected');
          theCSSprop = window.getComputedStyle(color[c], null).getPropertyValue('background-color');
          pixel[i].addEventListener('click', function () {
            this.style.backgroundColor = theCSSprop;
          });
        } else if (color[c].id === 'green') {
          red.classList.remove('selected');
          black.classList.remove('selected');
          green.classList.add('selected');
          blue.classList.remove('selected');
          theCSSprop = window.getComputedStyle(color[c], null).getPropertyValue('background-color');
          pixel[i].addEventListener('click', function () {
            this.style.backgroundColor = theCSSprop;
          });
        } else if (color[c].id === 'blue') {
          red.classList.remove('selected');
          black.classList.remove('selected');
          green.classList.remove('selected');
          blue.classList.add('selected');
          theCSSprop = window.getComputedStyle(color[c], null).getPropertyValue('background-color');
          pixel[i].addEventListener('click', function () {
            this.style.backgroundColor = theCSSprop;
          });
        }
      });
    }
  }
}

function createTable(size) {
  if (size >= 5 && size <= 50) {
  pxlBoard.innerHTML = '';
  for (let i = 0; i<size; i+=1) {
    let line = document.createElement('tr');
    line.style.height = '44px';
    line.style.width = '41px';
    line.style.border = '1px solid black';
    pxlBoard.appendChild(line);
    for (let c = 0; c<size; c+=1) {
      let column = document.createElement('td');
      column.style.height = '44px';
      column.style.width = '41px';
      column.classList.add('pixel');
      column.style.border = '1px solid black';
      line.appendChild(column);
    }
  }
  } else if (size > 50) {
    for (let i = 0; i<50; i+=1) {
      let line = document.createElement('tr');
      line.style.height = '44px';
      line.style.width = '41px';
      line.style.border = '1px solid black';
      pxlBoard.appendChild(line);
      for (let c = 0; c<50; c+=1) {
        let column = document.createElement('td');
        column.style.height = '44px';
        column.style.width = '41px';
        column.classList.add('pixel');
        column.style.border = '1px solid black';
        line.appendChild(column);
      }
    }
  }
  
}

window.onload = function () {
  makeColor();
  btnCreate.addEventListener('click', function() {
    createTable(tblSize.value);
  });

  for (let i = 0; i < 25; i += 1) {
    pixel[i].addEventListener('click', function () {
      pixel[i].style.backgroundColor = black.style.backgroundColor;
    });
  }

  selectColor()
  btnClr.addEventListener('click', function () {
    mudaCor('white');
  });
};
