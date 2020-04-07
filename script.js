window.onload = () => {
  const arrayColors = ['black', 'red', 'green', 'blue'];
  const elementsColor = document.getElementsByClassName('color');
  const palette = document.getElementById('color-palette')
  // paint the elements background
  for (let i = 0; i < elementsColor.length; i += 1) {
    elementsColor[i].style.backgroundColor = arrayColors[i];
  }
  
  palette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  })
  
}
