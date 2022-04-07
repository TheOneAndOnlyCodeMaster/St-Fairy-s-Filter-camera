noseX=0;
noseY=0;
function preload(){
face=loadImage('https://i.postimg.cc/PLhwHhxS/Mustache.png');
}
function setup(){
canvas= createCanvas(300, 300);
canvas.center();
console.log("canvas_made");
video=createCapture(VIDEO);
video.size(400, 400);
video.hide();
console.log("Video_Ready");
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 400, 400);
        image(face, noseX-45, noseY-30, 100, 100);
}
function modelLoaded(){
    console.log("model ready and set up");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x is =", results[0].pose.nose.x);
        console.log("nose y is =", results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
}    
}
function make_mustache(){
    face="https://i.postimg.cc/PLhwHhxS/Mustache.png";
    image(face, noseX-45, noseY-30, 100, 100);

}
function add_lipstick(){
    face="https://i.postimg.cc/TKnDBhRy/lips.png"; 
    image(face, noseX-45, noseY-20, 100, 100);
}