let printCor = 'color cor_1 selected';
const colorButton = document.getElementsByClassName('color ');
const emptyPixel = document.getElementsByClassName('pixel ');
const clearPixel = document.getElementById('clear-board');
const createColor = [];
let rgb = {};

// gerar cor randomicamente

function generateColor() {
  for (let i = 0; i < 3; i += 1) {
    createColor[i] = parseInt(Math.random() * 255, 10);
  }
  rgb = `rgb(${createColor})`;
}

const selectColor = function () {
  const selectedColor = event.srcElement;

//  limpar a seleção de cores
  document.getElementsByClassName('cor_1')[0].className = 'color cor_1';
  document.getElementsByClassName('cor_2')[0].className = 'color cor_2';
  document.getElementsByClassName('cor_3')[0].className = 'color cor_3';
  document.getElementsByClassName('cor_4')[0].className = 'color cor_4';

//  Seleciona nova cor
  if (document.getElementsByClassName('cor_1')[0] === selectedColor) {
    selectedColor.className += ' selected';
  } else if (document.getElementsByClassName('cor_2')[0] === selectedColor) {
    selectedColor.className += ' selected';
  } else if (document.getElementsByClassName('cor_3')[0] === selectedColor) {
    selectedColor.className += ' selected';
  } else if (document.getElementsByClassName('cor_4')[0] === selectedColor) {
    selectedColor.className += ' selected';
  }

  // Captura cor do elemento
  printCor = event.toElement.style.cssText;

  // Transforma cor selecionada em formato rgb
  printCor = printCor.split(':');
  printCor = printCor[1].toString();
  printCor = printCor.split(';');
  printCor = printCor[0].toString();
};

const printPixel = function () {
  const pixelSelected = event.srcElement;
  pixelSelected.style.backgroundColor = printCor;
};

function clear() {
  const frame = document.getElementsByClassName('pixel ');
  for (let i = 0; i < frame.length; i += 1) {
    frame[i].style.backgroundColor = 'white';
  }
}

for (let i = 0; i < colorButton.length; i += 1) {
  colorButton[i].addEventListener('click', selectColor);
}

for (let j = 0; j < emptyPixel.length; j += 1) {
  emptyPixel[j].addEventListener('click', printPixel);
}

clearPixel.addEventListener('click', clear);

// Zera tabela de cores
window.onload = function () {
  document.getElementsByClassName('cor_1')[0].style.backgroundColor = 'rgb(0,0,0)';
  generateColor();
  document.getElementsByClassName('cor_2')[0].style.backgroundColor = rgb;

  generateColor();
  document.getElementsByClassName('cor_3')[0].style.backgroundColor = rgb;

  generateColor();
  document.getElementsByClassName('cor_4')[0].style.backgroundColor = rgb;
};
