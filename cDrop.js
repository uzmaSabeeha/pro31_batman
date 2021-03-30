class cDrop{
    constructor(x,y){
        var op={
            restitution:0.1,
            friction:0.2
        }
        this.drop = Matter.Bodies.circle(x,y,5,op);
        this.radius = 5;
        Matter.World.add(world,this.drop)
    }

    display(){
        fill(rgb(161,198,204))
        ellipseMode(RADIUS)
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius)
    }

    updateYaxis(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400), y:random(0,400)})
        }
    }
}