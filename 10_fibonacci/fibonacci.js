const fibonacci = function(number) {
    if(number < 0) return "OOPS";
    if(number == 1 || number == 2){
        return 1;
    }
    let fibSequence = new Array(number+2);
    let index = 2;
    fibSequence[0] = 0;
    fibSequence[1] = 1;
    for(index; index <=number; index++){
        fibSequence[index] = fibSequence[index-1] + fibSequence[index-2];
    }
    return fibSequence[number];
};

// Do not edit below this line
module.exports = fibonacci;
