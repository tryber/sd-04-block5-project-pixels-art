    const sectionPalette = document.getElementById('color-palette');
    const sectionBoard = document.getElementById('pixel-board');
    const paletteColor = document.getElementsByClassName('color');
    const setColors = ['black', 'red', 'yellow', 'green'];

    for (let i = 0; i < paletteColor.length; i += 1) {
      paletteColor[i].style.backgroundColor = setColors[i];
    }

    function changeColor(e) {
      document.querySelector('.selected').classList.remove('selected');
      e.target.classList.add('selected');
    };
    sectionPalette.addEventListener('click', changeColor)

    function setColor(e) {
      const selectedColor = document.querySelector('.selected');
      e.target.style.backgroundColor = selectedColor.style.backgroundColor;
    };
    sectionBoard.addEventListener('click', setColor);
    
