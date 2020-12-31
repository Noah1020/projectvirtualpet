//Create variables here
var dog, dogImage1, dogImage2;
var food = 20;



function preload()
{
  //load images here
    dogImage1 = loadImage("images/dogImg.png");
    dogImage2 = loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage1);
  dog.scale = 0.15;
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value" ,readStock);


}


function draw() {  
  background(255);
  
	textSize(20);
  fill(0);
  text("Food: " + food , 200, 50);

  if (keyDown("up")){
    writeStock(-1);
    dog.addImage(dogImage2);
  }

  drawSprites();
  //add styles here


}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref("food").set({
    food : food -x
  })

}