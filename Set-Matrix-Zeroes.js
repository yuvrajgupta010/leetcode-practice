1/**
2 * @param {number[][]} matrix
3 * @return {void} Do not return anything, modify matrix in-place instead.
4 */
5var setZeroes = function(matrix) {
6  const r = matrix.length;
7  const c = matrix[0].length;
8  const zeroPlaces = []; // [[row, column]]
9
10  // loop over matrix row by row
11  for (let i = 0; i < r; i++) {
12    for (let j = 0; j < c; j++) {
13      if (matrix[i][j] === 0) {
14        zeroPlaces.push([i, j]);
15      }
16    }
17  }
18
19  // console.log(zeroPlaces);
20  while (zeroPlaces.length !== 0) {
21    const zeroPlace = zeroPlaces.pop();
22
23    // make row set to zero
24    for (let i = 0; i < c; i++) {
25      matrix[zeroPlace[0]][i] = 0;
26    }
27
28    // make col set to zero
29    for (let i = 0; i < r; i++) {
30      matrix[i][zeroPlace[1]] = 0;
31    }
32  }
33
34  // console.log(matrix);
35  return matrix;
36 
37};