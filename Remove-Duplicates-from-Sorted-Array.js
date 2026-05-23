1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function (nums) {
6  let noOfUnique = 1;
7
8  for (let i = 1; i < nums.length; i++) {
9    if (nums[i] !== nums[i - 1]) {
10      nums[noOfUnique] = nums[i];
11      noOfUnique++;
12    }
13  }
14  // console.log(nums);
15  return noOfUnique;
16};