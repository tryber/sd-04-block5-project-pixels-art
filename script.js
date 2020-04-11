  let preto = document.querySelector('.preto');
  let verde = document.querySelector('.verde');
  let laranja = document.querySelector('.laranja');
  let amarelo = document.querySelector('.amarelo');

  let cor = document.querySelector('.selected');

    preto.addEventListener('click', function() {

    this.classList.add("selected")
    cor.style.backgroundColor = "black";
    
  })

  verde.addEventListener('click', function() {

    this.classList.add("selected")
    cor.style.backgroundColor = "green";
    
  })

  laranja.addEventListener('click', function() {

    this.classList.add("selected")
    cor.style.backgroundColor = "orange";
    
  })

  amarelo.addEventListener('click', function() {

    this.classList.add("selected")
    cor.style.backgroundColor = "yellow";
    
  })

  let pixels = document.getElementsByClassName("pixel");

  for(var i = 0; i < pixels.length; i++){

  pixels[i].addEventListener("click", function() {
    this.classList.add("selected")

  })
  }
 