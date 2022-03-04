// TO DO:
// computer plays: random return of Rock, Paper Scissors
// player plays: choose Rock, Paper Scissors
// compare computer & player input: rock beats scissors, paper beats rock, scissors beats paper
// show winner
// reset & play again

let computerPlay = document.getElementById("computer-play");

let playerInput = "rock";

let computerOptions = ["Rock", "Paper", "Scissors"];

computerPlay.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomIndex];
});

