const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var raindrops = [];
var rand;
var thundercreatedAT=0;
var thunderSprite;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,500);
   // thunderSprite = createSprite(200,0,200,100)
    //thunderSprite.visible = false;
    umbrella = new Umbrella(200,300);
    if(frameCount % 200 === 0){
        for(var i=0; i<100; i++){
            raindrops.push(new cDrop(random(0,400),random(0,400)))
        }
    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    umbrella.display();
    for(i=0;i<100;i++){
        raindrops[i].display();
        raindrops[i].updateYaxis();
    }
    if(frameCount%100 === 0){
        thundercreatedAT = frameCount
        thunderSprite = createSprite(random(10,350), random(10,30), 10, 10);
        
        r = Math.round(random(1,4))
        switch(r){
            case 1: thunderSprite.addImage(thunder1);break;
            case 2: thunderSprite.addImage(thunder2);break;
            case 3: thunderSprite.addImage(thunder3);break;
            case 4: thunderSprite.addImage(thunder4);break;
        }
        thunderSprite.scale = random(0.3,0.6);
    }
    
    if(thundercreatedAT + 10 ===frameCount && thunderSprite ){
        thunderSprite.destroy();
    }

   drawSprites()
}   

