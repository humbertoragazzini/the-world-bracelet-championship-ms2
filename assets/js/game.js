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

document.addEventListener("DOMContentLoaded",function(){
new jBox('Modal', {
    width: 300,
    height: 100,
    attach: '#myModal',
    title: 'My Modal Window',
    content: '<i>Hello there!</i>'
  })})































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