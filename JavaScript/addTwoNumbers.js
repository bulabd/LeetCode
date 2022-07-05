const addTwoNumbers = function(l1, l2) {
  let sum = Number(l1.reverse().join("")) + Number(l2.reverse().join(""));
  return Array.from(String(sum), Number).reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));