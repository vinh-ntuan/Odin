const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'
    || a < 0 || b <0) {
        return 'ERROR';
    } else {
        let first = a <= b ? a : b;
        let last = a >= b ? a : b;
        return ((last-first+1)*(last+first)/2);
    }
};

// Do not edit below this line
module.exports = sumAll;
