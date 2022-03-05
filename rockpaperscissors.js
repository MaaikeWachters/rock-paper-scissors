// TO DO:
// computer plays: random return of Rock, Paper Scissors
// player plays: choose Rock, Paper Scissors
// compare computer & player input: rock beats scissors, paper beats rock, scissors beats paper
// show winner
// reset & play again

let computerPlayBtn = document.getElementById("computer-play");
let computerResult = document.getElementById("computer-result");
let computerChoice = "";
let computerOptions = ["Rock", "Paper", "Scissors"];

let playerPlayBtn = document.getElementById("player-play");
let playerChoice = "";

let winnerDeclaration = document.getElementById("winner");

function getComputerPlay() {
  let randomIndex = Math.floor(Math.random() * computerOptions.length);
  computerChoice = computerOptions[randomIndex];
  computerResult.innerHTML = computerChoice;
}

function getPlayerPlay() {
  let ele = document.getElementsByName("player");
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      document.getElementById("players-choice").innerHTML = ele[i].value;
      playerChoice = ele[i].value;
    }
  }
}

playerPlayBtn.addEventListener("click", function () {
  getPlayerPlay();
});

computerPlayBtn.addEventListener("click", function () {
  getComputerPlay();
  displayWinner();
});

function displayWinner() {
  if (computerChoice === playerChoice) {
    winnerDeclaration.innerHTML = "It's a tie";
  } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
    winnerDeclaration.innerHTML = "Computer";
  } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
    winnerDeclaration.innerHTML = "YOU";
  } else if (computerChoice === "Rock" && playerChoice === "Paper") {
    winnerDeclaration.innerHTML = "YOU";
  } else if (computerChoice === "Paper" && playerChoice === "Rock") {
    winnerDeclaration.innerHTML = "Computer";
  } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
    winnerDeclaration.innerHTML = "Computer";
  } else {
    winnerDeclaration.innerHTML = "YOU";
  }
}
