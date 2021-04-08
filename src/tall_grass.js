import Entity from "./entity"

class TallGrass extends Entity {
  constructor(options) {
    super(options);
    this.grasspatch = new Image();
    // this.grasspatch.src = 'tall-grass';
    this.box = [100, 100];

    this.draw = this.draw.bind(this);
    console.log(this.grasspatch);
  }

  draw(ctx) {
    // ctx.drawImage(this.grasspatch, this.pos[0], this.pos[1]);
    ctx.beginPath();
    ctx.moveTo(this.pos[0],this.pos[1]);
    ctx.lineTo(this.pos[0] + this.box[0],this.pos[1]);
    ctx.lineTo(this.pos[0] + this.box[0],this.pos[1] + this.box[1]);
    ctx.lineTo(this.pos[0], this.pos[1] + this.box[1]);
    ctx.lineTo(this.pos[0],this.pos[1]);
    ctx.fillStyle = 'blue';
    ctx.fill();  
  }
}

export default TallGrass; 