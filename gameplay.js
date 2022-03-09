function computerPlay() {
    // Randomize computer play move
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    // Play a single round between user and computer
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        return "You Lose! " + playerSelection + " loses to " + computerSelection;
    } else {
        return "Its a Tie! Both played " + computerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose Rock, Paper or Scissors:');
        let computerSelection = computerPlay();
        whoWon = playRound(playerSelection, computerSelection);
        console.log(whoWon);
        if (whoWon.charAt(4) == 'W') {
            playerScore++;
        } else if (whoWon.charAt(4) == 'L') {
            computerScore++;
        };
    }
    if (playerScore > computerScore) {
        console.log('Congratulations! You won the 5 rounds!');
    } else if (playerScore < computerScore) {
        console.log('Oh no! You just lost 5 rounds!');
    } else {
        console.log("It's a 5 rounds tie!");
    }
}

game();

