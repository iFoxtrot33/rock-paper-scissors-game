import readlineSync from "readline-sync";
import {
  generateHMAC,
  generateMenu,
  simpleMenu,
  generateComputerMove,
  Game,
} from "../utils/index.js";

const startSimpleGame = (moves) => {
  const HMAC = generateHMAC();
  console.log(`HMAC: ${HMAC}`);
  generateMenu(moves);
  const playerSelection = readlineSync.question("Enter your move: ");
  console.log(`Your move: ${simpleMenu[playerSelection]}`);
  const computerSelection = generateComputerMove(moves.length);
  console.log(`Computer move: ${simpleMenu[computerSelection]}`);
  const game = new Game(simpleMenu);
  game.playRound(playerSelection, computerSelection);
};

export default startSimpleGame;
