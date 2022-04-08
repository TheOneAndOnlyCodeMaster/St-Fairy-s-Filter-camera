noseX=0;
noseY=0;
function preload(){
face=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
lips=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
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
        image(face, noseX-33, noseY-8, 70, 60);
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
    face=mustache;
    image(face, noseX-45, noseY-30, 100, 100);
    console.log("Mustache Made");

}
function add_lipstick(){
    face=lips; 
    image(face, noseX-45, noseY-10, 100, 100);
    console.log("Lips Ready");
}
function take_pic(){
    save("face_effects.png");
}