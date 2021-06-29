function preload(){}
function setup(){
    Canvas = createCanvas(500,400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(500,400);
    Video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/whSgSu8ed/model.json', modelLoaded);
}
function draw(){
    image(Video, 0, 0, 500, 400);
    classifier.classify(Video, gotResult);
}
function modelLoaded(){
    console.log("Model Loaded!");
    Speak();
}
function Speak(){
    synth = window.speechSynthesis;
    speakData = "Model Loaded!";
    Speaker = new SpeechSynthesisUtterance(speakData);
    synth.speak(Speaker);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
     console.log(result);
     document.getElementById("Obj_Name").innerHTML = result[0].label;
     document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}