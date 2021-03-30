class Umbrella{
    constructor(x,y){
        var op={
            isStatic:true
        }
        this.image = loadImage("Walking_Frame/walking_1.png","Walking_Frame/walking_2.png","Walking_Frame/walking_3.png","Walking_Frame/walking_4.png","Walking_Frame/walking_5.png","Walking_Frame/walking_6.png","Walking_Frame/walking_7.png","Walking_Frame/walking_8.png")
        this.um = Matter.Bodies.circle(x,y,50,op);
        this.radius = 50;
        Matter.World.add(world,this.um)
    }

    display(){
        
        imageMode(CENTER)
        image(this.image,this.um.position.x,this.um.position.y+70,300,300)
    }

   
}