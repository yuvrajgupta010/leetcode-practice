1const solve = (idx, currSum, nums, n, target, dp, sum) => {
2  if (idx === n) {
3    if (currSum === target) return 1;
4    return 0;
5  }
6  if (dp[idx][currSum + sum] !== -1) return dp[idx][currSum + sum];
7  const onSubtract = solve(
8    idx + 1,
9    currSum - nums[idx],
10    nums,
11    n,
12    target,
13    dp,
14    sum,
15  );
16  const onAdd = solve(idx + 1, currSum + nums[idx], nums, n, target, dp, sum);
17  return (dp[idx][currSum + sum] = onSubtract + onAdd);
18};
19
20/**
21 * @param {number[]} nums
22 * @param {number} target
23 * @return {number}
24 */
25var findTargetSumWays = function (nums, target) {
26  const n = nums.length;
27  const sum = nums.reduce((sum, num) => sum + num, 0);
28  const dp = Array.from({ length: n }, () =>
29    Array.from({ length: 2 * sum + 1 }, () => -1),
30  );
31  return solve(0, 0, nums, n, target, dp, sum);
32};