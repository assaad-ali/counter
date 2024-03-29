const count = document.querySelector('.count');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const time = document.querySelector('.time');
const mode = document.querySelector('.mode');

let counter = 0;
let interval;

function updateCounter(direction) {
  clearInterval(interval);
  interval = setInterval(() => {
    counter += direction;
    count.innerText = counter;
  }, 1000);
}

up.addEventListener('click', () => {
  updateCounter(1);
});

down.addEventListener('click', () => {
  updateCounter(-1);
});

function updateTime() {
  const now = new Date();
  time.innerText = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

mode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
