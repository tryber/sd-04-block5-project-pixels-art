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

  let clear = document.getElementById('clear-board');
  let pixels2 = document.querySelectorAll('.pixel');
  console.log(pixels2);

  clear.addEventListener('click', function () {
    for (let i = 0; i < pixels2.length; i += 1) {
      pixels2[i].style.backgroundColor = 'white';
    }
  });
}
