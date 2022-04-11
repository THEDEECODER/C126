leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
song = "";
function preload(){
song = loadSound("music1.mp3");
}
function setup(){
    canvas = createCanvas(400, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function draw() {
    image(video, 0, 0, 400, 500);
}
function play() {
    song.play();
    song.setVolume(0.9);
    song.rate(1);
}
function modelloaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
    if( results.length > 0 ){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("Left wrist x coordinates = "+leftwristx+ "Left wrist y coordinates = "+leftwristy);
        console.log("Right wrist x coordinates = "+rightwristx+ "Right wrist y coordinates = "+leftwristy);
    }
}