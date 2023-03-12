import readlineSync from "readline-sync";
import {
  generateHMAC,
  generateMenu,
  complexMenu,
  generateComputerMove,
  Game,
} from "../utils/index.js";

const startComplexGame = (moves) => {
  const HMAC = generateHMAC();
  console.log(`HMAC: ${HMAC}`);
  generateMenu(moves);
  const playerSelection = readlineSync.question("Enter your move: ");
  console.log(`Your move: ${complexMenu[playerSelection]}`);
  const computerSelection = generateComputerMove(moves.length);
  console.log(`Computer move: ${complexMenu[computerSelection]}`);
  const game = new Game(complexMenu);
  game.playRound(playerSelection, computerSelection);
};

export default startComplexGame;
