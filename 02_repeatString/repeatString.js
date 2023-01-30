const repeatString = function(word, repeats) {
    let sentence = '';
    for(let i = 0; i < repeats; i++){
        sentence = sentence.concat(word);
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
