
  
  let blackPx = document.getElementById('black'); blackPx.style.backgroundColor = "black";
  let olivePx = document.getElementById('olive'); olivePx.style.backgroundColor = 'olive';
  let redPx = document.getElementById('red'); redPx.style.backgroundColor = 'red';
  let navyPx = document.getElementById('navy'); navyPx.style.backgroundColor = 'navy';
  
  
  blackPx.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    blackPx.classList.add('selected');
  });
  olivePx.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    olivePx.classList.add('selected');
  });
  
  redPx.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    redPx.classList.add('selected');
  });
  
  navyPx.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    navyPx.classList.add('selected');
  });

  let selectedPx = document.querySelectorAll('.pixel');
  function paintPx(index) {
  selectedPx[index].addEventListener('click', function () {
    let selectedColor = document.querySelector('.selected');
    selectedPx[index].style.backgroundColor =
      selectedColor.style.backgroundColor;
  });
  };

  for (let index = 0; index < selectedPx.length; index++) {
  paintPx(index);
  }

  