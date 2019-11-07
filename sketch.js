var myshader;
var ramp;

function preload() {
  ramp = loadImage("ramp.png");
  myshader = loadShader("vertex.vert", "fragment.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(0);

  myshader.setUniform("u_resolution", [width, height]);
  myshader.setUniform("u_mouse", [mouseX / width, mouseY / height]); //mouse.x intensité
  myshader.setUniform("u_time", millis() * 0.008); //vitesse
  myshader.setUniform("image", ramp); //couleur
  shader(myshader);

  rect(0, 0, width, height);
}
