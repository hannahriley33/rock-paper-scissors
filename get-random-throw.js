export function getRandomThrow(){
    const randomNumber = math.floor(math.random()*3);
    //give 0,1,2
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else if (randomNumber === 2){
        return 'scissors';
    };
};

export function checkResults(userChoice, computerThrow){
    
    if (userChoice === computerThrow){
        return 'draw'
    } 
    if (userChoice === 'rock' && computerThrow === 'scissors'){
        return 'win';
    } else if (userChoice === 'rock' && computerThrow === 'paper'){
        return 'lose';
    } else if (userChoice === 'paper' && computerThrow === 'scissors'){
        return 'lose';
    } else if (userChoice === 'scissors' && computerThrow === 'paper'){
        return 'win';
    } else if (userChoice === 'scissors' && computerThrow === 'rock'){
        return 'lose';
    }
// do all loses and draw then else is win
};
   
//let userChoice = document.querySelector('.userChoice');
