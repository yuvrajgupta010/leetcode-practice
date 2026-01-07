1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6  let maxSum = nums[0];
7  let temSum = 0;
8
9  for (let i = 0; i < nums.length; i++) {
10    temSum += nums[i];
11    maxSum = Math.max(temSum, maxSum);
12
13    if (temSum < 0) {
14      temSum = 0;
15    }
16  }
17
18  return maxSum;
19};