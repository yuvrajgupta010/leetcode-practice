1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var nextGreaterElement = function (nums1, nums2) {
7  let greaterNums = new Map();
8  let stack = [];
9
10  for (let i = nums2.length - 1; i >= 0; i--) {
11    while (stack.length && stack[stack.length - 1] < nums2[i]) {
12      stack.pop();
13    }
14    if (stack.length) {
15      greaterNums.set(nums2[i], stack[stack.length - 1]);
16      //   greaterNums[nums2[i]] = stack[stack.length - 1];
17    } else {
18      greaterNums.set(nums2[i], -1);
19      //   greaterNums[nums2[i]] = -1;
20    }
21    stack.push(nums2[i]);
22  }
23
24  //   console.log(greaterNums);
25  let arrGreaterNums = [];
26  for (let num of nums1) {
27    // console.log(num, "outside", greaterNums.has(num));
28
29    if (greaterNums.has(num)) {
30      //   console.log(num, "inside");
31      arrGreaterNums.push(greaterNums.get(num));
32    }
33  }
34
35  return arrGreaterNums;
36};