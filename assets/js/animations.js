//animations classes

//this class add the posibility to start and stop an animation with his two methods
class Animation{

  constructor(time,animation,parameter1,parameter2,parameter3){
    this.timer = time;
    this.animation = animation;
    this.intervalidentifier;
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
    this.parameter3 = parameter3;
  }

  animationOn(){
    this.intervalidentifier = setInterval(this.animation,this.timer,this.parameter1,this.parameter2,this.parameter3);
  }

  animationOff(){
    clearInterval(this.intervalidentifier);
  }

}
//--------------------------

//jewels rain animation code
var movements = [];
document.addEventListener("DOMContentLoaded", function animationJewels(){

  
  var speed;

  var jewels = document.getElementsByClassName("moving-jewels");

    //in this part of the function we create random left positions for every single jewels
    for(var i=0;i<jewels.length;i++){
      speed = Math.random()*(50-10)+10;
      jewels[i].style.left = String( Math.round((document.getElementById("animated-background").getBoundingClientRect().right-document.getElementById("animated-background").getBoundingClientRect().left)) ) + "px";
      movements[i] = new Animation(100,moving,jewels[i],speed);
      movements[i].animationOn();
    }


function moving(jewel,speed){

  //here we make them go from the top of our space to the bottom

  if((jewel.style.top.replace( /px/, '')) < document.getElementById("thebody").getBoundingClientRect().height)
    { 
      jewel.style.top = String(Number(jewel.style.top.replace( /px/, ''))+speed)+"px";
    
    }else{
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

  let elementstoclean = document.getElementsByClassName('main-menu-element');
  let fadeupanimationobjects = [];

      for(let i=0;i<elementstoclean.length;i++)
          {
              elementstoclean[i].style.opacity = 1;
              fadeupanimationobjects[i] = new Animation(100,fadeUp,elementstoclean[i],i);
              fadeupanimationobjects[i].animationOn();
          }
  
  //fade up animation to make them blurry until disappear
  function fadeUp(element,interval,indexposition)
      {
        
          if(removePxFromPosition(element.style.filter)<150){
              element.style.filter = `blur(${String((removePxFromPosition(element.style.filter)+5))}px)`;
              element.style.opacity = element.style.opacity - 0.034;
          }else{
                  element.remove();      
                  for(let i=0;i<fadeupanimationobjects.length;i++)
                    {
                      fadeupanimationobjects[i].animationOff();
                    }
          }            
      }
}
//--------------------------

//numbers counters, animation for make the numbers change in the points and score squares


//function test(){

var probamos = function(data,type){
for(let i=data.length;i<6;i++)
{
  data="0"+data;
}
let numberchain = data;
let animationsnumbers = [];
let elementnumbers = document.getElementsByClassName(type);
for(let i=0; i<numberchain.length;i++){
  if(numberchain[i] != 0)
    {
      animationsnumbers[i] = new Animation(25,movingNumbers,elementnumbers[i],i,numberchain[i]);
      animationsnumbers[i].animationOn()
    }else{if(numberchain[i] != elementnumbers[i].innerText)
    {
    animationsnumbers[i] = new Animation(25,movingNumbers,elementnumbers[i],i,numberchain[i]);
    animationsnumbers[i].animationOn()
    }}
  }



function movingNumbers(number,inter,numberToMatch){
  if((number.style.top.replace( /px/, '')) < document.getElementById("score").getBoundingClientRect().height)
  { 
    number.style.top = String(Number(number.style.top.replace( /px/, ''))+10)+"px";
    if(number.style.top == "0px" && number.innerText == numberToMatch)
        {
          number.style.top = "0px";
          animationsnumbers[inter].animationOff();
        }   
    }else{
      number.style.top = String(-10)+"px";
      if(number.innerHTML<10){
        number.innerHTML = String(Number(number.innerHTML)+1);
      }else{
        number.innerHTML = String(0);
      }
    }
  }
  
}

