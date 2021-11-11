const container = document.getElementById('container');
const colors = [
  '#34568B',
  '#FF6F61',
  '#6B5B95',
  '88B04B',
  '#F7CAC9',
  '#92A8D1',
  '#955251',
  '#009B77',
];
const SQUARES = 990;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = 'rgb(92, 82, 69)';
  element.style.boxShadow = '0 0 3px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
