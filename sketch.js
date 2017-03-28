var bb1, bb2
var buds = []

function setup() {
	createCanvas(windowWidth,windowHeight)
	// bb1 = new brownianBuddy(width/2,height/2,30,color(255,0,0))
	// bb2 = new brownianBuddy(width/2,height/2,50,color(0,0,255))
	// bb3 = new brownianBuddy(width/2,height/2,50,color(0,255,0))

	for (var i = 0; i < 100; i++) {
		var buddy = new brownianBuddy(width/2,height/3,random(20,100))
		console.log(buddy);
		buds.push(buddy)
	}
}

function draw(){
	// background(99, 144, 212)
	// bb1.move()
	// bb2.move()
	// bb3.move()
	// bb1.age()
	// bb2.age()
	// bb3.age()
	// bb1.display()
	// bb2.display();
	// bb3.display();

	for (var i = 0; i < buds.length; i++) {
		buds[i].move()
		buds[i].age()
		buds[i].display()
	}
}

// function mouseClicked(){
// 	buds.liveForever(700)
// }


//constructor function, define the object and its characteristics
function brownianBuddy(tempX, tempY,tempDia){
	//this. means this instance of the constructed object
	this.speed = random(1,20)
	this.x = tempX //take the params from the construction and record them here for this instance
	this.y = tempY
	this.dia = tempDia
	this.color = color(random(255),random(255),random(255),random(10,100))
	this.lifespan = 1000
	this.alive = true;
	this.textsize = random(5,90)

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
			this.alive = true;
		}
	}

	this.display = function(){
		noStroke()
		// fill(this.color)
		// stroke(255-red(this.color), 255-green(this.color),255-blue(this.color))
		if (this.alive == true) {
			// ellipse(this.x,this.y,this.dia,this.dia)
			textSize(this.textsize)
			text('👵🏻', this.x,this.y)
		}
	}
}
