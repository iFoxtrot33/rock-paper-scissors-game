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
    this.rules = {
      rock: { beats: ["scissors", "lizard"], loses: ["paper", "spock"] },
      paper: { beats: ["rock", "spock"], loses: ["scissors", "lizard"] },
      scissors: { beats: ["paper", "lizard"], loses: ["rock", "spock"] },
      lizard: { beats: ["paper", "spock"], loses: ["rock", "scissors"] },
      spock: { beats: ["rock", "scissors"], loses: ["paper", "lizard"] },
    };
  }

  playRound(player, computer) {
    const playerSelection = this.simpleMenu[player];
    const computerSelection = this.simpleMenu[computer];
    if (playerSelection === computerSelection) {
      console.log("It's a draw!");
    } else {
      const result = this.rules[playerSelection].beats.includes(
        computerSelection
      )
        ? "You win!"
        : "You lose!";
      console.log(result);
    }
  }
}

export const generateComputerMove = (num) => {
  return Math.floor(Math.random() * num) + 1;
};
