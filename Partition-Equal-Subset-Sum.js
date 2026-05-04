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
13  let prev = Array.from({ length: k + 1 }, () => false);
14  prev[0] = true;
15
16  if (nums[0] <= k) prev[nums[0]] = true;
17
18  for (let idx = 1; idx < n; idx++) {
19    for (let target = k; target >= 0; target--) {
20      const notTake = prev[target];
21      let take = false;
22
23      if (nums[idx] <= target) {
24        take = prev[target - nums[idx]];
25      }
26
27      prev[target] = notTake || take;
28    }
29  }
30
31  return prev[k];
32};