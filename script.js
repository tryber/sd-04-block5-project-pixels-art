let select = document.getElementById('color-palette');
let color = 'black';
select.addEventListener("click",function(event){
    color = String(event.target.id);
    console.log(color);
})

let table = document.getElementById('pixel-board');
table.addEventListener("click",function(event){
    event.target.id = color;
})



   
