var bg;
var flower, flowerImage , flowersGroup;

var confetti , confettiGroup;

function preload(){
bg = loadImage("navratri.jpg"); 

flowerImage =loadImage("flowerImage.png");
}

function setup(){

	var canvas = createCanvas(displayWidth, displayHeight);

	flowersGroup = new Group();
	confettiGroup = new Group();
}

function draw(){

	if(bg){
		background(bg);
	}
	else{
		background("black")
	}
	spawnFlowers();

	spawnConfetti();

	drawSprites();
}

function spawnFlowers(){

         if(frameCount % 10 === 0){


		var randomNumber = Math.round(random( 3, displayWidth));
		var flower = createSprite(randomNumber , -5,5,5);
		flower.addImage(flowerImage);
		flower.scale = 0.3;
		flower.velocityY = 5;
		flower.lifetime = 800;
		flowersGroup.add(flower);
	
	   }

}

function spawnConfetti(){

	if(frameCount % 3 === 0){


	   var randomNumber2 = Math.round(random( 3, displayWidth));

	   var randomWidth = Math.round(random(6,18));
	   var randomHeight = Math.round(random(6,18));
	   var confetti= createSprite(randomNumber2 , -5,randomWidth,randomHeight);
	  var randomColor = Math.round(random(1,8));
	   confetti.velocityY = 5;
	   confetti.lifetime = 500;
	   confettiGroup.add(confetti);

	   switch(randomColor){
		   case 1 : confetti.shapeColor = "red";
		   break;

		   case 2 : confetti.shapeColor = "blue ";
		   break;

		   case 3: confetti.shapeColor = "yellow ";
		   break;

		   case 4: confetti.shapeColor = " green";
		   break;

		   case 5: confetti.shapeColor = "orange ";
		   break;

		   case 6 : confetti.shapeColor = "purple ";
		   break;

		   case 7: confetti.shapeColor = "gold ";
		   break;

		   case 8: confetti.shapeColor = " pink";
		   break;

		   default : console.log("no color applied");
		   break;
;	   }
   
	}

}