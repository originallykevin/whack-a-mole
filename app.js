const square = document.querySelectorAll('.square');
const mole = documment.querySelectorAll('.mole');
const timeleft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  // assign id of randomPosition to hitPosition
  hitPosition = randomPosition.id;
};

// hit mouse on element
square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

// move the mole every so often

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
};

moveMole()