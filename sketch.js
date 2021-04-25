var Druid;
var druididelanimation;
var druididerunanimation;
var druidjanimation;
var druidbaanimation;
var thro
var ground;
var ground2;
var levelpoint;
var steelaxe;
var strip,strip2,stripimage
var steelaxeimage;
var ground3;
var dknight;
var ground4;
var knightimage,kleft;
var dknightradiusright,dknightradiusleft;
var kl,kr;
var ground5;
var ground6;
var ground7,ground8,ground9,ground10,ground11;
var plate1;
var evar;
var jediof;
var bu1;
var buttonimage;
var part;
var enemy;
var sq1;
var zombieimage,zback;
var box,box2,box3;
var wall1,wall2,wall3;
var win;
var up;
var start,startimage,s1,s2,s3,s1image,s2image,s3image;
var spi
var sq2,sq3,sq4,sq5,sq6;
var spik
var d;
var bg;
var g;
var na,na2,na3,na4;
var firestone,firestone2,firestoneimage;
var kimage;
var night;
var hurt;
var box,boximage
var r
var base,base2,baseimage;
var lifeimage
var high,low,medium,semilow,semihigh
var life
var l;
var gameState="Start"

function preload(){
druididelanimation=loadAnimation("Idle__000.png","Idle__001.png","Idle__002.png","Idle__003.png","Idle__004.png","Idle__005.png","Idle__006.png","Idle__007.png","Idle__008.png","Idle__009.png")
  
  druididerunanimation=loadAnimation("Run__000.png","Run__001.png","Run__002.png","Run__003.png","Run__004.png","Run__005.png","Run__006.png","Run__007.png","Run__008.png","Run__009.png")
  
  druidjanimation=loadAnimation("Jump__000.png","Jump__001.png","Jump__002.png","Jump__003.png","Jump__004.png","Jump__005.png","Jump__006.png","Jump__007.png","Jump__008.png","Jump__009.png")
  
  druidbaanimation=loadAnimation("Run__000-1.png","Run__001-1.png","Run__002-1.png","Run__003-1.png","Run__004-1.png","Run__005-1.png","Run__006-1.png","Run__007-1.png","Run__008-1.png","Run__009-1.png")
  
  
  thro=loadAnimation("Throw__000.png","Throw__001.png","Throw__002.png","Throw__003.png","Throw__004.png","Throw__005.png","Throw__006.png","Throw__007.png","Throw__008.png","Throw__009.png")
  
zombieimage=loadAnimation("z1.png","z2.png","z3.png","z4.png","z5.png","z6.png","z7.png","z8.png","z9.png","z10.png")
  
  zback=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png","b9.png","b10.png")
  
  knightimage=loadAnimation("run_1.png","run_2.png","run_3.png","run_4.png","run_5.png","run_6.png")
  
  knleft=loadAnimation("k1.png","k2.png","k3.png","k4.png","k5.png","k6.png")
  
  night=loadImage("night.jpg");
  g=loadImage("brick.jpg");
  kimage=loadImage("Kunai.png");
  firestone=loadImage("rock.jpg")
  baseimage=loadImage("stone.png")
  up=loadImage("up.jpg")
  stone=loadImage("square.jpg")
  spink=loadImage("spin.jpg")
  high=loadImage("full.png");
  semihigh=loadImage("medium.png");
  s1image=loadImage("1.png");
  s2image=loadImage("2.png");
  s3image=loadImage("3.png")
  medium=loadImage("half.png");
  semilow=loadImage("low.png");
  low=loadImage("verylow.png");
  boximage=loadImage("box.png")
  part=loadImage("part.png")
  buttonimage=loadImage("button.png")
  steelaxeimage=loadImage("Steel_Axe-1.png");
  stripimage=loadImage("wall.jpg")
startimage=loadImage("play.png")
}



function setup() {
  createCanvas(1200,600);
  
 
  s1=createSprite(100,100);
  s1.addImage(s1image);
  s1.scale=0.4
  
    s2=createSprite(300,100);
  s2.addImage(s2image);
  s2.scale=0.4
  
      s3=createSprite(500,100);
  s3.addImage(s3image);
  s3.scale=0.4
  
   l=100;
  bg=createSprite(200,200,10,10);
  bg.addImage(night);
  bg.visible=false;
  bg.depth=0.1/5
  bg.scale=1.5
  
  levelpoint=0;
  
  jediof=createSprite(500,500,1000000000,5)
  jediof.depth=25
  
 Druid=createSprite(3500,200);
  Druid.scale=0.16
  Druid.addAnimation("idle",druididelanimation)
    Druid.addAnimation("run",druididerunanimation)
    Druid.addAnimation("jump",druidjanimation)
  Druid.addAnimation("back",druidbaanimation)
  Druid.addAnimation("th",thro)
  
  base=createSprite(3703,250);
  base.addImage(baseimage);
  
    base2=createSprite(4003,250);
  base2.addImage(baseimage);
  
      base3=createSprite(4303,250);
  base3.addImage(baseimage);
 
  
  ground=createSprite(200,600,400,10)
  ground.addImage(g)
  ground.scale=2
  ground.shapeColor="red"
  
    ground2=createSprite(860,600,400,10)
      ground2.addImage(g)
  ground2.scale=2
  ground2.shapeColor="red"
  
      ground6=createSprite(3484,600,400,10)
      ground6.addImage(g)
  ground6.scale=2
  ground6.shapeColor="red"
  
    ground3=createSprite(1500,600,400,10)
  ground3.addImage(g)
  ground3.scale=2
  ground3.shapeColor="red"
  
      ground4=createSprite(2584,600,300,10)
  ground4.addImage(g)
  ground4.scale=2
  ground4.shapeColor="red"
  
        ground5=createSprite(2984,600,300,10)
  ground5.addImage(g)
  ground5.scale=2
  ground5.shapeColor="red"
  
      ground7=createSprite(3984,600,400,10)
      ground7.addImage(g)
  ground7.scale=2
  ground7.shapeColor="red"
  
        ground8=createSprite(4484,600,400,10)
      ground8.addImage(g)
  ground8.scale=2
  ground8.shapeColor="red"
  
          ground9=createSprite(4884,600,400,10)
      ground9.addImage(g)
  ground9.scale=2
  ground9.shapeColor="red"
  
            ground9=createSprite(5284,600,400,10)
      ground9.addImage(g)
  ground9.scale=2
  ground9.shapeColor="red"
  
            ground10=createSprite(5684,600,400,10)
      ground10.addImage(g)
  ground10.scale=2
  ground10.shapeColor="red"
  
             win=createSprite(5684,400,50,50)
 win.scale=2
 win.shapeColor="red"
  
  
  plate2=createSprite(3000,200);
  plate2.scale=1.4
  plate2.addImage(up)
  
  plate1=createSprite(500,300);
  plate1.addImage(up)
  
  start=createSprite(600,300,100,100)
  start.addImage(startimage);
  start.shapeColor="red"
  
  d=createSprite(200,700,100000,10);
  d.shapeColor="red"
  
r=createSprite(200,200);
  r.shapeColor="yellow"
  r.visible=false;
  
  sq1=createSprite(400,450);
  sq1.scale=0.5
  sq1.depth=0.1/2
  sq1.addImage(stone);
  
  strip=createSprite(4780,20);
  strip.addImage(stripimage);
  
    sq3=createSprite(3100,450);
  sq3.scale=0.5
  sq3.depth=0.1/2
  sq3.addImage(stone);
  
      sq4=createSprite(3150,150);
  sq4.scale=0.5
  sq4.depth=0.1/2
  sq4.addImage(stone);
  
  spi=createSprite(1200,500);
//  spi.debug=true
  spi.addImage(spink);
  jediof.visible=false;
  
  box=createSprite(600,200);
  box.addImage(boximage)
  box.scale=0.5;
  
    box2=createSprite(2310,400);
  box2.addImage(boximage)
  box2.scale=0.5;
  
      box3=createSprite(2410,350);
  box3.addImage(boximage)
  box3.scale=0.5;
  
  wall1=createSprite(200,200,5,50);
  wall1.shapeColor="red"
  wall1.visible=false;
  
    wall2=createSprite(200,200,5,50);
  wall2.shapeColor="red"
  wall2.visible=false;
  
      wall3=createSprite(200,200,5,50);
  wall3.shapeColor="red"
  wall3.visible=false;
  
  enemy=createSprite(800,100,50,50);
  enemy.addAnimation("run",zombieimage)
   enemy.addAnimation("backz",zback)
  enemy.shapeColor="red"
  enemy.scale=0.22
  
    dknight=createSprite(2800,100,50,50);
  dknight.shapeColor="red"
  dknight.addAnimation("lmno",knleft)
  dknight.addAnimation("drun",knightimage)
  dknight.scale=3.0

  na=createSprite(400,500,5,1000)
  na.depth=1
  na.visible=false;
  
  sq2=createSprite(1785,450);
  sq2.addImage(stone);
    sq2.depth=0.1/2
  sq2.scale=0.5
  
    sq5=createSprite(3491.56,450);
  sq5.addImage(stone);
    sq5.depth=0.1/2
  sq5.scale=0.5
  
      sq6=createSprite(3491.56,355);
  sq6.addImage(stone);
    sq6.depth=0.1/2
  sq6.scale=0.5
  
  bu1=createSprite(3070,210);
  bu1.addImage(buttonimage)
  bu1.depth=0.1
  bu1.scale=0.4
  bu1.visible=false;
   evar=createSprite(0,0,400,10)
  evar.visible=false
     evar2=createSprite(0,0,400,10)
  evar2.visible=false;
  evar2.visible=false;
     kl=createSprite(0,0,400,400)
 kl.visible=false
     kr=createSprite(0,0,400,400)
 kr.visible=false;
       dknightradiusleft=createSprite(0,0,30,100)
dknightradiusleft.visible=false;
         dknightradiusright=createSprite(0,0,30,100)
dknightradiusright.visible=false;
dknight.debug=true;
  kgroup=new Group();
  steelaxegroup=new Group();
ew=new Group()
}

function draw() {
  background("black");
  evar.x=enemy.x+230;
  evar.y=enemy.y
    evar2.x=enemy.x-230;
  evar2.y=enemy.y
    dknightradiusright.x=dknight.x+50;
dknightradiusright.y=dknight.y
      dknightradiusleft.x=dknight.x-50;
dknightradiusleft.y=dknight.y
    kl.x=dknight.x+230;
  kl.y=dknight.y
    kr.x=dknight.x-230;
  kr.y=dknight.y;

  wall1.x=box.x+45;
  wall1.y=box.y
    wall2.x=box2.x+45;
  wall2.y=box2.y
    wall3.x=box3.x+45;
  wall3.y=box3.y
  Druid.collide(ground);
  Druid.collide(ground2);
  Druid.collide(ground3);
   Druid.collide(plate1)
  Druid.collide(sq1)
    kgroup.collide(sq1);
  box.collide(plate1);
  box.collide(ground);
  dknight.collide(ground4);
  dknight.collide(ground5);
  dknight.collide(sq2);
  dknight.collide(box2);
  dknight.collide(box3);
  dknight.collide(plate2);
  dknight.collide(sq5);
  dknight.collide(sq6)
  dknight.collide(sq3)
  kgroup.collide(strip);
  Druid.collide(strip)
  box.collide(ground2);
  kgroup.collide(sq5);
  Druid.collide(ground6)
  box.collide(ground3);
  Druid.collide(ground4)
  box3.collide(ground5);
  box2.collide(ground5)
  Druid.collide(ground5);
  Druid.collide(sq6);
  kgroup.collide(sq6)
  Druid.collide(sq4);
  Druid.collide(sq3)
  Druid.collide(ground7)
Druid.collide(box)
  Druid.collide(box2)
  Druid.collide(box3)
  Druid.collide(ground8)
    Druid.collide(sq5);
  box2.collide(ground4);
  box2.collide(box3);
  box3.collide(ground4);
  box3.collide(box2)
    kgroup.collide(plate1);
  Druid.collide(base);
  kgroup.collide(base);
  kgroup.collide(plate2);
  Druid.collide(ground10);
  Druid.collide(ground9)
  kgroup.collide(sq2);
  kgroup.collide(sq3);
  kgroup.collide(sq4);
  kgroup.collide(box)
  kgroup.collide(base2);
  Druid.collide(base2)
  box.collide(sq1)
   enemy.collide(ground);
  enemy.collide(ground2);
  dknight.collide(ground);
  dknight.collide(ground2);
  dknight.collide(ground3);
  dknight.collide(plate1);
  dknight.collide(sq2);
  dknight.collide(box);
  dknight.collide(sq1)
 enemy.collide(ground3);
  enemy.collide(box);
 enemy.collide(plate1);
  kgroup.collide(base3);
  Druid.collide(base3)
enemy.collide(sq1);
  enemy.collide(sq2);
  dknight.collide(sq3);
  dknight.collide(sq4);
  dknight.collide(box3);
 // dknight.collide(box4)
  dknight.collide(ground4);
  dknight.collide(ground5);
  dknight.collide(ground6);
  dknight.collide(ground7);
  dknight.collide(ground8);
  dknight.collide(ground9);
  dknight.collide(ground10);
  dknight.collide(plate2);
  Druid.collide(sq2);
  Druid.collide(plate2)
  
  
  if(gameState==="Start"){
  start.visible=true;
Druid.visible=false;
    ground.visible=false;
    s1.visible=false;
    s2.visible=false;
    s3.visible=false;
    plate1.visible=false;
    ground2.visible=false;
    bg.visible=false;
  enemy.visible=false;
    sq1.visible=false;
    ground3.visible=false;
    r.visible=false;
    win.visible=false;
    box.visible=false;
    spi.visible=false;
    if(mousePressedOver(start)&&gameState==="Start"){
      gameState="level"
    }

  }
  
  
  if(gameState==="level"){
    start.visible=false;
    s1.visible=true;
    s2.visible=true;
    s3.visible=true;
    if(mousePressedOver(s1)&&gameState==="level"){
gameState="play"
    }
  }

  
  if(gameState==="play"){
    Druid.visible=true;
    s1.visible=false;
    s2.visible=false;

    s3.visible=false;
    ground.visible=true;
    plate1.visible=true;
    ground2.visible=true;
    bg.visible=true;
  enemy.visible=true;
    sq1.visible=true;
    ground3.visible=true;
    r.visible=true;
    win.visible=true;
    box.visible=true;
    spi.visible=true;
    if(dknightradiusright.isTouching(sq4)){
dknight.velocityY=-12
    }
        if(dknightradiusleft.isTouching(sq5)){
dknight.velocityY=-32
    }
            if(dknightradiusright.isTouching(sq5)){
dknight.velocityY=-32
    }
            if(dknightradiusright.isTouching(sq2)){
dknight.velocityY=-52
              dknight.velocityX=30
    }
        if(dknightradiusleft.isTouching(sq3)){
dknight.velocityY=-12
    }
            if(dknightradiusright.isTouching(sq3)){
dknight.velocityY=-12
    }
        if(dknightradiusleft.isTouching(box3)){
dknight.velocityY=-12
    }
        if(dknight.isTouching(box2)){
dknight.velocityY=-42
    }
    //<
  //  if(frameCount%5===0){
   //   var rand = Math.round(random(1,6));
  //  switch(rand) {
  //    case 1: enemy.x=enemy.x+15
     //         break;
    //  case 2: enemy.x=enemy.x-20
    //          break;
    //  case 3: enemy.x=enemy.x+18
   //           break;
   //   case 4: enemy.x=enemy.x-15
   //           break;
    //  case 5: enemy.x=enemy.x-18
      //        break;
  //    case 6: enemy.x=enemy.x+20
       //       break;
  //    default: break;
   // }
  //  }
  //  if(Druid.x>=879){
    //  enemy.x=enemy.x+8
   //  / enemy.changeAnimation("run",zombieimage)
  // / }
  //  else if(Druid.x<878){
   //    enemy.changeAnimation("backz",zback)
//enemy.x=enemy.x-5
 //   }
  //  if(enemy.isTouching(sq2)){
  //    enemy.changeAnimation("backz",zback)
   //   enemy.velocityX=-15
   //   enemy.x=enemy.x-0.0001
 //   }
if(Druid.isTouching(evar)){
  enemy.velocityX=12
  enemy.changeAnimation("run",zombieimage);
}
    if(Druid.isTouching(evar2)){
  enemy.velocityX=-12
        enemy.changeAnimation("backz",zback);
}
 if(Druid.isTouching(kr)){
 dknight.velocityX=-12
 dknight.changeAnimation("lmno",knleft)

}
    if(Druid.isTouching(kl)){
 dknight.velocityX=12
        dknight.changeAnimation("drun",knightimage)
}
enemy.collide(sq2)
    
    
    //>
    //<
   
       box.velocityY = box.velocityY + 2
         box2.velocityY = box2.velocityY + 2
         box3.velocityY = box3.velocityY + 2
           enemy.velocityY = enemy.velocityY + 2
dknight.velocityY = dknight.velocityY + 2
kgroup.setLifetimeEach(2);
    //>
    if(Druid.collide(box)){
      box.x=box.x+5
    }
    if(Druid.collide(wall1)){
      box.x=box.x-10
    }
        if(Druid.collide(wall2)){
      box2.x=box.x2-10
    }
        if(Druid.collide(wall3)){
      box3.x=box3.x-10
    }

if(enemy.isTouching(Druid)){
  Druid.x=Druid.x-30
  l=l-10
}
if(dknight.isTouching(Druid)){
  Druid.x=Druid.x-30
  l=l-10
}

 // lifeimage.addImage(high)
    //<
    camera.x=Druid.x
    bg.visible=true;
    r.visible=false;
    Druid.visible=true;
    ground.visible=true;
    ground3.visible=true;
    ground2.visible=true;
    start.visible=false;
    plate1.visible=true;
    sq1.visible=true;
    spi.visible=true;
    enemy.visible = true
box.visible = true 
    //>
//<
  if(  kgroup.collide(jediof)){
    kgroup.setVelocityEach(0)
  }
    
    
    if(Druid.isTouching(spi)){
  l=l-5
    
      Druid.x=Druid.x-100
    }
    if(l<75){
  //    lifeimage.addImage(semihigh);
    }
    if(l<51){
   //   lifeimage.addImage(medium)
    }
    if(l=>35){
   //   lifeimage.addImage(semilow)
    }
    if(l<20){
    //  lifeimage.addImage(low)
    }
    if((l<0)&&gameState==="play"){
      gameState="end"
    }
    //>
    
    //<
  if(keyDown("right")){
    Druid.velocityX=15
    Druid.changeAnimation("run",druididerunanimation)
  }
  if(keyWentUp("right")){
        Druid.velocityX=0
        Druid.changeAnimation("idle",druididelanimation)
  }
  if(keyDown("left")){
    Druid.velocityX=-15
    Druid.changeAnimation("back",druidbaanimation)
  }
    if(keyWentUp("left")){
    Druid.velocityX=0
    Druid.changeAnimation("idle",druididelanimation)
  }
  if(keyWentDown("space")&&Druid.y>150){
Druid.velocityY=-30
    Druid.changeAnimation("jump",druidjanimation)
}
            Druid.velocityY = Druid.velocityY + 2
  if(keyWentUp("space")){
    Druid.velocityX=0;
    Druid.velocityY=0;
   Druid.changeAnimation("idle",druididelanimation)
  }
    if(Druid.isTouching(d)&&gameState==="play"){
      gameState="end"
    }
    if(keyWentDown("ENTER")){
     blade();
  Druid.changeAnimation("th",thro)
    }
    if(keyWentUp("ENTER")){
      Druid.changeAnimation("idle",druididelanimation)
    }
if(Druid.isTouching(win)){
  gameState="level2"
}
  }
  
  
  if(gameState==="level2"){
    l=100
ground.visible=false;
    sq2.visible=false;
    sq3.visible=false;
    Druid.x=300;
    Druid.y=300;
    sq1.visible=false;
    win.visible=false;
        camera.x=Druid.x
    bg.visible=false;
    r.visible=false;
    Druid.visible=false;
    ground.visible=false;
    ground3.visible=false;
    ground2.visible=false;
    start.visible=false;
    plate1.visible=false;
    sq1.visible=false;
    strip.visible=false
    spi.visible=false;
    enemy.visible = false
box.visible = false; 
  
  
  
  
  
  }

  //>
  if(gameState==="end"){
    r.visible=true;
    camera.x=400;
Druid.visible=false;
    bg.visible=false;
    sq1.visible=false;
    spi.visible=false;
    enemy.visible=false;
    ground3.visible=false;
    ground2.visible=false;
    Druid.x=200;
    Druid.y=200;
    box.visible=false;
    Druid.velocityX=0;
    Druid.vleocityY=0;
    ground.visible=false;
    plate1.visible=false;
    l=100
    if(mousePressedOver(r)&&gameState==="end"){
      gameState="play"
    }
  }

 drawSprites();
  console.log(Druid.x)
}


function blade(){
var knife=createSprite(10,10,1,1)
knife.addImage(kimage)

knife.scale=0.35;
  knife.x=Druid.x;
  knife.y=Druid.y
  knife.velocityX=36
  knife.life=0.2
   knife.velocityY = knife.velocityY + 4
  kgroup.add(knife)
}



function eweapons(){
  var e=createSprite(10,10,10,10);
  e.shapeColor="blue";
  e.x=enemy.x;
  e.y=enemy.y;
  ew.add(e)
}
