const paleta = document.querySelectorAll('.color'); // Manipula as cores da paleta.
const pixel = document.querySelectorAll('.pixel'); // Manipula o quadro de pixels.

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

function configuraPixels () {
	for (let p = 0; p < pixel.length; p+=1) { // For que percorre todos os div .pixel. 
		pixel[p].style.backgroundColor = 'white'; // Configura cor de fundo para branco.
	}
}

window.onload = function () {
	carregaCores ();
	configuraPixels ();
}
