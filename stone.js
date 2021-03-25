class stone{
constructor(x,y,r){
    var options={
        isStatic: false,
        restitution:0,
        friction:1,
        density:0,
    }
    this.x=x;
	this.y=y;
	this.r=r
    this.image=loadImage("images/stone.png");
    this.body=Bodies.circle(this.x, this.y, this.r, options)
	World.add(world, this.body);
}
display(){
    //var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
     // rect(0,0,this.width,this.height)
      image(this.image, 230,410,this.r*2, this.r*2);
        pop();
}
}
