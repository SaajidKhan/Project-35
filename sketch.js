//Create variables here
var dog,happydog;
var database;
var foodS
var dogImg,happydogImg;
var foodstock;
var foodImg;
var image;
var feedDog,addFood;
var fedTime;lastFed;
var foodObj;

function preload()
{   dogImg=loadImage('images/doglmg.png');
    happydogImg=loadImage('images/doglmg1.png');
    foodImg=loadImage('milk.png');
  //load images here
  
}

function setup() {
  database=firebase.database();
  console.log(database);

  createCanvas(500, 500);
  
  dog=createSprite(250,500,10,10);
  dog.addImage(dogImg);

 
  dog.scale=0.15;

  foodstock=database,ref('foodS');
  foodstock.on("value",readStock);
  textSize=20;
  
  feed=createButton("Feed the button");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood =createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);
}


function draw() {  
    background(46,139,87);
     /*if(keyWentDown(UP_ARROW)){
        writeStock("foodS");
        happydog.addImage(happydogImg);
     }*/
        fill(255,255,254);
        textSize(15);

        fedTime=database.ref('Feed Time');
        fedTime.on("value",function(data){
          lastFed=data.val();
        });

      if(lastFed>=12){
        text("Last Feed :"+lastFed%12 +"PM",350,30);
      }else if(lastFed==0){
        text("Last Feed :12 AM",350,30);
      }else{
        text("Last Feed "+ "AM",350,30);
      }
      
      display();
 drawSprites();
     }
  //add styles here
      foodstock.textSize(40);
      foodstock.fill("green");
      foodstock.stroke(5);

  function readStock(data){
      foodS=data.val();
}
  function writeStock(x){

    data.ref('/').update({
      Food:x
    })
  }
    //Function tp update food stock and last fed time
       function feedDog(){
        dog.addImage(happydogImg);

        foodObj.updateFoodStock(foodObj.getFoodStock()-1);
        database.ref('/').update({
          Food:foodObj.getFoodStock(),
          fedTime:hour()
        })


      }
    //function to add food in stock
       function addFood(){
         foodS++;
         database.ref('/').update({
          Food:foodS
         })

       }
  

