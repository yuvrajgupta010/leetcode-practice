/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
      const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      const net = Math.abs(map.get(nums[i]) - i);
      if (net <= k) return true;
      map.set(nums[i], i);
    }
  }

  return false;
};