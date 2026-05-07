1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var findTargetSumWays = function(nums, target) {
7      const n = nums.length;
8  const sum = nums.reduce((a, b) => a + b, 0);
9
10  // Edge case
11  if (Math.abs(target) > sum) return 0;
12
13  const dp = Array.from({ length: n }, () =>
14    Array(2 * sum + 1).fill(0)
15  );
16
17  // Base case
18  dp[0][nums[0] + sum] += 1;
19  dp[0][-nums[0] + sum] += 1;
20
21  // Fill table
22  for (let i = 1; i < n; i++) {
23    for (let s = -sum; s <= sum; s++) {
24      const prevIdx = s + sum;
25
26      if (dp[i - 1][prevIdx] !== 0) {
27        const add = s + nums[i];
28        const subtract = s - nums[i];
29
30        dp[i][add + sum] += dp[i - 1][prevIdx];
31        dp[i][subtract + sum] += dp[i - 1][prevIdx];
32      }
33    }
34  }
35
36  return dp[n - 1][target + sum] || 0;
37
38};