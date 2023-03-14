import GameApp from "./src/gameApp.js";

const gameApp = new GameApp(process.argv.slice(2));
gameApp.start();
