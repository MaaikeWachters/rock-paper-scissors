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
  let player = document.getElementsByName("player");
  for (let i = 0; i < player.length; i++) {
    if (player[i].checked) {
      document.getElementById("players-choice").innerHTML = player[i].value;
      playerChoice = player[i].value;
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
  setTimeout(function () {
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
  }, 1000);
}
