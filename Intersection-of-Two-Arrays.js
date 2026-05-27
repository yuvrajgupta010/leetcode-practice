1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersection = function (nums1, nums2) {
7  const map = new Set(nums1);
8  const unique = [];
9
10  for (let num of nums2) {
11    if (map.has(num)) {
12      unique.push(num);
13      map.delete(num);
14    }
15  }
16
17  return unique;
18};