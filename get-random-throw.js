

 
// function getRandomThrow(){
    
    //give 0,1,2
    // return element(randomNumber);

    // function element(RPS[randomNumber]);


//  function element(computerNumber){
//      if (computerNumber === 0){
//         return 'rock';
//     } else if (computerNumber === 1){
//         return 'paper';
//     } else if (computerNumber === 2){
//         return 'scissors';
//     }
//  };





 function checkResults(userChoice, computerThrow){
    
    if (userChoice === computerThrow){
        return 'draw'
    } 
   
     if (userChoice === 'rock' && computerThrow === 'paper'){
        return 'lose';
    } 
    else if (userChoice === 'paper' && computerThrow === 'scissors'){
        return 'lose';
    } 
   
    else if (userChoice === 'scissors' && computerThrow === 'rock'){
        return 'lose';
    }
    else {
        return 'win';
    }
// do all loses and draw then else is win
};
   
//let userChoice = document.querySelector('.userChoice');
export {
  
    checkResults,
    
}