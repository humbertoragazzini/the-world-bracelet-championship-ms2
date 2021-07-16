
function modificar(){
    
    jewels = document.getElementsByClassName("moving-jewels");
    
    for(i = 0;i < jewels.length;i++)
        {   
            var position = jewels[i].getBoundingClientRect();

            var bodysize = document.getElementById("main").getBoundingClientRect();

            var left;
            if(position.left < bodysize.width)
            {
                console.log(bodysize.width);
                var left = position.left;
                console.log(left );
                left=left+57.1;
                console.log(left );
                jewels[i].style.left = String(left)+"px";
                console.log(jewels[i].style.left);
            }
            else{
                left = 0;
            }
            
        }
    console.log("afuera");
}

function interval() {
    setInterval(modificar, 2000);
  }