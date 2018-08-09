var click, beatbox;
var clickPhrase = [1, 0, 1, 1];
var bboxPhrase = [1, 0, 0, 1, 1, 1, 0, 0];
var part; // a part we will loop

function preload() {
  soundFormats('mp3', 'ogg');
  click = loadSound('https://travisfeldman.github.io/FILES/drum');
  beatbox = loadSound('https://travisfeldman.github.io/FILES/beatbox');

}

function setup() {
  createCanvas(720, 400);
  part = new p5.Part(8, 1/16);
  part.addPhrase('kick', playKick, clickPhrase);
  part.addPhrase('snare', playSnare, bboxPhrase);
  part.setBPM(110);
  part.loop();
}

function playKick(time, params) {
  click.rate(params);
  click.play(time);
}

function playSnare(time, params) {
  beatbox.rate(params);
  beatbox.play(time);
}

function draw() {
  drawCircle(width/2, 280, 6);
}

function drawCircle(x, radius, level) {                    
  var tt = 126 * level/4.0;
  fill(tt);
  ellipse(x, height/2, radius*2, radius*2);      
  if(level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}
