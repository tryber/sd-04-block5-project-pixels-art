const paleta = document.querySelectorAll('.color'); // Manipula as cores da paleta

window.onload = function() {
    carregaCores();
}

function carregaCores() {
    for(let number = 0; number < paleta.length; number++) {
        switch(number) {
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
        }
    }
}