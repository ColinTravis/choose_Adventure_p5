var bb1, bb2
var enemies=[]

var en1,en2,en3,en4

function setup() {
	createCanvas(windowWidth,windowHeight)
	bb1 = new brownianBuddy(width/2,height/2,30,color(255,0,0))
	bb2 = new brownianBuddy(width/2,height/2,50,color(0,0,255))
	bb3 = new brownianBuddy(width/2,height/2,50,color(0,255,0))



en1 = new enemy(width/2, height/2,30,color(0,255,0))
en2 = new enemy(width/4, height/4,30,color(255,0,0))

enemies= [en1,en2]
console.log(enemies);
}




function draw(){
	background(99, 144, 212)
	bb1.move()
	bb2.move()
	bb3.move()
	bb1.age()
	bb2.age()
	bb3.age()
	// bb1.display()
	// bb2.display();
	// bb3.display();
	random(enemies).display
}

function mouseClicked(){
	bb2.liveForever(700)
}
function enemy(){

	this.color = "255,0,5"
	this.dia = 50
	this.display = function(){
		noStroke()
		fill(this.color)
			rect(width/2,height/2,this.dia,this.dia)
}
}
//constructor function, define the object and its characteristics
function brownianBuddy(tempX, tempY,tempDia, tempColor){
	//this. means this instance of the constructed object
	this.speed = 5
	this.x = tempX //take the params from the construction and record them here for this instance
	this.y = tempY
	this.dia = tempDia
	this.color = tempColor
	this.lifespan = random(250,300)
	this.alive = true;

	this.move = function(){
		this.x += random(-this.speed,this.speed)
		this.y += random(-this.speed,this.speed)
	}

	this.liveForever = function(lifespanUpdate){
		this.lifespan = lifespanUpdate
	}

	this.age = function(){
		this.lifespan --
		if(this.lifespan <= 0){
			this.alive = false;
		}
	}

	this.display = function(){
		noStroke()
		fill(this.color)
		if (this.alive == true) {
			ellipse(this.x,this.y,this.dia,this.dia)
		}
	}
}
