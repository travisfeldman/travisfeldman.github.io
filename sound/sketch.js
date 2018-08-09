var dingdong;
var doorbell;

function setup() {
  createCanvas(800, 800);
  soundFormats('mp3', 'ogg');
  dingdong = loadSound('https://travisfeldman.github.io/FILES/doorbell.mp3');
  doorbell = new Doorbell(width/2, height/2, 128);
}

function draw() {
  background(255);
  doorbell.display(mouseX, mouseY);
}

function mousePressed() {
  if (doorbell.contains(mouseX, mouseY)) {
    dingdong.play();
  }
}

var Doorbell = function(x_, y_, r_) {
  // Location and size
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      return true;
    } else {
      return false;
    }
  };

  // Show the doorbell (hardcoded colors, could be improved)
  this.display = function(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(x, y, r, r);
  };
};
