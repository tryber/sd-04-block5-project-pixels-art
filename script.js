const paleta = document.querySelectorAll('.color'); // Manipula as cores da paleta.
const btnLimpar = document.getElementById('clear-board'); // Manipula botão de limpar.
const btnGerar = document.getElementById('generate-board'); // Manipula botão de gerar quadro.
let pixel = document.querySelectorAll('.pixel'); // Manipula o quadro de pixels.
let selectedColor = 'black'; // Cor selecionada. Por padrão preto.

function carregaCores () { // Define as cores da paleta.
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

function configuraPixels () { // Cor de fundo dos pixels do painel é branca.
	for (let p = 0; p < pixel.length; p+=1) { // For que percorre todos os div .pixel. 
		pixel[p].style.backgroundColor = 'white'; // Configura cor de fundo para branco.
	}
}

function adcionaEventPaleta () { // Adiciona evento click em cada cor da paleta.
	for (let p = 0; p < paleta.length; p+=1) { // For que percorre todos os div .pixel. 
		paleta[p].addEventListener('click', function (event) {
			selectedColor = event.target.style.backgroundColor;
			removeSelected ();
			event.target.classList.add('selected');
		});
	}
}

function adicionaEventPixel () {
	for (let p = 0; p < pixel.length; p+=1) {
		pixel[p].addEventListener('click', function (event) {
			event.target.style.backgroundColor = selectedColor;
		});
	}
}

function removeSelected () {
	document.querySelector('.selected').classList.remove('selected');
}

function eventoLimpador () {
	btnLimpar.addEventListener('click', function () {
		for (let p = 0; p < pixel.length; p+=1) {
			pixel[p].style.backgroundColor = 'white';
		}
	})
}

function eventoGerador () {
	btnGerar.addEventListener('click', function (event) {
		alert();
	});
}

window.onload = function () {
	carregaCores ();
	configuraPixels ();
	adcionaEventPaleta ();
	adicionaEventPixel ();
	eventoLimpador ();
	eventoGerador ();
}
