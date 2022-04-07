song = ""
function preload(){
song = loadSound("music1.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image(Video, 0, 0, 600, 500);
}
function play(){
    song.play();
}
