window.onload = function() {
    let selected = document.getElementById('color-palette');
    let color = 'black';
    selected.addEventListener("click",function(event){
        color = String(event.target.id);
        console.log(color);
    })
    let table = document.getElementById('pixel-board');
    table.addEventListener("click",function(event){
        event.target.id = color;
    })
    
}



   
