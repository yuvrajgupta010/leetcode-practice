1/**
2 * @param {number} target
3 * @param {number[]} nums
4 * @return {number}
5 */
6var minSubArrayLen = function(target, nums) {
7 let n = nums.length,
8    prevIdx = 0,
9    sum = 0,
10    minLength = Infinity;
11
12  for (let currIdx = 0; currIdx < n; currIdx++) {
13    sum += nums[currIdx];
14
15    while (sum >= target) {
16      const expectedMinLength = currIdx - prevIdx + 1;
17      minLength = Math.min(minLength, expectedMinLength);
18      // console.log(sum);
19      sum -= nums[prevIdx++];
20    }
21  }
22
23  return minLength === Infinity ? 0 : minLength;
24};