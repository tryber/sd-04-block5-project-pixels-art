window.onload = function() {
    let black= document.querySelector('#black').style.backgroundColor = "rgb(0,0,0)"
    let red = document.querySelector('#red').style.backgroundColor = "rgb(255,0,0)"
    let green = document.querySelector('#green').style.backgroundColor = "rgb(0,255,0)"
    let blue = document.querySelector('#blue').style.backgroundColor = "rgb(0,0,255)"

    let color = document.querySelectorAll('.color');
    for (let c = 0; c < 4; c+=1) {
        color[c].addEventListener('click', function(){
            this.className = '.color selected'
        })
        
    } 
    
    let selectColor = document.querySelectorAll('.selected')[0]
    console.log(selectColor);

    for (let i = 0; i < 25; i+= 1) {
        let pixel = document.querySelectorAll('.pixel');
        pixel[i].addEventListener('click', function(){
        this.style.backgroundColor = selectColor.style.backgroundColor
    })
    }
    
}