let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert("Your Lose! Paper beats Rock")
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        alert("You Win! Rock beats scissors!");
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        alert("Tie! You both chose rock.")
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert("You win! Paper beats rock.")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        alert("You lose! Scissors beats paper.")
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        alert("Tie! You both chose paper.")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        alert("You lose! Rock beats scissors.")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        alert("You win! Scissors beats paper.")
    } else if (playerSelection = "scissors" && computerSelection === 'scissors'){
        alert("Tie! You both chose scissors.")
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//
