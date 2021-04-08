import Entity from "./entity"

class Chicken extends Entity {
  constructor(options) {
    super(options);
    this.chickenSprite = new Image();
    this.chickenSprite.src = '../assets/sprites/chickens.png'
    this.box = [12, 12];

    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    ctx.drawImage(this.chickenSprite, 33, 17, 48, 48, this.pos[0], this.pos[1], 30, 30);
    this.update();
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
    }
  }

}

export default Chicken; 