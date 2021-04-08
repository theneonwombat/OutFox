import Entity from "./entity"

//starting x
const WALK_DOWN = [9, 41, 73, 105]
const WALK_RIGHT = [3, 34, 67, 98]
const WALK_UP = [9, 41, 73, 105]
const WALK_LEFT = [4, 36, 68, 100]

const SIT_DOWN = [9, 41, 73, 148]
// ctx.drawImage(this.foxSprite, SIT_DOWN[this.frameIndex], 138, 15, 22, this.pos[0], this.pos[1], 30, 44);

class Fox extends Entity {
  constructor(options) {
    super(options);
    this.foxSprite = new Image();
    this.foxSprite.src = "../assets/sprites/cutefox.png";
    this.pos = [400, 300];
    this.box = [15, 24];
    this.frameIndex = 0;
    this.walkDir = 'down';
    this.scale = 2;
    this.tickCount = 0;
    this.ticksPerFrame = 5;
    this.frameLen = 4;
    this.life = 100;
    this.attacking = false;
    
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.parseKeyDown = this.parseKeyDown.bind(this);
    this.parseKeyUp = this.parseKeyUp.bind(this);
    this.update = this.update.bind(this);
  }

  parseKeyUp(e) {
    if (e.keyCode === 16) this.stelth = false;
    if (e.keyCode === 87 || e.keyCode === 38) this.up = false;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = false;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = false;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = false;
  }

  parseKeyDown(e) {
    // if (e.keyCode === 32) this.attack();
    if (e.keyCode === 16) this.stelth = true;
    if (e.keyCode === 87 || e.keyCode === 38) this.up = true;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = true;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = true;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = true;
  }

  move(timeDelta) {
    let velocity;
    let dx = 0;
    let dy = 0;
    
    if (this.up && this.pos[1] > 10) dy += -1;
    if (this.left && this.pos[0] > 10) dx += -1;
    if (this.down && this.pos[1] < 442) dy += 1;
    if (this.right && this.pos[0] < 740) dx += 1;
    
    // vector calculation prevents disproportionate diagonal speed
    const length = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    const vector = [dx / length || 0, dy / length || 0];

    let delta = 5; //adjust movement speed here

    velocity = [vector[0] * delta, vector[1] * delta];

    if (velocity[0] === 0 && velocity[1] === 0) {
      this.walking = false;
    } else {
      if (!this.walking) this.frameIndex = 0;
      this.walking = true;
    }
  
    // for consistant movement speed regardless of coputer speed
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = velocity[0] * velocityScale,
      offsetY = velocity[1] * velocityScale;

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

  setWalkDir() {
    if (this.down && !this.left && !this.right && !this.left) {
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

  attack() {
    if (!this.attacking) {
      this.attacking = true;
      this.frameIndex = 0;
      this.ticksPerFrame = 2;

      if (this.walkDir === 'down') {
        this.createHurtBox({ pos: [this.x() - 10, this.y() + 25], box: [70, 40] });
      } else if (this.walkDir === 'up') {
        this.createHurtBox({ pos: [this.x() - 25, this.y() - 25], box: [70, 45] });
      } else if (this.walkDir === 'left') {
        this.createHurtBox({ pos: [this.x() - 30, this.y()], box: [40, 60] });
      } else if (this.walkDir === 'right') {
        this.createHurtBox({ pos: [this.x() + 25, this.y()], box: [40, 60] });
      }
    }
  }

  draw(ctx) {
    if (this.attacking) {
      this.drawAttack(ctx);
    } else {
      this.setWalkDir();
      if (this.walking) {
        this.drawFoxWalking(ctx);
      } else {
        this.drawFoxStanding(ctx);
      }
    }
    
    this.update();
  }

  drawFoxWalking(ctx) {
    if (this.walkDir === 'down') {
      this.frameLen = WALK_DOWN.length;
      ctx.drawImage(this.foxSprite, WALK_DOWN[this.frameIndex], 8, 15, 24, this.pos[0], this.pos[1], 30, 48);
    } else if (this.walkDir === 'up') {
      this.frameLen = WALK_UP.length;
      ctx.drawImage(this.foxSprite, WALK_UP[this.frameIndex], 70, 15, 26, this.pos[0], this.pos[1], 30, 52);
    } else if (this.walkDir === 'right') {
      this.frameLen = WALK_RIGHT.length;
      ctx.drawImage(this.foxSprite, WALK_RIGHT[this.frameIndex], 42, 25, 22, this.pos[0], this.pos[1], 50, 44);
    } else if (this.walkDir === 'left') {
      this.frameLen = WALK_LEFT.length;
      ctx.drawImage(this.foxSprite, WALK_LEFT[this.frameIndex], 106, 25, 22, this.pos[0], this.pos[1], 50, 44);
    }
  }

  drawFoxStanding(ctx) {
    if (this.walkDir === 'down') {
      ctx.drawImage(this.foxSprite, 9, 8, 15, 24, this.pos[0], this.pos[1], 30, 48);
    } else if (this.walkDir === 'up') {
      ctx.drawImage(this.foxSprite, 9, 70, 15, 26, this.pos[0], this.pos[1], 30, 52);
    } else if (this.walkDir === 'right') {
      ctx.drawImage(this.foxSprite, 3, 42, 25, 22, this.pos[0], this.pos[1], 50, 44);
    } else if (this.walkDir === 'left') {
      ctx.drawImage(this.foxSprite, 4, 106, 25, 22, this.pos[0], this.pos[1], 50, 44);
    }
  }

  update() {
    this.tickCount += 1;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frameLen - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Fox;