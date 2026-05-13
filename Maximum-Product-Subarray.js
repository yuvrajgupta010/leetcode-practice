1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxProduct = function (nums) {
6  const n = nums.length;
7
8  let maxProduct = -Infinity;
9
10  let prefix = 1,
11    suffix = 1;
12  for (let i = 0; i < n; i++) {
13    if (prefix === 0) prefix = 1;
14    if (suffix === 0) suffix = 1;
15
16    prefix *= nums[i];
17    suffix *= nums[n - i - 1];
18
19    maxProduct = Math.max(maxProduct, prefix, suffix);
20  }
21
22  return maxProduct;
23};