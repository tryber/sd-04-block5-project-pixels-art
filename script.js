window.onload = function(){

let pixels = document.getElementsByClassName(".pixel");


let colorOne = document.querySelector("#color1");
let colorTwo = document.querySelector("#color2");
let colorThree = document.querySelector("#color3");
let colorFour = document.querySelector("#color4");


colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = 'red';
colorThree.style.backgroundColor = 'yellow';
colorFour.style.backgroundColor = 'green';

let choiceOne = null;

colorOne.addEventListener('click',function(e){
choiceOne = e.target.backgroundColor;
console.log(choiceOne);

});

}