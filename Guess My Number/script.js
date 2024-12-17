'use strict';
let score = 20;
let highestcore = 0;
const secretnumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        'There is no Number entered !!!';
    } else if (guess > 20 || guess < 1) {
      document.querySelector('.message').textContent =
        'Choose a number between 1 and 20 !!';
    } else if (guess === secretnumber) {
      document.querySelector('.message').textContent = 'Correct Number !!!';
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highestcore < score) {
        highestcore = score;
        document.querySelector('.highscore').textContent = highestcore;
      }
    } else {
      if (guess > secretnumber)
        document.querySelector('.message').textContent =
          'Your Guess is hight ... ';
      else
        document.querySelector('.message').textContent =
          'Your Guess is low ... ';

      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You lost';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#f03e3e';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
