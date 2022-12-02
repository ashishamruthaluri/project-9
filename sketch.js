var ball;
function setup() {
  createCanvas(1000,1000)
 ball=createSprite(500,500,30,30)
}

function draw() 
{
  
if (keyIsDown(RIGHT_ARROW))
{
background("yellow")
}
if (keyIsDown(LEFT_ARROW))
{
background("red")
}
if(keyIsDown(UP_ARROW))
{
background("lightgreen")
}
if(keyIsDown(DOWN_ARROW))
{
background("darkblue")
}
drawSprites()
}




