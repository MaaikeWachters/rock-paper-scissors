// TO DO:
// computer plays: random return of Rock, Paper Scissors
// player plays: choose Rock, Paper Scissors
// compare computer & player input: rock beats scissors, paper beats rock, scissors beats paper
// show winner
// reset & play again

let computerPlay = document.getElementById("computer-play");
let computerResult = document.getElementById("computer-result");
let playerPlay = document.getElementById("player-play");

let computerOptions = ["Rock", "Paper", "Scissors"];

computerPlay.addEventListener("click", function () {
  let getRandomPlay = "";
  let randomIndex = Math.floor(Math.random() * computerOptions.length);
  getRandomPlay = computerOptions[randomIndex];
  computerResult.innerHTML = getRandomPlay;
});

playerPlay.addEventListener("click", function () {
  let playerChoice = document.getElementsByName("player");
  for (let i = 0; i < playerChoice.length; i++) {
    if (playerChoice[i].checked)
      document.getElementById("players-choice").innerHTML =
        playerChoice[i].value;
  }
});


