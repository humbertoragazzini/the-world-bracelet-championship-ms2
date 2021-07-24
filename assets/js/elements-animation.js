
var cleanIndex = function(){

    var elementstoclean = document.getElementsByClassName('main-menu-element');
    let fadeupintervals = [];

        for(let i=0;i<elementstoclean.length;i++)
            {
                elementstoclean[i].style.opacity = 1;
                fadeupintervals[i] = setInterval(fadeUp,100,elementstoclean[i]);
            }
        
    function fadeUp(element,interval)
        {
            console.log("sigue haciendo looping")
            if(removePxFromPosition(element.style.filter)<150){
                element.style.filter = `blur(${String((removePxFromPosition(element.style.filter)+5))}px)`;
                element.style.opacity = element.style.opacity - 0.034;
            }else{
                element.remove();
                if(elementstoclean.length==0)
                {
                    clearIntervals();
                }               
            }            
        }
    
    function clearIntervals()
    {
        for(let i=0;i<fadeupintervals.length;i++)
            {
                clearInterval(fadeupintervals[i]);
            } 
    }
}


