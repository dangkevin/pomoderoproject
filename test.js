
var globalMin;
var globalSec;
var counter;

function start(){
  var x = document.getElementById("timer").innerHTML;
  var array = x.split(":");
  var array0 = array[0];
  var array1 = array[1];
  globalMin = parseInt(array0, 10);
  globalSec = parseInt(array1, 10);
  counter = setInterval(timer,1000);
}

function timer(){

  if(globalSec == 00 && globalMin > 0){
    globalSec = 59;
    globalMin--;
    console.log("did i get in here");
  }
  console.log(globalSec);
  if(globalSec == 00 && globalMin == 0){
    clearInterval(counter);
    console.log("did i clear it?");
    return;
  }
  if(globalSec )
  document.getElementById("timer").innerHTML= globalMin + ":" + globalSec;
  globalSec--;
}

function reset(){
  document.getElementById("timer").innerHTML = "00:00";
}
