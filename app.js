const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = 60;
let timerId = null;

function randomPosition() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  // assign id of randomPosition to hitPosition
  hitPosition = randomPosition.id;
};

// hit mouse on element
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// move the mole every so often

function moveMole() {
  timerId = setInterval(randomPosition, 1000);
};

moveMole();

function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('GAME OVER! Your final score is ' + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);