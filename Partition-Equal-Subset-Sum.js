1
2/**
3 * @param {number[]} nums
4 * @return {boolean}
5 */
6var canPartition = function (nums) {
7  const n = nums.length;
8  let k = nums.reduce((acc, curr) => acc + curr, 0);
9
10  if (k % 2) return false;
11  k = k / 2;
12
13  const dp = Array.from({ length: n }, () =>
14    Array.from({ length: k + 1 }, () => 0),
15  );
16
17  for (let i = 0; i < n; i++) {
18    dp[i][0] = true;
19  }
20  dp[0][nums[0]] = true;
21
22  for (let idx = 1; idx < n; idx++) {
23    for (let target = 1; target <= k; target++) {
24      const notTake = dp[idx - 1][target];
25      let take = false;
26      if (nums[idx] <= target) {
27        take = dp[idx - 1][target - nums[idx]];
28      }
29      dp[idx][target] = notTake || take;
30    }
31  }
32
33  return dp[n - 1][k];
34};