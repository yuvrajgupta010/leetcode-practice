1/**
2 * @param {number[][]} mat
3 * @param {number} r
4 * @param {number} c
5 * @return {number[][]}
6 */
7var matrixReshape = function(mat, r, c) {
8      let flatMatrix = mat.flat(1);
9
10  if (r * c !== flatMatrix.length) return mat;
11
12  let noOfRows = r;
13  let currInsertIdx = 0;
14  let updatedMatrix = [];
15
16  while (noOfRows !== 0) {
17    let columnCount = c;
18    const row = [];
19    while (columnCount !== 0) {
20      columnCount--;
21      // console.log(row, flatMatrix[currInsertIdx]);
22      row.push(flatMatrix[currInsertIdx]);
23      currInsertIdx++;
24    }
25    updatedMatrix.push(row);
26    // console.log(row);
27    noOfRows--;
28  }
29
30  // console.log(updatedMatrix);
31  return updatedMatrix;
32};