import GameView from "./game_view";
import Game from './game';

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext('2d');
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const game = new Game();
  new GameView(game, ctx).start();
});