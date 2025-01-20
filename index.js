let humanScore = 0;
let computerScore = 0;

// function to get human choice.
function getHumanChoice() {
    let humanChoice = ''
    const rockButton = document.getElementById('rock')
    const paperButton = document.getElementById('paper')
    const scissorsButton = document.getElementById('scissors')
    
    // Add a event-listner to buttons.
    rockButton.addEventListener('click', () => {
        console.log('rock button clicked')
        return humanChoice = 'rock';
    })
    
    paperButton.addEventListener('click', () => {
        console.log('paper button clicked')
        return humanChoice = 'paper';
    })
    
    scissorsButton.addEventListener('click', () => {
        console.log('scissors button clicked')
        return humanChoice = 'scissors';
    })

}

console.log('humanchoice---->', getHumanChoice())
//  function
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Computer Choice : rock';
    } else if (randomNumber === 1) {
        return 'Computer Choice : paper';
    } else {
        return 'Computer Choice : scissors';
    }
}

// // function to play the game.
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

// function playGame()
function playGame() {
    const humanSelection = getHumanChoice();
    console.log(humanSelection)
    const computerSelection = getComputerChoice();
    console.log(computerSelection)

    console.log(playRound(humanSelection, computerSelection));
}

playGame()
