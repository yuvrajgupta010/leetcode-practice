1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var search = function(nums, target) {
7      let i = 0,
8    j = nums.length - 1;
9
10  while (i <= j) {
11    const midIdx = Math.floor((i + j) / 2);
12
13    if (nums[midIdx] === target) return midIdx;
14    if (nums[i] < nums[midIdx]) {
15      if (nums[i] <= target && target <= nums[midIdx - 1]) {
16        j = midIdx - 1;
17      } else {
18        i = midIdx + 1;
19      }
20    } else {
21      if (nums[midIdx + 1] <= target && target <= nums[j]) {
22        i = midIdx + 1;
23      } else {
24        j = midIdx - 1;
25      }
26    }
27  }
28
29  return -1;
30};