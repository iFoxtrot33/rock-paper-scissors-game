import GameRules from "../src/rules";

describe("GameRules class", () => {
  it("should return 'Computer wins!' when computer has a winning move", () => {
    const args = ["rock", "paper", "scissors"];
    const gameRules = new GameRules(args);
    const userChoice = 1; // paper
    const computerChoice = 2; // scissors
    expect(gameRules.getWinner(userChoice, computerChoice)).toBe(
      "Computer wins!"
    );
  });

  it("should return 'User wins!' when user has a winning move", () => {
    const args = ["rock", "paper", "scissors"];
    const gameRules = new GameRules(args);
    const userChoice = 0; // rock
    const computerChoice = 2; // scissors
    expect(gameRules.getWinner(userChoice, computerChoice)).toBe("User wins!");
  });
});
