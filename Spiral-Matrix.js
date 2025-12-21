1/**
2 * @param {number[][]} matrix
3 * @return {number[]}
4 */
5var spiralOrder = function(matrix) {
6      let srow = 0,
7    erow = matrix.length - 1,
8    scol = 0,
9    ecol = matrix[0].length - 1;
10  const returnSpiral = [];
11
12  while (srow <= erow && scol <= ecol) {
13    // top
14    for (let i = scol; i <= ecol; i++) {
15      returnSpiral.push(matrix[srow][i]);
16    }
17
18    // right
19    for (let i = srow + 1; i <= erow; i++) {
20      returnSpiral.push(matrix[i][ecol]);
21    }
22
23    // bottom
24    for (let i = ecol - 1; i >= scol; i--) {
25      if (srow === erow) break;
26      returnSpiral.push(matrix[erow][i]);
27    }
28
29    // left
30    for (let i = erow - 1; i >= srow + 1; i--) {
31      if (scol === ecol) break;
32      returnSpiral.push(matrix[i][scol]);
33    }
34
35    // shrink down boundary
36    srow++;
37    ecol--;
38    erow--;
39    scol++;
40  }
41
42  // console.log(returnSpiral);
43  return returnSpiral;
44};