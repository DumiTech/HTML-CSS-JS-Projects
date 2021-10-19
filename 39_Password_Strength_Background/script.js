const emailEl = (document.getElementById('email').value = '');
const passwordEl = document.getElementById('password');
const background = document.getElementById('background');

emailEl.addEventListener('input', (e) => {
  const input = e.target.value;
  console.log(e.target.value);
});

passwordEl.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;

  const blurValue = 20 - length * 2.25;
  background.style.filter = `blur(${blurValue}px)`;
});
