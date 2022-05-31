
var background, backgroundImage;
var Menubackground, MenubackgroundImage;
var gameState = "menu"; 
var button, buttonImage;
var button2, button2Image;
var button3, button3Image;
var player, playerImage;



function preload(){
backgroundImage = loadImage("Images/forest.jpg");
MenubackgroundImage = loadImage("Images/Menu.jpg");
buttonImage = loadImage("Images/starts.png");
button3Image = loadImage("Images/opciones-removebg-preview.png")
playerImage = loadAnimation("Images/U4L1_CAMINANDO-original.webp")
}

function setup(){
createCanvas (windowWidth, windowHeight);
textFont("Viner Hand ITC");
fill("black");
textSize(30);
strokeWeight (2.5); 
stroke("white");

button = createSprite(displayWidth/2 , displayHeight/2 - 10);
button.addImage(buttonImage);
button.scale = 0.3;
button.visible = true;

button2 = createSprite(displayWidth/2-100 , displayHeight/2 - 10);
button2.addImage(buttonImage);
button2.scale = 0.3;


button3 = createSprite(displayWidth/2+100 , displayHeight/2 - 10);
button3.addImage(button3Image);
button3.scale = 0.3;

player = createSprite(200,550);
player.addAnimation("walking", playerImage);

}

function draw(){
background (backgroundImage);

if(gameState == "inicio"){
    background(MenubackgroundImage)
    
    text("Iniciar juego", displayWidth/2 - 100, displayHeight/2 - 80);
    
    textFont("Viner Hand ITC");
    fill("black");
    textSize(100);
    strokeWeight (2.5); 
    stroke("white");
    text("Dark Vessels", displayWidth/2 - 300, displayHeight/2 - 250);
     
}

  if(gameState === "menu"){
    background(MenubackgroundImage)
    text("Menú", displayWidth/2 - 60, displayHeight/2 - 250);
    button.destroy(); 
    button3.visible = true;
    button2.visible = true;
    player.visible = false;
    
    }
    if(gameState === "play"){
      background(backgroundImage)
      button2.destroy();
      button3.destroy(); 
      player.visible = true;
    }
    if(gameState === "options"){
      background(MenubackgroundImage)
     player.visible = false;
    }           
    menu ();
    play();
    options();
drawSprites();

}


function menu(){
    if(mousePressedOver(button)) {
        background(MenubackgroundImage)
        gameState = "menu";
       
      }
}
function play(){
  if(mousePressedOver(button2)) {
      background(backgroundImage)
      gameState = "play";
    }
}
function options(){
  if(mousePressedOver(button3)) {
      background(MenubackgroundImage)
      gameState = "options";
     
    }
}