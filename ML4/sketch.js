/**
 *  Create a sequence using a Part with callbacks that play back soundfiles.
 *  The callback includes parameters (the value at that position in the Phrase array)
 *  as well as time, which should be used to schedule playback with precision.
 *  
 */

var click, beatbox;
var clickPhrase = [1, 0, 1, 1];
var bboxPhrase = [1, 0, 0, 1, 1, 1, 0, 0];
var balls = [];

var part; // a part we will loop

function preload() {
  soundFormats('mp3', 'ogg');
  click = loadSound('https://travisfeldman.github.io/FILES/drum');
  beatbox = loadSound('https://travisfeldman.github.io/FILES/beatbox');

}

function setup() {
  // create a part with 8 spaces, where each space represents 1/16th note (default)
  part = new p5.Part(8, 1/16);
  // add phrases, with a name, a callback, and
  // an array of values that will be passed to the callback if > 0
  part.addPhrase('kick', playKick, clickPhrase);
  part.addPhrase('snare', playSnare, bboxPhrase);
  // set tempo (Beats Per Minute) of the part and tell it to loop
  part.setBPM(110);
  part.loop();
  for (var i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls
    );
  }
  noStroke();
  fill(255, 204);
}

function playKick(time, params) {
  click.rate(params);
  click.play(time);
}

function playSnare(time, params) {
  beatbox.rate(params);
  beatbox.play(time);
}

// draw a ball mapped to current note height
function draw() {
  //background(255);
  //fill(255, 0, 0);
  background(0);
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}

// UI 
var hDiv = 2;
var wDiv = 16;