1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var search = function(nums, target) {
7  let i = 0;
8  let j = nums.length - 1;
9
10  while (i <= j) {
11    const midIdx = Math.floor((i + j) / 2);
12    const currNum = nums[midIdx];
13    if (currNum === target) return midIdx;
14    if (currNum < target) i = midIdx + 1;
15    if (currNum > target) j = midIdx - 1;
16  }
17
18  return -1;
19};