const reverseString = function(string) {
    let result = '';
    for (let char of string){
        result = char + result ;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
