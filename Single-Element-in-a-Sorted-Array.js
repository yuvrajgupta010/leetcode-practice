1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNonDuplicate = function(nums) {
6      let currIdx = 0;
7  while (currIdx < nums.length) {
8    const currNum = nums[currIdx];
9    if (currNum !== nums[currIdx + 1]) return currNum;
10    currIdx += 2;
11  }
12};