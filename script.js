window.onload = function () 
{
    const buttonCor1 = document.getElementById('black-color');
    const buttonCor2 = document.getElementById('color-block1');
    const buttonCor3 = document.getElementById('color-block2');
    const buttonCor4 = document.getElementById('color-block3');
    const painel = document.getElementById('pixel-board');
    let corAtual = 0;

    IniciaPaleta();
    IniciaPainel(5, 5);

    buttonCor1.addEventListener('click', function() 
    {
        TrocaCor(event, 0);
    })
    buttonCor2.addEventListener('click', function() 
    {
        TrocaCor(event, 1);
    })
    buttonCor3.addEventListener('click', function() 
    {
        TrocaCor(event, 2);
    })
    buttonCor4.addEventListener('click', function() 
    {
        TrocaCor(event, 3);
    })

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
            for (let y = 0; y < coluna; y++) 
            {
                let elemento = document.createElement('div');
                elemento.setAttribute('class', 'pixel');
                elemento.style.backgroundColor = 'white';
                painel.appendChild(elemento);
            }            
        }
    }

    function TrocaCor(event, corFutura)
    {
        if(corAtual === 0)
        {
            buttonCor1.classList.remove('selected');
            corAtual = corFutura;
        }
        else if(corAtual === 1)
        {
            buttonCor2.classList.remove('selected');
            corAtual = corFutura;
        }
        else if(corAtual === 2)
        {
            buttonCor3.classList.remove('selected');
            corAtual = corFutura;
        }
        else if(corAtual === 3)
        {
            buttonCor4.classList.remove('selected');
            corAtual = corFutura;
        }

        if(corFutura === 0)
        {
            buttonCor1.className = 'color selected';
        }
        else if(corFutura === 1)
        {
            buttonCor2.className = 'color selected';
        }
        else if(corFutura === 2)
        {
            buttonCor3.className = 'color selected';
        }
        else if(corFutura === 3)
        {
            buttonCor4.className = 'color selected';
        }
        console.log(corAtual);
    }
}; 
