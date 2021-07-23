var removePxFromPosition = function(position){
    let filter1 = position.replace(/blur\(/,'');
    let filter2 = filter1.replace(/px\)/,'')
    let number = Number(filter2);
    return number;
}