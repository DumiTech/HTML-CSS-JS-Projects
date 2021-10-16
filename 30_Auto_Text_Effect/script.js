const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const text = 'We love technology and how programming is changhing the word';

let index = 1;
let speed = 250 / speedElement.value;

writeText();

function writeText() {
  textElement.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedElement.addEventListener(
  'input',
  (event) => (speed = 250 / event.target.value)
);
