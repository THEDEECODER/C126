leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
song = "";
scoreLWY ="0";
function preload(){
song = loadSound("music1.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function draw() {
    image(video, 0, 0, 600, 500);
    stroke("#E63946");
    fill("#E63946");
    circle(leftwristx, leftwristy, 20);
    if(scoreLWY > 0.2){
        LWY = Number(leftwristy);
        removedecimal = Math.floor(LWY*2);
        vol = removedecimal/1000;
        console.log(vol);
    }
}
function play() {
    song.play();
    song.setVolume(vol);
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
        scoreLWY = results[0].pose.keypoints[9].score;
        console.log("Left Wrist score = "+scoreLWY);
    }
    
}