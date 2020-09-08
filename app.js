let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreboardDiv = document.querySelector(".score-board");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else if (letter === "s") {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore += 1;
  userScoreSpan.innerHTML = userScore;

  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 400);

  resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore += 1;
  computerScoreSpan.innerHTML = computerScore;

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 400);

  resultP.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(
    userChoice
  )}. You lose!`;
}

function draw() {
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 400);

  resultP.innerHTML = `It's a Draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw();
      break;
  }
}

function main() {
  rockDiv.addEventListener("click", () => game("r"));

  paperDiv.addEventListener("click", () => game("p"));

  scissorsDiv.addEventListener("click", () => game("s"));
}

main();
