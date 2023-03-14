class GameRules {
  constructor(args) {
    this.args = args;
    this.rules = {};
    const n = args.length;
    const mid = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
      const key = args[i];
      const weaker = [];
      for (let j = i + 1; j < i + mid + 1; j++) {
        weaker.push(args[j % n]);
      }
      this.rules[key] = weaker;
    }
  }

  getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a Draw";
    }
    const userMove = this.args[userChoice];
    const computerMove = this.args[computerChoice];
    const weakerMoves = this.rules[userMove];
    if (weakerMoves.includes(computerMove)) {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
}

export default GameRules;
