1/**
2 * @param {number[][]} mat
3 * @return {number[][]}
4 */
5var updateMatrix = function (mat) {
6  const m = mat.length;
7  const n = mat[0].length;
8  const distances = Array.from({ length: m }, () =>
9    Array.from({ length: n }, () => null),
10  );
11  const visited = Array.from({ length: m }, () =>
12    Array.from({ length: n }, () => 0),
13  );
14  const directions = [
15    [-1, 0], // top
16    [1, 0], // bottom
17    [0, 1], // right
18    [0, -1], // left
19  ];
20  const queue = [];
21
22  for (let i = 0; i < m; i++) {
23    for (let j = 0; j < n; j++) {
24      if (mat[i][j] === 0) {
25        queue.push([i, j, 0]);
26        visited[i][j] = 1;
27      }
28    }
29  }
30
31  while (queue.length) {
32    const [currRow, currCol, currDistance] = queue.shift();
33    distances[currRow][currCol] = currDistance;
34
35    for (let currDirection of directions) {
36      const nRow = currRow + currDirection[0];
37      const nCol = currCol + currDirection[1];
38
39      if (
40        nRow >= 0 &&
41        nRow < m &&
42        nCol >= 0 &&
43        nCol < n &&
44        !visited[nRow][nCol]
45      ) {
46        queue.push([nRow, nCol, currDistance + 1]);
47        visited[nRow][nCol] = 1;
48      }
49    }
50  }
51
52  // console.log({ distances, visited });
53  return distances;
54};