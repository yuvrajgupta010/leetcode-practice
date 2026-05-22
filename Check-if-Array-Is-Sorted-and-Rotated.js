1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var check = function (nums) {
6  const n = nums.length;
7  let idxOfAcendingStop = null;
8  for (let i = 0; i < nums.length - 1; i++) {
9    if (nums[i] > nums[i + 1]) {
10      idxOfAcendingStop = i;
11      break;
12    }
13  }
14
15  if (idxOfAcendingStop === null) return true;
16  const selectedNums = nums.splice(0, idxOfAcendingStop + 1);
17  nums.push(...selectedNums);
18
19  for (let i = 0; i < nums.length - 1; i++) {
20    if (nums[i] > nums[i + 1]) {
21      return false;
22    }
23  }
24
25  // console.log({ idxOfAcendingStop, selectedNums, nums });
26  return true;
27};