1const solve = (idx, currSum, nums, n, target) => {
2  if (idx === n) {
3    if (currSum === target) return 1;
4    return 0;
5  }
6  const onSubtract = solve(idx + 1, currSum - nums[idx], nums, n, target);
7  const onAdd = solve(idx + 1, currSum + nums[idx], nums, n, target);
8  return onSubtract + onAdd;
9};
10
11/**
12 * @param {number[]} nums
13 * @param {number} target
14 * @return {number}
15 */
16var findTargetSumWays = function (nums, target) {
17  const n = nums.length;
18  return solve(0, 0, nums, n, target);
19};