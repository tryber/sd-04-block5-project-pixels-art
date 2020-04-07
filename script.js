const clear = document.getElementById('clear-board');
const board = document.getElementById('pixel-board');
const palete = document.getElementsByClassName('color');
const generateBoard = document.getElementById('size-form');

generateBoard.addEventListener('submit', newTable);

clear.addEventListener('click', function() {
    let pixels = document.getElementsByClassName('pixel');
    for (pixel of pixels) {
        pixel.style.backgroundColor='';
    }
});

function newTable(e) {
    e.preventDefault();
    let size = document.getElementById('board-size').value
    deleteTable();
    createTable(size, size);
};

function addRandomColors() {
    for (let i = 1; i<palete.length; i+=1){
        palete[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    }
};

function eventToPalete() {
    for (colors of palete){
        colors.addEventListener('click', colorPallete)
    }
};

function createTable(i=5, j=5) {
    for (let m = 0; m < i; m+=1){
        let row = document.createElement("div")
        row.className = "row"
        board.appendChild(row);
        let lastRow = document.querySelector(".row:last-child")
        for (let n = 0; n < j; n+=1){
            let pixel = document.createElement("div")
            pixel.className = "pixel"
            pixel.addEventListener('click', colorPallete)
            lastRow.appendChild(pixel);
        }
    }
};

function colorPallete(e) {
    if (e.target.className == "color"){
        getColor(e);
    } else if(e.target.className == "pixel"){
        printPixel(e);
    }
};

function getColor(event) {
    removeSelected();
    event.target.classList.add("selected");
};

function printPixel(event) {
    let colorSelected = document.getElementsByClassName('selected')[0];
    color = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = color
};

function removeSelected() {
    for (colors of palete){
        colors.classList.remove('selected')
    }
};

function randomColor() {
    return rgbvalue = Math.floor(Math.random()*256)
};

function deleteTable () {
    board.innerHTML = ''
};

createTable();
eventToPalete();
addRandomColors();
