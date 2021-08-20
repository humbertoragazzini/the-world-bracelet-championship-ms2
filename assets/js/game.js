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
      let user;
      let flag;
      let usuario;
      let lengthofdata;
      if(localStorage.getItem(key)!=null)
      {
        user = localStorage.getItem(key);
        lengthofdata = user.length;
      }else{
        console.log("catch");
        lengthofdata=(-1);
    }
      let i = 0;
      

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
    if(lengthofdata!=(-1)){
        usuario = new Player(name,record,level);
    }else{
        usuario=false;
    }
     
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

    let colorsarray = [`url('assets/image/backgrounds/jewels/jewel-diamond-white.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-red.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-blue.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-yellow.gif')`]; 
    let white = [`url('assets/image/backgrounds/jewels/heart-white.gif')`,`url('assets/image/backgrounds/jewels/octagon-white.gif')`,`url('assets/image/backgrounds/jewels/oval-white.gif')`,`url('assets/image/backgrounds/jewels/asscher-white.gif')`,`url('assets/image/backgrounds/jewels/marquise-white.gif')`,`url('assets/image/backgrounds/jewels/pear-white.gif')`,`url('assets/image/backgrounds/jewels/trillon-white.gif')`];
    let red = [`url('assets/image/backgrounds/jewels/heart-red.gif')`,`url('assets/image/backgrounds/jewels/octagon-red.gif')`,`url('assets/image/backgrounds/jewels/oval-red.gif')`,`url('assets/image/backgrounds/jewels/asscher-red.gif')`,`url('assets/image/backgrounds/jewels/marquise-red.gif')`,`url('assets/image/backgrounds/jewels/pear-red.gif')`,`url('assets/image/backgrounds/jewels/trillon-red.gif')`];
    let blue = [`url('assets/image/backgrounds/jewels/heart-blue.gif')`,`url('assets/image/backgrounds/jewels/octagon-blue.gif')`,`url('assets/image/backgrounds/jewels/oval-blue.gif')`,`url('assets/image/backgrounds/jewels/asscher-blue.gif')`,`url('assets/image/backgrounds/jewels/marquise-blue.gif')`,`url('assets/image/backgrounds/jewels/pear-blue.gif')`,`url('assets/image/backgrounds/jewels/trillon-blue.gif')`];
    let yellow = [`url('assets/image/backgrounds/jewels/heart-yellow.gif')`,`url('assets/image/backgrounds/jewels/octagon-yellow.gif')`,`url('assets/image/backgrounds/jewels/oval-yellow.gif')`,`url('assets/image/backgrounds/jewels/asscher-yellow.gif')`,`url('assets/image/backgrounds/jewels/marquise-yellow.gif')`,`url('assets/image/backgrounds/jewels/pear-yellow.gif')`,`url('assets/image/backgrounds/jewels/trillon-yellow.gif')`];
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
                itemstochange[i].style.backgroundImage=white[i];
            }
        }
        if(event.target.innerHTML=="Red"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=red[i];
            }
        }
        if(event.target.innerHTML=="Blue"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=blue[i];
            }
        }
        if(event.target.innerHTML=="Yellow"){
            for(let i=0;i<itemstochange.length;i++){
                itemstochange[i].style.backgroundImage=yellow[i];
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
    let jc1= `url("assets/image/backgrounds/jewels/heart-blue.gif")`;
    let jc2= `url("assets/image/backgrounds/jewels/heart-red.gif")`;
    let jc3= `url("assets/image/backgrounds/jewels/heart-white.gif")`;
    let jc4= `url("assets/image/backgrounds/jewels/heart-yellow.gif")`;
    let jc5= `url("assets/image/backgrounds/jewels/octagon-blue.gif")`;
    let jc6= `url("assets/image/backgrounds/jewels/octagon-red.gif")`;
    let jc7= `url("assets/image/backgrounds/jewels/octagon-white.gif")`;
    let jc8= `url("assets/image/backgrounds/jewels/octagon-yellow.gif")`;
    let jc9= `url("assets/image/backgrounds/jewels/asscher-blue.gif")`;
    let jc10= `url("assets/image/backgrounds/jewels/asscher-red.gif")`;
    let jc11= `url("assets/image/backgrounds/jewels/asscher-white.gif")`;
    let jc12= `url("assets/image/backgrounds/jewels/asscher-yellow.gif")`;
    let jc13= `url("assets/image/backgrounds/jewels/marquise-blue.gif")`;
    let jc14= `url("assets/image/backgrounds/jewels/marquise-red.gif")`;
    let jc15= `url("assets/image/backgrounds/jewels/marquise-white.gif")`;
    let jc16= `url("assets/image/backgrounds/jewels/marquise-yellow.gif")`;
    let jc17= `url("assets/image/backgrounds/jewels/pear-blue.gif")`;
    let jc18= `url("assets/image/backgrounds/jewels/pear-red.gif")`;
    let jc19= `url("assets/image/backgrounds/jewels/pear-white.gif")`;
    let jc20= `url("assets/image/backgrounds/jewels/pear-yellow.gif")`;
    let jc21= `url("assets/image/backgrounds/jewels/trillon-blue.gif")`;
    let jc22= `url("assets/image/backgrounds/jewels/trillon-red.gif")`;
    let jc23= `url("assets/image/backgrounds/jewels/trillon-white.gif")`;
    let jc24= `url("assets/image/backgrounds/jewels/trillon-yellow.gif")`;
    let jewelstocompare = [jc1,jc2,jc3,jc4,jc5,jc6,jc7,jc8,jc9,jc10,jc11,jc12,jc13,jc14,jc15,jc16,jc17,jc18,jc19,jc20,jc21,jc22,jc23,jc24];
    let jp1= `<img src='assets/image/backgrounds/jewels/heart-blue.gif'>`;
    let jp2=`<img src='assets/image/backgrounds/jewels/heart-red.gif'>`;
    let jp3=`<img src='assets/image/backgrounds/jewels/heart-white.gif'>`;
    let jp4=`<img src='assets/image/backgrounds/jewels/heart-yellow.gif'>`;
    let jp5=`<img src='assets/image/backgrounds/jewels/octagon-blue.gif'>`;
    let jp6=`<img src='assets/image/backgrounds/jewels/octagon-red.gif'>`;
    let jp7=`<img src='assets/image/backgrounds/jewels/octagon-white.gif'>`;
    let jp8=`<img src='assets/image/backgrounds/jewels/octagon-yellow.gif'>`;
    let jp9=`<img src='assets/image/backgrounds/jewels/asscher-blue.gif'>`;
    let jp10=`<img src='assets/image/backgrounds/jewels/asscher-red.gif'>`;
    let jp11=`<img src='assets/image/backgrounds/jewels/asscher-white.gif'>`;
    let jp12=`<img src='assets/image/backgrounds/jewels/asscher-yellow.gif'>`;
    let jp13=`<img src='assets/image/backgrounds/jewels/marquise-blue.gif'>`;
    let jp14=`<img src='assets/image/backgrounds/jewels/marquise-red.gif'>`;
    let jp15=`<img src='assets/image/backgrounds/jewels/marquise-white.gif'>`;
    let jp16=`<img src='assets/image/backgrounds/jewels/marquise-yellow.gif'>`;
    let jp17=`<img src='assets/image/backgrounds/jewels/pear-blue.gif'>`;
    let jp18=`<img src='assets/image/backgrounds/jewels/pear-red.gif'>`;
    let jp19=`<img src='assets/image/backgrounds/jewels/pear-white.gif'>`;
    let jp20=`<img src='assets/image/backgrounds/jewels/pear-yellow.gif'>`;
    let jp21=`<img src='assets/image/backgrounds/jewels/trillon-blue.gif'>`;
    let jp22=`<img src='assets/image/backgrounds/jewels/trillon-red.gif'>`;
    let jp23=`<img src='assets/image/backgrounds/jewels/trillon-white.gif'>`;
    let jp24=`<img src='assets/image/backgrounds/jewels/trillon-yellow.gif'>`;
    let jewelshtmlpopup = [jp1,jp2,jp3,jp4,jp5,jp6,jp7,jp8,jp9,jp10,jp11,jp12,jp13,jp14,jp15,jp16,jp17,jp18,jp19,jp20,jp21,jp22,jp23,jp24];
    for(let i=0;i<level;i++){
        position = Math.round((Math.random()*23));
        elements[0] = elements[0]+jewelstocompare[position];
        elements[1] = elements[1] + (`<div class="jewels-to-show-popup">`+jewelshtmlpopup[position]+`<p>`+`${i+1}`+`</p>`+`</div>`);
    }
    return elements;
}

//this is the beginning of the game where its checked the name and the creation of the object user and game
function firstSteps(){
    let regex = new RegExp("^[0-9a-zA-Z\b]+$");
    let intro;
    let newplayer = new Player();
    let bracelettomake = document.getElementById("bracelettomake");
    let toolsmaker = document.getElementById("toolsmaker");
    let newuserform = document.getElementById("newuserform");
    let gameinprogress
    playername = document.getElementById("playername");
    if(playername.value == "" || !regex.test(playername.value)){
        alert("Please fill the name player, don't use spaces and simbols, thanks..");
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



//start of a level
function runningLevel(gameinprogress){
    //popup with the combination to be used
    var Popuplevel = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 20000,
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
      eventtrigger.addEventListener("click",tester);
      //function tester, test if the combination is okay
    
    function tester(){
        let verificator = "";
        let elementtocheck = document.getElementsByClassName("filled");
        //check if all the spaces are filled before test
        for(let i=0;i<(gameinprogress.level.logicallevelforjewels);i++)
            {
            if(elementtocheck[i]!=undefined){
                verificator=verificator+elementtocheck[i].style.backgroundImage; 
            }else{
                  submition();
                  alert("Remember to complet all the spaces, try again");
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
                if(localStorage.length==0)
                {
                    key = 1;
                    localStorage.setItem(key,gameinprogress.player.name+'/'+gameinprogress.record+'/'+gameinprogress.level.leveltoshow+'/'+gameinprogress.player.identifier);
                    orderRecords();
                    fillRecordsTable();
                }else{
                    if(localStorage.length<8)
                    {
                        key = localStorage.length + 1;
                        localStorage.setItem(key,gameinprogress.player.name+'/'+gameinprogress.record+'/'+gameinprogress.level.leveltoshow+'/'+gameinprogress.player.identifier);
                        fillRecordsTable();
                        console.log("paso por el if");
                    }else{
                        key = 8;
                        orderRecords();
                        localStorage.setItem(key,gameinprogress.player.name+'/'+gameinprogress.record+'/'+gameinprogress.level.leveltoshow+'/'+gameinprogress.player.identifier);
                        fillRecordsTable();
                        console.log(localStorage.length);
                    }
                    
                
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
    celLevel.innerHTML= `<p class="levelandscore">`+level+`</p>`;
    celScore.innerHTML= `<p class="levelandscore">`+score+`</p>`;
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

        console.log(localStorage.length);
        console.log("llego al orderrecords");
        let j = 1;
        for(let i=0;i<localStorage.length;i++){
            if(recoverDataFromLocal(j)!=false){
                users[i]=recoverDataFromLocal(j);
                j++;
            }else{j++;i--;}

        }//hacer un try catch adentro de recoverdatafromlocal, que si falla retorne false, y que si funciona que retorne true, y asi podel levantar la informacion sin depender del key
    console.log(users);
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
    let j=0;
    console.log(users.length);
    if(users.length==8){
    for(let i=users.length-1;i>=0;i--){
        localStorage.setItem(String(8-i),users[i].name+'/'+users[i].record+'/'+users[i].level+'/'+users[i].identifier);
        console.log("para verificar el orden en esta funcion"+j+1,users[i].name+'/'+users[i].record+'/'+users[i].level+'/'+users[i].identifier);
    }
    }
    return users;
}

//this function fillup the html record table and execute the maximumRecord function to record the best record in the record square
function fillRecordsTable(){
    console.log("llego al fillrecords");
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
    if(records[0]!=undefined)
    {
        maxrecord = records[0].children[2].firstElementChild.innerText;
        probamos(maxrecord,"numbers-record");
    }else{
        return;
    }

    

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


function counterClock(sec){
    if(sec<10){sec++}
    else{}
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