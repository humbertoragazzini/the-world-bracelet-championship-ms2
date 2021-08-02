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

function popupgamestart(){
    let thejewelposition = document.getElementById('picestouse');
    let thebraceletposition = document.getElementById('bracelettomake');

    thejewelposition.innerHTML = '<p>In this place will be every single jewel to use, remember the positions, shape and colors, it will be the differece betwen be a champion or just another bracelet maker</p>';
    thebraceletposition.innerHTML = '<p>And in this other place you will have the bracelet ready to be filled, again be careful, you have to fill it with the jewels in the correct positions, colors and shapes, inside of the holes where the jewels have to be fitted you will see a number, this number correspond to the actual position, wich is randomly changed</p>';
    setTimeout(theGameStart,4000,thejewelposition,thebraceletposition);
}

function theGameStart(jewels,bracelet){
    jewels.innerHTML = `<div class="row align-items-center" style="
    height: 100%;
">
    <div class="col-2"><p>First</p><img src="assets/image/backgrounds/jewels/jewel-square.gif"> </div>
    <div class="col-2"><p>Second</p><img src="assets/image/backgrounds/jewels/jewel-square.gif"> </div>
    <div class="col-2"><p>Third</p><img src="assets/image/backgrounds/jewels/jewel-square.gif"> </div>
    <div class="col-2"><p>Fourth</p><img src="assets/image/backgrounds/jewels/jewel-square.gif"> </div>
    <div class="col-2"><p>Fiveht</p><img src="assets/image/backgrounds/jewels/jewel-square.gif"> </div>
    <div class="col-2"><p>Sixht</p><img src="assets/image/backgrounds/jewels/jewel-square.gif"> </div>
</div>`;
}

  setTimeout(popupgamestart, 3000);