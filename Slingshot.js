class Slingshot{
    constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10,
    }
   // this.pointB = pointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
    }


    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
       // var pointB = this.pointB;
        strokeweight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}