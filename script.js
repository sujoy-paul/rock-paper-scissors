let humanScore = 0, computerScore = 0;

const buttons = document.querySelector("#buttons");
const scores = document.querySelector("#scores");
const result = document.querySelector("#result");
const humanScoreNumber = document.querySelector("#human-score .number");
const computerScoreNumber = document.querySelector("#computer-score .number");

function getComputerChoice() {
    let value = Math.ceil(Math.random() * 3);
    return (value === 1) ? "Rock" : (value === 2) ? "Paper" : "Scissors";
}
function updateScores(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { // tie in the round
        result.textContent = "It's a tie...";
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper") { // human wins the round
        humanScore++;
        result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    }
    else { // computer wins the round
        computerScore++;
        result.textContent = `Computer Wins! ${computerChoice} beats ${humanChoice}`;
    }
    humanScoreNumber.textContent = `${humanScore}`;
    computerScoreNumber.textContent = `${computerScore}`;
}
function endGame() {
    buttons.hidden = true;
    const winner = (humanScore === 5) ? "You win" : "Computer wins";
    const loserScore = (humanScore === 5) ? computerScore : humanScore;
    result.textContent = `${winner} the game 5-${loserScore}`;
}
function playRound(event) {
    if (event.target.tagName === "BUTTON") {
        updateScores(event.target.id, getComputerChoice());
        if (humanScore === 5 || computerScore === 5) {
            endGame();
        }
    }
}

buttons.addEventListener("click", playRound);
