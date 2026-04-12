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
13
14  const nextIslands = (currR, currC) => {
15    const directions = [];
16    // left
17    const leftCorrdinate = currC - 1;
18    if (
19      leftCorrdinate >= 0 &&
20      grid[currR][leftCorrdinate] === "1" &&
21      !visited[currR][leftCorrdinate]
22    ) {
23      directions.push([currR, leftCorrdinate]);
24    }
25
26    // right
27    const rightCorrdinate = currC + 1;
28    if (
29      rightCorrdinate < n &&
30      grid[currR][rightCorrdinate] === "1" &&
31      !visited[currR][rightCorrdinate]
32    ) {
33      directions.push([currR, rightCorrdinate]);
34    }
35
36    // top
37    const topCorrdinate = currR - 1;
38    if (
39      topCorrdinate >= 0 &&
40      grid[topCorrdinate][currC] === "1" &&
41      !visited[topCorrdinate][currC]
42    ) {
43      directions.push([topCorrdinate, currC]);
44    }
45
46    // bottom
47    const bottomCorrdinate = currR + 1;
48    if (
49      bottomCorrdinate < m &&
50      grid[bottomCorrdinate][currC] === "1" &&
51      !visited[bottomCorrdinate][currC]
52    ) {
53      directions.push([bottomCorrdinate, currC]);
54    }
55
56    return directions;
57  };
58
59  const visitIslands = (r, c) => {
60    // console.log({ r, c });
61    const queue = [[r, c]];
62    visited[r][c] = 1;
63
64    while (queue.length) {
65      const position = queue.shift();
66      const connectedIslands = nextIslands(position[0], position[1]);
67      // console.log({ position });
68      for (let [islandR, islandC] of connectedIslands) {
69        queue.push([islandR, islandC]);
70        visited[islandR][islandC] = 1;
71      }
72    }
73  };
74
75  for (let r = 0; r < m; r++) {
76    for (let c = 0; c < n; c++) {
77      if (grid[r][c] === "1" && !visited[r][c]) {
78        islands++;
79        visitIslands(r, c);
80      }
81    }
82  }
83
84  // console.log(islands);
85  return islands;
86};