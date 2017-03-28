var playerWins
var disasters = ['🌪','🌊','⚡️','🔥','☀️','☄️']
var encounters =['🍔','🐭','🤹‍','🎡','💰','🛩']
var characters = ['💀','👽','🤖']
var characterBackground = []
var chosencharacter =[]
var h
var vs1
var vs2
var keygate = true
var mousegate = true



function setup() {
  createCanvas(windowWidth,windowHeight)
  textAlign(CENTER)
  textSize(50)
  var randomCharacter = random(characters)
  vs1 = (random(disasters))
  vs2 = (random(encounters))
  h = height/2

  console.log(randomCharacter);
background(117, 158, 237)
chooseCharacter()

  // disasters.splice(2,1)
  //remove something
}


function chooseCharacter(){
  fill(255)
  textStyle(BOLD)
  textFont("Futura")
  text('Disasters and Encounters',width/2, height/6)
  textStyle(NORMAL)
  text('Choose Your Character',width/2,height/3.5)
  text(characters[0],width/1.7,height/2)
  text(characters[1],width/2,height/2)
  text(characters[2],width/2.5,height/2)
}

function draw(){
  // background(117, 158, 237)
  }

function mousePressed(){
      var skull = dist(mouseX,mouseY, width/1.7,height/2)
      var alien = dist(mouseX,mouseY, width/2,height/2)
      var robot = dist(mouseX,mouseY, width/2.5,height/2)
  if (mousegate = true && skull < 100) {
    chosencharacter.push('💀')
    chosencharacter.length=1;
    characterBackground.push("#939393")
    characterBackground.length=1;
    mousegate=false
    createCharacter()
  }else if (mousegate = true && alien < 100) {
    chosencharacter.push('👽')
    chosencharacter.length=1;
    characterBackground.push("#4bb600")
    characterBackground.length=1;
    mousegate=false
    createCharacter()
  }else if (mousegate = true && robot < 100) {
    chosencharacter.push('🤖')
    chosencharacter.length=1;
    characterBackground.push("#0676d1")
    characterBackground.length=1;
    mousegate=false
    createCharacter()
  }
}

function createCharacter(){
  textSize(50)
  if (chosencharacter == '💀') {
    background(characterBackground)
    text('You ⇩', width/2.7,height/3)
    text(chosencharacter[0], width/2.5, height/2)
    startVs()
    return;
  }else if (chosencharacter == '👽') {
    background(characterBackground)
    text('You ⇩', width/2.7,height/3)
    text(chosencharacter[0], width/2.5, height/2)
    startVs()
  }else if (chosencharacter == '🤖') {
    background(characterBackground)
    text('You ⇩', width/2.7,height/3)
    text(chosencharacter[0], width/2.5, height/2)
    startVs()
  }
}
function startVs(){
  // var vs1 = (random(disasters))
  // var vs2 = (random(encounters))
  console.log(vs1);
  console.log(vs2);
  text('VS', width/2, h)
  text(vs1, width/1.7,h)
  text('or',width/1.6, h)
  text(vs2, width/1.5, h)
  textSize(20)
  text('Press "1" or "2"', width/2,height/1.7)
  }

  function keyPressed(){
    if (keyCode == 49) {
      if (vs1 === '🌪' && keygate===true) {
        background(characterBackground)
        text('You got stuck in the rain!', width/2, h)
        keygate = false
    } else if (vs1 === '🌊' && keygate===true) {
      background(characterBackground)
      text('A flood wipes you out', width/2, h)
      keygate = false
    } else if (vs1 === '⚡️'&& keygate===true) {
      background(characterBackground)
      text('Lightning Strike!', width/2, h)
      keygate = false
    }else if (vs1 === '🔥'&& keygate===true) {
      background(characterBackground)
      text('You were caught in a fire!', width/2, h)
      keygate = false
    }else if (vs1 === '☀️'&& keygate===true) {
      background(characterBackground)
      text('Caught in the intense heat of the sun!', width/2, h)
      keygate = false
    }else if (vs1 === '☄️'&& keygate===true) {
      background(characterBackground)
      text('A meteor lands on you', width/2, h)
      keygate = false
    }
  }
    if (keyCode == 50) {
      if (vs2 === '🍔' && keygate ===true) {
        background(characterBackground)
        text('You ate a delicious burger!', width/2, h)
        keygate = false
    } else if (vs2 === '🐭' && keygate ===true) {
      background(characterBackground)
      text('You were visited by a friendly mouse!', width/2, h)
      keygate = false
    } else if (vs2 === '🤹' && keygate ===true) {
      background(characterBackground)
      text('You spend time with a juggler.', width/2, h)
      keygate = false
    }else if (vs2 === '🎡' && keygate ===true) {
      background(characterBackground)
      text('You spent the day at the carnival!', width/2, h)
      keygate = false
    }else if (vs2 === '💰' && keygate ===true) {
      background(characterBackground)
      text('You Found a bag of money!', width/2, h)
      keygate = false
    }else if (vs2 === '🛩' && keygate ===true) {
      background(characterBackground)
      text('You travel somewhere', width/2, h)
      keygate = false
    }
    }
  }
