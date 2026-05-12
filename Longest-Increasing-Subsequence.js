1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var lengthOfLIS = function (nums) {
6  const n = nums.length;
7
8  const dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
9
10  const solve = (currIdx, prevIdx) => {
11    if (currIdx === n) return 0;
12
13    if (dp[currIdx][prevIdx] !== -1) {
14      return dp[currIdx][prevIdx];
15    }
16
17    // skip
18    const notTake = solve(currIdx + 1, prevIdx);
19
20    // take
21    let take = 0;
22
23    if (prevIdx === 0 || nums[currIdx] > nums[prevIdx - 1]) {
24      take = 1 + solve(currIdx + 1, currIdx + 1);
25    }
26
27    return (dp[currIdx][prevIdx] = Math.max(take, notTake));
28  };
29
30  return solve(0, 0);
31};