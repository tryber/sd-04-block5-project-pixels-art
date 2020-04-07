let palletChilds = document.getElementsByClassName("color");
let colors = ["black", "red", "green", "blue"];
for (let i = 0; i < palletChilds.length; i += 1){
  palletChilds[i].style.backgroundColor = colors[i];
}