window.onload = function () {
  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const color3 = document.getElementById("color3");
  const color4 = document.getElementById("color4");

  color1.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    color1.classList.add('selected');
  });
  color2.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    color2.classList.add('selected');
    console.log(document.querySelector('.selected'));
  });
  color3.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    color3.classList.add('selected');
  });
  color4.addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    color4.classList.add('selected');
  });

}