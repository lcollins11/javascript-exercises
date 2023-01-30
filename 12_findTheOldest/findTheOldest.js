const findTheOldest = function(array) {
    const sortedArray = array.sort(function(a, b) {
        if(!a.yearOfDeath){
            a.yearOfDeath = new Date().getFullYear();
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear();
        }
        const current =  a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return current > next ? -1: 1;
    })
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
