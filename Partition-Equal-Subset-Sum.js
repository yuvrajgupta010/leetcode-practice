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
19    let curr = Array.from({ length: k + 1 }, () => false);
20    curr[0] = true;
21
22    for (let target = 1; target <= k; target++) {
23      const notTake = prev[target];
24      let take = false;
25
26      if (nums[idx] <= target) {
27        take = prev[target - nums[idx]];
28      }
29
30      curr[target] = notTake || take;
31    }
32
33    prev = curr; // now safe
34  }
35
36  return prev[k];
37};