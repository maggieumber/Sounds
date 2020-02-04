let title;
let rain, underwater;

function preload() {
  title = loadImage("assets/intoxicated-0001.jpg");
  rain = loadSound("assets/476202__djmistressm__rain-drips.mp3");
  underwater = loadSound("assets/183893__ryanconway__underwater-breathing.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(title, 0, 0);
}

function keyTyped() {
  if (key == "a") {
    rain.play();
  } else if (key == "l") {
    underwater.play();
  }
}