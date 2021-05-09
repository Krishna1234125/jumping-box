var canvas;
var music;
var box1,box2,box3,box4,box5;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(93.5,576,187,10);
    box1.shapeColor = rgb(0,0,55);
    box2 = createSprite(293.5,576,176,10);
    box2.shapeColor = rgb(0,255,0);
    box3 = createSprite(493.5,576,177,10);
    box3.shapeColor = rgb(15,87,90);
    box4 = createSprite(693.5,576,177,10);
    box4.shapeColor = rgb(28,81,57);

    box5 = createSprite(random(20,750),100,38,38);           
    box5.shapeColor = rgb(255,254,255);
    box5.velocityX=5;
    box5.velocityY=-3;
     
   



    
}

function draw() {
    background(rgb(169,169,169));
    edges= createEdgeSprites();
    box5.bounceOff (edges);
    //box5.bounceOff (box1);
    //box5.bounceOff (box2);
   // box5.bounceOff (box3);
   // box5.bounceOff (box4);

    if (box5.isTouching(box1)){
        box5.shapeColor = rgb(0,0,55);
        music.play();
        
    }

    else if (box5.isTouching(box2)){
        box5.shapeColor = rgb(0,255,0);
        box5.velocityX=0;
        box5.velocityY=0;

        music.stop();
    }

    else if (box5.isTouching(box3)){
        box5.shapeColor = rgb(15,87,90);
    }

    else if (box5.isTouching(box4)){
        box5.shapeColor = rgb(28,81,57);
    }








    
    
    




    




    drawSprites();
}