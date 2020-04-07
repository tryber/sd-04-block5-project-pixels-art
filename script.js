  const blackPixel = document.getElementById('black');
  blackPixel.style.backgroundColor = 'black';

  const bluePixel = document.getElementById('blue');
  bluePixel.style.backgroundColor = 'blue';

  const indigoPixel = document.getElementById('indigo');
  indigoPixel.style.backgroundColor = 'indigo';

  const greenPixel = document.getElementById('green');
  greenPixel.style.backgroundColor = 'green';

  blackPixel.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    blackPixel.classList.add('selected');
  });

  bluePixel.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    bluePixel.classList.add('selected');
  });

  greenPixel.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    greenPixel.classList.add('selected');
  });

  indigoPixel.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    indigoPixel.classList.add('selected');
  });

  const pixelSelected = document.querySelectorAll('.pixel');
  function paintPixel(index) {
    pixelSelected[index].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      pixelSelected[index].style.backgroundColor = selectedColor.style.backgroundColor;
    });
  }

  for (let index = 0; index < pixelSelected.length; index += 1) {
    paintPixel(index);
  }

  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  });
