"use strict";
//get a random pick from the array.
function computerPlay() {
  const arr = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
}
//setup the score
let p_score = 0;
let c_score = 0;

//setup the input from user and computer
const playerSelection = "";

//play a single round
function playRound(playerSelection, computerSelection) {
  let playerInput = prompt("Enter rock, paper or scissors!");

  console.log(`player = ${playerInput}`);
  console.log(`computer = ${computerSelection}`);

  //player wins
  if (
    (playerInput.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerInput.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerInput.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    p_score++;

    document.querySelector(".p_player").textContent = p_score;
    console.log(`YAY you win! ${playerInput} beats ${computerSelection}`);

    //computer wins
  } else if (
    (computerSelection.toLowerCase() === "rock" &&
      playerInput.toLowerCase() === "scissors") ||
    (computerSelection.toLowerCase() === "paper" &&
      playerInput.toLowerCase() === "rock") ||
    (computerSelection.toLowerCase() === "scissors" &&
      playerInput.toLowerCase() === "paper")
  ) {
    c_score++;

    document.querySelector(".p_computer").textContent = c_score;
    console.log(`SORRY!! you lost! ${computerSelection} beats ${playerInput}`);

    //if is a drae
  } else if (
    computerSelection.toLowerCase() === playerInput.toLowerCase() ||
    playerInput.toLowerCase() === computerSelection.toLowerCase()
  ) {
    console.log(`ITS DRAW!!!`);

    //if the input is not respected
  } else {
    console.log("invalid input");
  }
}

// loop running when the buton is pressed.
document.querySelector(".btn").addEventListener("click", function () {
  //play a 5 rounds game
  function game() {
    for (let i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);

      p_score > c_score
        ? (document.querySelector(".winner").textContent = "You won!!! 🎉🎉🎉")
        : (document.querySelector(".winner").textContent =
            "You lost!! Muhahahaha 🐱‍👤🐱‍👤🐱‍👤");
    }
  }
  game();
});
