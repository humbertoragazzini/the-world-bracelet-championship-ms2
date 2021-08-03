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
    let gamingwindow = document.getElementById("thebody")
    gamingwindow.innerHTML = `
    <div id="animated-background" class="container appear">
    <div id="a" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="b" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="c" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    <div id="d" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="e" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="f" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    <div id="g" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="H" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="I" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    <div id="J" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="K" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="N" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    <div id="M" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="O" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="P" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    <div id="q" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="R" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="S" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    <div id="T" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-triangle.gif'></div>
    <div id="U" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-square.gif'></div>
    <div id="Y" class="moving-jewels "><img src='assets/image/backgrounds/jewels/jewel-diamond.gif'></div>
    
<div id="tittle" class="row justify-content-center spacer-bottom spacer-top">
    <div class="col-6">
        <div class="lvl-background">
            <p id="text-squares">LEVEL 1</p>
        </div>
    </div>
    <div class="col-6">
        <div class="lvl-background">
            <p id="text-squares">00:00</p>
        </div>
    </div>
</div>
<div id="panel-score-record" class="row spacer-bottom align-items-center">
    <div id="score" class="col-6">
        <div class="lvl-background score-record-background">
            <p id="text-squares" class="core-record-tittle">SCORE</p>
            <div class="points">
                <span class="numbers-points">0</span>
            </div>
            <div class="points">
                <span class="numbers-points">0</span>
            </div>
            <div class="points">
                <span class="numbers-points">0</span>
            </div>
            <div class="points">
                <span class="numbers-points">0</span>
            </div>
            <div class="points">
                <span class="numbers-points">0</span>
            </div>
            <div class="points">
                <span class="numbers-points">0</span>
            </div>
        </div>
    </div>
    <div id="record" class="col-6">
        <div class="lvl-background score-record-background">
            <p id="text-squares" class="core-record-tittle">RECORD</p>
            <div class="points">
                <span class="numbers-record">0</span>
            </div>
            <div class="points">
                <span class="numbers-record">0</span>
            </div>
            <div class="points">
                <span class="numbers-record">0</span>
            </div>
            <div class="points">
                <span class="numbers-record">0</span>
            </div>
            <div class="points">
                <span class="numbers-record">0</span>
            </div>
            <div class="points">
                <span class="numbers-record">0</span>
            </div>
        </div>
    </div>
</div>
<div id="game-in-progres" class="row spacer-bottom">
    <div class="col">
        <div id="gamewindows" class="lvl-background">
            
        </div>
    </div>
</div>
</div>
<script>
theGameStart()
</script>
    `
}

function popupgamestart(){
    let thejewelposition = document.getElementById('gamewindows');

    thejewelposition.innerHTML = `
        <p class="appear">In this place will be every single jewel to use, remember the positions, shape and colors, it will be the differece betwen be a champion or just another bracelet maker</p>
        <p class="appear">And in this other place you will have the bracelet ready to be filled, again be careful, you have to fill it with the jewels in the correct positions, colors and shapes, inside of the holes where the jewels have to be fitted you will see a number, this number correspond to the actual position, wich is randomly changed</p>`;
    }

  setTimeout(popupgamestart, 3000);





























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