const reverseString = function(word) {
    let newWord = word.slice(-1);
    for(let i = 2; i <= word.length; i++){
        newWord = newWord.concat(word.slice(-i,-(i-1)));
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
