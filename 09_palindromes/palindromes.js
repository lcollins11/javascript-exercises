const palindromes = function (word) {
    let oldWord = word.toLowerCase()
                    .replace(/[^\w\s\']|_/g, "")
                    .replace(/\s/g, "");
    const reversedWord = Array.from(oldWord).reverse().join('');
    return oldWord == reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
