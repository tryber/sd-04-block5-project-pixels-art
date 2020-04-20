const colorPalette = document.getElementById('color-palette');
const pixels = document.getElementById('pixel-board');
const divsPalette = document.querySelectorAll('.color');
const pixelBody = document.getElementById('pixel-body');
const sizeInput = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');
const clearButton = document.getElementById('clear-board');
const pixelTable = document.getElementsByClassName('pixel');

// adding a selected class to the selected color from the palette:
function selectedColor(e) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  if (e.target && e.target.nodeName === 'TD') {
    e.target.classList.add('selected');
  }
}

colorPalette.addEventListener('click', selectedColor);

// coloring pixels:
pixels.addEventListener('click', function (event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
});

// creating the pixels board from the input size received:
function boardSize() {
  // instead using while going to use .innerText = '' (codeclimate Cognitive Complexity issues)
  // while (pixelBody.firstChild) {
  //   pixelBody.firstChild.remove();
  // }
  pixelBody.innerHTML = '';
  if (sizeInput.value < 5) sizeInput.value = 5;
  if (sizeInput.value > 50) sizeInput.value = 50;
  for (let j = 1; j <= sizeInput.value; j += 1) {
    const tr = document.createElement('tr');
    pixelBody.appendChild(tr);
    for (let k = 1; k <= sizeInput.value; k += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      document.querySelectorAll('tr')[j].appendChild(td);
    }
  }
}
boardSize();
generateButton.addEventListener('click', boardSize);

// clearing pixels colors:
clearButton.addEventListener('click', function () {
  for (let i = 0; i < pixelTable.length; i += 1) {
    pixelTable[i].style.backgroundColor = 'white';
  }
});

// adding random colors to the color palette:
function randomColors() {
  for (let i = 1; i < 4; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    divsPalette[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
randomColors();
