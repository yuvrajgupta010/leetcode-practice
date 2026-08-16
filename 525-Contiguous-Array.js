/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
      let maxLength = 0;
  let prefixSum = 0;
  const map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!num) num = -1;
    prefixSum += num;

    if (map.has(prefixSum)) {
      const prevIdx = map.get(prefixSum);
      maxLength = Math.max(maxLength, i - prevIdx);
    } else {
      map.set(prefixSum, i);
    }
  }

  // console.log(maxLength);
  return maxLength;
};