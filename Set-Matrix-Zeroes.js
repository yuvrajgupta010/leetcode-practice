1/**
2 * @param {number[][]} matrix
3 * @return {void} Do not return anything, modify matrix in-place instead.
4 */
5var setZeroes = function(matrix) {
6  const r = matrix.length;
7  const c = matrix[0].length;
8  const zeroPlaces = []; // [[row, column]]
9
10  //optimization
11  // const zeroRows = new Set();
12  // const zeroCols = new Set();
13
14  // loop over matrix row by row
15  for (let i = 0; i < r; i++) {
16    for (let j = 0; j < c; j++) {
17      if (matrix[i][j] === 0) {
18        zeroPlaces.push([i, j]);
19      }
20    }
21  }
22
23  // console.log(zeroPlaces);
24  let i = 0;
25  while (i < zeroPlaces.length) {
26    const zeroPlace = zeroPlaces[i];
27    const currRow = zeroPlace[0];
28    const currCol = zeroPlace[1];
29
30    // make row set to zero
31    for (let i = 0; i < c; i++) {
32      matrix[currRow][i] = 0;
33    }
34
35    // make col set to zero
36    for (let i = 0; i < r; i++) {
37      matrix[i][currCol] = 0;
38    }
39
40    i++;
41  }
42
43  // console.log(matrix);
44  return matrix;
45};