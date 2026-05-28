1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findMaxConsecutiveOnes = function (nums) {
6  let maxConsecutive = 0;
7  let tempCount = 0;
8  for (let num of nums) {
9    if (!num) {
10      maxConsecutive = Math.max(maxConsecutive, tempCount);
11      tempCount = 0;
12    } else {
13      tempCount++;
14    }
15  }
16  maxConsecutive = Math.max(maxConsecutive, tempCount);
17
18  return maxConsecutive;
19};