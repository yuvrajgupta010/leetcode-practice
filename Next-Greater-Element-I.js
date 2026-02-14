1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var nextGreaterElement = function(nums1, nums2) {
7  let greaterNums = new Map();
8  let stack = [];
9
10  for (let i = nums2.length - 1; i >= 0; i--) {
11    while (stack.length && stack[stack.length - 1] < nums2[i]) {
12      stack.pop();
13    }
14    if (stack.length) {
15      greaterNums.set(nums2[i], stack[stack.length - 1]);
16    } else {
17      greaterNums.set(nums2[i], -1);
18    }
19    stack.push(nums2[i]);
20  }
21
22  let arrGreaterNums = [];
23  for (let num of nums1) {
24    arrGreaterNums.push(greaterNums.get(num));
25  }
26
27  return arrGreaterNums;
28};