let romanToInt = function(s) {
  let convertedArr = s.split('').map((letter) => {
      switch(letter) {
          case 'I':
              return 1;
              break;
          case 'V':
              return 5;
              break;
          case 'X':
              return 10;
              break;
          case 'L':
              return 50;
              break;
          case 'C':
              return 100;
              break;
          case 'D':
              return 500;
              break;
          case 'M':
              return 1000;
              break;
      }
  });
  
  let counter = 0;
  
  for (let i = 0; i < convertedArr.length; i++) {
      if (convertedArr[i] < convertedArr[i + 1]) {
          counter += convertedArr[i + 1] - convertedArr[i];
          i += 1;
      } else {
          counter += convertedArr[i];
      }
  }
  
  // console.log(convertedArr);
  // console.log("counter-----", counter)
  return counter;
};