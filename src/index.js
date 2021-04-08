import GameView from "./game_view";
import Game from './game';

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext('2d');
  canvasEl.width = 800;
  canvasEl.height = 500;

  const game = new Game({
    width: canvasEl.width, 
    height: canvasEl.height,
  });
  new GameView(game, ctx).start();
});