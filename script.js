window.onload = function() {
    document.getElementById('black').classList.add( 'selected' ); 
    let selected = document.getElementById('color-palette');
    let color = 'black';
    selected.addEventListener("click",function(event){
        document.getElementById(color).classList.remove('selected');
        color = String(event.target.id);
        event.target.classList.add('selected');
    })
    
    let table = document.getElementById('pixel-board');
    table.addEventListener("click",function(event){
        event.target.id = color;
    })
    
}



   
