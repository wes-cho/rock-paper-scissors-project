let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else if (playerSelection === computerSelection) {
            return `Tie game. You both chose ${playerSelection}.`
        } else {
            return `You lost. ${computerSelection} beats ${playerSelection}.`
        }
}

function playGame(){
    //initialize score counter
    let playerScore = 0;
    let computerScore = 0;

    //until the playerScore or cpuScore reaches 5:
    while(playerScore < 5 && computerScore < 5){
        //get user input & transform to lower case for later comparison
        let userInput = prompt('What do you choose?').toLowerCase();

        //ensure user input is a valid choice
        while (userInput !== 'rock' && userInput !== 'scissors' && userInput !== 'paper'){
            userInput = prompt('Invalid input. Choose rock, paper, or scissors.')
        }
        
        //play a single round of the game
        winLossString = playRound(userInput, getComputerChoice());
        if (winLossString.includes('win') === true){
            playerScore++;
            console.log(winLossString)
        } else if (winLossString.includes('Tie') === true){
            playerScore = playerScore + 0;
            console.log(winLossString)
        } else {
            computerScore++;
            console.log(winLossString);
        }
    }

    //display winner
    if (playerScore > computerScore) {
        console.log(`You beat the computer! You scored ${playerScore} and the computer scored ${computerScore}.`);
    } else {
        console.log(`You lost to the computer! You scored ${playerScore} and the computer scored ${computerScore}.`)
    }
}
    
//const playerSelection = 'rock';
//const computerSelection = getComputerChoice();
//console.log (playRound(playerSelection, computerSelection));
