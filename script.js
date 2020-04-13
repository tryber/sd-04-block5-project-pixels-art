
window.onload = function () {
    let paletteCor1 = document.getElementById('cor1');
    let paletteCor2 = document.getElementById('cor2');
    let paletteCor3 = document.getElementById('cor3');
    let paletteCor4 = document.getElementById('cor4');
    let pixel = document.querySelector('div#pixel-board')
    let colorSelected = 'black'
    function selectColot (e) {
        colorSelected = e.target.style.backgroundColor
    }
   document.onclick = console.log(e.target.style.backgroundColor);
    
}