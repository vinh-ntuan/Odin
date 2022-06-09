const ftoc = function(temp) {
  return (round1((temp - 32) * 5 / 9));
};

const ctof = function(temp) {
  return (round1((temp * 9 / 5) + 32));
};

function round1(num){
  return +num.toFixed(1);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
