
var cleanIndex = function(){
    var elementstoclean = document.getElementsByTagName('div');

        console.log(elementstoclean[25].style.filter);
        elementstoclean[25].style.filter = `blur(${String((removePxFromPosition(elementstoclean[25].style.filter)+50))}px)`;

}


