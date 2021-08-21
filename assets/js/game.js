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
            this.leveltoshow = this.leveltoshow+1;
        }
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

//in local storage all the data is saved it in text format "string" this function filter every single variable from the string to create the player object

function recoverDataFromLocal(key){
    let name = '';
    let record = '';
    let level = '';
    let cache = '';
    let user;
    let usuario;
    let lengthofdata;
    if(localStorage.getItem(key)!=null){
        user = localStorage.getItem(key);
        lengthofdata = user.length;
    }else{
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


//this function make the start menu disappears and make the game appear

function startGame(){

    let startmenu = document.getElementsByClassName("the-start-menu-elements");
    let gameelements = document.getElementsByClassName("the-game-elements");
    fillRecordsTable();
    
    for(let i=0;i<startmenu.length;i++)
    {
        setTimeout(addedOrRemove,1500,startmenu[i],"hidden");
        setTimeout(addedOrRemove,1500,gameelements[i],"appear");
    }

}


//this function make possible to select the color and the shape of the jewels
function fillingBraceletInGame(level){

    let white = [`url('assets/image/backgrounds/jewels/heart-white.gif')`,`url('assets/image/backgrounds/jewels/octagon-white.gif')`,`url('assets/image/backgrounds/jewels/oval-white.gif')`,`url('assets/image/backgrounds/jewels/asscher-white.gif')`,`url('assets/image/backgrounds/jewels/marquise-white.gif')`,`url('assets/image/backgrounds/jewels/pear-white.gif')`,`url('assets/image/backgrounds/jewels/trillon-white.gif')`];
    let red = [`url('assets/image/backgrounds/jewels/heart-red.gif')`,`url('assets/image/backgrounds/jewels/octagon-red.gif')`,`url('assets/image/backgrounds/jewels/oval-red.gif')`,`url('assets/image/backgrounds/jewels/asscher-red.gif')`,`url('assets/image/backgrounds/jewels/marquise-red.gif')`,`url('assets/image/backgrounds/jewels/pear-red.gif')`,`url('assets/image/backgrounds/jewels/trillon-red.gif')`];
    let blue = [`url('assets/image/backgrounds/jewels/heart-blue.gif')`,`url('assets/image/backgrounds/jewels/octagon-blue.gif')`,`url('assets/image/backgrounds/jewels/oval-blue.gif')`,`url('assets/image/backgrounds/jewels/asscher-blue.gif')`,`url('assets/image/backgrounds/jewels/marquise-blue.gif')`,`url('assets/image/backgrounds/jewels/pear-blue.gif')`,`url('assets/image/backgrounds/jewels/trillon-blue.gif')`];
    let yellow = [`url('assets/image/backgrounds/jewels/heart-yellow.gif')`,`url('assets/image/backgrounds/jewels/octagon-yellow.gif')`,`url('assets/image/backgrounds/jewels/oval-yellow.gif')`,`url('assets/image/backgrounds/jewels/asscher-yellow.gif')`,`url('assets/image/backgrounds/jewels/marquise-yellow.gif')`,`url('assets/image/backgrounds/jewels/pear-yellow.gif')`,`url('assets/image/backgrounds/jewels/trillon-yellow.gif')`];
    let jewelstofillup = document.getElementsByClassName(`jewels-space`);
    let divdejoyas = document.getElementsByClassName("joyas");
    let joyas = document.getElementById("bracelettomake");
    let colors = document.getElementById("jewelscolors");
    let testbutton = document.getElementById("jewelstochose");
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
    });

    colors.addEventListener(`click`,function(){
        let itemstochange = document.getElementsByClassName("shapes");
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
    });

    testbutton.addEventListener("click", function (){
        try{
            if(cache.classList.contains("joyas")){
                    cache.style.backgroundImage = event.target.style.backgroundImage;
                    cache.classList.add("filled");
            }
        }catch(error){
            customAlert('Please select first the space to be filled');
            return;
        }
    });  
    
}

//the random jewels inyector like the name said inyect randome elements and the url addresses, this function make the random combination to be follow
function randomJewelsInyector(level){
    let elements = [];
    elements[0]="";
    elements[1]="";
    let jewelstocompare = [`url("assets/image/backgrounds/jewels/heart-blue.gif")`,`url("assets/image/backgrounds/jewels/heart-red.gif")`,`url("assets/image/backgrounds/jewels/heart-white.gif")`,`url("assets/image/backgrounds/jewels/heart-yellow.gif")`,`url("assets/image/backgrounds/jewels/octagon-blue.gif")`,`url("assets/image/backgrounds/jewels/octagon-red.gif")`,`url("assets/image/backgrounds/jewels/octagon-white.gif")`,`url("assets/image/backgrounds/jewels/octagon-yellow.gif")`,`url("assets/image/backgrounds/jewels/asscher-blue.gif")`,`url("assets/image/backgrounds/jewels/asscher-red.gif")`,`url("assets/image/backgrounds/jewels/asscher-white.gif")`,`url("assets/image/backgrounds/jewels/asscher-yellow.gif")`,`url("assets/image/backgrounds/jewels/marquise-blue.gif")`,`url("assets/image/backgrounds/jewels/marquise-red.gif")`,`url("assets/image/backgrounds/jewels/marquise-white.gif")`,`url("assets/image/backgrounds/jewels/marquise-yellow.gif")`,`url("assets/image/backgrounds/jewels/pear-blue.gif")`,`url("assets/image/backgrounds/jewels/pear-red.gif")`,`url("assets/image/backgrounds/jewels/pear-white.gif")`,`url("assets/image/backgrounds/jewels/pear-yellow.gif")`,`url("assets/image/backgrounds/jewels/trillon-blue.gif")`,`url("assets/image/backgrounds/jewels/trillon-red.gif")`,`url("assets/image/backgrounds/jewels/trillon-white.gif")`,`url("assets/image/backgrounds/jewels/trillon-yellow.gif")`];
    let jewelshtmlpopup = [`<img src='assets/image/backgrounds/jewels/heart-blue.gif'>`,`<img src='assets/image/backgrounds/jewels/heart-red.gif'>`,`<img src='assets/image/backgrounds/jewels/heart-white.gif'>`,`<img src='assets/image/backgrounds/jewels/heart-yellow.gif'>`,`<img src='assets/image/backgrounds/jewels/octagon-blue.gif'>`,`<img src='assets/image/backgrounds/jewels/octagon-red.gif'>`,`<img src='assets/image/backgrounds/jewels/octagon-white.gif'>`,`<img src='assets/image/backgrounds/jewels/octagon-yellow.gif'>`,`<img src='assets/image/backgrounds/jewels/asscher-blue.gif'>`,`<img src='assets/image/backgrounds/jewels/asscher-red.gif'>`,`<img src='assets/image/backgrounds/jewels/asscher-white.gif'>`,`<img src='assets/image/backgrounds/jewels/asscher-yellow.gif'>`,`<img src='assets/image/backgrounds/jewels/marquise-blue.gif'>`,`<img src='assets/image/backgrounds/jewels/marquise-red.gif'>`,`<img src='assets/image/backgrounds/jewels/marquise-white.gif'>`,`<img src='assets/image/backgrounds/jewels/marquise-yellow.gif'>`,`<img src='assets/image/backgrounds/jewels/pear-blue.gif'>`,`<img src='assets/image/backgrounds/jewels/pear-red.gif'>`,`<img src='assets/image/backgrounds/jewels/pear-white.gif'>`,`<img src='assets/image/backgrounds/jewels/pear-yellow.gif'>`,`<img src='assets/image/backgrounds/jewels/trillon-blue.gif'>`,`<img src='assets/image/backgrounds/jewels/trillon-red.gif'>`,`<img src='assets/image/backgrounds/jewels/trillon-white.gif'>`,`<img src='assets/image/backgrounds/jewels/trillon-yellow.gif'>`];
    for(let i=0;i<level;i++){
        let position = Math.round((Math.random()*23));
        elements[0] = elements[0]+jewelstocompare[position];
        elements[1] = elements[1] + (`<div class="jewels-to-show-popup">`+jewelshtmlpopup[position]+`<p>`+`${i+1}`+`</p>`+`</div>`);
    }
    return elements;
}

//this is the beginning of the game where its checked the name and the creation of the object user and game

function firstSteps(){
    let regex = new RegExp("^[0-9a-zA-Z\b]+$");
    let newplayer = new Player();
    let newuserform = document.getElementById("newuserform");
    let gameinprogress;
    let playername = document.getElementById("playername");
    if(playername.value == "" || !regex.test(playername.value)){
        customAlert("Please fill the player name, don't use space and simbols, thanks..");
    }else{
        newplayer.nameAsig(playername.value);
        gameinprogress = new Game(newplayer);
        runningLevel(gameinprogress);
        setTimeout(addedOrRemove, 50,newuserform,"hidden");
        addedOrRemove(newuserform,"appear");
    }
}

//this function make the same as gameSpacer but its only for new levels
function renewLevelsTools(bracelettomake,toolsmaker){
    setTimeout(addedOrRemove, 50,toolsmaker,"hidden");
    addedOrRemove(toolsmaker,"appear");
    setTimeout(addedOrRemove, 50,bracelettomake,"hidden");
    addedOrRemove(bracelettomake,"appear");
}



//start of a level
function runningLevel(gameinprogress){
    let bracelettomake = document.getElementById("bracelettomake");
    let toolsmaker = document.getElementById("toolsmaker");
    //popup with the combination to be used
    var Popuplevel = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
      });
    var combination = randomJewelsInyector(gameinprogress.level.logicallevelforjewels);  
      Popuplevel.fire({
        html: combination[1],
        title: 'Memorize this pattern',
      });
    let buttonconfirmation = Swal.getConfirmButton();
      
    buttonconfirmation.addEventListener('click',function(){
        renewLevelsTools(bracelettomake,toolsmaker);
    });
    
    //function to make posible fillup the empty spaces with jewels
    fillingBraceletInGame(gameinprogress.level.logicallevelforjewels);
    let eventtrigger = document.getElementById("sendit");
    let key;
    
    eventtrigger.addEventListener("click",tester);
    //function tester, test if the combination is okay
    
    function tester(){
        buttonconfirmation.removeEventListener('click',function(){
            renewLevelsTools(bracelettomake,toolsmaker);
        });

        let verificator = "";
        let elementtocheck = document.getElementsByClassName("filled");
        //check if all the spaces are filled before test
        for(let i=0;i<(gameinprogress.level.logicallevelforjewels);i++)
        {
            if(elementtocheck[i]!=undefined){
                verificator=verificator+elementtocheck[i].style.backgroundImage; 
            }else{
                submition();
                customAlert("Ohh You lose, Remember to complet all the spaces with the correct pattern, and do not leave empty ones.");
                return;
            }
        }

        //submit of the combination maded by the user

        function submition(){

            if(verificator==combination[0]){

                //we record the level in the interface

                document.getElementById("levelingametoshow").innerHTML =  "LEVEL " + gameinprogress.level.leveltoshow;
                gameinprogress.level.newLevel();
                gameinprogress.recordInGame();
                probamos(String(gameinprogress.record),"numbers-points");
                document.getElementById("sendit").removeEventListener("click",tester);
                verificator="";
                resetBackGroundJewels(elementtocheck);
                renewLevelsTools(bracelettomake,toolsmaker);
                runningLevel(gameinprogress);

            }else{
                //the user loses, so next step is record the data in the localstorage
                customAlert("Ohh You lose, Remember to complet all the spaces with the correct pattern, and do not leave empty ones.");
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
                    }else{
                        key = 8;
                        orderRecords();
                        localStorage.setItem(key,gameinprogress.player.name+'/'+gameinprogress.record+'/'+gameinprogress.level.leveltoshow+'/'+gameinprogress.player.identifier);
                        fillRecordsTable();
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
    let bracelettomake = document.getElementById("bracelettomake");
    let toolsmaker = document.getElementById("toolsmaker");
    let form = document.getElementById("newuserform");
    setTimeout(addedOrRemove,200,toolsmaker,"appear");
    setTimeout(addedOrRemove,200,toolsmaker,"hidden");
    setTimeout(addedOrRemove,200,bracelettomake,"appear");
    setTimeout(addedOrRemove,200,bracelettomake,"hidden");
    setTimeout(addedOrRemove,200,form,"disapear");
    setTimeout(addedOrRemove,200,form,"hidden");
}

// with this function we create a row of the last users data, like name,record, and level
function createCellRecords(name,level,score){
    let table = document.getElementById("recordstable");
    let row =  document.createElement(`tr`);
    row.classList.add("data");
    let celName = document.createElement("td");
    let celLevel = document.createElement("td");
    let celScore = document.createElement("td");
    celName.innerHTML= `<p>`+name+`</p>`;
    celLevel.innerHTML= `<p class="levelandscore">`+level+`</p>`;
    celScore.innerHTML= `<p class="levelandscore">`+score+`</p>`;
    row.appendChild(celName);
    row.appendChild(celLevel);
    row.appendChild(celScore);
    table.appendChild(row);
}

//because is an array of users, this function give some order to this user array to make them more nice to see it, in this case the order is by record
function orderRecords(){

    let users = [];
    if(localStorage.length>0)
    {
        let j = 1;
        for(let i=0;i<localStorage.length;i++){
            if(recoverDataFromLocal(j)!=false){
                users[i]=recoverDataFromLocal(j);
                j++;
            }else{
                j++;i--;
            }
        }
    }

    let n, i, k, aux;
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
    if(users.length==8){
        for(let i=users.length-1;i>=0;i--){
            localStorage.setItem(String(8-i),users[i].name+'/'+users[i].record+'/'+users[i].level+'/'+users[i].identifier);
        }
    }
    return users;
}

//this function fillup the html record table and execute the maximumRecord function to record the best record in the record square
function fillRecordsTable(){
    cleanRowsRecords();
    let usersordered = orderRecords();
    for(let counter=usersordered.length-1;counter>=0;counter--){
        createCellRecords(usersordered[counter].name,usersordered[counter].level,usersordered[counter].record);
    }
    maximumRecord();
}

//this small function take the best record from the table and call the probamos function to record this record en the record square
function maximumRecord(){

    let records=document.getElementsByClassName("data");
    if(records[0]!=undefined)
    {
        let maxrecord = records[0].children[2].firstElementChild.innerText;
        probamos(maxrecord,"numbers-record");
    }else{
        return;
    }

}

//when a game finished to avoid duplicated data this function clean the entire table for new data
function cleanRowsRecords(){
    let rowstoclean = document.getElementsByClassName("data");
    let aux=rowstoclean.length;
    for(let i=0;i<aux;i++)
    {
        document.getElementById("recordstable").deleteRow(1);
    }
}

function customAlert(text){
    var Popupsuccess = Swal.mixin({
        toast: true,
        icon: 'error',
        showConfirmButton: false,
        position: 'center',
        timer: 5000,
      });
      Popupsuccess.fire({
        title: text,
      });
}








