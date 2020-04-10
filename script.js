window.onload = () => {

  for (let i = 1; i <= 4; i += 1) {
    document.getElementById(`color${i}`).addEventListener('click', function () {
      document.querySelector('.selected').classList.remove('selected');
      document.getElementById(`color${i}`).classList.add('selected');
    });
  }

  let pixels = document.getElementById('pixel-board');
  pixels.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  });

  let generateButton = document.getElementById('generate-board')
  generateButton.addEventListener('click', boardSize);

  function boardSize() {
    let pixelBody = document.getElementById('pixel-body');
    let sizeValue = document.getElementById('board-size').value;
    pixelBody.innerHTML = '';
    for (let j = 1; j <= sizeValue; j += 1) {
      let tr = document.createElement('tr');
      pixelBody.appendChild(tr);
      for (let k = 1; k <= sizeValue; k += 1) {
        let td = document.createElement('td');
        td.className = 'pixel';
        let trFind = document.querySelectorAll('tr');
        trFind[j].appendChild(td);
      }
    }
  }
  
  let clear = document.getElementById('clear-board');
  let pixels2 = document.querySelectorAll('.pixel');
  console.log(pixels2);

  clear.addEventListener('click', function () {
    for (let i = 0; i < pixels2.length; i += 1) {
      pixels2[i].style.backgroundColor = 'white';
    }
  });

    randomColors();
    function randomColors() {
      for (let i = 2; i <= 4; i += 1) {
        let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        document.getElementById(`color${i}`).style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
      }
    }




}
