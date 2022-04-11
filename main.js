objects=[];
status1="";
object_x="";
       object_y="";
        object_height="";
        object_width="";
        object_confidence="";
        object_name="";
function preload() {

}

function setup() {
    canvas=createCanvas(400,300);
    canvas.position(500,300);
    video=createCapture(VIDEO);
    video.hide();
    detector=ml5.objectDetector('cocossd', modelLoaded);
    
}
 function draw() {
  image(video,0,0,400,300);
  
    if(status1 != ""){
        detector.detect(video,gotResult);
    for(var i=0; i<=objects.length; i++){
        object_x=objects[i].x;
        object_y=objects[i].y;
        object_height=objects[i].height;
        object_width=objects[i].width;
        object_confidence=Math.floor(objects[i].confidence*100);
        object_name=object[i].label;
        console.log("object_x="+object_x+",object_y="+object_y);
       stroke('red');
       rect(object_x,object_y,object_width,object_height);
       text(object_name+" "+object_confidence,object_x,object_y);
       
        
    }

    
    
    }
    if(document.getElementById("text").value=object_name){
        video.stop();
        detector.detect(gotResult);
        var synth=window.speechSynthesis;
     document.getElementById("found").innerHTML="object mentioned found";
     var speak_data="Object mentioned found";
     var utter_this= new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter_this);
    }
    else {
        document.getElementById("found").innerHTML="object mentioned not found";
    }
    
}
  
 
 function modelLoaded() {
     console.log("model is loaded");
     status1="true";
     document.getElementById("status").innerHTML="Status: Objects are being detected";
     
 }
 function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else {
      
        objects=results;
        
    }
}


