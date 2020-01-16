import { getRandomThrow, checkResults } from './get-random-throw.js';


const shootButton = document.getElementById('shootButton');
const resetButton = document.getElementById('resetButton');
const winsDisplay = document.getElementById('wins');
const losesDisplay = document.getElementById('loses');
const drawsDisplay = document.getElementById('draws');
const resultsList = document.getElementById('resultsList');

//let numberTries = document.getElementById('tries');
const triesText = document.getElementById('tries');
const resultsDisplay = document.getElementById('resultsDisplay');

let wins = 0;
let loses = 0;
let draws = 0;
let tries = 3;

shootButton.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const results = checkResults(userChoice, computerChoice);
    triesText.style.visibility = 'visible';
    triesBox.style.visibility = 'visible';
    console.log('user', userChoice);
    console.log('computer', computerChoice);
    console.log('results', results);
    console.log(tries);

    resultsList.style.visibility = 'visible';
    
    if (tries === 0){
        resetButton.style.visibility = 'visible';
        shootButton.disabled = true;
    }
    

    if(results === 'win'){
        wins++;
        
        triesText.textContent = tries;
        winsDisplay.textContent = wins;
        resultsDisplay.style.visibility = 'visible';
        resultsDisplay.textContent = 'You win!';
        tries--;
    } else if (results === 'lose'){
        loses++;

        triesText.textContent = tries;
        losesDisplay.textContent = loses;
        resultsDisplay.style.visibility = 'visible';
        resultsDisplay.textContent = 'You lose!'
        tries--;
//lose
    } else {
        draws++;
        triesText.textContent = tries;
        drawsDisplay.textContent = draws;
        resultsDisplay.style.visibility = 'visible';
        resultsDisplay.textContent = 'It\'s a draw!';
        tries--;
//draw
    }
});

resetButton.addEventListener('click', () => {
    tries = 3;
    resetButton.style.visibility = 'hidden';
    resultsDisplay.style.visibility = 'hidden';
    drawsDisplay.textContent = draws;
    triesText.textContent = tries;
    shootButton.disabled = false;
    resultsList.style.visibility = 'hidden';
    console.log(tries);
    wins = 0;
    loses = 0;
    draws = 0;

});

