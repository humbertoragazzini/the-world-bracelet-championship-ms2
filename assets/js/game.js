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

  function recoverUser(data){
      let user = new Player(name,record,level,identifier);
  }

  var beto = new Player("jorge",156488,4,1);


  localStorage.setItem('1',beto.name+'/'+beto.record+'/'+beto.level+'/'+beto.identifier);

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



function startGame(){
    startmenu = document.getElementsByClassName("the-start-menu-elements");
    gameelements = document.getElementsByClassName("the-game-elements");

    function added(element,classtoadd){
        element.classList.add(classtoadd);
    }
    for(let i=0;i<startmenu.length;i++)
    {
        setTimeout(added,1500,startmenu[i],"hidden");
        setTimeout(added,1500,gameelements[i],"appear");
    }

}

function fillingBraceletInGame(){

    let colorsarray = [`url('assets/image/backgrounds/jewels/jewel-diamond-white.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-red.png')`,`url('assets/image/backgrounds/jewels/jewel-diamond-blue.png')`]; 
    let j = 0;
    divdejoyas = document.getElementsByClassName("joyas");
    joyas = document.getElementById("bracelettomake");
    colors = document.getElementById("jewelscolors");
    testbutton = document.getElementById("jewelstochose");
    let cache;
    
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
            }
          } catch (error) {
              alert("please select first witch place you want to fill up");
          }
    });  
    
}

function gameInProgress(){
    let intro;
    
    let newplayer = new Player();

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