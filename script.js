let humanScore = 0, computerScore = 0, roundCounter = 1;

function getComputerChoice() {
    let value = Math.ceil(Math.random() * 3);
    return (value === 1) ? "Rock" : (value === 2) ? "Paper" : "Scissors";
}

function getHumanChoice() {
    let choice = prompt(`Round: ${roundCounter}\nEnter your choice: (Rock, Paper or Scissors) `);
    return choice.at(0).toUpperCase().concat(choice.substring(1).toLowerCase());
}

function playRound(humanChoice, computerChoice) {
    console.log(`Round: ${roundCounter}`);
    if (humanChoice === computerChoice) { // tie in the round
        console.log("It's a tie...");
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper") { // human wins the round
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }
    else { // computer wins the round
        computerScore++;
        console.log(`Computer Win! ${computerChoice} beats ${humanChoice}`);
    }

}

function playGame() {
    while (roundCounter <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundCounter++;
    }
    console.log(`RESULT:\nYou: ${humanScore}\nComputer: ${computerScore}`);
    if (humanScore === computerScore) console.log("Game Tied...");
    else if (humanScore > computerScore) console.log("You Win!");
    else console.log("Computer Win!");
}

playGame();