window.onload = function() {
    let initial = document.querySelector("#black");
    initial.className = ".color selected"

    for (let c = 0; c < 4; c+=1) {
        let color = document.querySelectorAll(".color");
        color[c].addEventListener('click', function(){
            this.className = ".color selected"
        })
        
    }
    
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