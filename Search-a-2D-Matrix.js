1
2/**
3 * @param {number[][]} matrix
4 * @param {number} target
5 * @return {boolean}
6 */
7var searchMatrix = function (matrix, target) {
8  let m = matrix[0].length;
9  let i = 0;
10  let j = matrix.length * matrix[0].length - 1;
11
12  while (i <= j) {
13    const midIdx = Math.floor((i + j) / 2);
14
15    // find cordinates
16    const row = Math.floor(midIdx / m);
17    const col = midIdx % m;
18
19    const midValue = matrix[row][col];
20    if (midValue === target) return true;
21
22    if (midValue > target) {
23      j = midIdx - 1;
24    } else {
25      i = midIdx + 1;
26    }
27  }
28
29  return false;
30};