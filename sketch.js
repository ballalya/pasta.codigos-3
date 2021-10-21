var player;

function setup(){
createCanvas(600,409);

player=createSprite(200,200,30,30);

player.shapeColor="black";

}

function draw(){
background('white');

if(keyIsDown(UP_ARROW)){
    player.position.y=player.position.y-5;
}

if(keyIsDown(DOWN_ARROW)){
    player.position.y=player.position.y+5;
}

if(keyIsDown(LEFT_ARROW)){
    player.position.x=player.position.x-5;
}

if(keyIsDown(RIGHT_ARROW)){
    player.position.x=player.position.x+5;
}

drawSprites();
}

