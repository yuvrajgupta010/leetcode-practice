1
2const binarySearch = (arr, t) => {
3  let i = 0;
4  let j = arr.length - 1;
5
6  while (i <= j) {
7    const midIdx = Math.floor((i + j) / 2);
8
9    const midValue = arr[midIdx];
10    if (midValue === t) return true;
11
12    if (midValue > t) {
13      j = midIdx - 1;
14    } else {
15      i = midIdx + 1;
16    }
17  }
18
19  return false;
20};
21
22/**
23 * @param {number[][]} matrix
24 * @param {number} target
25 * @return {boolean}
26 */
27var searchMatrix = function (matrix, target) {
28  let m = matrix.length;
29
30  for (let i = 0; i < m; i++) {
31    if (matrix[i].at(0) <= target && matrix[i].at(-1) >= target) {
32      return binarySearch(matrix[i], target);
33    }
34  }
35
36  return false;
37};