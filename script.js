let color = 'black';

let buttonsArray = document.getElementsByClassName('color');
for(let i=0;i<buttonsArray.length;i++){
  let btn=buttonsArray[i];
  btn.addEventListener('click',()=>{
    color=btn.classList[1];
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    btn.classList.add("selected");
  });
}
let pixelBoard = document.querySelectorAll('.pixel');
for(let i=0;i<pixelBoard.length;i++){
  let pixel=pixelBoard[i];
  pixel.addEventListener('click', ()=>{
    pixel.style.backgroundColor=color;
  });
}