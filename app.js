import { getRandomThrow, checkResults } from './get-random-throw.js';


const selectedItem = document.querySelector('input:checked');
    console.log(theSelectedItem);

const throwButton= document.getElementByID('throwButton');

const resetButton= document.getElementByID('resetButton');
const numberWins = document.getElementById('winSpan');
const numberTries = document.getElementById('triesSpan');
const triesText = document.getElementById('triesBox');

throwButton.addEventListener('click', () => {
    const checkedRadio = document.querySelector('input:checked');
    console.log('clicked');
    triesText.style.visibility = 'visible';

    if (numberTries === 0){
        resetButton.style.visibility = 'visible';
    }
});

resetButton.addEventListener('click', () => {
    const resetGame = document.querySelector('input:checked');

    numberWins.textContent = 0;
    numberTries.textContent = 0;


    

});