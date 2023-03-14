import Game from "../src/game.js";

describe("Game class", () => {
  it("should generate a key", () => {
    const game = new Game(["Rock", "Paper", "Scissors"]);
    expect(game.key).toBeTruthy();
  });

  it("should generate computer choice", () => {
    const game = new Game(["Rock", "Paper", "Scissors"]);
    expect(game.generateComputerChoice()).toBeGreaterThanOrEqual(0);
    expect(game.generateComputerChoice()).toBeLessThan(3);
  });

  it("should get HMAC for a move", () => {
    const game = new Game(["Rock", "Paper", "Scissors"]);
    expect(game.getHMAC("Rock")).toBeTruthy();
  });
});
