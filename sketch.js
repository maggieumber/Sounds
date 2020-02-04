let titleImage;
let rain, drukenParty, muffledParty, breathing, creature;

function preload() {
  titleImage = loadImage('/assets/intoxicated-0001.jpg');
  // SOUND CREDITS
  // Rain Drips by DJMistressM https: //freesound.org/people/DJMistressM/sounds/476202/ This work is licensed under the Creative Commons 0 License.
  rain = loadSound('/assets/476202__djmistressm__rain-drips.mp3');
  // 05725 drunken party ambience by Robinhood76 (https://freesound.org/people/Robinhood76/sounds/271447/) MU edited this into a shorter version. This work is licensed under the Attribution Noncommercial License. https://creativecommons.org/licenses/by-nc/3.0/
  drukenParty = loadSound('assets/476727__lipatovroman__bar-crowd-loop-01.wav');
  // // Hallway_1(people chatting in another room, voices).wav by o_ciz https://freesound.org/people/o_ciz/sounds/475647/ This work is licensed under the Creative Commons 0 License.
  muffledParty = loadSound('assets/183893__ryanconway__underwater-breathing.mp3');
  // Muffled breath by the hands.wav by fuchsrodolfo https://freesound.org/people/fuchsrodolfo/sounds/391174/ This work is licensed under the Attribution Noncommercial License. https://creativecommons.org/licenses/by-nc/3.0/
  // breathing = loadSound('assets/391174__fuchsrodolfo__muffled-breath-by-the-hands.wav')
  // // chainedcreature2.mp3 by johnaudiotech https://freesound.org/people/johnaudiotech/sounds/342117/ This work is licensed under the Creative Commons 0 License.
  creature = loadSound('assets/342117__johnaudiotech__chainedcreature2.mp3')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(titleImage, width / 2, height / 2);

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
  }
  /* else if (key == "f") {
     breathing.loop();
   } else if (key == "r") {
     breathing.pause();
   } */
  else if (key == "g") {
    creature.loop();
  } else if (key == "t") {
    creature.pause();
  }
}