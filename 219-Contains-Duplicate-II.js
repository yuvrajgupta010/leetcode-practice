/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Set();
  let i = 0;
  let j = 0;
  const n = nums.length;

  while (j < n) {
    if (j - i > k) {
      map.delete(nums[i]);
      i++;
    }

    if (map.has(nums[j])) return true;
    map.add(nums[j]);
    j++;
  }

  return false;
};