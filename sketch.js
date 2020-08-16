let vertebra;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function preload() {
  vertebra = loadModel('lucca-c6color%20test.obj',true, callb);
}

function draw() {
  background(220);
  normalMaterial();
  rotateZ(frameCount/777);
   rotateX(frameCount/1000);
  rotateY(frameCount/500);
  model(vertebra);
}
function callb(){
  console.log ('ok');
}
    
