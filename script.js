const pixelsPallete = document.querySelectorAll('.color');
let color = 'rgb(0, 0, 0)';
const pixels = document.querySelectorAll('.pixel');
const resetBtn = document.getElementById('clear-board');
const arrayColors = ['black'];
let randomic = 0;
const pixelBoard = document.getElementById('pixel-board')
const boardSize = document.getElementById('board-size')

function randomColors() {
    for (let i = 1; i <= 3; i += 1) {
        randomic = Math.floor(Math.random() * 1531334);
        arrayColors[i] = '#' + randomic;
    }
}

randomColors();

for (let i = 0; i < arrayColors.length; i += 1) {
    pixelsPallete[i].style.backgroundColor = arrayColors[i];
}

function removeClass() {
    for (let i = 0; i < pixelsPallete.length; i += 1) {
        pixelsPallete[i].classList.remove('selected');
    }
}

for (let i = 0; i < pixelsPallete.length; i += 1) {
    pixelsPallete[i].addEventListener('click', () => {
        if (!pixelsPallete[i].classList.contains('selected')) {
            removeClass();
            color = window.getComputedStyle(pixelsPallete[i], null).getPropertyValue('background-color');
            pixelsPallete[i].classList.add('selected');
        }
    });
}

for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
        pixels[i].style.backgroundColor = color;
    });
}

resetBtn.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
    }
});

document.getElementById('generate-board').addEventListener('click', () => {
    let size = parseInt(boardSize.value)
    if (size < 5){
        size = 5
    }
    if (size > 50){
        size = 50
    }
    let insertDivsLine = ''
    let insertDivsColumn = ''
    for (let i = 1; i <= size; i++) {
        insertDivsColumn += `<div class="pixel"></div>`
        for(let j = 1; j < size; j++){
            insertDivsLine += `<div class="pixel"></div>`
        }
    }
    pixelBoard.innerHTML = insertDivsColumn + insertDivsLine
    pixelBoard.style.width = (42 * size) + 'px'
    document.getElementById('main').style.width = pixelBoard.style.width
})
