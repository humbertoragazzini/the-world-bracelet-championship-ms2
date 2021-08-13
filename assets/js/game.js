//player class used to create a player object
class Player{

    constructor(name,record,level,identifier){
        this.name=name;
        this.record=record;
        this.level=level;
        this.identifier=identifier;
    }
  
    nameAsig(name){
        this.name=name;
    }
    recordAsig(record){
        this.record=record;
    }
    levelAsig(level){
        this.level=level;
    }
    identifierAsig(identifier){
        this.identifier=identifier;
    }
  
  }
//
class Level{

    constructor(){
        this.logicallevelforjewels=1;
        this.leveltoshow = 0;
    }

    newLevel(){
        this.leveltoshow = this.leveltoshow + 1;
        if(this.logicallevelforjewels<7){
            this.logicallevelforjewels = Math.round(Math.sqrt(this.leveltoshow));
        }else{
            this.logicallevelforjewels=7;
            this.leveltoshow = this.leveltoshow+1;}
    }
}
//class game

class Game{
    constructor(player){
        this.player=player;
        this.record=0;
        this.level = new Level();
    }
    recordInGame(){
        this.record=this.record+this.level.logicallevelforjewels*this.level.leveltoshow;
        this.player.recordAsig(this.record);
    }
    newGame(){
        this.level.newLevel();
    }
}
// because the users will be saved in localstorage we need to recover it from there, this function allow us to do it

  function recoverUser(data){
      let user = new Player(name,record,level,identifier);
  }

  var beto = new Player("jorge",156488,4,1);


  localStorage.setItem('1',beto.name+'/'+beto.record+'/'+beto.level+'/'+beto.identifier);

//in local storage all the data is saved it in text format "string" this function filter every single variable from the string to create the player object
  function recoverDataFromLocal(user,key){
      let name = '';
      let record = '';
      let level = '';
      let cache = '';
      let identifier = key;
      let i = 0;
      lengthofdata = user.length;

    while(i<lengthofdata){
        if(user[0]!='/'){
          name=name+user[0];
          cache = user.substring(1);
          user = cache;
          i++;
        }else{
            cache = user.substring(1);
            user = cache;
            lengthofdata = cache.length;
            i = 0;
            break;
        }
    }
    
    while(i<lengthofdata){
        if(user[0]!='/'){
          record=record+user[0];
          cache = user.substring(1);
          user = cache;
          i++;
        }else{
            cache = user.substring(1);
            user = cache;
            lengthofdata = cache.length;
            i = 0;
            break;
        }
    }
    while(i<lengthofdata){
        if(user[0]!='/'){
          level=level+user[0];
          cache = user.substring(1);
          user = cache;
          i++;
        }else{
            cache = user.substring(1);
            user = cache;
            lengthofdata = cache.length;
            i=0;
            break;
        }
    }

    let usuario = new Player(name,record,level,identifier);
    return usuario;
  }


//this function make the start menu disapear and make the game apear
function startGame(){
    startmenu = document.getElementsByClassName("the-start-menu-elements");
    gameelements = document.getElementsByClassName("the-game-elements");

    for(let i=0;i<startmenu.length;i++)
    {
        setTimeout(addedOrRemove,1500,startmenu[i],"hidden");
        setTimeout(addedOrRemove,1500,gameelements[i],"appear");
    }

}



function fillingBraceletInGame(level){

    let colorsarray = [`url('assets/image/backgrounds/jewels/jewel-diamond-white.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-red.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-blue.png')`]; 
    let j = 0;
    let jewelstofillup = document.getElementsByClassName(`jewels-space`);
    divdejoyas = document.getElementsByClassName("joyas");
    joyas = document.getElementById("bracelettomake");
    colors = document.getElementById("jewelscolors");
    testbutton = document.getElementById("jewelstochose");
    let cache;
    for(let i=0;i<level;i++)
    {
        jewelstofillup[i].classList.remove("hiddenforjewels");
    }
    joyas.addEventListener("click",function(){
        cache = event.target;
        if(cache.classList.contains("joyas"))
        {
        for(let i=0;i<divdejoyas.length;i++){
            if(divdejoyas[i]!=cache)
            {
                divdejoyas[i].removeEventListener("click",null);
            }
        }
        
        }
    })

    colors.addEventListener(`click`,function(){
        itemstochange = document.getElementsByClassName("shapes");
        if(event.target.innerHTML=="White"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=colorsarray[0];
            }
        }
        if(event.target.innerHTML=="Red"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=colorsarray[1];
            }
        }
        if(event.target.innerHTML=="Blue"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=colorsarray[2];
            }
        }
    })

    testbutton.addEventListener("click", function (){
        try {
            if(cache.classList.contains("joyas")){
            cache.style.backgroundImage = event.target.style.backgroundImage;
            cache.classList.add("filled");
            }
          } catch (error) {
              alert("please select first witch place you want to fill up");
              return;
          }
    });  
    
}


function randomJewelsInyector(level){
    let elements = ``;
    let caca= `url("assets/image/backgrounds/jewels/jewel-diamond-white.png")`;
    let jewels = [caca,caca,caca,caca,caca,caca,caca,caca];
    for(let i=0;i<level;i++){
        position = Math.round((Math.random()*6));
        console.log(position);
        elements = elements + jewels[position];
    }
    return elements;
}

function firstSteps(){
    console.log("paso");
    let regex = new RegExp("^[0-9a-zA-Z\b]+$");
    clock = document.getElementById("timer");
    let intro;
    let newplayer = new Player();
    let bracelettomake = document.getElementById("bracelettomake");
    let toolsmaker = document.getElementById("toolsmaker");
    let newuserform = document.getElementById("newuserform");
    let gameinprogress
    playername = document.getElementById("playername");
    if(playername.value == "" || !regex.test(playername.value)){
        alert("completa el nombre hijo de mil puta");
    }else{
        newplayer.nameAsig(playername.value);
        gameinprogress = new Game(newplayer);
        gameSpaceAppear(bracelettomake,toolsmaker,newuserform);
        runningLevel(gameinprogress);
    }
}
function gameSpaceAppear(bracelettomake,toolsmaker,newuserform){
    setTimeout(addedOrRemove, 1000,newuserform,"hidden");
    addedOrRemove(newuserform,"disapear");
    setTimeout(addedOrRemove, 1000,toolsmaker,"hidden");
    addedOrRemove(toolsmaker,"appear");
    setTimeout(addedOrRemove, 1000,bracelettomake,"hidden");
    addedOrRemove(bracelettomake,"appear");
}

function gameTimerTrigger(player,tools,bracelet,elementclock){
    let   sec = 0;
    function second(){
    sec++;
    console.log(sec);
    elementclock.innerHTML=String(sec);
        if(sec==20){
            sec=0;
            clearInterval(interval);
            elementclock.innerHTML="0000";
            setTimeout(addedOrRemove, 1000,tools,"hidden");
            addedOrRemove(tools,"disapear");
            setTimeout(addedOrRemove, 1000,bracelet,"hidden");
            addedOrRemove(bracelet,"disapear");
            localStorage.setItem('2',player.name+'/'+player.record+'/'+player.level+'/');
        }
    }
    let interval = setInterval(second,1000);
}



function runningLevel(gameinprogress){
    
    var Popuplevel = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      })
    var combination = randomJewelsInyector(gameinprogress.level.logicallevelforjewels);  
      Popuplevel.fire({
        html: combination,
        title: 'Memorize this pattern'
      })
      fillingBraceletInGame(gameinprogress.level.logicallevelforjewels);
      let eventtrigger = document.getElementById("sendit");
      eventtrigger.addEventListener("click",tester);
    function tester(){
        let verificator = "";
        let elementtocheck = document.getElementsByClassName("filled");
        for(let i=0;i<(gameinprogress.level.logicallevelforjewels);i++)
            {
                console.log("nivel adentro del for: "+gameinprogress.level.logicallevelforjewels)
                console.log(verificator);
            if(elementtocheck[i].style.backgroundImage!=undefined){
                verificator=verificator+elementtocheck[i].style.backgroundImage; 
            }else{
                  alert("please fill all the jewels");
                  return;
                }
            }
        
        if(verificator==combination){
            console.log("perfect");
            gameinprogress.level.newLevel()
            console.log(gameinprogress.level);
            gameinprogress.recordInGame();
            console.log("level:"+gameinprogress.record);
            console.log("level:"+gameinprogress.player.record);
            probamos(String(gameinprogress.record),"numbers-points")
            document.getElementById("sendit").removeEventListener("click",tester);
            verificator="";
            runningLevel(gameinprogress);
        }else{
            console.log("sorry you lose");
            resetGame();
            apearJewelsToReset();
            eventtrigger.removeEventListener("click",tester);
        }
    }
}

function apearJewelsToFill(level){
    let jewelstofillup = document.getElementsByClassName(`jewels-space`);
    for(let i=0;i<level;i++)
    {
        jewelstofillup[i].classList.remove("hiddenforjewels");
    }
}
function apearJewelsToReset(){
    let jewelstofillup = document.getElementsByClassName(`jewels-space`);
    for(let i=0;i<7;i++)
    {
        if(i!=0){
            jewelstofillup[i].classList.add("hiddenforjewels");
        }
    }
}

function resetGame(){

    startmenu = document.getElementsByClassName("the-start-menu-elements");
    gameelements = document.getElementsByClassName("the-game-elements");
    bracelettomake = document.getElementById("bracelettomake");
    toolsmaker = document.getElementById("toolsmaker");
    form = document.getElementById("newuserform");
    setTimeout(addedOrRemove,200,toolsmaker,"appear");
    setTimeout(addedOrRemove,200,toolsmaker,"hidden");
    setTimeout(addedOrRemove,200,bracelettomake,"appear");
    setTimeout(addedOrRemove,200,bracelettomake,"hidden");
    setTimeout(addedOrRemove,200,form,"disapear");
    setTimeout(addedOrRemove,200,form,"hidden");



}




















  /*
function theGameStartChallenge(jewels,bracelet){
    jewels.innerHTML = `
    <div class="row align-items-center" style="height: 100%;">
    <div class="col-2"><p>1</p><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"> </div>
    <div class="col-2"><p>2</p><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"> </div>
    <div class="col-2"><p>3</p><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"> </div>
    <div class="col-2"><p>4</p><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"> </div>
    <div class="col-2"><p>5</p><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"> </div>
    <div class="col-2"><p>6</p><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"> </div>
</div>`;
}

function theGameStartFillersButtons(jewels,bracelet){
    jewels.innerHTML = `
    
<div class="row" style="height: 75%;"></div>
<div id="picestouse">
<div class="row align-items-center" style="height: 100%;">
<div class="col-2"><button type="button" class="btn"><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"></button></div>
<div class="col-2"><button type="button" class="btn"><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"></button></div>
<div class="col-2"><button type="button" class="btn"><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"></button></div>
<div class="col-2"><button type="button" class="btn"><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"></button></div>
<div class="col-2"><button type="button" class="btn"><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"></button></div>
<div class="col-2"><button type="button" class="btn"><img src="assets/image/backgrounds/jewels/jewel-diamond.gif"></button></div>
</div></div>`;
}
*/