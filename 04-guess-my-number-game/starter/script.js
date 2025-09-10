'use strict';


/// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl.Extension);
console.log(messageEl);
// messageEl.textContent = 'Hello from Javascript'


const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
// scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

let secretNumber = Math.trunc(Math.random () *20 ) + 1;
console.log('Secret Number:', secretNumber);

// track the current score
let score = 40;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

/// Basic Game Logic
document.querySelector('.check').addEventListener('click', function (){
//
console.log('Check button is clicked!');
const guess = Number(document.querySelector('.guess').value);
console.log('User Guess:', guess);

if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
}  else if (guess > secretNumber) {
        console.log('Too high!');
        document.querySelector('.message').textContent = 'Too high!';
}  else if (guess < secretNumber) {
        console.log('Too low!');
        document.querySelector('.message').textContent = 'Too low!';
        
    
    }
});
