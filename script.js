window.onload = function() {
    
    for (let i = 0; i < 25; i+= 1) {
        let pixel = document.querySelectorAll(".pixel");
        pixel[i].addEventListener('click', function(){
        this.style.backgroundColor = "rgb(0, 0, 255)"
    })
    }
    
}

function selectColor() {
    pixel.style.backgroundColor = "black"
    
}