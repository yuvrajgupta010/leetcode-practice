1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {void} Do not return anything, modify nums in-place instead.
5 */
6var rotate = function (nums, k) {
7  const expectedRotation = k % nums.length;
8
9  reverse(nums, 0, nums.length - 1);
10
11  reverse(nums, 0, expectedRotation - 1);
12
13  reverse(nums, expectedRotation, nums.length - 1);
14
15  // console.log(nums);
16};
17
18function reverse(arr, start, end) {
19  let i = start;
20  let j = end;
21
22  while (i <= j) {
23    let tem = arr[i];
24    arr[i] = arr[j];
25    arr[j] = tem;
26
27    i++;
28    j--;
29  }
30}
31