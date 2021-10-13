const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = ['Toast #1 AI', 'Toast #2 CS', 'Toast #3 Cloud'];

button.addEventListener('click', () => createNotification());

function createNotification() {
  const notify = document.createElement('div');
  notify.classList.add('toast');

  notify.innerHTML = getRandomMessage();

  toasts.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 2500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
