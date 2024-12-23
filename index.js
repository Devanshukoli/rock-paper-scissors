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

// function to play the game.
function playRound(humanChoice, computerChoice) {
    // Now making this args. case insensitive.
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return 'It is a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win!';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return 'You win!';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win!';
    } else {
        return 'You lose!';
    }   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
