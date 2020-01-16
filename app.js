import { getRandomThrow, checkResults } from './get-random-throw.js';


const shootButton = document.getElementById('shootButton');
const resetButton = document.getElementById('resetButton');
const winsDisplay = document.getElementById('wins');
const losesDisplay = document.getElementById('loses');
const drawsDisplay = document.getElementById('draws');

let numberTries = document.getElementById('triesSpan');
const triesText = document.getElementById('triesBox');
const resultsDisplay = document.getElementById('resultsDisplay');

let wins = 0;
let loses = 0;
let draws = 0;

shootButton.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const results = checkResults(userChoice, computerChoice);
    triesText.style.visibility = 'visible';
    console.log('user', userChoice);
    console.log('computer', computerChoice);
    console.log('results', results);
    
    if (numberTries === 0){
        resetButton.style.visibility = 'visible';
    }
    numberTries--;

    if(results === 'win'){
        wins++;
        winsDisplay.textContent = wins;
        resultsDisplay.classList.remove('hidden');
        resultsDisplay.textContent = 'You win!';
    } else if (results === 'lose'){
        loses++;
        losesDisplay.textContent = loses;
        resultsDisplay.classList.remove('hidden');
        resultsDisplay.textContent = 'You lose!'
//lose
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultsDisplay.classList.remove('hidden');
        resultsDisplay.textContent = 'It\'s a draw!';
//draw
    }
});

resetButton.addEventListener('click', () => {
    const resetGame = document.querySelector('input:checked');

    let wins = 0;
    let loses = 0;
    let draws = 0;
    let numberTries = 3;

});

