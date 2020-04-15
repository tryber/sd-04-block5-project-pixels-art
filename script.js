let matriz = document.getElementById('pixel-board');
let pallet = document.getElementById('color-palette');
let selectedColor = "black";

function CreatePixel() {
    let linha;
    let coluna;

    for (let i = 0; i < 5; i++) {
        linha = document.createElement("div")
        linha.id = "linha" + i;
        matriz.appendChild(linha);
        for (let j = 0; j < 5; j++) {
            coluna = document.createElement("div");
            coluna.id = "coluna" + i + j // alteracao linha + coluna
            coluna.classList.add("pixel");
            document.getElementById(linha.id).appendChild(coluna);
        }
        let divClear = document.createElement("div");
        divClear.classList.add("clear");
        document.getElementById(linha.id).appendChild(divClear);
    }
}

window.onload = function () {
    CreatePixel();

    pallet.addEventListener('click', function (event) {
        for (var item of document.querySelectorAll('.color')) {
            item.classList.remove('selected');
        }
        selectedColor = event.target.id;
        event.target.className = event.target.className + " selected";
    });

    matriz.addEventListener('click', function (event) {
        document.getElementById(event.target.id).classList = "pixel " + selectedColor;
    })

}
