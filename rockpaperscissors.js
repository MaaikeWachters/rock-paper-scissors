let computerPlayBtn = document.getElementById("computer-play");
let computerResult = document.getElementById("computer-result");
let computerChoice = "";
let computerOptions = ["Rock", "Paper", "Scissors"];

let playerPlayBtn = document.getElementById("player-play");
let playerChoice = "";

let computerReady = false;

let winnerDeclaration = document.getElementById("winner");

function getComputerPlay() {
  if (computerReady === true) {
    let randomIndex = Math.floor(Math.random() * computerOptions.length);
    computerChoice = computerOptions[randomIndex];

    if (computerChoice === "Rock") {
      computerResult.innerHTML = `<h2>Computer played:</h2>
            <div>
              <i class="fa-solid fa-hand-back-fist fa-7x computer-played-color"></i></div>   
            <div class="computer-played">
              ${computerChoice}</div>
            </div>
        `;
    } else if (computerChoice === "Paper") {
      computerResult.innerHTML = `<h2>Computer played:</h2>
            <div>
              <i class="fa-solid fa-hand fa-7x secondary-color"></i></div>   
            <div class="computer-played">
              ${computerChoice}</div>
            </div>
        `;
    } else {
      computerResult.innerHTML = `<h2>Computer played:</h2>
            <div>
              <i class="fa-solid fa-hand-scissors fa-7x"></i></div>   
            <div class="computer-played">
              ${computerChoice}</div>
            </div>
        `;
    }
  } else {
    let alertMessage = document.getElementById("alert-message");
    alertMessage.innerHTML = `<div class="alert">
 
 <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  You need to play first!</div>`;
  }
}

function getPlayerPlay() {
  let player = document.getElementsByName("player");
  for (let i = 0; i < player.length; i++) {
    if (player[i].checked) {
      if (player[i].value === "Rock") {
        playerChoice = player[i].value;
        document.getElementById(
          "players-choice"
        ).innerHTML = `<h2>You played:</h2>
            <div>
              <i class="fa-solid fa-hand-back-fist fa-7x primary-color"></i></div>   
            <div class="player-played">
              ${player[i].value}</div>
            </div>
        `;
      } else if (player[i].value === "Paper") {
        playerChoice = player[i].value;
        document.getElementById(
          "players-choice"
        ).innerHTML = `<h2>You played:</h2>

          
            <div>
              <i class="fa-solid fa-hand fa-7x primary-color"></i></div>   
            <div class="player-played">
              ${player[i].value}</div>
            </div>
        `;
      } else {
        playerChoice = player[i].value;
        document.getElementById(
          "players-choice"
        ).innerHTML = `<h2>You played:</h2>

       
            <div>
              <i class="fa-solid fa-hand-scissors fa-7x primary-color"></i></div>   
            <div class="player-played">
              ${player[i].value}</div>
            </div>
        `;
      }
    }
  }
}

playerPlayBtn.addEventListener("click", function () {
  computerReady = true;
  getPlayerPlay();
});

computerPlayBtn.addEventListener("click", function () {
  getComputerPlay();
  displayWinner();
});

let messageTie = `<h4><span class="primary-color">It's</span> <span class="secondary-color">a</span> <span class="primary-color">tie</span><span class="secondary-color">!</span></h1>`;
let messageComputerWon = `<h4>Winner: <span class="secondary-color">Computer</span></h4>`;
let messageYouWon = `<h4>Winner: <span class="primary-color">You</span></h4>`;
let resetButton = ` <div>
        <button class="reset-button" value="reload" onclick="window.location.reload();">
          Reset game & play again
        </button>
      </div>`;

function displayWinner() {
  setTimeout(function () {
    if (computerChoice === "" || playerChoice === "") {
    } else if (computerChoice === playerChoice) {
      winnerDeclaration.innerHTML = messageTie + resetButton;
    } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
      winnerDeclaration.innerHTML = messageComputerWon + resetButton;
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
      winnerDeclaration.innerHTML = messageYouWon + resetButton;
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
      winnerDeclaration.innerHTML = messageYouWon + resetButton;
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
      winnerDeclaration.innerHTML = messageComputerWon + resetButton;
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
      winnerDeclaration.innerHTML = messageComputerWon + resetButton;
    } else {
      winnerDeclaration.innerHTML = messageYouWon + resetButton;
    }
  }, 1000);
}
