const { Server } = require("boardgame.io/server");
const { Game1 } = require("./Game1");
const { Game2 } = require("./Game2");

const server = Server({
  games: [Game1, Game2],
});

server.run(8000);
