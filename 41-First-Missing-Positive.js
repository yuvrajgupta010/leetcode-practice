/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  let isNumsContainOne = false;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num <= 0 || num > n) nums[i] = 1;
    if (num === 1) {
      isNumsContainOne = true;
    }
  }

  if (!isNumsContainOne) return 1;

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    // console.log({ nums, num });
    if (nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1];
    }
  }
  // console.log({ nums });

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) return i + 1;
  }

  return n + 1;
};