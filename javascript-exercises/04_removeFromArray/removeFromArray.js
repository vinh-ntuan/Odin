const removeFromArray = function(array, ...toRemove) {
    return (array.filter
        (elem => toRemove.every(rElem => rElem !== elem)));    
}
    
// Do not edit below this line
module.exports = removeFromArray;
