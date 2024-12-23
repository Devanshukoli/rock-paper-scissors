let humanScore = 0;
let computerScore = 0;

// function
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        // return 'rock';
        console.log('rock')
    } else if (randomNumber === 1) {
        // return 'paper';
        console.log('paper')
    } else {
        // return 'scissors';
        console.log('scissors')
    }
}

// function to get human choice.
function getHumanChoice() {
    const humanChoice = prompt('Enter your choice: rock, paper or scissors');
    console.log('human choice: ', humanChoice)
}