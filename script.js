function randomColor () {
    return Math.floor(Math.random() * 256);
}

function randomBackgroundColor () {
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}

//function createPixelBoard () {    
//}

window.onload = function () {
    let colorPalette = document.querySelector("#color-palette");
    let pixelBoard = document.querySelector("#pixel-board");

    function randomColorPalette () {
        for (let i = 1; i < colorPalette.children.length; i+=1){
          colorPalette.children[i].style.backgroundColor = randomBackgroundColor();
      }
    }

    randomColorPalette();

    //createPixelBoard();

    console.log(colorPalette);
    console.log(pixelBoard);

    console.log(colorPalette.children);
    console.log(colorPalette.children[0]);
    console.log(colorPalette.children[1]);
    console.log(colorPalette.children[2]);
    console.log(colorPalette.children.length);

    console.log(pixelBoard.children);

};
