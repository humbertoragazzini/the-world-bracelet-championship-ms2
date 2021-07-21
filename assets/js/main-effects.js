


/*
function moving(){
  var speed = Math.round(Math.random()) * 15;
  var theinterval = setInterval(movingVertical,1000,speed);
  setTimeout(clearInterval,3000,theinterval);
}

function interval(){
  setInterval(moving,3000);
}


function movingVertical(speed){
  if(Number(document.getElementById('circle').style.top.replace( /px/, ''))<document.getElementById("thebody").getBoundingClientRect().height){
  document.getElementById('circle').style.top = String(Number(document.getElementById('circle').style.top.replace( /px/, ''))+speed)+"px";
  console.log("velocidad "+speed);
  }else{
    document.getElementById('circle').style.top = "0px";
  }
}
*/



function animationJewels(){

  var movements = [];
  var speed;

  var jewels = document.getElementsByClassName("moving-jewels");

    for(var i=0;i<jewels.length;i++){
      speed = Math.random()*(50-10)+10;
      jewels[i].style.left = String( Math.round((document.getElementById("animated-background").getBoundingClientRect().right-document.getElementById("animated-background").getBoundingClientRect().left)) ) + "px";
      movements[i] = setInterval(moving, 100, jewels[i], speed);
      console.log(movements[i])
    }


function moving(jewel,speed){

  if((jewel.style.top.replace( /px/, '')) < document.getElementById("thebody").getBoundingClientRect().height)
  { 
   jewel.style.top = String(Number(jewel.style.top.replace( /px/, ''))+speed)+"px";
    
  }else{
    jewel.style.top = "-50px";
    jewel.style.left = String((Math.round(Math.random() * (document.getElementById("animated-background").getBoundingClientRect().right - document.getElementById("animated-background").getBoundingClientRect().left)))) + "px";
  }

}



}