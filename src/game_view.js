const Game = require('./game.js');

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.animate = this.animate.bind(this);
    this.fox = this.game.fox;
    this.width = game.width;
    this.height = game.height;
  }

  bindKeyHandlers() {
    document.addEventListener('keydown', this.fox.parseKeyDown);
    document.addEventListener('keyup', this.fox.parseKeyUp);
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate);
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    
    this.lastTime = time;

    requestAnimationFrame(this.animate);
    //requestAnimationFrame invokes with time
  }

  newGame() {
    this.game = new Game();
    this.fox = this.game.fox;
    this.start();
  }

}

export default GameView;