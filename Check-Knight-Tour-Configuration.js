1const optionOfMovements = (
2  chessBoardSize,
3  currentRow,
4  currentColumn,
5  // chessBoardVisit,
6) => {
7  const options = [];
8
9  // top options
10  const topRow = currentRow - 2;
11  if (topRow >= 0) {
12    // left
13    if (currentColumn - 1 >= 0) {
14      options.push([topRow, currentColumn - 1]);
15    }
16    // right
17    if (currentColumn + 1 < chessBoardSize) {
18      options.push([topRow, currentColumn + 1]);
19    }
20  }
21
22  // right options
23  const rightColumn = currentColumn + 2;
24  if (rightColumn < chessBoardSize) {
25    // top
26    if (currentRow - 1 >= 0) {
27      options.push([currentRow - 1, rightColumn]);
28    }
29    // bottom
30    if (currentRow + 1 < chessBoardSize) {
31      options.push([currentRow + 1, rightColumn]);
32    }
33  }
34
35  // bottom options
36  const bottomRow = currentRow + 2;
37  if (bottomRow < chessBoardSize) {
38    // left
39    if (currentColumn - 1 >= 0) {
40      options.push([bottomRow, currentColumn - 1]);
41    }
42    // right
43    if (currentColumn + 1 < chessBoardSize) {
44      options.push([bottomRow, currentColumn + 1]);
45    }
46  }
47
48  // left options
49  const leftColumn = currentColumn - 2;
50  if (currentColumn - 2 >= 0) {
51    // top
52    if (currentRow - 1 >= 0) {
53      options.push([currentRow - 1, leftColumn]);
54    }
55    // bottom
56    if (currentRow + 1 < chessBoardSize) {
57      options.push([currentRow + 1, leftColumn]);
58    }
59  }
60
61  // console.log(options);
62  return options;
63};
64
65optionOfMovements(3, 1, 2);
66
67const movements = (
68  grid,
69  chessBoardSize,
70  currentRow,
71  currentColumn,
72  nextNum,
73  totalCells,
74) => {
75  if (nextNum === totalCells) {
76    return true;
77  }
78
79  const totalMovements = optionOfMovements(
80    chessBoardSize,
81    currentRow,
82    currentColumn,
83  );
84  for (let i = 0; i < totalMovements.length; i++) {
85    // console.log("first");
86    // console.log({ movement: totalMovements[i], totalMovements });
87    if (grid[totalMovements[i][0]][totalMovements[i][1]] === nextNum) {
88      return movements(
89        grid,
90        chessBoardSize,
91        totalMovements[i][0],
92        totalMovements[i][1],
93        nextNum + 1,
94        totalCells,
95      );
96    }
97  }
98
99  return false;
100};
101
102/**
103 * @param {number[][]} grid
104 * @return {boolean}
105 */
106var checkValidGrid = function (grid) {
107  if (grid[0][0] !== 0) return false;
108
109
110  // testing purpose
111  // const result = movements(grid, grid[0].length, 0, 0, 1, grid[0].length ** 2);
112  // console.log(result);
113  // return result;
114
115  return movements(grid, grid[0].length, 0, 0, 1, grid[0].length ** 2);
116};
117