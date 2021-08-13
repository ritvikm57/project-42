var iss, spacecraft;
var hasDocked = false

function preload(){
  SpaceBG = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  S1 = loadImage("spacecraft1.png")
  S2 = loadImage("spacecraft2.png")
  S3 = loadImage("spacecraft3.png")
  S4 = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);

 iss = createSprite(330,130);
 iss.addImage(issImg)
 iss.scale = 0.45;

 spacecraft = createSprite(285,240);
 spacecraft.addImage(S1)
 spacecraft.scale = 0.1;
}

function draw() {
  background(SpaceBG);  
  if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-0.5,0.5);
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 1;
      spacecraft.addImage(S2)
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y + 1;
      spacecraft.addImage(S1)
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x + 1;
      spacecraft.addImage(S3)
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x - 1;
      spacecraft.addImage(S4)
    }

  }

  if(spacecraft.x>298 && spacecraft.x<302 && spacecraft.y>176 && spacecraft.y<180){
    spacecraft.x = 300
    spacecraft.y = 178
    hasDocked=true
    
  }
  if (spacecraft.x===300 && spacecraft.y===178){
    fill("white")
    textSize(25)
    text("DOCKED", 330,190)
  }

  drawSprites();
}