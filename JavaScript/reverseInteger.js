var reverse = function(x) {

  let reversedX = x.toString().split("").reverse();
  
  if (reversedX[reversedX.length - 1] === '-') {
    reversedX.pop();
    reversedX.unshift('-');
    reversedX = reversedX.join("");
  } else {
    reversedX = reversedX.join("");
  }
  
  if (reversedX < ((-2) ** 31) || reversedX > (2 ** 31 - 1)) {
    return 0;
  }
  
  return reversedX;
  
};


console.log(reverse(-123));