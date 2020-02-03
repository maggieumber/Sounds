let titleImage;
let sound1, sound4, sound5;

function preload() {
  titleImage = loadImage('/assets/intoxicated-0001.jpg');
  sound1 = loadSound('/assets/476202__djmistressm__rain-drips.mp3');
  sound4 = loadSound('assets/271447__robinhood76__05725-drunken-party-ambience.wav');
  sound5 = loadSound('assets/475647__o-ciz__hallway-1-people-chatting-in-another-room-voices.wav ');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(titleImage, width / 2, height / 2);
}


function keyTyped() {
  if (key == "a") {
    sound1.play();
  } else if (key == "q") {
    sound1.pause();
  } else if (key == "l") {
    sound4.play();
  } else if (key == "o") {
    sound4.pause();
  } else if (key == "g") {
    sound5.play();
  } else if (key == "b") {
    sound5.pause();
  }
}

// // drunken voices play & pause
// function mousePressed() {
//   sound4.pause();
// }

// // muffled voices play & pause
// function mousePressed() {
//   sound5.play();
// }

// function keyTyped() {
//   if (key == 'p') {
//     sound5.pause();
//   }
// }