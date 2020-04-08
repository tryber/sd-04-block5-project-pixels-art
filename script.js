window.onload = function(){
    let colors = document.querySelectorAll(".color"); 

    for (let i=0; i<colors.length; i+=1){
    colors[i].addEventListener('click',function(event){
        let colorsValue = event.target.style.backgroundColor;
        let colorsClassValue = colors[i].className;
        // loop to remove class .selected to all
        for (let i=0; i<colors.length; i+=1){
            colors[i].classList.remove("selected");
        }
        colors[i].classList.add("selected");//add the class selected to the clicked 
        
    })
 
}
}