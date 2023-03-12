import crypto from "crypto";

export const simpleMenu = {
  1: "rock",
  2: "paper",
  3: "scissors",
  0: "exit",
  "?": "help",
};

export const complexMenu = {
  1: "rock",
  2: "paper",
  3: "scissors",
  4: "lizard",
  5: "Spock",
  0: "exit",
  "?": "help",
};

export const generateHMAC = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const generateMenu = (moves) => {
  console.log("Available moves:");
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log("0 - exit");
  console.log("? - help");
};

export class Game {
  constructor(simpleMenu) {
    this.simpleMenu = simpleMenu;
  }

  playRound(player, computer) {
    const playerSelection = this.simpleMenu[player];
    const computerSelection = this.simpleMenu[computer];
    if (playerSelection === computerSelection) {
      console.log("It's a draw!");
    } else {
      switch (playerSelection) {
        case "rock":
          if (
            computerSelection === "scissors" ||
            computerSelection === "lizard"
          ) {
            console.log("You win!");
          } else {
            console.log("You lose!");
          }
          break;
        case "paper":
          if (computerSelection === "rock" || computerSelection === "spock") {
            console.log("You win!");
          } else {
            console.log("You lose!");
          }
          break;
        case "scissors":
          if (computerSelection === "paper" || computerSelection === "lizard") {
            console.log("You win!");
          } else {
            console.log("You lose!");
          }
          break;
        case "lizard":
          if (computerSelection === "paper" || computerSelection === "spock") {
            console.log("You win!");
          } else {
            console.log("You lose!");
          }
          break;
        case "Spock":
          if (
            computerSelection === "rock" ||
            computerSelection === "scissors"
          ) {
            console.log("You win!");
          } else {
            console.log("You lose!");
          }
          break;
        default:
          console.log("Invalid selection!");
      }
    }
  }
}

export const generateComputerMove = (num) => {
  return Math.floor(Math.random() * num) + 1;
};
