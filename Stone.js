class Stone {
    constructor(x,y){
    
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50,50, options);
    this.width = 50;
      this.height = 50;
      
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
     // this.image = loadImage("sprites/bird.png");
    }

    
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var pos  = this.body.position;
      var angle = this.body.angle;
        push();
        rect(pos.x, pos.y, this.width, this.height);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        //imageMode(CENTER);
       //. image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  }



 