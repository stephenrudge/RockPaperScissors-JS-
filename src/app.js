const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let userChoice;
let computerChoice;
let result;
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }

  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Sissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Win!";
  }
  if (computerChoice === "Rock" && userChoice === "Sissors") {
    result = "You Lost!";
  }
  if (computerChoice === "Paper" && userChoice === "Sissors") {
    result = "You Win!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lost!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Win!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Lost!";
  }
  resultDisplay.innerHTML = result;
}
