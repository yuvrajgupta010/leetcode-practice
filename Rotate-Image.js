1/**
2 * @param {number[][]} matrix
3 * @return {void} Do not return anything, modify matrix in-place instead.
4 */
5var rotate = function (matrix) {
6  const n = matrix.length;
7
8  for (let i = 0; i < n; i++) {
9    for (let j = i; j < n; j++) {
10      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
11    }
12
13    let k = 0;
14    let l = n - 1;
15    while (k <= l) {
16      [matrix[i][k], matrix[i][l]] = [matrix[i][l], matrix[i][k]];
17      k++;
18      l--;
19    }
20  }
21};