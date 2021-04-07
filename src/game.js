import Fox from './fox'

class Game {
    constructor(options) {
        this.fox = new Fox({ game: this });
    }
    
    step(delta) {
        this.fox.move(delta);
    }
    
    draw(ctx) {
    
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        
        ctx.fillStyle = "#489847";
        // ctx.fillRect(158, 90, 162, 202);
        // ctx.fillRect(158, 367, 162, 202);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 28, 340, 32, 32);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 28, 305, 32, 32);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 1005, 340, 32, 32);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 1005, 305, 32, 32);
        this.fox.draw(ctx)
    }
}
    
    
Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.FPS = 32;

export default Game;