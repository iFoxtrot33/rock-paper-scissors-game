class HelpTable {
  constructor(args) {
    this.args = args;
    this.table = [];
  }

  generateTable() {
    const n = this.args.length;
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        const offset = (j - i + n) % n;
        if (offset === 0) {
          row.push("Draw");
        } else if (offset <= n / 2) {
          row.push("Win");
        } else {
          row.push("Lose");
        }
      }
      this.table.push(row);
    }
  }

  printTable() {
    const header = ["", ...this.args];
    console.log(header.map((cell) => cell.padEnd(10)).join(""));
    for (let i = 0; i < this.args.length; i++) {
      console.log(
        `${this.args[i].padEnd(10)}${this.table[i]
          .map((cell) => cell.padEnd(10))
          .join("")}`
      );
    }
  }
}

export default HelpTable;
