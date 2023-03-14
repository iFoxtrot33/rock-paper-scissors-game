import crypto from "crypto";
import readlineSync from "readline-sync";

class Game {
  constructor(args) {
    this.args = args;
    this.key;
    this.HMAC;
    this.computerChoice = null;
  }

  validateArgs() {
    if (this.args.length < 3 || this.args.length % 2 === 0) {
      console.log(
        "Invalid number of arguments. Please provide at least 3 arguments and an odd number of arguments."
      );
      process.exit(1);
    }
    const set = new Set(this.args);
    if (set.size !== this.args.length) {
      console.log("Arguments must be unique.");
      process.exit(1);
    }
  }

  generateKey() {
    return crypto.randomBytes(32).toString("hex");
  }

  generateComputerChoice() {
    return Math.floor(Math.random() * this.args.length);
  }

  getHMAC(move) {
    const hmac = crypto.createHmac("sha256", this.key);
    hmac.update(move);
    return hmac.digest("hex");
  }

  play() {
    this.key = this.generateKey();
    this.computerChoice = this.generateComputerChoice();
    const hmac = this.getHMAC(this.args[this.computerChoice]);
    this.HMAC = hmac;
    console.log(`HMAC: ${this.key}`);
  }

  getUserChoice() {
    return readlineSync.question("Enter your move: ");
  }

  getComputerChoice() {
    return this.computerChoice;
  }
}

export default Game;
