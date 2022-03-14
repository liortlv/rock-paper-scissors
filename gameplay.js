function game(e) {
    // A round in a 5 rounds game. Triggers by a button click 
    whoWonRound = playRound(e.target.value, computerPlay());
    if (whoWonRound == 'win') {
        playerScore++;
        updateScore(computerScore, playerScore);
        gameEndFlag = 0;
    } else if (whoWonRound == 'lose') {
        computerScore++;
        updateScore(computerScore, playerScore);
        gameEndFlag = 0;
    } else {    // it's a 'tie'
        if (gameEndFlag == 1) {
            updateScore(0, 0);
        }
    }
    if (computerScore == 5 || playerScore == 5) {
        if (playerScore == 5) {
            results.textContent = "You won the game! click to play again"
        } else {
            results.textContent = "The computer won the game! click to play again"
        }
        playerScore = 0;
        computerScore = 0;
        gameEndFlag = 1;
    }
}

function computerPlay() {
    // Randomize computer play move
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function updateScore(computerScore, playerScore) {
    // Update the score div text
    document.querySelector('.score').textContent = `Your score: ${playerScore}. Computer score: ${computerScore}.`;
}

function playRound(playerSelection, computerSelection) {
    // Play a single round between user and computer
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return 'win';
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}`;
        return 'lose';
    } else {
        results.textContent = `Its a Tie! Both played ${computerSelection}`;
        return 'tie';
    }
}

let gameEndFlag = 0;
let playerScore = 0;
let computerScore = 0;
updateScore(computerScore, playerScore);
const results = document.querySelector('.results');
results.textContent = "Click Rock/Paper/Scissors buttons to start the game!"
const buttons = document.querySelectorAll('input[type=button]');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        return game(e);
    })
});

// small change for pull request..