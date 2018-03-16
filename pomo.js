
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
  console.log("This is the global min before" + " " + globalMin);
  console.log("This is the global sec before" + " " + globalSec);
  counter = setInterval(timer, 1000);
}

function timer(){

console.log(globalSec);

if(globalSec == 0 && globalMin > 0){
    globalMin--;
    globalSec = 59;
    console.log("did i get in here");
  }

  if(globalSec < 10){
    globalSec = ("0" + globalSec).slice(-2);
    console.log("The value of the second is less than 9" + " " + globalSec);
  }

  console.log(globalSec);

  if(globalSec == 0 && globalMin == 0){
    clearInterval(counter);
    console.log("did i clear it?");
    return;
  }


  document.getElementById("timer").innerHTML= globalMin + ":" + globalSec;
  console.log(globalSec);
  globalSec--;
}

//function
function reset(){
  document.getElementById("timer").innerHTML = "00:00";
}
