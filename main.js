song1="";
song2="";
song="";
leftWristX=0;
leftWristy=0;
rightWristX=0;
rightWristY=0;
scoreleftWrist=0;

function preload(){
  song1=loadSound("song_1.mp3");
  song2=loadSound("song_2.mp3");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){

console.log("Posenet is Initialied");
}

function draw(){
    image(video,0,0,400,300);

    fill("#FF0000");
    Stroke("#FF0000");

    if(video = leftWrist ){
      song1.isplaying();
    }

    else{
     song2.isplaying(); 
    }

    if(scoreleftWrist > 0.2 ){
      circle(leftWristX,leftWristY,20);
      song2.stop();
      }

      if(song1= false){
        song=document.getElementById("song_name").innerHTML= "Dil ha chhotta sa choti si assha" + "song is playing";
      }
}

function gotPoses(results){
  if(results.length > 0 ){

      console.log(results);

      console.log(results);
      scoreleftWrist=results[0].pose.keypoints[9].score;
      console.log("scoreleftWrist = " + scoreleftWrist );

      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;

      console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;

      console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

  }
}
  