1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6     let result = 0;
7
8  for (let num of nums) {
9    result ^= num;
10  }
11
12  return result;
13    
14};