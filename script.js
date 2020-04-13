function CreatePixel(){
    let linha;
    let coluna;
    
    for(let i = 0; i < 5; i++) {
        linha = document.createElement("div")
        linha.id= "linha" + i;
        document.getElementById("matriz").appendChild(linha);
        for( let j = 0; j < 5; j++) {
            coluna = document.createElement("div");
            coluna.id= "coluna" + j
            coluna.classList.add("pixel");
            document.getElementById(linha.id).appendChild(coluna);
         }
         let divClear = document.createElement("div");
         divClear.classList.add("clear");
         document.getElementById(linha.id).appendChild(divClear);
     } 
}

console.log(CreatePixel());
