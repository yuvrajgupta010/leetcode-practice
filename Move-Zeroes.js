1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var moveZeroes = function (nums) {
6  let i = 0,
7    j = 0,
8    n = nums.length;
9  while (j < n) {
10    if (nums[j] !== 0) {
11      [nums[i], nums[j]] = [nums[j], nums[i]];
12      i++;
13      j++;
14    } else {
15      j++;
16    }
17  }
18};