let titleImage;
let song1, song2, song3;
let songs;
let index = 0;

function preload() {
  titleImage = loadImage('/assets/intoxicated-0001.jpg');
  song1 = loadSound('/assets/476202__djmistressm__rain-drips.mp3');
  song2 = loadSound('482826__craigsmith__r15-45-heart-beat.wav ');
  song3 = loadSound('482830__craigsmith__r16-07-woman-laughing-and-group-of-men-laughing.wav');
}

function setup() {
  createCanvas(400, 400);
  songs = [song1, song2, song3];
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(titleImage, width / 2, height / 2);
  songs.play();
}

function mousePressed() {
  index = index + 1;
  if (index == songs.length) {
    index = 0;
  }
}