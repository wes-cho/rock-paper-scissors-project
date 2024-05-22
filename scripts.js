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

let scoreContainer = document.createElement("div");
scoreContainer.textContent = "Score"
buttons.appendChild(scoreContainer);

let playerScore = document.createElement("p");
let cpuScore = document.createElement("p");

let singleRoundResults = document.createElement("div");
let playerCounter = 0;
let cpuCounter = 0;

let announcement = document.createElement("div");

/*create buttons, and add event listeners to be able to play*/
const rock = document.querySelector('#rock');
rock.addEventListener("click", function (e) {
    singleRoundResults.textContent = playRound(this.textContent, getComputerChoice());
    /*add to score based on result*/
    if(singleRoundResults.textContent.includes('win') === true){
        playerCounter++;
    } else if (singleRoundResults.textContent.includes('lost') === true) {
        cpuCounter++;
    } else {
        playerCounter = playerCounter+0;
    }
    /*display the result of the round*/
    buttons.appendChild(singleRoundResults);
    /*append player's counter*/
    playerScore.textContent = `You: ${playerCounter}`;
    scoreContainer.appendChild(playerScore);
    /*append cpu's counter*/
    cpuScore.textContent = `Cpu: ${cpuCounter}`;
    scoreContainer.appendChild(cpuScore);
    /*determine the winner based on score*/
    if (playerCounter === 5){
        announcement.textContent = `You beat the computer! You scored ${playerCounter} and the computer scored ${cpuCounter}.`
    } else if (cpuCounter === 5){
        announcement.textContent = `You lost to the computer! You scored ${playerCounter} and the computer scored ${cpuCounter}.`
    };
    /* display winner */
    buttons.appendChild(announcement);
});

const paper = document.querySelector('#paper');
paper.addEventListener("click", function (e) {
    singleRoundResults.textContent = playRound(this.textContent, getComputerChoice());
    /*add to score based on result*/
    if(singleRoundResults.textContent.includes('win') === true){
        playerCounter++;
    } else if (singleRoundResults.textContent.includes('lost') === true) {
        cpuCounter++;
    } else {
        playerCounter = playerCounter+0;
    }
    /*display the result of the round*/
    buttons.appendChild(singleRoundResults);
    /*append player's counter*/
    playerScore.textContent = `You: ${playerCounter}`;
    scoreContainer.appendChild(playerScore);
    /*append cpu's counter*/
    cpuScore.textContent = `Cpu: ${cpuCounter}`;
    scoreContainer.appendChild(cpuScore);
    /*determine the winner based on score*/
    if (playerCounter === 5){
        announcement.textContent = `You beat the computer! You scored ${playerCounter} and the computer scored ${cpuCounter}.`
    } else if (cpuCounter === 5){
        announcement.textContent = `You lost to the computer! You scored ${playerCounter} and the computer scored ${cpuCounter}.`
    };
    /* display winner */
    buttons.appendChild(announcement);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", function (e) {
    singleRoundResults.textContent = playRound(this.textContent, getComputerChoice());
    /*add to score based on result*/
    if(singleRoundResults.textContent.includes('win') === true){
        playerCounter++;
    } else if (singleRoundResults.textContent.includes('lost') === true) {
        cpuCounter++;
    } else {
        playerCounter = playerCounter+0;
    }
    /*display the result of the round*/
    buttons.appendChild(singleRoundResults);
    /*append player's counter*/
    playerScore.textContent = `You: ${playerCounter}`;
    scoreContainer.appendChild(playerScore);
    /*append cpu's counter*/
    cpuScore.textContent = `Cpu: ${cpuCounter}`;
    scoreContainer.appendChild(cpuScore);
    /*determine the winner based on score*/
    if (playerCounter === 5){
        announcement.textContent = `You beat the computer! You scored ${playerCounter} and the computer scored ${cpuCounter}.`
    } else if (cpuCounter === 5){
        announcement.textContent = `You lost to the computer! You scored ${playerCounter} and the computer scored ${cpuCounter}.`
    };
    /* display winner */
    buttons.appendChild(announcement);
});