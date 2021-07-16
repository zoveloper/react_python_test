'use strict';
//document.querySelector
// document.querySelector('.number').textContent = 33;
// document.querySelector('.score').textContent = 122;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.message').textContent = 'testing ';
// console.log(document.querySelector('.message').textContent);

//

document.querySelector('.check').addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
  console.log(typeof guess);
});
