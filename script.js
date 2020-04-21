const colorSelector = document.getElementsByClassName('color');
let selectedColor = 'black';
const pixelColor = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const inputSize = document.getElementById('generate-board');
const tabela = document.getElementsByTagName('table');
const pixelBoard = document.getElementById('pixel-board');


const selectionPalette = function (e) {
    selectedColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
    for (let i = 0; i < colorSelector.length; i += 1) {
        colorSelector[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
};

function colorPixel(e) {
    e.target.style.backgroundColor = selectedColor;
    e.target.style.borderColor = selectedColor;
}

function clearBoard() {
    for (let i = 0; i < pixelColor.length; i += 1) {
        pixelColor[i].style.backgroundColor = 'white';
    }
}

function alteraTabela() {
    tabela[0].innerHTML = '';
    if (boardSize.value > 50) {
        boardSize.value = 50;
    } else if (boardSize.value < 5) {
        boardSize.value = 5;
    }
    for (let j = 0; j < boardSize.value; j += 1) {
        const trCriado = document.createElement('tr');
        tabela[0].appendChild(trCriado);
        for (let k = 0; k < boardSize.value; k += 1) {
            const tdCriado = document.createElement('td');
            tdCriado.className = 'pixel';
            trCriado.appendChild(tdCriado);
        }
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return (`rgb(${r} , ${g}  , ${b})`);
}

function colorRandom() {
    for (let i = 0; i < colorSelector.length; i += 1) {
        if (i > '0' && i < colorSelector.length) {
            colorSelector[i].style.backgroundColor = randomColor();
        } else if (i === 0) {
            colorSelector[i].style.backgroundColor = 'black';
        }
    }
}

window.onload = function () {
    sessionStorage.setItem('color', 'black');

    for (let i = 0; i < colorSelector.length; i += 1) {
        colorSelector[i].addEventListener('click', selectionPalette, false);
    }

    pixelBoard.addEventListener('click', colorPixel);

    clear.addEventListener('click', clearBoard);

    inputSize.addEventListener('click', alteraTabela);

    colorRandom();
};