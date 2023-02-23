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
