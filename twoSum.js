const twoSum = function(nums, target) {
  let ans;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        ans = [j, i];
      }
    }
  }
  // console.log(ans);
  return ans;
};

twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);