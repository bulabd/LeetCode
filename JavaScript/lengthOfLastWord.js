const lengthOfLastWord = (s) => {
  let arr = s.split("").reverse();
  let finalWord = [];

  let stopper = 0;
  while (stopper < 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === " " && finalWord.length > 0) {
        stopper = 1;
        break;
      } else if (arr[i] !== " ") {
        finalWord.push(arr[i]);
      } 
    }
  }
  return finalWord.length;


  // OR
  // const trimS = s.trim();
  // const lengthS = trimS.length;    
  // return lengthS - trimS.lastIndexOf(" ") - 1;
};