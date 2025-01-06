// mainly decimal numbers are called float . And any string variable
// can be transformed into either a integer or float by 
// "parse" function 
var orangePrice = 20;
var applePrice = parseInt('24');
var total = orangePrice + applePrice;

// console.log(total)

// for some encoding reason addition of 0.1 and 0.2 gives weired 
// answers

var first = 0.1;
var second = 0.2;
var total2 = first + second;

console.log(parseInt(total2).toFixed(2))