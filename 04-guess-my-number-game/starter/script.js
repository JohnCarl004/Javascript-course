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
let score = 20;
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

if (!guess) {
    console.log('no Number');
    document.querySelector('.message').textContent = 'no Number';
    return;
};

if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'You have won';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.guess').disabled = true;
    document.querySelector('body').style.backgroundColor = '#0bff50ff';
}  else if (guess > secretNumber) {
        console.log('Too high!');
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = 'You Lost the Game, press again!';
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.querySelector('body').style.backgroundColor = '#ff0000';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.message').textContent = 'Game Over!';

        }
}  else if (guess < secretNumber) {
        console.log('Too low!');
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = 'You Lost the Game, press again!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
            document.querySelector('body').style.backgroundColor = '#ff0000';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = 'Game Over!';
        }
    
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() *20) + 1;
    //restart
    document.querySelector('.message').textContent = 'Start guessing'
    //
    document.querySelector('.number').textContent = '?';
    //
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor ='';
    //
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});


