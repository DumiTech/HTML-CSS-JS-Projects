const bitcoin = document.querySelector('.bitcoin');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

bitcoin.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    // console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 900) {
      createBitcoin(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createBitcoin = (e) => {
  const bit = document.createElement('i');
  bit.classList.add('fab');
  bit.classList.add('fa-bitcoin');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  //   console.log(x, y);
  // console.log(xInside, yInside);

  bit.style.top = `${yInside}px`;
  bit.style.left = `${xInside}px`;

  bitcoin.appendChild(bit);

  times.innerHTML = ++timesClicked;

  setTimeout(() => bit.remove(), 3000);
};
