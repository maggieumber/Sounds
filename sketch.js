let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20;
let images;
let index = 0;
let imagesX;
let rain, drukenParty, muffledParty, breathing, creature;

function preload() {
  // images by Maggie Umber http://maggieumber.com
  img1 = loadImage('assets/intoxicated-0001.jpg');
  img2 = loadImage('assets/intoxicated-0002.jpg');
  img3 = loadImage('assets/intoxicated-0003.jpg');
  img4 = loadImage('assets/intoxicated-0004.jpg');
  img5 = loadImage('assets/intoxicated-0005.jpg');
  img6 = loadImage('assets/intoxicated-0006.jpg');
  img7 = loadImage('assets/intoxicated-0007.jpg');
  img8 = loadImage('assets/intoxicated-0008.jpg');
  img9 = loadImage('assets/intoxicated-0009.jpg');
  img10 = loadImage('assets/intoxicated-0010.jpg');
  img11 = loadImage('assets/intoxicated-0011.jpg');
  img12 = loadImage('assets/intoxicated-0012.jpg');
  img13 = loadImage('assets/intoxicated-0013.jpg');
  img14 = loadImage('assets/intoxicated-0014.jpg');
  img15 = loadImage('assets/intoxicated-0015.jpg');
  img16 = loadImage('assets/intoxicated-0016.jpg');
  img17 = loadImage('assets/intoxicated-0017.jpg');
  img18 = loadImage('assets/intoxicated-0018.jpg');
  img19 = loadImage('assets/intoxicated-0019.jpg');
  img20 = loadImage('assets/intoxicated-0020.jpg');
  // SOUND CREDITS
  // Rain Drips by DJMistressM https: //freesound.org/people/DJMistressM/sounds/476202/ This work is licensed under the Creative Commons 0 License.
  rain = loadSound('/assets/476202__djmistressm__rain-drips.mp3');
  // 05725 drunken party ambience by Robinhood76 (https://freesound.org/people/Robinhood76/sounds/271447/) MU edited this into a shorter version. This work is licensed under the Attribution Noncommercial License. https://creativecommons.org/licenses/by-nc/3.0/
  drukenParty = loadSound('assets/271447__robinhood76__05725-drunken-party-ambience.wav');
  // Hallway_1(people chatting in another room, voices).wav by o_ciz https://freesound.org/people/o_ciz/sounds/475647/ This work is licensed under the Creative Commons 0 License.
  muffledParty = loadSound('assets/183893__ryanconway__underwater-breathing.mp3');
  // Muffled breath by the hands.wav by fuchsrodolfo https://freesound.org/people/fuchsrodolfo/sounds/391174/ This work is licensed under the Attribution Noncommercial License. https://creativecommons.org/licenses/by-nc/3.0/
  breathing = loadSound('assets/391174__fuchsrodolfo__muffled-breath-by-the-hands.wav')
  // chainedcreature2.mp3 by johnaudiotech https://freesound.org/people/johnaudiotech/sounds/342117/ This work is licensed under the Creative Commons 0 License.
  creature = loadSound('assets/342117__johnaudiotech__chainedcreature2.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
  noCursor();
}

function draw() {
  background(0);
  imagesX = windowHeight * 2;
  // POINT LIGHT
  //move your mouse to change light position
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  pointLight(250, 250, 250, locX, locY, 50);
  noStroke();
  texture(images[index]);
  rectMode(CENTER);
  // w, h, x, y
  rect(-width / windowWidth, -height / windowHeight, imagesX, windowHeight);

  // SONG
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  drukenParty.amp(volume);
  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  drukenParty.rate(speed);
}

function mousePressed() {
  index = index + 1;
  rain.pause();
  if (index == images.length) {
    index = 0;
  }
}

function keyTyped() {
  if (key == "a") {
    rain.loop();
  } else if (key == "q") {
    rain.pause();
  } else if (key == "s") {
    drukenParty.loop();
  } else if (key == "w") {
    drukenParty.pause();
  } else if (key == "d") {
    muffledParty.loop();
  } else if (key == "e") {
    muffledParty.pause();
  } else if (key == "f") {
    breathing.loop();
  } else if (key == "r") {
    breathing.pause();
  } else if (key == "g") {
    creature.loop();
  } else if (key == "t") {
    creature.pause();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}