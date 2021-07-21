'use strict';
//document.querySelector
// document.querySelector('.number').textContent = 33;
// document.querySelector('.score').textContent = 122;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.message').textContent = 'testing ';
// console.log(document.querySelector('.message').textContent);

//
let sNumber = Math.trunc(Math.random() * 5) + 1;

let score = 25;

document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', () => {
  sNumber = Math.trunc(Math.random() * 5) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;

  console.log(typeof guess);

  console.log(typeof sNumber);

  if (!guess) {
    document.querySelector('.message').textContent = 'no Number';
  } else if (guess == sNumber) {
    document.querySelector('.number').textContent = sNumber;
    document.querySelector('.message').textContent = 'well done!';
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('.number').style.width = '30rem';
    console.log(document.querySelector('.message', guess));
  } else if (guess < sNumber) {
    document.querySelector('.message').textContent = 'up';
    score--;
    console.log(document.querySelector('.message', guess));
  } else if (guess > sNumber) {
    document.querySelector('.message').textContent = 'down';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
