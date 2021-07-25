//animations classes

class Animation{

  constructor(time,animation){
    this.timer = time;
    this.animation = animation;
    this.intervalidentifier;
  }

  animationOn(){
    console.log(String(this.animation) +" el tiempo es:"+ this.timer);
    setInterval(this.animation,this.timer);
  }

  animationOff(){
    clearInterval(this.intervalidentifier);
  }

}

//jewels rain animation code

document.addEventListener("DOMContentLoaded", function animationJewels(){

  var movements = [];
  var speed;

  var jewels = document.getElementsByClassName("moving-jewels");

    for(var i=0;i<jewels.length;i++){
      speed = Math.random()*(50-10)+10;
      let hola = "hola";
      jewels[i].style.left = String( Math.round((document.getElementById("animated-background").getBoundingClientRect().right-document.getElementById("animated-background").getBoundingClientRect().left)) ) + "px";
      movements[i] = new Animation(100,moving(jewels[i],15));
      movements[i].animationOn();
    }


function moving(jewel,speed){

  if((jewel.style.top.replace( /px/, '')) < document.getElementById("thebody").getBoundingClientRect().height)
    { 
      jewel.style.top = String(Number(jewel.style.top.replace( /px/, ''))+speed)+"px";
    
    }else{
      console.log("sigue")
      jewel.style.top = "-50px";
      jewel.style.left = String((Math.round(Math.random() * (document.getElementById("animated-background").getBoundingClientRect().right - document.getElementById("animated-background").getBoundingClientRect().left)))) + "px";
    }

  }

}

)

//-------------------------

//start menu and boxingbelt animation when click

function startMenu(){
  start = document.getElementById("start-button");
  start.addEventListener('click', e => cleanIndex() );
}

function cleanIndex(){

  var elementstoclean = document.getElementsByClassName('main-menu-element');
  let fadeupintervals = [];

      for(let i=0;i<elementstoclean.length;i++)
          {
              elementstoclean[i].style.opacity = 1;
              fadeupintervals[i] = setInterval(fadeUp,100,elementstoclean[i]);
          }
      
  function fadeUp(element,interval)
      {
          console.log("sigue haciendo looping")
          if(removePxFromPosition(element.style.filter)<150){
              element.style.filter = `blur(${String((removePxFromPosition(element.style.filter)+5))}px)`;
              element.style.opacity = element.style.opacity - 0.034;
          }else{
              element.remove();
              if(elementstoclean.length==0)
              {
                  clearIntervals();
              }               
          }            
      }
  
  function clearIntervals()
  {
      for(let i=0;i<fadeupintervals.length;i++)
          {
              clearInterval(fadeupintervals[i]);
          } 
  }
}


