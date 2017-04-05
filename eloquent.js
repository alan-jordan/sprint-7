// Minimum function
var min = function(x,y) {
  return Math.min(x,y);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Recursion function
var isEven = function(num) {
  /* This works out whether number is odd or even by flipping to
  a positive number using Math.abs and recursively calling the function*/
  if (num < 0) {return isEven(Math.abs(num));}
  if (num === 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
