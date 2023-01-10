const showResultContainer = document.getElementById("resultContainer");
const btn = document.querySelectorAll("button");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const computerScoreCounter = document.getElementById("computer-score");
const userScoreCounter = document.getElementById("user-score");
const resuldDisplay = document.getElementById("result");
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
let randomAnswer;

function getComputerChoice() {
  randomAnswer = Math.floor(Math.random() * choices.length);
  return choices[randomAnswer];
}

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    result = playRound(userChoice, computerChoice);
  });
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "You Lose! Paper beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    result = "You Win! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    result = "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore++;
    result = "You Win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result = "You Lose! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    result = "It's a draw!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    result = "It's a draw!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    result = "It's a draw";
  } else {
    result = "Please, input a valid entry";
  }

  if (computerScore === 5) {
    result = "Sorry! Try again!";
  } else if (userScore === 5) {
    result = "Hurray!!! You win!";
  }

  computerScoreCounter.innerHTML = "Computer Score: " + computerScore + " ";
  userScoreCounter.innerHTML = " " + "User Score: " + userScore;
  resuldDisplay.innerHTML = result;
}

showResultContainer.setAttribute(
  "style",
  "border: 2px black solid; background: pink; padding: 10px; font-size: 30px; font-weight: bold;"
);
