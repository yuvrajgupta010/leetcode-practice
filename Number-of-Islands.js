1
2/**
3 * @param {character[][]} grid
4 * @return {number}
5 */
6var numIslands = function (grid) {
7  const m = grid.length;
8  const n = grid[0].length;
9  const visited = Array.from({ length: m }, () =>
10    Array.from({ length: n }, () => 0),
11  );
12  let islands = 0;
13  const directions = [
14    [-1, 0], // top
15    [1, 0], // bottom
16    [0, 1], // right
17    [0, -1], // left
18  ];
19
20  const visitIslands = (r, c) => {
21    const queue = [[r, c]];
22    visited[r][c] = 1;
23
24    while (queue.length) {
25      const [currR, currC] = queue.shift();
26
27      for (let [mr, mc] of directions) {
28        const lookUpR = currR + mr;
29        const lookUpC = currC + mc;
30        if (
31          lookUpR >= 0 &&
32          lookUpR < m &&
33          lookUpC >= 0 &&
34          lookUpC < n &&
35          grid[lookUpR][lookUpC] === "1" &&
36          !visited[lookUpR][lookUpC]
37        ) {
38          queue.push([lookUpR, lookUpC]);
39          visited[lookUpR][lookUpC] = 1;
40        }
41      }
42    }
43  };
44
45  for (let r = 0; r < m; r++) {
46    for (let c = 0; c < n; c++) {
47      if (grid[r][c] === "1" && !visited[r][c]) {
48        islands++;
49        visitIslands(r, c);
50      }
51    }
52  }
53
54  return islands;
55};