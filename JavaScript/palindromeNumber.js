const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let inversed = parseInt(x.toString().split("").reverse().join(''));

  if (x === inversed) {
    return true;
  }

  return false;
};