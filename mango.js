class Mango {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = loadImage("mango.png");
    this.body = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      options
    );
    World.add(world, this.body);
  }

  display() {
    var mangoPos = this.body.position;
    push();
    translate(mangoPos.x, mangoPos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  overlap(x2, y2, w2, h2) {
    var x1 = this.body.position.x;
    var y1 = this.body.position.y;
    var w1 = this.width;
    var h1 = this.height;

    // complete the function
    // return false if bodies do not overlap
  }
}
