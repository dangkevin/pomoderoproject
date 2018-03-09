function start(){
  countdown();
}

function reset(){
  document.getElementById("timer").innerHTML = "00:00";
}


function countdown(){
  var x = document.getElementById("timer").innerHTML;
  var array = x.split(":");
  console.log(array[0]);
  console.log(array[1]);


}
