const pixelsPallete = document.querySelectorAll('.color');
let color = 'rgb(0, 0, 0)'
let pixels = document.querySelectorAll('.pixel')

function removeClass(){
    for(let i=0; i<pixelsPallete.length; i++){ 
        pixelsPallete[i].classList.remove('selected')
    }
}

for(let i = 0; i < pixelsPallete.length; i=i+1){ 
    pixelsPallete[i].addEventListener('click', () => {
        if(!pixelsPallete[i].classList.contains('selected')){
            removeClass()
            color = window.getComputedStyle(pixelsPallete[i], null).getPropertyValue('background-color')
            pixelsPallete[i].classList.add('selected')
        }
    })
}

for(let i=0; i<pixels.length; i++){
    pixels[i].addEventListener('click', () => {
        pixels[i].style.backgroundColor = color
    })
}