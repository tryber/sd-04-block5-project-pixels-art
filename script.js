
let divcolorPallete = document.getElementsByClassName("color selected")[0].style.backgroundColor ="black";
 divcolorPallete = document.getElementsByClassName("color")[1].style.backgroundColor ="gold";
 divcolorPallete = document.getElementsByClassName("color")[2].style.backgroundColor ="darkred";
 divcolorPallete = document.getElementsByClassName("color")[3].style.backgroundColor ="aquamarine";


 //window.onload = function(){

    let paleta = document.querySelectorAll(".color");
    let pixel = document.querySelectorAll(".pixel");
    let corselecionada = paleta[0].style.backgroundColor; // a variável deve ser deve ser criada fora;
   // requisito 7 = ao carregar a pág a cor preta deve está selecionada


    for(let i =0; i<paleta.length; i++){
        paleta[i].addEventListener("click", function(){

            corselecionada =  paleta[i].style.backgroundColor;
           // se a variável estivesse aqui teria valor só aqui dentro
           //console.log(corselecionada)

           document.querySelector(".color.selected").classList.remove('selected');
           // como já tem uma selecionada, primeiro remove o selected depois add para a próxima
           paleta[i].classList.add('selected'); // é a div que tem que ter o selected
           // 
           //console.log(paleta)
           //console.log(corselecionada)
        })
        
    }

    for(let i=0; i<pixel.length;i++){

        pixel[i].addEventListener("click", function(){

        pixel[i].style.backgroundColor=corselecionada; // o pixle[i].style.backgroundcolor está vazio.

        
        })

    }

   



  


 //}