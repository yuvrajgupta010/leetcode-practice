1const fRecursive = (idx, target, arr, memo) => {
2  if (target === 0) return true;
3  if (idx === 0) return arr[0] === target;
4  if (memo[idx][target] !== -1) return memo[idx][target];
5
6  let notTake = fRecursive(idx - 1, target, arr, memo);
7  let taken = false;
8  if (target >= arr[idx]) {
9    taken = fRecursive(idx - 1, target - arr[idx], arr, memo);
10  }
11
12  return (memo[idx][target] = taken || notTake);
13};
14
15/**
16 * @param {number[]} nums
17 * @return {boolean}
18 */
19var canPartition = function (nums) {
20  const n = nums.length;
21  let k = nums.reduce((acc, curr) => acc + curr, 0);
22
23  if (k % 2) return false;
24  k = k / 2;
25
26  const memoize = Array.from({ length: n }, () =>
27    Array.from({ length: k + 1 }, () => -1),
28  );
29
30  return fRecursive(n - 1, k, nums, memoize);
31};