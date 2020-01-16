export default function getRandomThrow(){
    const randomNumber = math.floor(math.random()*3);
    //give 0,1,2
    
    const computerThrow = element(randomNumber);

};
   
function element(){
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else if (randomNumber === 2){
        return 'scissors';
    };
};


function checkResults(userChoice, computerThrow){

    if (userChoice === computerThrow){
        return 'draw'
    } 
    if (userChoice === 'rock' && computerThrow === 'scissors'){
        return 'You win!';
    } else if (userChoice === 'rock' && computerThrow === 'paper'){
        return 'You lose';
    } else if (userChoice === 'paper' && computerThrow === 'scissors'){
        return 'You lose';
    } else if (userChoice === 'scissors' && computerThrow === 'paper'){
        return 'You win!';
    } else if (userChoice === 'scissors' && computerThrow === 'rock'){
        return 'You lose';
    }

};
   
let userChoice = document.querySelector('.userChoice');
