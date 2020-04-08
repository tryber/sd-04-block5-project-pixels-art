function blackColor() {
    document.getElementById('firstColor').className = 'color selected';
}

window.onload = blackColor;

const firstColor = document.getElementById('firstColor');
firstColor.addEventListener('click', function () {
    document.getElementById('firstColor').className = 'color selected';
    document.getElementById('secondColor').className = 'color';
    document.getElementById('thirdColor').className = 'color';
    document.getElementById('fourthColor').className = 'color';
    document.querySelector('.selected').style.backgroundColor = 'black';
});

const secondColor = document.getElementById('secondColor');
secondColor.addEventListener('click', function () {
    document.getElementById('firstColor').className = 'color';
    document.getElementById('thirdColor').className = 'color';
    document.getElementById('fourthColor').className = 'color';
    secondColor.className = 'color selected';
    document.querySelector('.selected').style.backgroundColor = 'green';
});

const thirdColor = document.getElementById('thirdColor');
thirdColor.addEventListener('click', function () {
    document.getElementById('firstColor').className = 'color';
    document.getElementById('secondColor').className = 'color';
    document.getElementById('fourthColor').className = 'color';
    thirdColor.className = 'color selected';
    document.querySelector('.selected').style.backgroundColor = 'blue';
});

const fourthColor = document.getElementById('fourthColor');
fourthColor.addEventListener('click', function () {
    document.getElementById('firstColor').className = 'color';
    document.getElementById('secondColor').className = 'color';
    document.getElementById('thirdColor').className = 'color';
    fourthColor.className = 'color selected';
    document.querySelector('.selected').style.backgroundColor = 'red';
  });

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
    document.getElementById('pixel-board').style.backgroundColor = 'white';
});
