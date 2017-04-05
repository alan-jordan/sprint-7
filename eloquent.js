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

// Bean counting function
var numBs = 0;
var countBs = function (str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] ==="B") {
      numBs++;
    }
  }
  return numBs;
}

var numChars = 0;
var countChar = function(str, char) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] === char) {
      numChars++;
    }
  }
  return numChars;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
