1const MOVES = {
2  top: "top",
3  right: "right",
4  bottom: "bottom",
5  left: "left",
6};
7
8/**
9 * @param {character[][]} grid
10 * @return {boolean}
11 */
12var containsCycle = function (grid) {
13  const m = grid.length;
14  const n = grid[0].length;
15  const visitedCells = new Set();
16  const pathVisited = new Set();
17
18  const findAdjacentCells = (currRow, currCol, lastMove, currChar) => {
19    const validPaths = [];
20
21    // top
22    const top = currRow - 1;
23    if (
24      lastMove !== MOVES.bottom &&
25      top >= 0 &&
26      grid[top][currCol] === currChar
27    ) {
28      validPaths.push([top, currCol, MOVES.top]);
29    }
30
31    // right
32    const right = currCol + 1;
33    if (
34      lastMove !== MOVES.left &&
35      right < n &&
36      grid[currRow][right] === currChar
37    ) {
38      validPaths.push([currRow, right, MOVES.right]);
39    }
40
41    // bottom
42    const bottom = currRow + 1;
43    if (
44      lastMove !== MOVES.top &&
45      bottom < m &&
46      grid[bottom][currCol] === currChar
47    ) {
48      validPaths.push([bottom, currCol, MOVES.bottom]);
49    }
50
51    // left
52    const left = currCol - 1;
53    if (
54      lastMove !== MOVES.right &&
55      left >= 0 &&
56      grid[currRow][left] === currChar
57    ) {
58      validPaths.push([currRow, left, MOVES.left]);
59    }
60
61    return validPaths;
62  };
63
64  const dfs = (currRow, currCol, lastMove, currChar) => {
65    visitedCells.add(`${currRow}-${currCol}`);
66    pathVisited.add(`${currRow}-${currCol}`);
67
68    const adjacentsCells = findAdjacentCells(
69      currRow,
70      currCol,
71      lastMove,
72      currChar,
73    );
74    for (let cell of adjacentsCells) {
75      if (!pathVisited.has(`${cell[0]}-${cell[1]}`)) {
76        if (dfs(cell[0], cell[1], cell[2], currChar)) {
77          return true;
78        }
79      } else {
80        return true;
81      }
82    }
83    pathVisited.delete(`${currRow}-${currCol}`);
84    return false;
85  };
86
87  for (let i = 0; i < m; i++) {
88    for (let j = 0; j < n; j++) {
89      if (!visitedCells.has(`${i}-${j}`)) {
90        const result = dfs(i, j, "top", grid[i][j]);
91        if (result) {
92          return true;
93        }
94      }
95    }
96  }
97
98  return false;
99  // return dfs(1, 2, "top", grid[1][2]);
100};
101