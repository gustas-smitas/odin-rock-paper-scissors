let humanScore = 0;
let computerScore = 0;

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const getComputerChoice = function () {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1) {
    return "rock";
  }
  if (computerChoice === 2) {
    return "paper";
  }
  if (computerChoice === 3) {
    return "scissors";
  }
};

const getHumanChoice = function () {
  return prompt("Write your choice: rock, paper or scissors");
};

function playGame() {
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else {
      const result =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
          ? "Win"
          : "Lose";

      if (result === "Win") {
        console.log(
          `You win! ${capitalize(humanChoice)} beats ${capitalize(
            computerChoice
          )}`
        );
        humanScore++;
      } else {
        console.log(
          `You lose! ${capitalize(computerChoice)} beats ${capitalize(
            humanChoice
          )}`
        );
        computerScore++;
      }
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`---ROUND ${i}---`);
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`You pick "${capitalize(humanSelection)}", Computer picks "${capitalize(computerSelection)}"`);

    playRound(humanSelection, computerSelection);

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
  }

  console.log("---FINAL RESULT---");
  
  if (humanScore > computerScore) {
    console.log("🏆 You win the game!");
  } else if (humanScore < computerScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It ends in a tie!");
    
  }
}

playGame();
