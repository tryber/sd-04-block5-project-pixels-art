let pixelsPallete = document.querySelectorAll('.color')
for(let i=0; i<pixelsPallete.length; i++){
    pixelsPallete[i].addEventListener('click', () => {
        if(!pixelsPallete[i].classList.contains('selected')){
            removeClass()
            pixelsPallete[i].classList.add('selected')
            console.log(pixelsPallete[i])
        }
    })
}

function removeClass(){
    for(let i=0; i<pixelsPallete.length; i++){
        pixelsPallete[i].classList.remove('selected')
    }
}