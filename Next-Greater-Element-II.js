1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var nextGreaterElements = function (nums) {
6  const n = nums.length;
7  const stack = [];
8  const result = new Array(n).fill(-1);
9
10  for (let i = 2 * n - 1; i >= 0; i--) {
11    const idx = i % n;
12
13    while (stack.length && nums[stack.at(-1)] <= nums[idx]) {
14      stack.pop();
15    }
16
17    if (i < n && stack.length) {
18      result[idx] = nums[stack.at(-1)];
19    }
20
21    stack.push(idx);
22  }
23
24  return result;
25};