window.onload = function() {
    document.getElementById('black').classList.add( 'selected' ); 

    console.log(document.getElementById('black').classList);
    let selected = document.getElementById('color-palette');
    let color = 'black';
      selected.addEventListener("click",function(event){
          color = String(event.target.id);
          if(selected.classList ==! 'selected'){
          event.target.classList.add('selected');
          console.log(event.target.classList);
          }
      })
    let table = document.getElementById('pixel-board');
    table.addEventListener("click",function(event){
        event.target.id = color;
    })
    
}



   
