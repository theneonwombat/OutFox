import Entity from "./entity"

class Fox extends Entity {
  constructor(options) {
    super(options);
    this.foxSprite = new Image();
    this.foxSprite.src = "../assets/sprites/cutefox.png";
    this.pos = [400, 300];
    this.box = [15, 24];
    this.frameIndex = 0;
    // this.walkDir = 'down';
    this.scale = 2;
    // this.tickCount = 0;
    // this.ticksPerFrame = 6;
    // this.frameLen = 7;
    
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.parseKeyDown = this.parseKeyDown.bind(this);
    this.parseKeyUp = this.parseKeyUp.bind(this);
    this.update = this.update.bind(this);
  }

  parseKeyUp(e) {
    if (e.keyCode === 87 || e.keyCode === 38) this.up = false;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = false;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = false;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = false;
  }

  parseKeyDown(e) {
    if (e.keyCode === 87 || e.keyCode === 38) this.up = true;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = true;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = true;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = true;
  }

  move(timeDelta) {
    let vel;
    let dx = 0;
    let dy = 0;
    
    if (this.up) dy += -1;
    if (this.left) dx += -1;
    if (this.down) dy += 1;
    if (this.right) dx += 1;
    
    const len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    const vect = [dx / len || 0, dy / len || 0];

    let delta = 2;

    vel = [vect[0] * delta, vect[1] * delta];

    if (vel[0] === 0 && vel[1] === 0) {
      this.walking = false;
    } else {
      if (!this.walking) this.frameIndex = 0;
      this.walking = true;
    }
  

    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = vel[0] * velocityScale,
      offsetY = vel[1] * velocityScale;

    const newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    // if (this.game.isOutOfBounds(newPos, this.box)) {
    //   const newPosX = [this.pos[0] + offsetX, this.pos[1]];
    //   const newPosY = [this.pos[0], this.pos[1] + offsetY];

    //   if (!this.game.isOutOfBounds(newPosX, this.box)) {
    //     this.pos = newPosX;
    //   }
    //   if (!this.game.isOutOfBounds(newPosY, this.box)) {
    //     this.pos = newPosY;
    //   }
    // } else {
      this.pos = newPos;
    // }
  }

  draw(ctx) {
    // this.setWalkDir();
    // if (this.walking) {
    //   this.drawFoxWalking(ctx);
    // } else {
    //   this.drawFoxStanding(ctx);
    // }
    ctx.drawImage(this.foxSprite, 9, 8, 15, 24, this.pos[0], this.pos[1], 15, 24);
  
    this.update();
  }

  // drawFoxWalking(ctx) {
  //   if (this.walkDir === 'down') {
  //     this.frameLen = WALK_DOWN.length;
  //     ctx.drawImage(this.foxSprite, WALK_DOWN[this.frameIndex], 30, 16, 24, this.pos[0], this.pos[1], 32, 48);
  //   } else if (this.walkDir === 'up') {
  //     this.frameLen = WALK_UP.length;
  //     ctx.drawImage(this.foxSprite, WALK_UP[this.frameIndex], 120, 17, 24, this.pos[0], this.pos[1], 34, 48);
  //   } else if (this.walkDir === 'right') {
  //     this.frameLen = WALK_SIDE.length;
  //     ctx.drawImage(this.foxSprite, WALK_SIDE[this.frameIndex], 120, 19, 24, this.pos[0], this.pos[1], 38, 48);
  //   } else if (this.walkDir === 'left') {
  //     this.frameLen = WALK_SIDE.length;
  //     ctx.drawImage(this.foxSprite, WALK_SIDE[this.frameIndex], 30, 19, 24, this.pos[0], this.pos[1], 38, 48);
  //   }
  // }

  drawFoxStanding(ctx) {
    if (this.walkDir === 'down') {
      ctx.drawImage(this.foxSprite, 33, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
    } else if (this.walkDir === 'up') {
      ctx.drawImage(this.foxSprite, 63, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
    } else if (this.walkDir === 'right') {
      ctx.drawImage(this.foxSprite, 331, 120, 19, 23, this.pos[0], this.pos[1], 38, 46);
    } else if (this.walkDir === 'left') {
      ctx.drawImage(this.foxSprite, 151, 0, 19, 23, this.pos[0], this.pos[1], 38, 46);
    }
  }

  setWalkDir() {
    if (this.down && !this.left && !this.right && !this.RIGHT) {
      if (this.walkDir !== 'down') this.frameIndex = 0;
      this.walkDir = 'down';
    } else if (!this.down && this.left && !this.right && !this.up) {
      if (this.walkDir !== 'left') this.frameIndex = 0;
      this.walkDir = 'left';
    } else if (!this.down && !this.left && this.right && !this.up) {
      if (this.walkDir !== 'right') this.frameIndex = 0;
      this.walkDir = 'right';
    } else if (!this.down && !this.left && !this.right && this.up) {
      if (this.walkDir !== 'up') this.frameIndex = 0;
      this.walkDir = 'up';
    }
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      // if (this.frameIndex < this.frameLen - 1) {
      //   this.frameIndex += 1;
      // } else {
      //   this.frameIndex = 0;
      // }
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Fox;