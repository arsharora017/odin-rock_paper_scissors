const choices = ["rock", "paper", "scissors"];
let randomAnswer;

function getComputerChoice() {
  randomAnswer = Math.floor(Math.random() * choices.length);
  return choices[randomAnswer];
}

// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log(button.id);
//   });
// });

let player;
let computer;
let playerScore = 0;
let computerScore = 0;

//function game() {
//for (let i = 0; i < 5; i++) {
//player = prompt();
//player = "rock"; //manually entering answers for now.
//computer = getComputerChoice();
// Calling playRound() function before delaring the playRound() function
//if we call it after declaring the function, we need to write extra code
//to assign values to variables player and computer
//console.log(playRound(player, computer));
//}
//}

//added event listener to all buttons
//used forEach() to iterate through all buttons
const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", function () {
    //console.log("clicked");
    player = button.id;
    console.log(player);
    computer = getComputerChoice();
    console.log(playRound(player, computer));
  });
});

//game();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore = computerScore + 1;
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore = playerScore + 1;
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore = playerScore + 1;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore = playerScore + 1;
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore = computerScore + 1;
    return "You Lose! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore = computerScore + 1;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a draw";
  } else {
    return "Please, input a valid entry";
  }
}

if (playerScore > computerScore) {
  //alert("You are a champian");
  console.log("You are a champian"); //logging to avoid alerts
} else if (playerScore > computerScore) {
  //alert("Better luck next time!");
  console.log("Better luck next time!"); //logging to avoid alerts
}
