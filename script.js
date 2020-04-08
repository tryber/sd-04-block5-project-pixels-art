//cores
colorBlack = document.querySelector("#color-black");
colorRed = document.querySelector("#color-red");
colorBlue = document.querySelector("#color-blue");
colorGreen = document.querySelector("#color-green");

pixelBoard = document.querySelector("#pixel-board")
pixel = document.querySelector(".pixel");
console.log(pixel)
function saveColor (cor){
    let corSelec = cor;
    return corSelec;
};
function apagaClass(){
colorBlack.className = 'color';
colorRed.className = 'color'; 
colorBlue.className = 'color'; 
colorGreen.className = 'color'; 
};

colorBlack.addEventListener('click', function(){ 
    let colorSelected = colorBlack.style.backgroundColor;
    saveColor(colorSelected);
    apagaClass();
    colorBlack.className = 'color selected';
});

colorRed.addEventListener('click', function(){
    let colorSelected = colorRed.style.backgroundColor;
    saveColor(colorSelected);
    apagaClass();
    colorRed.className = 'color selected';
});

colorBlue.addEventListener('click', function(){
    let colorSelected = colorBlue.style.backgroundColor;
    saveColor(colorSelected);
    apagaClass();
    colorBlue.className = 'color selected';
});

colorGreen.addEventListener('click', function(){
    let colorSelected = colorGreen.style.backgroundColor;
    saveColor(colorSelected);
    apagaClass();
    colorGreen.className = 'color selected';
});


