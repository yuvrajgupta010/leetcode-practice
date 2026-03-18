1/**
2 * @param {number[][]} matrix
3 * @param {number} k
4 * @return {number}
5 */
6var kthSmallest = function (matrix, k) {
7  let traversalNums = [];
8  for (let i = 0; i < matrix.length; i++) {
9    const row = matrix[i];
10    for (let j = 0; j < row.length; j++) {
11      const num = row[j];
12      traversalNums.push(num);
13    }
14  }
15
16  traversalNums.sort((a, b) => a - b);
17
18  return traversalNums[k - 1];
19};