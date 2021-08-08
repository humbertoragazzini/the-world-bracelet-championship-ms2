
//this small function filter all letters from the blur position "blur(" and "px)" 

var removePxFromPosition = function(position){
    let filter1 = position.replace(/blur\(/,'');
    let filter2 = filter1.replace(/px\)/,'')
    let number = Number(filter2);
    return number;
}

var addedOrRemove = function(element,classtoadd){
    element.classList.toggle(classtoadd);}

var gameTimer = function(){
    let   sec = 0;
    function second(){
    sec++;
        if(sec==20){
            sec=0;
            clearInterval(interval);
        }
    console.log(sec);
    }
    let interval = setInterval(second,1000);
    
}