1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var searchInsert = function(nums, target) {
7  let i = 0,
8    j = nums.length - 1;
9
10  while (i < j) {
11    const midIdx = Math.floor((i + j) / 2);
12    if (nums[midIdx] === target) return midIdx;
13    if (nums[midIdx] > target) j = midIdx - 1;
14    if (nums[midIdx] < target) i = midIdx + 1;
15  }
16
17  return nums[j] >= target ? j : j + 1;
18};