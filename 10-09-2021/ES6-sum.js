var sum = () => 15;
var calculate = function( x, y = x * sum() ) {
return x + y;
}
var result = calculate(10);
console.log(result);