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

const playerSelection = "paPER";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);


