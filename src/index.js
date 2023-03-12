import startSimpleGame from "./games/simpleGame.js";
import startComplexGame from "./games/complexGame.js";

const args = process.argv.slice(2);

const startGame = (args) => {
  if (args.length === 3) {
    startSimpleGame(args);
    return;
  } else if (args.length === 5) {
    startComplexGame(args);
  } else {
    console.log(
      "Please try again. You have two options to start a game:\nrock paper scissors\nrock paper scissors lizard Spock"
    );
  }
};

startGame(args);

export default startGame;
