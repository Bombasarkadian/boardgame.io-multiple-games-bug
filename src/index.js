import React from 'react';
import ReactDOM from "react-dom";
import { Lobby } from "boardgame.io/react";
import { Game1 } from './Game1';
import { Game2 } from './Game2';
import Board from './Board';

const games = [
  { game: Game1, board: Board },
  { game: Game2, board: Board }
];

ReactDOM.render(
  <Lobby
    gameServer={`http://${window.location.hostname}:8000`}
    lobbyServer={`http://${window.location.hostname}:8000`}
    gameComponents={games} />
  , document.getElementById('root')
);

