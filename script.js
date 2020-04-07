const paleta = document.querySelectorAll('.color'); // Manipula as cores da paleta.
const quadro = document.getElementById('pixel-board'); // Manipula o quadro de pixels.

function carregaCores () {
  for (let number = 0; number < paleta.length; number+=1) {
    switch (number) {
      case 0:
        paleta[number].style.backgroundColor = 'black';
        break;
      case 1:
        paleta[number].style.backgroundColor = 'red';
        break;
      case 2:
        paleta[number].style.backgroundColor = 'blue';
        break;
      case 3:
        paleta[number].style.backgroundColor = 'green';
        break;
      default:
        console.log('Erro: nenhuma cor adicionar para os elementos div.');
    }
  }
}

function carregaPixels () {
	for (let pixel = 0; pixel < 25; pixel+=1) {
		let quadrinho = document.createElement('div'); // Cria o pixel.
		quadrinho.className = 'pixel'; // Configura atributo class.
		quadrinho.style.backgroundColor = 'white'; // Configura cor de fundo para branco.
		quadro.appendChild(quadrinho); // Adiciona no quadro.
	}
}

window.onload = function () {
	carregaCores ();
	carregaPixels ();
}
