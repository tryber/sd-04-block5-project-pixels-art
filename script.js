window.onload = function () 
{
    const buttonCor1 = document.getElementById('black-color');
    const buttonCor2 = document.getElementById('color-block1');
    const buttonCor3 = document.getElementById('color-block2');
    const buttonCor4 = document.getElementById('color-block3');
    const painel = document.getElementById('pixel-board');

    IniciaPaleta();
    IniciaPainel(5, 5);

    function IniciaPaleta() 
    {
        buttonCor1.style.backgroundColor = 'black';
        buttonCor2.style.backgroundColor = 'rgb(255,0,0)';
        buttonCor3.style.backgroundColor = 'rgb(0,255,0)';
        buttonCor4.style.backgroundColor = 'rgb(0,0,255)';
    }

    function IniciaPainel(linha, coluna)
    {
        painel.style.maxWidth = (44 * coluna) + 'px';
        for (let i = 0; i < linha; i++)
        {
            //painel.appendChild(document.createElement('br'));
            
            for (let y = 0; y < coluna; y++) 
            {
                let ele = document.createElement('div');
                ele.setAttribute('class', 'pixel');
                console.log(ele);
                console.log(painel);
                painel.appendChild(ele);
            }            
        }
    }
}; 
