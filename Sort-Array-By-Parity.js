1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var sortArrayByParity = function (nums) {
6  let i = 0,
7    j = 0,
8    n = nums.length;
9  while (j < n) {
10    if (nums[j] % 2 === 0) {
11      if (i !== j) {
12        [nums[i], nums[j]] = [nums[j], nums[i]];
13      }
14      i++;
15      j++;
16    } else {
17      j++;
18    }
19  }
20
21  return nums;
22};