const pixelBoard = document.querySelector('#pixel-board');
const pixelNumber = 25;

for (let i = 0; i <= 4  ; i++) {
  const pixelRow = document.createElement('div');
  pixelRow.className = 'pixel-row flex';
  for (let i = 0; i < 5; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelRow.appendChild(pixel);
    
  }
  pixelBoard.appendChild(pixelRow);
    
}