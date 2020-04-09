window.onload = function()
{
    let buttonCor1 = document.getElementById("black-color");
    let buttonCor2 = document.getElementById("color-block1");
    let buttonCor3 = document.getElementById("color-block2");
    let buttonCor4 = document.getElementById("color-block3");

    IniciaPaleta();

    function IniciaPaleta()
    {
        buttonCor1.style.backgroundColor = "black";
        buttonCor2.style.backgroundColor = "rgb(255,0,0)";
        buttonCor3.style.backgroundColor = "rgb(0,255,0)";
        buttonCor4.style.backgroundColor = "rgb(0,0,255)";
    }
}; 
