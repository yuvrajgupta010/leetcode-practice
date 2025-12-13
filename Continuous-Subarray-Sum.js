1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {boolean}
5 */
6var checkSubarraySum = function(nums, k) {
7  let prefixSum = 0,
8    hashMap = new Map();
9  hashMap.set(0, -1);
10
11  for (let i = 0; i < nums.length; i++) {
12    prefixSum += nums[i];
13    let r = prefixSum % k;
14
15    if (r < 0) r += k;
16    if (hashMap.has(r)) {
17      const prevIndex = hashMap.get(r);
18      if (i - prevIndex >= 2) {
19        return true;
20      }
21    } else {
22      hashMap.set(r, i);
23    }
24  }
25
26  return false;
27};