var removeDuplicates = function(nums) {
  let k = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in k) {
      // console.log("yes key itteration", i);
      nums.splice(i, 1);
      i--;
    } else {
      // console.log("no key itteration", i);
      k[nums[i]] = nums[i];
    }
  }
  return Object.keys(k).length;
};

console.log("k", removeDuplicates([0,0,1,1,1,2,2,3,3,4]));