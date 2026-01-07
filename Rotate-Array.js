1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {void} Do not return anything, modify nums in-place instead.
5 */
6var rotate = function(nums, k) {
7   // Brute force
8
9  const effectiveRotation = k % nums.length;
10  const rotatedArr = [];
11
12  for (let i = nums.length - effectiveRotation; i < nums.length; i++) {
13    rotatedArr.push(nums[i]);
14  }
15
16  for (let j = 0; j < nums.length - effectiveRotation; j++) {
17    rotatedArr.push(nums[j]);
18  }
19
20  for (let p = 0; p < nums.length; p++) {
21    nums[p] = rotatedArr[p];
22  }
23
24  // console.log(nums, rotatedArr);
25  // return nums;
26};