import Fox from './fox'
import Chicken from './chicken'
import TallGrass from './tall_grass'

class Game {
    constructor(options) {
        this.gameHeight = options.height;
        this.gameWidth = options.width;
        this.topWall = 10;
        this.bottomWall = options.height -10;
        this.leftWall = 10;
        this.rightWall = options.width - 10;
        this.background = new Image();
        this.background.src = '../assets/backgrounds/field.png';
        this.fox = new Fox({  game: this });

        this.chickens = [new Chicken({ pos: [600,400], game: this })];
        this.grasspatch = new TallGrass({ pos: [100,100], game: this });
        // console.log(this.grasspatch);
    }

    addChicken(pos) {
        this.chickens.push(new Chicken({ pos, game: this }));
    }
    
    step(timeDelta) {
        this.fox.move(timeDelta);
    }

    draw(ctx) {
    
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        
        ctx.drawImage(this.background, 0, 0, this.gameWidth, this.gameHeight);
        this.grasspatch.draw(ctx);

        // ctx.fillRect(158, 90, 162, 202);
        // ctx.fillRect(158, 367, 162, 202);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 28, 340, 32, 32);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 28, 305, 32, 32);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 1005, 340, 32, 32);
        // ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 1005, 305, 32, 32);
        this.chickens.forEach( chicken => chicken.draw(ctx));
        this.fox.draw(ctx);
    }
}
    
Game.FPS = 32;

export default Game;