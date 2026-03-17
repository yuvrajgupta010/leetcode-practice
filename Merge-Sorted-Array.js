1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9        let lIdx = m - 1;
10  let rIdx = n - 1;
11  let k = nums1.length - 1;
12
13  while (rIdx >= 0) {
14    if (lIdx >= 0 && nums1[lIdx] > nums2[rIdx]) {
15      nums1[k--] = nums1[lIdx--];
16    } else {
17      nums1[k--] = nums2[rIdx--];
18    }
19  }
20};