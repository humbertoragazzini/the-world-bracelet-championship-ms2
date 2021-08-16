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
// class level 
class Level{

    constructor(){
        this.logicallevelforjewels=1;
        this.leveltoshow = 1;
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

  

//in local storage all the data is saved it in text format "string" this function filter every single variable from the string to create the player object
  function recoverDataFromLocal(key){
      let name = '';
      let record = '';
      let level = '';
      let cache = '';
      let user = localStorage.getItem(key);
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

    let usuario = new Player(name,record,level);
    return usuario;
  }


//this function make the start menu disapear and make the game apear
function startGame(){
    startmenu = document.getElementsByClassName("the-start-menu-elements");
    gameelements = document.getElementsByClassName("the-game-elements");
    fillRecordsTable();
    for(let i=0;i<startmenu.length;i++)
    {
        setTimeout(addedOrRemove,1500,startmenu[i],"hidden");
        setTimeout(addedOrRemove,1500,gameelements[i],"appear");
    }

}


//this function make posible to select the color and the shape of the jewels
function fillingBraceletInGame(level){

    let colorsarray = [`url('assets/image/backgrounds/jewels/jewel-diamond-white.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-red.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-blue.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-yellow.png')`]; 
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
        if(event.target.innerHTML==`<p>White</p>`){
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
        if(event.target.innerHTML=="Yellow"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=colorsarray[3];
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

//the random jewels inyector like the name said inyect randome elements and the url addresses, this function make the random combination to be follow
function randomJewelsInyector(level){
    let elements = [];
    elements[0]="";
    elements[1]="";
    let caca= `url("assets/image/backgrounds/jewels/jewel-diamond-white.png")`;
    let caca2= `url("assets/image/backgrounds/jewels/jewel-diamond-red.png")`;
    let caca3= `url("assets/image/backgrounds/jewels/jewel-diamond-yellow.png")`;
    let caca4= `url("assets/image/backgrounds/jewels/jewel-diamond-red.png")`;
    let jewels = [caca,caca2,caca3,caca4,caca,caca2,caca3,caca4];
    let caca1= `<img src='assets/image/backgrounds/jewels/jewel-diamond-white.png'>`;
    let caca12=`<img src='assets/image/backgrounds/jewels/jewel-diamond-red.png'>`;
    let caca13=`<img src='assets/image/backgrounds/jewels/jewel-diamond-yellow.png'>`;
    let caca14=`<img src='assets/image/backgrounds/jewels/jewel-diamond-red.png'>`;
    let jewels1 = [caca1,caca12,caca13,caca14,caca1,caca12,caca13,caca14];
    for(let i=0;i<level;i++){
        position = Math.round((Math.random()*6));
        elements[0] = elements[0]+jewels[position];
        elements[1] = elements[1] + jewels1[position];
    }
    return elements;
}

//this is the beginning of the game where its checked the name and the creation of the object user and game
function firstSteps(){
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

//this function make visible the game area
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


//start of a level
function runningLevel(gameinprogress){
    //popup with the combination to be used
    var Popuplevel = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
      })
    var combination = randomJewelsInyector(gameinprogress.level.logicallevelforjewels);  
      Popuplevel.fire({
        html: combination[1],
        title: 'Memorize this pattern'
      })
      //function to make posible fillup the empty spaces with jewels
      fillingBraceletInGame(gameinprogress.level.logicallevelforjewels);
      let eventtrigger = document.getElementById("sendit");
      let key;
      let timeoff = setTimeout(tester,10000);
      eventtrigger.addEventListener("click",tester);
      //function tester, test if the combination is okay
    function tester(){
        //this timeout was declare before to give time limite to complete the level
        clearTimeout(timeoff);
        let verificator = "";
        let elementtocheck = document.getElementsByClassName("filled");
        //check if all the spaces are filled before test
        for(let i=0;i<(gameinprogress.level.logicallevelforjewels);i++)
            {
            if(elementtocheck[i]!=undefined){
                verificator=verificator+elementtocheck[i].style.backgroundImage; 
            }else{
                  alert("please fill all the jewels");
                  return;
                }
            }
        //submit of the combination maded by the user
        function submition(){

            if(verificator==combination[0]){
                //we record the level in the interface
                document.getElementById("levelingametoshow").innerHTML =  "LEVEL " + gameinprogress.level.leveltoshow;
                gameinprogress.level.newLevel()
                gameinprogress.recordInGame();
                probamos(String(gameinprogress.record),"numbers-points");
                document.getElementById("sendit").removeEventListener("click",tester);
                verificator="";
                resetBackGroundJewels(elementtocheck);
                runningLevel(gameinprogress);
            }else{
                //the user lose, so next step its record the data in the localstorage
                if(localStorage.length=0)
                {
                    key = 1;
                    localStorage.setItem(key,gameinprogress.player.name+'/'+gameinprogress.record+'/'+gameinprogress.level.leveltoshow+'/'+gameinprogress.player.identifier);
                }else{
                    key = localStorage.length + 1;
                    localStorage.setItem(key,gameinprogress.player.name+'/'+gameinprogress.record+'/'+gameinprogress.level.leveltoshow+'/'+gameinprogress.player.identifier);
                    fillRecordsTable();
                }
                //we reset the interface to make all be ready to use again
                resetGame();
                apearJewelsToReset();
                eventtrigger.removeEventListener("click",tester);
            }
        }
        submition();
    }
}


//this function make the space appear to be accesible for user
function apearJewelsToFill(level){
    let jewelstofillup = document.getElementsByClassName(`jewels-space`);
    for(let i=0;i<level;i++)
    {
        jewelstofillup[i].classList.remove("hiddenforjewels");
    }
}
//we reset the status of the spaces to make them ready for a next filling
function apearJewelsToReset(){
    let jewelstofillup = document.getElementsByClassName(`jewels-space`);
    for(let i=0;i<7;i++)
    {
        if(i!=0){
            jewelstofillup[i].style.backgroundImage="";
            jewelstofillup[i].classList.add("hiddenforjewels");
            jewelstofillup[i].classList.remove("filled");
        }else{
            jewelstofillup[0].style.backgroundImage="";
            jewelstofillup[0].classList.remove("filled");
        }
    }
}

//because we use the background like a shape and color of the jewels, we reset this background to "" for a future level
function resetBackGroundJewels(jewelstoreset){
    for(let i=0;i<jewelstoreset.length;i++)
        {
            jewelstoreset[i].style.backgroundImage="";
        }
}


//this function basically make all the html elements disappear and appear depending of the element to make the game area ready for a next user
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

// with this function we create a row of the last users data like name,record, and level
function createCellRecords(name,level,score){
    table = document.getElementById("recordstable");
    row =  document.createElement(`tr`);
    row.classList.add("data");
    celName = document.createElement("td");
    celLevel = document.createElement("td");
    celScore = document.createElement("td");
    celName.innerHTML= `<p>`+name+`</p>`;
    celLevel.innerHTML= `<p>`+level+`</p>`;
    celScore.innerHTML= `<p>`+score+`</p>`;
    row.appendChild(celName);
    row.appendChild(celLevel);
    row.appendChild(celScore);
    table.appendChild(row);
}

//because its a array of users, this function give some order to this user array to make them more nice to see it, in this case the order its by record
function orderRecords(){

    let users = [];
    if(localStorage.length>0)
    {
        for(let i=0;i<localStorage.length;i++){
            users[i]=recoverDataFromLocal(i+1);
        }
    }

    var n, i, k, aux;
    n = users.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (Number(users[i].record) > Number(users[i + 1].record)) {
                aux = users[i];
                users[i] = users[i + 1];
                users[i + 1] = aux;
            }
        }
    }

    return users;
}

//this function fillup the html record table and execute the maximumRecord function to record the best record in the record square
function fillRecordsTable(){
    
    cleanRowsRecords()
    usersordered = orderRecords();
    counter=usersordered.length-1;
    for(counter;counter>=0;counter--){
        createCellRecords(usersordered[counter].name,usersordered[counter].level,usersordered[counter].record)
    }
    maximumRecord();
}

//this small function take the best record from the table and call the probamos function to record this record en the record square
function maximumRecord(){
    records=document.getElementsByClassName("data");
    maxrecord = records[0].children[2].firstElementChild.innerText;
    probamos(maxrecord,"numbers-record");
}

//when a game finished to avoid duplicated data this function clean the entery table for new data
function cleanRowsRecords(){
    rowstoclean = document.getElementsByClassName("data");
    aux=rowstoclean.length;
    for(let i=0;i<aux;i++)
    {
        document.getElementById("recordstable").deleteRow(1);
    }
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