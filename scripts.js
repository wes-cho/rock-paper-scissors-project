let choices = ['rock', 'paper', 'scissors'];

let userInput = prompt('What do you choose?');
while (userInput !== 'rock' && userInput !== 'scissors' && userInput !== 'paper'){
    userInput = prompt('Invalid input. Choose rock, paper, or scissors.')
}

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        } else if (playerSelection === computerSelection) {
            console.log(`Tie game. You both chose ${playerSelection}.`)
        } else {
            console.log(`You lost. ${computerSelection} beats ${playerSelection}.`)
        }
}


//const playerSelection = 'rock';
//const computerSelection = getComputerChoice();
//console.log (playRound(playerSelection, computerSelection));
