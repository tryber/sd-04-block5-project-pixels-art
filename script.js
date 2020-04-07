const palletChilds = document.getElementsByClassName('color');
const colors = ['black', 'red', 'green', 'blue'];
for (let i = 0; i < palletChilds.length; i += 1) {
  palletChilds[i].style.backgroundColor = colors[i];
}
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}
