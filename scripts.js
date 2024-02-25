let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
