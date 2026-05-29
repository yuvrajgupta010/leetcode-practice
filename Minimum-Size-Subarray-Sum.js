1/**
2 * @param {number} target
3 * @param {number[]} nums
4 * @return {number}
5 */
6var minSubArrayLen = function (target, nums) {
7  let i = 0,
8    j = 0,
9    n = nums.length - 1,
10    sum = nums[0],
11    minLength = Infinity;
12
13  while (i <= n && j <= n) {
14    if (sum >= target) {
15      minLength = Math.min(minLength, j + 1 - i);
16      sum -= nums[i++];
17    } else {
18      sum += nums[++j];
19    }
20  }
21
22  return minLength === Infinity ? 0 : minLength;
23};