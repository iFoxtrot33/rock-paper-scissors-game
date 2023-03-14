import Game from "./game.js";
import HelpTable from "./help.js";
import GameRules from "./rules.js";
import readlineSync from "readline-sync";

class GameApp {
  constructor(args) {
    this.args = args;
    this.game = new Game(args);
    this.helpTable = new HelpTable(args);
    this.gameRules = new GameRules(args);
  }

  start() {
    this.game.validateArgs();
    this.helpTable.generateTable();
    const menu = [
      ...this.args.map((arg, i) => `${i + 1} - ${arg}`),
      "0 - Exit",
      "? - Help",
    ];
    while (true) {
      console.log("\n");
      this.game.play();
      console.log("Available moves:");
      menu.forEach((option) => console.log(option));
      const userChoice = readlineSync.question("Enter your move: ");
      if (userChoice === "0") {
        console.log("Goodbye!");
        process.exit(0);
      } else if (userChoice === "?") {
        this.helpTable.printTable();
      } else if (
        !isNaN(userChoice) &&
        parseInt(userChoice) > 0 &&
        parseInt(userChoice) <= this.args.length
      ) {
        const userMove = this.args[userChoice - 1];
        console.log(`Your move: ${userMove}`);
        console.log(
          `Computer move: ${this.args[this.game.getComputerChoice()]}`
        );
        const winner = this.gameRules.getWinner(
          userChoice - 1,
          this.game.getComputerChoice()
        );
        console.log(`${winner}`);
        console.log(`HMAC key: ${this.game.key}`);
      } else {
        console.log("Invalid input. Please enter a valid choice.");
      }
    }
  }
}

export default GameApp;
